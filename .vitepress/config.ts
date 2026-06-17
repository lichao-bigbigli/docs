import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'BigBigLi Docs',
  description: 'Documentation for BigBigLi',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Installation', link: '/guide/installation' }
        ]
      }
    ]
  }
})
