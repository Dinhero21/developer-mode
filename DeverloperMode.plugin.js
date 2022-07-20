/**
 * @name DeveloperMode
 * @author Dinhero21
 * @description A very simple plugin that enables developer mode
 * @version 0.0.1
 */

class DeveloperMode {
  start () {
    window.___wp = e => {
      console.log('Patch', e)

      let id = e.c[Object.keys(e.c).find(k => e.c[k]?.exports?.default?.isDeveloper === false)]

      if (id) Object.defineProperty(id.exports.default, 'isDeveloper', {
        get() {
          return true
        }
      })

      delete window.___wp
    }

    webpackChunkdiscord_app.push([['wp_isdev_patch'], {}, window.___wp])
  }

  stop () {
    document.location.reload()
  }
}

module.exports = DeveloperMode
