module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
        sass: {
            sassOptions: {
                prependData: ' @import "@/assets/styles/styles.scss" ',
            }
        }
    }
  }
}
