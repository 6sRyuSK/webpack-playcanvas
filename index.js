const PlayCanvas = require('playcanvas-node').default
const path = require('path')

class webpackPlaycanvas {
  constructor (options = {}) {
    this.playcanvas = new PlayCanvas(options)
    this.remotePath = options.remotePath
  }

  apply (compiler) {
    compiler.hooks.assetEmitted.tap('webpackPlaycanvas', (file) => {
      const directry = 'dist/' + file
      const supportExt = ['.html', '.css', '.js', '.txt', '.json']
      if (supportExt.includes(path.extname(file))) {
        this.playcanvas.updateAssets(
          this.remotePath,
          path.basename(file),
          directry
        )
      }
    })
  }
}

module.exports = webpackPlaycanvas
