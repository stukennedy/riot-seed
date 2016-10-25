import EVT from '../enums/events'
import dispatcher from '../dispatcher'

class ProjectStore {

  constructor () {
    this.projects = [
      {projectOwner: 'Stu Kennedy', projectTitle: 'My Demo Project', coverImage: 'https://i1.sndcdn.com/artworks-000124922567-w91uq4-t200x200.jpg'},
      {projectOwner: 'Stu Kennedy', projectTitle: 'My Other Project', coverImage: 'https://i1.sndcdn.com/artworks-000112080367-8si4uy-t200x200.jpg'}
    ]
  }
}

export default new ProjectStore()
