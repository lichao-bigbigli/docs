# 社交链接

通过 `themeConfig.socialLinks` 在导航栏中显示社交媒体图标链接。

## 基本用法

```typescript
themeConfig: {
  socialLinks: [
    { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    { icon: 'twitter', link: 'https://twitter.com' }
  ]
}
```

## 字段说明

| 字段    | 类型     | 说明                                       |
| ------- | -------- | ------------------------------------------ |
| `icon`  | `string` | 图标名称（来自 Iconify）                   |
| `link`  | `string` | 跳转链接                                   |

## 图标来源

VitePress 使用 [Iconify](https://icon-sets.iconify.design/) 提供的图标。完整的图标集可以在 [Iconify 网站](https://icon-sets.iconify.design/) 浏览。

例如：

| 图标名称              | 来源          |
| --------------------- | ------------- |
| `github`              | Logos         |
| `twitter`             | Logos         |
| `discord`             | Logos         |
| `wechat`              | Logos         |
| `weibo`               | Logos         |
| `zhihu`               | Logos         |
| `bilibili`            | Logos         |
| `gmail`               | Logos         |
| `linkedin`            | Logos         |
| `facebook`            | Logos         |

## SVG 自定义

也可以使用 SVG 字符串作为图标：

```typescript
socialLinks: [
  {
    icon: {
      svg: '<svg>...</svg>'
    },
    link: 'https://example.com'
  }
]
```

## 完整示例

```typescript
themeConfig: {
  socialLinks: [
    { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    { icon: 'twitter', link: 'https://twitter.com' },
    { icon: 'discord', link: 'https://discord.com' }
  ]
}
```

## 自定义样式

社交链接默认显示在导航栏的右上角，可以通过 CSS 调整：

```css
.VPSocialLinks {
  gap: 1rem;
}

.VPSocialLinks .VPSocialLink:hover {
  color: var(--vp-c-brand);
}
```

## 国际化社交链接

可以为不同语言配置不同的社交链接：

```typescript
socialLinks: {
  'zh-CN': [
    { icon: 'github', link: 'https://github.com/' },
    { icon: 'wechat', link: 'https://example.com/wechat' }
  ],
  'en-US': [
    { icon: 'github', link: 'https://github.com/' },
    { icon: 'twitter', link: 'https://twitter.com' }
  ]
}
```

## 下一步

- 返回 [主题配置总览](../guide/theme-config)
- 查看 [导航栏配置](./theme-nav)
