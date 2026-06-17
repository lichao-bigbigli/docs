# 基础用法

了解 VitePress 的基础用法：文件结构、路由、内容组织等。

## 项目结构

一个典型的 VitePress 项目结构如下：

```
.
├── docs
│   ├── .vitepress
│   │   ├── config.ts        # 站点配置
│   │   ├── theme            # 自定义主题
│   │   │   ├── index.ts
│   │   │   └── custom.css
│   │   └── dist             # 构建产物
│   ├── api-examples.md      # 某个页面
│   ├── index.md             # 首页
│   └── guide                # 指南目录
│       └── ...
└── package.json
```

`docs` 是 VitePress 站点的根目录，默认情况下所有 Markdown 文件都会作为内容源。

## 文件路由

VitePress 会自动根据 Markdown 文件的相对路径生成对应的 URL 路由：

| 文件路径                       | 路由                      |
| ------------------------------ | ------------------------- |
| `docs/index.md`                | `/`                       |
| `docs/getting-started.md`      | `/getting-started`        |
| `docs/guide/index.md`          | `/guide/`                 |
| `docs/guide/deployment.md`     | `/guide/deployment`       |
| `docs/api/index.md`            | `/api/`                   |

生成的 HTML 文件名也基于路径，例如 `docs/guide/deployment.md` 会被构建为 `guide/deployment.html`。

## 首页

`index.md` 是站点的首页（路由 `/`）。它可以使用特殊的 [home layout](https://vitepress.dev/reference/default-theme-home-layout)，展示 Hero、Features 等内容：

```md
---
home: true
hero:
  name: 我的站点
  text: 站点标语
  tagline: 简短描述
  actions:
    - theme: brand
      text: 开始
      link: /guide/getting-started
features:
  - title: 特性 1
    details: 详细介绍
---
```

## 多页面

你可以通过创建多个 Markdown 文件来添加页面。每个 `.md` 文件都会成为一个独立的页面。

## 子目录

你可以在 `docs/` 下创建任意层级的子目录，子目录会反映在 URL 中。例如：

```
docs
├── index.md
├── guide
│   ├── index.md
│   ├── getting-started.md
│   └── deployment.md
└── reference
    └── config.md
```

## 部署产物

`npm run docs:build` 会在 `docs/.vitepress/dist/` 中生成静态文件。直接将整个 `dist/` 目录的内容上传到任何静态服务器即可。

## 下一步

- 学习 [Markdown 基础](./markdown)
- 了解 [Frontmatter 配置](./frontmatter)
- 在 Markdown 中使用 [Vue 组件](./vue-components)
