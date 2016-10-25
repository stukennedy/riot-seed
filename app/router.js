const { Route, DefaultRoute, NotFoundRoute, RedirectRoute } = riot.router

riot.router.routes([
  new Route({tag: 'home'}).routes([
    new Route({tag: 'following'}),
    new Route({tag: 'discover'}),
    new DefaultRoute({tag: 'projects'}),
    new NotFoundRoute({tag: 'not-found'})
  ]),
  new Route({tag: 'login'}),
  new Route({tag: 'about'}),
  new Route({tag: 'users'}).routes([
    new Route({path: 'top', tag: 'users-home', api: {text: 'Select a top user'}}),
    new Route({path: '/user/:userId', tag: 'user'}),
    new DefaultRoute({tag: 'users-home', api: {text: 'Select a user'}}),
    new NotFoundRoute({tag: 'not-found'})
  ]),
  new NotFoundRoute({tag: 'not-found'}),
  new RedirectRoute({from: 'company', to: 'about'}),
  new RedirectRoute({from: 'u', to: 'users/user'}),
  new RedirectRoute({from: '', to: 'home'})
])

riot.mount('*')
riot.router.config.updatable = true
riot.router.start()
