# 构建选项

VitePress 的构建系统基于 Vite。本节介绍构建相关的所有选项。

## outDir

```typescript
export default defineConfig({
  build: {
    outDir: 'dist'
  }
})
```

构建输出目录，**相对于 `docs/` 目录**。默认是 `.vitepress/dist`。

## assetsDir

```typescript
build: {
  assetsDir: 'assets'
}
```

静态资源（JS、CSS、图片等）的子目录名。

## sourcemap

```typescript
build: {
  sourcemap: false
}
```

是否生成 source map。生产环境建议保持 `false` 以减小体积。

## minify

```typescript
build: {
  minify: 'esbuild'
}
```

压缩方式：

- `'esbuild'`（默认）- 速度快
- `'terser'` - 压缩率更高
- `false` - 不压缩

## chunkSizeWarningLimit

```typescript
build: {
  chunkSizeWarningLimit: 1000
}
```

chunk 大小警告阈值（KB），超过会输出警告。

## srcDir

```typescript
export default defineConfig({
  srcDir: '.'
})
```

源文件目录，默认为 `docs/`。VitePress 会从这个目录读取所有 Markdown 文件。

## ignoreDeadLinks

```typescript
ignoreDeadLinks: true
```

是否忽略死链检查。`true` 时构建不会因死链而失败。

## mpa

```typescript
mpa: true
```

是否使用 MPA（多页应用）模式。MPA 模式下不会有客户端导航，每个页面都是独立加载。适用于：

- 完全静态、不需要 SPA 体验的站点
- 对首屏速度要求极高的场景

## sitemap

```typescript
sitemap: {
  hostname: 'https://example.com',
  lastmodDateOnly: false
}
```

Sitemap 配置：

- `hostname` - 站点域名
- `lastmodDateOnly` - 是否只输出日期（不带时间）

## vue

```typescript
vue: {
  template: {
    compilerOptions: {
      // Vue 模板编译选项
    }
  }
}
```

Vue 相关配置。

## vite

```typescript
vite: {
  server: { host: '0.0.0.0' },
  build: { target: 'es2020' },
  plugins: []
}
```

直接透传给 Vite 的配置。

## 完整示例

```typescript
export default defineConfig({
  srcDir: '.',
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000
  },
  
  sitemap: {
    hostname: 'https://example.com'
  },
  
  ignoreDeadLinks: false,
  
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

## 下一步

- 了解 [站点配置](./config)
- 了解 [主题配置](../guide/theme-config)
