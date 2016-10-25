import riot from 'riot'
import test from 'ava'
import _ from 'lodash'

test.afterEach(t => {
  _.forEach(riot.vdom, tag => {
    if (tag) {
      tag.unmount()
    }
  })
  const body = document.querySelector('body')
  while (body.firstChild) {
    body.removeChild(body.firstChild)
  }
})
