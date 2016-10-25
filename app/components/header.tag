import dispatcher from '../dispatcher'
import EVT from '../enums/events'

import _ from 'lodash'

<header class="navbar navbar-default navbar-fixed-top">
  <nav class="container">
    <div class="navbar-header">
      <a class="navbar-brand" href="#/">
        <img src="img/haudio_fulllogo.png" alt="haud.io"/>
      </a>
    </div>
    <ul class="nav navbar-nav navbar-right nav-main">
      <li if={ user } each={ routes } class={ active : parent.path === this.path }>
        <a class="haudio-font" onclick={ parent.route } href="#">{ title }</a>
      </li>
      <li class="divider"></li>
      <li if={ !user }>
        <a class="haudio-font" href="#/login">Login</a>
      </li>
      <li if={ user }>
        <a onclick={ logout } href="" class="user-link dropdown-toggle">
          <img class="user-img img-circle navbar-user-img"
          src={ user.photoURL }/>
          <span class="haudio-font">{ user.displayName }</span>
        </a>
      </li>
    </ul>
  </nav>

  <script>
    this.routes = [
      {title: 'Home', path: '/home'},
      {title: 'About', path: '/about'}
    ]
    this.user = opts.user

    this.on('update', () => {
      _.assign(this, opts)
    })

    this.route = (evt) => {
      riot.route(evt.item.path)
    }

    this.logout = () => {
      dispatcher.trigger(EVT.LOGOUT)
    }
  </script>
</header>
