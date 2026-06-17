# 常见问题

关于 VitePress 的常见问题解答。

## 通用问题

### 什么是 VitePress？

VitePress 是一个由 Vue.js 与 Vite 驱动的静态站点生成器。它被设计用来以最少的配置构建快速、美观的文档站点。

### VitePress 与 VuePress 有什么不同？

VitePress 是 VuePress 的继承者，构建在 Vite 之上而不是 Webpack。它提供更快的开发体验和更好的性能。

### VitePress 是否可以用于生产环境？

可以。VitePress 已经被许多项目用于生产环境，包括 Vue.js、Vite、Vitest 等。

## 入门

### 如何安装 VitePress？

```bash
npm install -D vitepress vue
```

### 如何创建新项目？

```bash
npm create vitepress@latest .
```

### 如何启动开发服务器？

```bash
npm run docs:dev
```

## 配置

### 如何配置我的站点？

编辑 `.vitepress/config.ts`：

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的站点',
  description: '一个美观的文档站点'
})
```

### 如何添加导航栏？

```typescript
themeConfig: {
  nav: [
    { text: '首页', link: '/' },
    { text: '指南', link: '/guide/' }
  ]
}
```

### 如何添加侧边栏？

```typescript
themeConfig: {
  sidebar: [
    { text: '快速开始', link: '/guide/getting-started' }
  ]
}
```

## 内容

### 如何编写内容？

在项目目录中创建 Markdown 文件，每个 `.md` 文件会成为一个页面。

### 如何使用 Vue 组件？

在 `.vitepress/components/` 创建组件，然后在 Markdown 中使用：

```md
<MyComponent />
```

### 如何添加代码块？

```md
```javascript
console.log('Hello, World!')
```
```
```

## 部署

### 如何构建站点？

```bash
npm run docs:build
```

### 如何部署到 GitHub Pages？

详见 [GitHub Pages 指南](./guide/github-pages)。

### 如何部署到 Netlify / Vercel？

详见 [Netlify & Vercel 指南](./guide/netlify-vercel)。

## 自定义

### 如何自定义主题？

在 `.vitepress/theme/` 创建自定义主题：

```typescript
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme
}
```

### 如何修改颜色？

在自定义 CSS 中覆盖 CSS 变量：

```css
:root {
  --vp-c-brand: #646cff;
}
```

### 如何添加自定义字体？

```css
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

:root {
  --vp-font-family-base: 'Inter', sans-serif;
}
```

## 故障排查

### 为什么我的站点无法构建？

检查以下几点：

- Node.js 版本（必须为 18 或更高）
- 依赖已正确安装
- 配置有效

### 为什么我的链接失效？

- 内部链接请使用相对路径
- 省略 `.md` 和 `.html` 扩展名
- 检查 `base` 路径配置

### 为什么我的 CSS 加载失败？

- 检查 `base` 路径配置
- 验证 HTML 中的资源路径
- 清除浏览器缓存

### 如何启用深色模式？

深色模式默认开启。用户可以使用导航栏上的按钮切换。

## 社区

### 在哪里可以获得帮助？

- [VitePress 文档](https://vitepress.dev/)
- [GitHub Issues](https://github.com/vuejs/vitepress/issues)
- [Discord 社区](https://discord.com/invite/HBherRA)

### 如何贡献？

欢迎贡献！详见 [贡献指南](https://github.com/vuejs/vitepress/blob/main/CONTRIBUTING.md)。

## 相关文档

- [快速开始](./guide/getting-started) - 学习基础
- [站点配置](./guide/site-config) - 配置你的站点
- [部署](./guide/deployment) - 部署你的站点
