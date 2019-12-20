module.exports  =  {
  title: 'Blog',
  description: 'Blog VuePress',
  locales:  {
    '/vi':  {
      lang:  'vi-VN',
    },
    '/en':  {
      lang:  'en-VN',
    },
    '/jp':  {
      lang:  'jp-JP',
      title:  'ブログ',
    }
  }
},
module.exports = {
  base: '/hoanglc/',
  title: 'VuePress Blog Demo',
  description: 'A simple blog built with VuePress',
  dest: 'docs',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: 'about/' },
      { text: 'Product', link: 'product/' },
      { text: 'Posts', link: 'posts/' },
      { text: 'Contact', link: 'contact/' },
    ],
    displayAllHeaders: true,
    sidebar: 'auto'
  }
}