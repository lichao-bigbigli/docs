# 主题配置

主题配置位于 `.vitepress/config.ts` 的 `themeConfig` 字段中，用于控制站点的外观与导航。

## 导航栏（Nav）

### 基本配置

```typescript
themeConfig: {
  nav: [
    { text: '首页', link: '/' },
    { text: '指南', link: '/guide/getting-started' },
    { text: '参考', link: '/reference/config' }
  ]
}
```

### 下拉菜单

```typescript
nav: [
  { text: '首页', link: '/' },
  {
    text: '更多',
    items: [
      { text: 'GitHub', link: 'https://github.com' },
      { text: 'Twitter', link: 'https://twitter.com' }
    ]
  }
]
```

### Logo

```typescript
themeConfig: {
  logo: { src: '/logo.svg', alt: '站点 Logo' }
}
```

### 站点标题

```typescript
siteTitle: 'VitePress'
```

## 侧边栏（Sidebar）

### 简单数组

```typescript
sidebar: [
  { text: '介绍', link: '/guide/intro' },
  { text: '安装', link: '/guide/installation' }
]
```

### 分组

```typescript
sidebar: [
  {
    text: '指南',
    items: [
      { text: '介绍', link: '/guide/intro' },
      { text: '安装', link: '/guide/installation' }
    ]
  },
  {
    text: '进阶',
    collapsed: false,
    items: [
      { text: '部署', link: '/guide/deployment' }
    ]
  }
]
```

### 按路径分组

```typescript
sidebar: {
  '/guide/': [
    { text: '介绍', link: '/guide/intro' },
    { text: '安装', link: '/guide/installation' }
  ],
  '/reference/': [
    { text: '配置', link: '/reference/config' }
  ]
}
```

### 折叠控制

```typescript
sidebar: [
  {
    text: '指南',
    collapsed: false,
    items: [...]
  }
]
```

## 侧边栏链接

每个侧边栏条目支持以下字段：

| 字段      | 说明                 |
| --------- | -------------------- |
| `text`    | 显示文字             |
| `link`    | 链接地址             |
| `items`   | 子条目数组           |
| `collapsed` | 是否默认折叠       |
| `base`    | 嵌套路由的基准路径   |

## 社交链接

```typescript
socialLinks: [
  { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
  { icon: 'twitter', link: 'https://twitter.com' }
]
```

可用的图标名称参考 [Iconify](https://icon-sets.iconify.design/)。

## 页脚

```typescript
footer: {
  message: '基于 MIT 协议发布',
  copyright: '版权所有 © 2024-present VitePress'
}
```

## 大纲（右侧目录）

```typescript
outline: {
  level: [2, 3],
  label: '本页内容'
}
```

或者为单个页面配置：

```md
---
outline: [2, 4]
---
```

## 文档页脚（上一页/下一页）

```typescript
docFooter: {
  prev: '上一页',
  next: '下一页'
}
```

## 编辑链接

```typescript
editLink: {
  pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
  text: '在 GitHub 上编辑此页'
}
```

`:path` 会被替换为当前 Markdown 文件的相对路径。

## 最后更新时间

```typescript
lastUpdated: true,
lastUpdatedText: '最后更新于'
```

## 搜索

### 本地搜索

```typescript
search: {
  provider: 'local'
}
```

### Algolia 搜索

```typescript
search: {
  provider: 'algolia',
  options: {
    appId: 'YOUR_APP_ID',
    apiKey: 'YOUR_API_KEY',
    indexName: 'YOUR_INDEX_NAME'
  }
}
```

## 完整主题配置

```typescript
themeConfig: {
  siteTitle: 'VitePress',
  logo: { src: '/logo.svg', alt: 'Logo' },
  nav: [...],
  sidebar: {...},
  socialLinks: [...],
  footer: {...},
  outline: {...},
  docFooter: {...},
  editLink: {...},
  search: {...}
}
```

## 下一步

- 了解 [构建配置](./build-config)
- 学习如何 [部署](./deployment)
