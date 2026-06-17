# 快速开始

只需三步即可创建你的第一个 VitePress 站点。

## 1. 创建项目

在当前目录下创建并初始化项目：

```bash
mkdir my-docs
cd my-docs
npm init -y
```

## 2. 安装 VitePress

将 VitePress 和 Vue 添加为开发依赖：

```bash
npm install -D vitepress vue
```

## 3. 创建第一篇文档

新建 `index.md` 文件作为你的首页：

```md
# 你好，世界！

这是我使用 **VitePress** 创建的第一个文档站点。
```

## 4. 配置 VitePress

创建配置文件 `.vitepress/config.ts`：

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的文档',
  description: '这是我的文档站点'
})
```

## 5. 添加脚本

在 `package.json` 中添加以下脚本：

```json
{
  "type": "module",
  "scripts": {
    "docs:dev": "vitepress dev",
    "docs:build": "vitepress build",
    "docs:preview": "vitepress preview"
  }
}
```

## 6. 启动开发服务器

运行以下命令启动开发服务器：

```bash
npm run docs:dev
```

VitePress 会在 `http://localhost:5173` 启动一个热更新的开发服务器。

## 7. 构建并预览

当你准备好发布时，运行构建命令生成静态文件：

```bash
npm run docs:build
```

构建产物位于 `docs/.vitepress/dist/`，可以通过 `npm run docs:preview` 在本地预览。

## 下一步

- 了解 [安装选项](./installation)
- 阅读 [Markdown 基础](./markdown)
- 探索 [站点配置](./site-config) 与 [主题配置](./theme-config)
- 学习如何 [部署](./deployment) 你的站点
