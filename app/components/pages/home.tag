import './home/following.tag'
import './home/projects.tag'
import './home/discover.tag'

<home>
  <ul class="nav nav-pills">
    <li each={ routes } class={ active : parent.path === path }>
      <a onclick={ parent.route } href="#">{ title }</a>
    </li>
  </ul>
  <div class="well">
    <route></route>
  </div>

  <script>
    this.routes = [
      {title: 'My Projects', path: '/home'},
      {title: 'Following', path: '/home/following'},
      {title: 'Discover', path: '/home/discover'}
    ]
    this.path = opts.path

    this.route = (evt) => {
      riot.route(evt.item.path)
    }
  </script>
</home>
