const webpack = require('webpack');

module.exports = {
  router: {
    // middleware: [
    //   'main'
    // ]
  },
  build: {
    publicPath: '/_nuxt/', 
    extractCSS: {
      allChunks: true 
    },
    vendor: [
      'vue-lazyload',
      // 'jquery',
      // 'swiper'
    ],
    plugins: [
      new webpack.ProvidePlugin({
        $:'jquery',
        jQuery:'jquery',
        'window.jQuery':'jquery'
      })
    ]
  },
  plugins: [
    { src: '~/plugins/vue-lazyload.js', ssr: false },
    { src: '~/assets/js/plugins/jquery-2.1.4.min.js', ssr: false },
    { src: '~/assets/js/plugins/swiper-3.4.2.min.js', ssr: false }
  ],
  css: [
    '~/assets/scss/plugins/swiper.min.css',
    '~/assets/scss/base.scss'
  ],
  render: {
    resourceHints:false
  },
  performance: {
    prefetch: false
  }
}
