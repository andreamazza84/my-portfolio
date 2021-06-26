module.exports = {
  lintOnSave: false,

  transpileDependencies: [
    'vuetify'
  ],

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import '~@/variables.scss';`
      },
    }
  },
}
