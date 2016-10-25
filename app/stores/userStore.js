import EVT from '../enums/events'
import dispatcher from '../dispatcher'

class UserStore {

  constructor () {
    this.user = null
    dispatcher.on(EVT.LOGIN, this.login.bind(this))
    dispatcher.on(EVT.LOGOUT, this.logout.bind(this))
  }

  login () {
    this.user = {displayName: 'Stu Kennedy', email: 'stu@continuata.com', photoURL: 'https://pbs.twimg.com/profile_images/784170595630084096/8FjNTlsh_bigger.jpg'}
    dispatcher.trigger(EVT.USER_UPDATED, this.user)
    riot.route('/')
  }

  logout () {
    this.user = null
    dispatcher.trigger(EVT.USER_UPDATED, this.user)
    riot.route('/login')
  }

  getUser () {
    return this.user
  }
}

export default new UserStore()
