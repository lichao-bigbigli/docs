# 什么是 VitePress？

VitePress 是一个 [**静态站点生成器**](https://en.wikipedia.org/wiki/Static_site_generator) (SSG)，专为构建**快速、以内容为中心的网站**而设计。简而言之，VitePress 用 Markdown 编写的内容生成静态 HTML 页面，并提供了一个专为文档优化的简约主题。

每个由 VitePress 生成的页面都自带预渲染的 HTML，因此无论用户如何访问或在哪里托管，加载性能都非常好。一旦页面加载完成，Vue 3 就会接管所有交互，实现流畅的客户端导航与交互。

## 背景

VitePress 取代了 VuePress，后者是基于 Vue 2 和 Webpack 构建的。从那时起，Vue 团队和社区一直在与它们合作。VitePress 带来了对基于 Vite 的现代工作流程的支持，并带来了对其他方面的重大改进。

VitePress 不仅支持 Vue 文档站点，也广泛服务于其他开源项目的文档，例如 [Vitest](https://vitest.dev/)、[Pinia](https://pinia.vuejs.org/)、[Rollup](https://rollupjs.org/) 等。

## 设计目标

VitePress 的核心目标是：

- **极简的开发体验** — 启动快、热更新响应迅速、配置简单。
- **以内容为中心** — 让作者专注于写作，而不是构建工具。
- **出色的性能** — 静态 HTML + 客户端 hydration，首屏快、切换更流畅。
- **强大的扩展能力** — 借助 Vue 3 的力量，几乎所有能力都可定制。

## 与 VuePress 的关系

VitePress 是 VuePress 的精神继承者，但基于现代工具链完全重写。区别包括：

- **构建工具**：VitePress 使用 Vite，VuePress 使用 Webpack。
- **框架版本**：VitePress 基于 Vue 3，VuePress 基于 Vue 2。
- **性能**：VitePress 启动速度、构建速度、运行时性能均显著优于 VuePress。
- **主题系统**：VitePress 通过 Composition API 继承主题，灵活度更高。

## 工作原理

VitePress 应用实际上是一个**单页应用 (SPA)**，但在构建时会对源 Markdown 文件进行预渲染，使其成为一种功能完备的静态站点。

整个项目流程如下：

1. 编写 Markdown 内容。
2. VitePress 解析 Markdown，将其转换为 Vue 组件。
3. 构建时预渲染为静态 HTML。
4. 部署到任何静态服务器。
5. 浏览器加载 HTML 后，Vue 接管并启用 SPA 导航。

## 下一步

了解 VitePress 的运作方式后，建议先阅读 [快速开始](./getting-started) 章节开始你的第一个站点。
