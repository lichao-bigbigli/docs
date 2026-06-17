# 侧边栏配置

通过 `themeConfig.sidebar` 配置侧边栏导航。

## 基本结构

```typescript
themeConfig: {
  sidebar: [
    { text: '介绍', link: '/guide/intro' },
    { text: '安装', link: '/guide/installation' }
  ]
}
```

## 字段说明

| 字段        | 类型                | 说明                       |
| ----------- | ------------------- | -------------------------- |
| `text`      | `string`            | 显示文字                   |
| `link`      | `string`            | 链接地址                   |
| `items`     | `SidebarItem[]`     | 子项                       |
| `collapsed` | `boolean`           | 是否默认折叠               |
| `base`      | `string`            | 嵌套路由的基准路径         |
| `docFooter` | `string`            | 覆盖全局 docFooter         |

## 简单列表

```typescript
sidebar: [
  { text: '首页', link: '/' },
  { text: '介绍', link: '/guide/intro' },
  { text: '安装', link: '/guide/installation' }
]
```

## 分组

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
    items: [
      { text: '部署', link: '/guide/deployment' }
    ]
  }
]
```

## 折叠控制

```typescript
sidebar: [
  {
    text: '指南',
    collapsed: false,  // 默认展开
    items: [...]
  },
  {
    text: '进阶',
    collapsed: true,  // 默认折叠
    items: [...]
  }
]
```

## 按路径分组

可以为不同路径显示不同的侧边栏：

```typescript
sidebar: {
  '/guide/': [
    {
      text: '指南',
      items: [
        { text: '介绍', link: '/guide/intro' },
        { text: '安装', link: '/guide/installation' }
      ]
    }
  ],
  '/reference/': [
    {
      text: '参考',
      items: [
        { text: '配置', link: '/reference/config' },
        { text: '主题', link: '/reference/theme-nav' }
      ]
    }
  ]
}
```

匹配规则是前缀匹配。例如 `/guide/` 会匹配 `/guide/getting-started`、`/guide/installation` 等所有以 `/guide/` 开头的页面。

## 多层级

```typescript
sidebar: [
  {
    text: '指南',
    items: [
      { text: '介绍', link: '/guide/intro' },
      {
        text: '进阶',
        items: [
          { text: '配置', link: '/guide/config' },
          { text: '部署', link: '/guide/deployment' }
        ]
      }
    ]
  }
]
```

## 隐藏侧边栏

单个页面可以在 frontmatter 中设置 `sidebar: false`：

```md
---
sidebar: false
---
```

## 完整示例

```typescript
themeConfig: {
  sidebar: {
    '/guide/': [
      {
        text: '开始',
        items: [
          { text: '介绍', link: '/guide/intro' },
          { text: '安装', link: '/guide/installation' }
        ]
      },
      {
        text: '进阶',
        items: [
          { text: '部署', link: '/guide/deployment' }
        ]
      }
    ],
    '/reference/': [
      {
        text: '站点配置',
        items: [
          { text: '总览', link: '/reference/config' },
          { text: 'Head 标签', link: '/reference/config-head' }
        ]
      }
    ]
  }
}
```

## 下一步

- 了解 [页脚配置](./theme-footer)
- 了解 [社交链接](./theme-social)
