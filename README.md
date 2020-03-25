# webpack-playcanvas
webpack plugin, upload file to canvas editor

Supported files : [`.js`,`.html`,`.css`,`.txt`,`.json`]

# Usage

1. Install

`npm i webpack-playcanvas`

2. add playcanvas.config.js

``` playcanvas.json
// playcanvas.json
{
  "accessToken": "",
  "scenes": [],
  "projectId": "",
  "branchId": "",
  "projectName": "",
  "remotePath": ""
}
```

3. add plugin in webpack config

``` webpack.config.js
const webpackPlaycanvas = require('./webpack-playcanvas')
const playcanvasOption = require('./playcanvas')

module.exports = {
    plugins: [
      new webpackPlaycanvas( playcanvasOption )
    ]
}
```

# API

## webpackPlaycanvas(options)

#### options.accessToken
Required
Type: `string`

#### options.scenes
Required
Type: `array<number>`

#### options.projectId
Required
Type: `number`

#### options.branchId
Required
Type: `string`

#### options.projectName
Required
Type: `string`

#### options.remotePath
Required
Type: `string`