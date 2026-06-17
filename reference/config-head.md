# Head 标签配置

通过 `head` 选项自定义 HTML `<head>` 标签，例如 favicon、meta 标签、外部资源等。

## 基础用法

```typescript
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#646cff' }]
  ]
})
```

每个元素是一个 `[tagName, attributes]` 的元组。

## 常用 Head 标签

### Favicon

```typescript
head: [
  ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
  ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
  ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }]
]
```

### Meta 标签

```typescript
head: [
  ['meta', { name: 'theme-color', content: '#646cff' }],
  ['meta', { name: 'description', content: '站点描述' }],
  ['meta', { name: 'keywords', content: 'VitePress, 文档, Vue' }],
  ['meta', { name: 'author', content: '作者' }]
]
```

### Open Graph

```typescript
head: [
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:title', content: '我的站点' }],
  ['meta', { property: 'og:description', content: '站点描述' }],
  ['meta', { property: 'og:image', content: '/og-image.png' }],
  ['meta', { property: 'og:url', content: 'https://example.com' }]
]
```

### Twitter Card

```typescript
head: [
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:title', content: '我的站点' }],
  ['meta', { name: 'twitter:description', content: '站点描述' }],
  ['meta', { name: 'twitter:image', content: '/twitter-card.png' }]
]
```

### 引入外部资源

```typescript
head: [
  // 字体
  ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
  ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter&display=swap' }],
  
  // 第三方脚本
  ['script', { src: 'https://example.com/script.js', defer: true }]
]
```

### 站点验证

```typescript
head: [
  ['meta', { name: 'google-site-verification', content: 'xxx' }],
  ['meta', { name: 'baidu-site-verification', content: 'xxx' }]
]
```

## 高级用法

### 条件渲染

```typescript
head: [
  [
    'meta',
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
    }
  ]
]
```

### HTML 字符串

VitePress 也支持直接以 HTML 字符串形式插入：

```typescript
head: [
  ['script', {}, `window.addEventListener('load', () => { /* ... */ })`]
]
```

## 完整示例

```typescript
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { name: 'description', content: '由 Vite 和 Vue 驱动的静态站点生成器' }],
    ['meta', { property: 'og:title', content: 'VitePress' }],
    ['meta', { property: 'og:description', content: '由 Vite 和 Vue 驱动的静态站点生成器' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: '/og-image.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }]
  ]
})
```

## 下一步

- 了解 [构建选项](./config-build)
- 返回 [配置总览](./config)
