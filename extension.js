/* eslint-disable no-var */
/* eslint-disable no-underscore-dangle */

var disposables = []

function minimize(shellwm, actor) {
  actor.remove_all_transitions()
  shellwm.completed_minimize(actor)
}

function unminimize(shellwm, actor) {
  actor.remove_all_transitions()
  shellwm.completed_unminimize(actor)
}

function enable() {
  disposables.push(global.window_manager.connect("minimize", minimize))
  disposables.push(global.window_manager.connect("unminimize", unminimize))
}

function disable() {
  disposables.forEach((d) => global.window_manager.disconnect(d))
}

function init() {}
