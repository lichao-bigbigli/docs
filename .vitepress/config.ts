import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'VitePress',
  description: '由 Vite 和 Vue 驱动的静态站点生成器',

  base: '/docs/',
  appearance: true,
  ignoreDeadLinks: true,
  themeConfig: {
    siteTitle: 'VitePress',

    nav: [
      { text: '指南', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
      { text: '参考', link: '/reference/config', activeMatch: '/reference/' },
      { text: '示例', link: '/examples/', activeMatch: '/examples/' },
      { text: '48课搞定信息学奥赛', link: '/48-lessons/', activeMatch: '/48-lessons/' },
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
      ],
      '/48-lessons/': [
        { text: '前言', link: '/48-lessons/preface' },
        {
          text: '第1章 顺序结构',
          collapsed: false,
          items: [
            { text: '第1课：程序入门', link: '/48-lessons/lesson-01' },
            { text: '第2课：初识变量', link: '/48-lessons/lesson-02' },
            { text: '第3课：实数类型', link: '/48-lessons/lesson-03' },
            { text: '第4课：除法和求余', link: '/48-lessons/lesson-04' },
            { text: '第5课：强制类型转换', link: '/48-lessons/lesson-05' },
            { text: '第6课：字符类型与ASCII码', link: '/48-lessons/lesson-06' },
            { text: '第7课：顺序结构及复合运算', link: '/48-lessons/lesson-07' }
          ]
        },
        {
          text: '第2章 选择结构',
          collapsed: false,
          items: [
            { text: '第8课：单分支结构', link: '/48-lessons/lesson-08' },
            { text: '第9课：双分支结构', link: '/48-lessons/lesson-09' },
            { text: '第10课：选择嵌套结构', link: '/48-lessons/lesson-10' },
            { text: '第11课：多分支结构', link: '/48-lessons/lesson-11' },
            { text: '第12课：switch结构', link: '/48-lessons/lesson-12' }
          ]
        },
        {
          text: '第3章 循环结构',
          collapsed: false,
          items: [
            { text: '第13课：for循环', link: '/48-lessons/lesson-13' },
            { text: '第14课：循环求和', link: '/48-lessons/lesson-14' },
            { text: '第15课：循环求积', link: '/48-lessons/lesson-15' },
            { text: '第16课：while循环', link: '/48-lessons/lesson-16' },
            { text: '第17课：循环中断与继续', link: '/48-lessons/lesson-17' },
            { text: '第18课：循环嵌套', link: '/48-lessons/lesson-18' }
          ]
        },
        {
          text: '第4章 数组与字符串',
          collapsed: false,
          items: [
            { text: '第19课：一维数组', link: '/48-lessons/lesson-19' },
            { text: '第20课：二维数组', link: '/48-lessons/lesson-20' },
            { text: '第21课：字符串与字符数组', link: '/48-lessons/lesson-21' },
            { text: '第22课：字符数组的基本操作', link: '/48-lessons/lesson-22' }
          ]
        },
        {
          text: '第5章 排序算法',
          collapsed: false,
          items: [
            { text: '第23课：选择排序', link: '/48-lessons/lesson-23' },
            { text: '第24课：冒泡排序', link: '/48-lessons/lesson-24' },
            { text: '第25课：插入排序', link: '/48-lessons/lesson-25' },
            { text: '第26课：计数排序', link: '/48-lessons/lesson-26' }
          ]
        },
        {
          text: '第6章 基础算法',
          collapsed: false,
          items: [
            { text: '第27课：暴力枚举', link: '/48-lessons/lesson-27' },
            { text: '第28课：递推算法', link: '/48-lessons/lesson-28' },
            { text: '第29课：认识函数', link: '/48-lessons/lesson-29' },
            { text: '第30课：结构体及排序', link: '/48-lessons/lesson-30' },
            { text: '第31课：递归算法', link: '/48-lessons/lesson-31' },
            { text: '第32课：二分查找', link: '/48-lessons/lesson-32' }
          ]
        },
        {
          text: '第7章 数学问题',
          collapsed: false,
          items: [
            { text: '第33课：因数、公约数和公倍数', link: '/48-lessons/lesson-33' },
            { text: '第34课：质数和合数', link: '/48-lessons/lesson-34' }
          ]
        },
        {
          text: '第8章 模拟算法',
          collapsed: false,
          items: [
            { text: '第35课：一维数组模拟', link: '/48-lessons/lesson-35' },
            { text: '第36课：二维数组模拟', link: '/48-lessons/lesson-36' },
            { text: '第37课：日期模拟', link: '/48-lessons/lesson-37' },
            { text: '第38课：字符串模拟', link: '/48-lessons/lesson-38' }
          ]
        },
        {
          text: '第9章 算法进阶',
          collapsed: false,
          items: [
            { text: '第39课：贪心算法', link: '/48-lessons/lesson-39' },
            { text: '第40课：深度优先搜索', link: '/48-lessons/lesson-40' },
            { text: '第41课：广度优先搜索', link: '/48-lessons/lesson-41' },
            { text: '第42课：动态规划', link: '/48-lessons/lesson-42' }
          ]
        },
        {
          text: '第10章 数据结构',
          collapsed: false,
          items: [
            { text: '第43课：栈及其应用', link: '/48-lessons/lesson-43' },
            { text: '第44课：队列及其应用', link: '/48-lessons/lesson-44' },
            { text: '第45课：链表及其操作', link: '/48-lessons/lesson-45' },
            { text: '第46课：树及其应用', link: '/48-lessons/lesson-46' },
            { text: '第47课：图及其应用', link: '/48-lessons/lesson-47' },
            { text: '第48课：图的最短路径', link: '/48-lessons/lesson-48' }
          ]
        },
        { text: '信息学奥赛成长指南', link: '/48-lessons/appendix' }
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
      copyright: '版权所有 © 2026-present VitePress'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lichao-bigbigli/docs/' },
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
      pattern: 'https://github.com/lichao-bigbigli/docs/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdatedText: '最后更新于'
  }
})
