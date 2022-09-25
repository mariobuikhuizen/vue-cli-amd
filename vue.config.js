const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  /* Uncomment the lines below to enable AMD support in the UMD module */
  // configureWebpack: {
  //   externals: {
  //     vue: {
  //       commonjs: 'vue',
  //       commonjs2: 'vue',
  //       root: 'Vue',
  //       amd: 'vue'
  //     }
  //   }
  // }
})
