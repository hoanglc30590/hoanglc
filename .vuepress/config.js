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
module.exports  =  {
  themeConfig: {
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Product', link: '/product/' },
      { text: 'Posts', link: '/posts/' },
      { text: 'Contact', link: '/contact/' },
    ],
  }
},
module.exports  =  {
  dest: 'docs'
}