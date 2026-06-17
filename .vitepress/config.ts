import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'VitePress',
  description: '由 Vite 和 Vue 驱动的静态站点生成器',

  base: '/docs/',
  ignoreDeadLinks: true,
  themeConfig: {
    siteTitle: 'VitePress',

    nav: [
      { text: '指南', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
      { text: '参考', link: '/reference/config', activeMatch: '/reference/' },
      { text: '示例', link: '/examples/', activeMatch: '/examples/' },
      { text: '常见问题', link: '/faq', activeMatch: '/faq' },
      {
        text: '了解更多',
        items: [
          { text: 'GitHub', link: 'https://github.com/vuejs/vitepress' },
          { text: '发布说明', link: 'https://github.com/vuejs/vitepress/releases' },
          { text: '社区', link: '/community' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始',
          collapsed: false,
          items: [
            { text: '什么是 VitePress？', link: '/guide/what-is-vitepress' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '安装', link: '/guide/installation' },
            { text: '基础用法', link: '/guide/quick-start' }
          ]
        },
        {
          text: '编写内容',
          collapsed: false,
          items: [
            { text: 'Markdown 基础', link: '/guide/markdown' },
            { text: 'Frontmatter', link: '/guide/frontmatter' },
            { text: '在 Markdown 中使用 Vue', link: '/guide/vue-components' }
          ]
        },
        {
          text: '站点配置',
          collapsed: false,
          items: [
            { text: '站点配置', link: '/guide/site-config' },
            { text: '主题配置', link: '/guide/theme-config' },
            { text: '构建配置', link: '/guide/build-config' }
          ]
        },
        {
          text: '部署',
          collapsed: false,
          items: [
            { text: '静态部署', link: '/guide/deployment' },
            { text: 'GitHub Pages', link: '/guide/github-pages' },
            { text: 'Netlify / Vercel', link: '/guide/netlify-vercel' }
          ]
        }
      ],
      '/reference/': [
        {
          text: '站点配置',
          collapsed: false,
          items: [
            { text: '总览', link: '/reference/config' },
            { text: '标题与描述', link: '/reference/config-title' },
            { text: 'Head 标签', link: '/reference/config-head' },
            { text: '构建选项', link: '/reference/config-build' }
          ]
        },
        {
          text: '主题配置',
          collapsed: false,
          items: [
            { text: '导航栏', link: '/reference/theme-nav' },
            { text: '侧边栏', link: '/reference/theme-sidebar' },
            { text: '页脚', link: '/reference/theme-footer' },
            { text: '社交链接', link: '/reference/theme-social' }
          ]
        },
        {
          text: 'Markdown',
          collapsed: false,
          items: [
            { text: '语法扩展', link: '/reference/markdown-syntax' },
            { text: '自定义容器', link: '/reference/markdown-containers' },
            { text: '代码块', link: '/reference/markdown-code' }
          ]
        }
      ],
      '/examples/': [
        {
          text: '基础示例',
          collapsed: false,
          items: [
            { text: 'Hello World', link: '/examples/hello-world' },
            { text: '计数器', link: '/examples/counter' },
            { text: '待办清单', link: '/examples/todo-list' }
          ]
        },
        {
          text: '进阶示例',
          collapsed: false,
          items: [
            { text: '自定义主题', link: '/examples/custom-theme' },
            { text: '国际化', link: '/examples/i18n' },
            { text: '搜索', link: '/examples/search' }
          ]
        }
      ]
    },

    outline: {
      level: [2, 3],
      label: '本页内容'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    footer: {
      message: '基于 MIT 协议发布',
      copyright: '版权所有 © 2024-present VitePress'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: 'https://twitter.com' }
    ],

    search: {
      provider: 'local',
      options: {
        miniSearch: {
          searchOptions: {
            boost: { title: 4, text: 2, tokens: 1 },
            fuzzy: 0.2,
            prefix: true,
            combineWith: 'AND'
          }
        }
      }
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdatedText: '最后更新于'
  }
})
