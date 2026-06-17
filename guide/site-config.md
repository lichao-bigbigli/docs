# 站点配置

VitePress 的配置文件位于 `.vitepress/config.ts`（或 `config.js`），是控制整个站点行为的核心。

## 基础配置

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点语言，影响 HTML lang 属性
  lang: 'zh-CN',

  // 站点标题
  title: '我的站点',

  // 站点描述，会用于 SEO meta 标签
  description: '这是我的文档站点',

  // 部署到的子路径
  base: '/',

  // 是否在 URL 中省略 .html
  cleanUrls: true,

  // 是否显示最后更新时间
  lastUpdated: true
})
```

## 站点元信息

### title

设置站点的默认标题，会显示在：

- 浏览器标签页
- 导航栏（无 logo 时）
- 搜索引擎结果

### description

站点描述，会被插入到 `<meta name="description">` 标签中。

### lang

设置站点的语言，影响 HTML 根元素的 `lang` 属性，影响中文分词与本地化行为。

### head

自定义 `<head>` 中的标签：

```typescript
head: [
  ['link', { rel: 'icon', href: '/favicon.ico' }],
  ['meta', { name: 'theme-color', content: '#646cff' }],
  ['meta', { property: 'og:title', content: 'VitePress' }]
]
```

## 站点图标

将 `favicon.ico` 放在 `docs/public/` 目录下，VitePress 会自动处理。

或者通过 `head` 显式指定：

```typescript
head: [
  ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]
]
```

## cleanUrls

```typescript
cleanUrls: true
```

启用后，URL 中不再带有 `.html` 扩展名：

- 默认：`/guide/getting-started.html`
- 启用后：`/guide/getting-started`

## base

```typescript
base: '/my-project/'
```

当站点部署到子路径时设置，例如 GitHub Pages 用户页：

```typescript
base: '/repo-name/'
```

## markdown 配置

通过 `markdown` 选项配置 Markdown 解析器：

```typescript
markdown: {
  theme: { light: 'github-light', dark: 'github-dark' },
  lineNumbers: true,
  container: {
    tipLabel: '提示',
    warningLabel: '警告',
    dangerLabel: '危险',
    infoLabel: '信息',
    detailsLabel: '详细信息'
  }
}
```

## 国际化

通过 `locales` 配置多语言：

```typescript
locales: {
  root: {
    label: '简体中文',
    lang: 'zh-CN',
    title: 'VitePress',
    description: '描述'
  },
  en: {
    label: 'English',
    lang: 'en-US',
    title: 'VitePress',
    description: 'Description'
  }
}
```

## 完整示例

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '我的文档',
  description: '一个使用 VitePress 构建的文档站点',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#646cff' }]
  ],
  themeConfig: {
    // 主题相关配置
  }
})
```

## 下一步

- 详细了解 [主题配置](./theme-config)
- 配置 [构建选项](./build-config)
