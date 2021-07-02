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

  outputDir: 'docs',

  publicPath: process.env.NODE_ENV === 'production' ? '/my-portfolio/' : '/my-portfolio/docs/'

}
