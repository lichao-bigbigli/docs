# 构建配置

VitePress 在底层使用 Vite 进行开发与构建。可以通过 `vite`、`build` 等字段自定义构建行为。

## 构建选项

```typescript
export default defineConfig({
  // 站点基础配置
  title: '我的站点',
  
  // 构建相关
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild'
  }
})
```

### 常用字段

| 字段          | 说明                          |
| ------------- | ----------------------------- |
| `outDir`      | 构建输出目录（相对 `docs/`）  |
| `assetsDir`   | 静态资源目录                  |
| `sourcemap`   | 是否生成 source map           |
| `minify`      | 是否压缩（`esbuild`/`terser`） |
| `chunkSizeWarningLimit` | chunk 大小警告阈值 |

## Vite 选项

通过 `vite` 字段传递 Vite 配置：

```typescript
export default defineConfig({
  vite: {
    server: {
      host: '0.0.0.0',
      port: 5173
    },
    build: {
      target: 'es2020',
      cssCodeSplit: true
    }
  }
})
```

## MDX 配置

VitePress 默认支持 MDX（`.mdx` 文件），可以使用 Vue 组件和 JSX：

```typescript
markdown: {
  config: (md) => {
    // 自定义 markdown-it 配置
  }
}
```

## 自定义插件

可以添加 Vite 插件：

```typescript
import { defineConfig } from 'vitepress'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  vite: {
    plugins: [svgLoader()]
  }
})
```

## Sitemap

```typescript
sitemap: {
  hostname: 'https://example.com'
}
```

构建时会自动生成 `sitemap.xml`。

## 国际化构建

多语言站点的构建产物会按语言分目录：

```
dist
├── index.html         # 默认语言
├── guide
├── reference
└── en
    ├── index.html
    ├── guide
    └── reference
```

## 环境变量

通过 `import.meta.env` 访问环境变量：

```typescript
export default defineConfig({
  title: process.env.SITE_TITLE || '默认标题'
})
```

## 性能优化

### 1. 启用路由级别的代码分割

VitePress 默认启用，无需配置。

### 2. 压缩图片

建议在构建前使用工具（如 `imagemin`）压缩 `public/` 中的图片。

### 3. 移除未使用的 Markdown

`srcDir` 字段可以指定源文件目录：

```typescript
srcDir: '.'
```

### 4. 自定义预构建依赖

```typescript
optimizeDeps: {
  include: ['vue', 'lodash-es']
}
```

## 构建产物

运行 `npm run docs:build` 后，会在 `docs/.vitepress/dist/` 中生成：

```
dist
├── assets              # JS、CSS、图片等
├── index.html
├── guide
│   └── *.html
├── reference
│   └── *.html
└── sitemap.xml
```

## 部署到生产环境

构建产物是纯静态文件，可以部署到：

- [GitHub Pages](./github-pages)
- [Netlify](./netlify-vercel#netlify)
- [Vercel](./netlify-vercel#vercel)
- 任意 Nginx/Apache 服务器
- CDN 服务

## 下一步

- 学习 [静态部署](./deployment)
- 配置 [GitHub Pages](./github-pages)
