module.exports = {
  lintOnSave: false,

  transpileDependencies: [
    'vuetify'
  ],

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import '~@/scss/variables.scss';`
      },
    }
  },

  publicPath: "/docs/"
}
