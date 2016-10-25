import dispatcher from './dispatcher'
import EVT from './enums/events'

import './components/header.tag'
import './components/footer.tag'

<app class="wrap">
  <header user={ user } path={ path }></header>
  <section class="content-wrapper">
    <div class="container container-content">
      <route path={ path }></route>
    </div>
  </section>
  <footer></footer>

  <script>
    this.user = null

    this.on('update', () => {
      if (!this.user) {
        riot.route('login')
      }
    })

    riot.router.on('route:updated', () => {
      this.path = riot.router.current.uri
      this.update()
    })

    dispatcher.on(EVT.USER_UPDATED, user => {
      this.user = user
      this.update()
    })

  </script>
</app>
