import riot from 'riot'

class Dispatcher {
  constructor () {
    riot.observable(this)
  }
}

export default new Dispatcher()
