import dispatcher from '../../../dispatcher'
import EVT from '../../../enums/events'

import projectStore from '../../../stores/projectStore'

import '../../project.tag'

<projects>
  <h4>Your own projects:</h4>
  <br/>
  <project each={ project in projects } data={ project }>
  </project>

  <script>
    this.on('mount', () => {
      this.projects = projectStore.projects
    })

    this.on('update', () => {
      this.projects = projectStore.projects
    })

    dispatcher.on(EVT.UPDATE_PROJECTS, projects => {
      this.projects = projects
      this.update()
    })
  </script>
</projects>
