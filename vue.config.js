const path =require('path')

module.exports = {
  outputDir:path.resolve(__dirname,'./SPA/dist'),
  assetsDir:"./static",

  transpileDependencies: [
    'vuetify'
  ]
}
