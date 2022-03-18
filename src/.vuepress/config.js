const { description } = require('../../package')

module.exports = {
  theme: "vt",
  title: 'OpenTPW Docs',
  description: description,

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Formats',
        link: '/formats/',
      }
    ],
    sidebar: {
      '/formats/': [
        {
          title: 'Formats',
          collapsable: false,
          children: [
            'bf4',
            'bfmu',
            'bfst',
            'bfum',
            'bfwd',
            'bullfrog-library',
            'lips',
            'm3d2',
            'map',
            'mtr',
            '',
            'rsse-vm-instructions',
            'rsse-vm',
            'rsse',
            'sam',
            'sdt',
            'tpws-ints-lays',
            'tqi',
            'wct',
          ]
        }
      ],
    }
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/plugin-last-updated',
  ]
}
