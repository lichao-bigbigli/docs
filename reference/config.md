# 站点配置参考

本节是 `.vitepress/config.ts` 中所有站点级（site-level）配置的参考文档。

## 配置文件

VitePress 的配置文件位于 `.vitepress/config.ts`（或 `.vitepress/config.js`），从项目根目录的 `docs` 子目录开始计算。

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点配置
  title: 'VitePress',
  description: '由 Vite 和 Vue 驱动的静态站点生成器',
  
  // 主题配置
  themeConfig: {
    // ...
  }
})
```

## 站点配置总览

### 基础

| 字段                | 类型                | 说明                       |
| ------------------- | ------------------- | -------------------------- |
| `title`             | `string`            | 站点的默认标题             |
| `titleTemplate`     | `string \| boolean` | 标题模板                   |
| `description`       | `string`            | 站点描述                   |
| `lang`              | `string`            | 站点语言                   |
| `base`              | `string`            | 部署基础路径               |

### 路由与生成

| 字段                | 类型                | 说明                       |
| ------------------- | ------------------- | -------------------------- |
| `cleanUrls`         | `boolean`           | 是否使用 clean URL         |
| `rewrites`          | `Record<string,string>` | 自定义路由重写         |
| `redirects`         | `Record<string,string>` | 自定义重定向           |

### 主题集成

| 字段                | 类型                | 说明                       |
| ------------------- | ------------------- | -------------------------- |
| `appearance`        | `boolean \| 'dark'` | 主题外观                   |
| `lastUpdated`       | `boolean \| object` | 是否显示最后更新时间       |
| `head`              | `HeadConfig[]`      | 自定义 head 标签           |
| `markdown`          | `MarkdownConfig`    | Markdown 解析配置          |

### 构建

| 字段                | 类型                | 说明                       |
| ------------------- | ------------------- | -------------------------- |
| `srcDir`            | `string`            | 源文件目录                 |
| `outDir`            | `string`            | 输出目录                   |
| `cacheDir`          | `string`            | 缓存目录                   |
| `mpa`               | `boolean`           | 是否为 MPA 模式            |
| `ignoreDeadLinks`   | `boolean`           | 是否忽略死链检查           |

### 多语言

| 字段                | 类型                | 说明                       |
| ------------------- | ------------------- | -------------------------- |
| `locales`           | `Record<string, LocaleConfig>` | 国际化配置         |

### 其他

| 字段                | 类型                | 说明                       |
| ------------------- | ------------------- | -------------------------- |
| `sitemap`           | `object`            | Sitemap 配置               |
| `vue`               | `object`            | Vue 配置                   |
| `vite`              | `object`            | 底层 Vite 配置             |

## 完整示例

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'VitePress',
  titleTemplate: ':title - VitePress',
  description: '由 Vite 和 Vue 驱动的静态站点生成器',
  
  base: '/',
  cleanUrls: true,
  
  appearance: 'auto',
  lastUpdated: true,
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#646cff' }]
  ],
  
  markdown: {
    lineNumbers: true,
    theme: { light: 'github-light', dark: 'github-dark' }
  },
  
  sitemap: {
    hostname: 'https://example.com'
  },
  
  themeConfig: {
    siteTitle: 'VitePress',
    nav: [...],
    sidebar: {...}
  }
})
```

## 子页面

- [标题与描述](./config-title) - 站点的标题、描述与语言
- [Head 标签](./config-head) - 自定义 `<head>` 标签
- [构建选项](./config-build) - 构建相关的配置
