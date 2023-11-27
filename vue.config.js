const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '.',
  lintOnSave: true,
  devServer:{
    proxy:{
      [process.env.VUE_APP_BASE_API]:{
        target:"http://61.174.243.28:45084",
        changeOrigin:true,
        ws: true,
        pathRewrite:{
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  },
  configureWebpack: {
    resolve:{
      alias:{
        '@':resolve('src')
      }
    }
  }
}