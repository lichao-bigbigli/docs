# Hello World

一个简单的 "Hello World" 示例，帮助你入门 VitePress。

## 第 1 步：创建项目

```bash
mkdir hello-world
cd hello-world
npm init -y
npm install -D vitepress vue
```

## 第 2 步：创建内容

创建 `index.md`：

```md
# 你好，世界！

欢迎使用我的 VitePress 站点！

这是一个简单示例，演示如何开始使用 VitePress。
```

## 第 3 步：配置 VitePress

创建 `.vitepress/config.ts`：

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Hello World',
  description: '一个简单的 VitePress 示例'
})
```

## 第 4 步：添加脚本

更新 `package.json`：

```json
{
  "scripts": {
    "docs:dev": "vitepress dev",
    "docs:build": "vitepress build",
    "docs:preview": "vitepress preview"
  }
}
```

## 第 5 步：启动开发服务器

```bash
npm run docs:dev
```

你的站点将在 `http://localhost:5173` 可访问。

## 运行结果

你应该能看到一个简单的页面：

- 顶部是站点标题
- 中间是 "Hello World" 内容
- 侧边栏（如果配置了）
- 页脚（如果配置了）

## 下一步

1. 添加更多页面
2. 配置导航
3. 自定义主题
4. 添加 Vue 组件
