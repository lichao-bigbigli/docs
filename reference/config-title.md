# 标题与描述

配置站点的标题、描述与语言相关选项。

## title

```typescript
export default defineConfig({
  title: '我的文档'
})
```

站点的默认标题，会在以下位置使用：

- 浏览器标签页
- 导航栏（当无 logo 时显示）
- 页面顶部的大标题
- SEO 优化

## titleTemplate

```typescript
export default defineConfig({
  title: '我的文档',
  titleTemplate: ':title - 我的文档'
})
```

自定义浏览器标签页的标题模板：

- `:title` - 当前页面的标题
- 留空使用站点默认标题

如果设置为 `false`，则会移除当前页面标题。

## description

```typescript
export default defineConfig({
  description: '一个使用 VitePress 构建的文档站点'
})
```

站点描述，会被注入到：

- `<meta name="description">` 标签
- 社交分享时的 og:description
- 搜索引擎结果

## lang

```typescript
export default defineConfig({
  lang: 'zh-CN'
})
```

设置站点的语言，影响：

- `<html lang="...">` 属性
- 中文搜索分词
- 本地化提示

常用值：

| 代码    | 语言            |
| ------- | --------------- |
| `en-US` | 美式英语        |
| `zh-CN` | 简体中文        |
| `zh-TW` | 繁体中文        |
| `ja-JP` | 日语            |
| `ko-KR` | 韩语            |
| `fr-FR` | 法语            |
| `de-DE` | 德语            |

## base

```typescript
export default defineConfig({
  base: '/my-project/'
})
```

部署到子路径时设置。当部署到：

- 用户/组织页面 `username.github.io`：`base: '/'`
- 项目页面 `username.github.io/my-project/`：`base: '/my-project/'`
- 子目录 `example.com/docs/`：`base: '/docs/'`

## 示例配置

```typescript
export default defineConfig({
  title: 'VitePress 中文文档',
  titleTemplate: ':title - VitePress',
  description: '由 Vite 和 Vue 驱动的静态站点生成器',
  lang: 'zh-CN',
  base: '/'
})
```

## 下一步

- 了解 [Head 标签配置](./config-head)
- 查看 [构建选项](./config-build)
