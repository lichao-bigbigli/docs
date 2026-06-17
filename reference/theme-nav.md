# 导航栏配置

通过 `themeConfig.nav` 配置顶部导航栏。

## 基本配置

```typescript
themeConfig: {
  nav: [
    { text: '首页', link: '/' },
    { text: '指南', link: '/guide/getting-started' },
    { text: '参考', link: '/reference/config' }
  ]
}
```

## 字段说明

| 字段        | 类型                | 说明                       |
| ----------- | ------------------- | -------------------------- |
| `text`      | `string`            | 显示文字                   |
| `link`      | `string`            | 跳转链接                   |
| `activeMatch` | `string`          | 匹配该正则时高亮           |
| `items`     | `NavItem[]`         | 子菜单（用于下拉）         |

## 下拉菜单

```typescript
nav: [
  { text: '首页', link: '/' },
  {
    text: '更多',
    items: [
      { text: 'GitHub', link: 'https://github.com' },
      { text: 'Twitter', link: 'https://twitter.com' },
      { text: 'Discord', link: 'https://discord.com' }
    ]
  }
]
```

## 活动匹配

通过 `activeMatch` 自定义高亮规则：

```typescript
nav: [
  {
    text: '指南',
    link: '/guide/getting-started',
    activeMatch: '/guide/'  // /guide/ 下的所有页面都高亮
  }
]
```

## Logo

```typescript
themeConfig: {
  logo: {
    src: '/logo.svg',
    alt: 'VitePress Logo',
    width: 24,
    height: 24
  }
}
```

`logo` 字段可以传入字符串或对象：

- 字符串：仅设置 src
- 对象：完整配置

## 站点标题

```typescript
siteTitle: 'VitePress'
```

无 logo 时显示的站点标题。

## 完整示例

```typescript
themeConfig: {
  siteTitle: 'VitePress',
  
  logo: {
    src: '/logo.svg',
    alt: 'VitePress'
  },
  
  nav: [
    { text: '首页', link: '/' },
    { text: '指南', link: '/guide/getting-started', activeMatch: '/guide/' },
    { text: '参考', link: '/reference/config', activeMatch: '/reference/' },
    {
      text: '更多',
      items: [
        { text: 'GitHub', link: 'https://github.com/vuejs/vitepress' },
        { text: '发布说明', link: 'https://github.com/vuejs/vitepress/releases' }
      ]
    }
  ]
}
```

## 下一步

- 了解 [侧边栏配置](./theme-sidebar)
- 了解 [页脚配置](./theme-footer)
