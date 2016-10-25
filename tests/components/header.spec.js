import riot from 'riot'
import test from 'ava'
import $ from 'jquery'

import '../../app/components/header'
import '../utils/cleanupdom'

test.beforeEach(t => {
  document.querySelector('body')
  .appendChild(document.createElement('header'))
})

test.serial.cb('#should show login link when not logged in', t => {
  t.plan(1)
  riot.mount('header', {user: null})
  riot.vdom[0].one('updated', event => {
    const login = $('ul.navbar-nav>li>a:contains(Login)').html()
    t.is(login, 'Login')
    t.end()
  })
})

test.serial.cb('#should not show login link when logged in', t => {
  t.plan(1)
  riot.mount('header', {user: {foo: 'bar'}})
  riot.vdom[0].one('updated', event => {
    const login = $('ul.navbar-nav>li>a:contains(Login)').html()
    t.not(login, 'Login')
    t.end()
  })
})
