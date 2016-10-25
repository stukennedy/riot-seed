import jsdom from 'jsdom'

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc

const win = doc.defaultView
global.window = win
global.navigator = win.navigator
global.history = win.history

global.Image = class {}
