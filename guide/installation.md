# 安装

VitePress 可以单独使用，也可以安装到现有项目中。在这两种情况下，都可以通过包管理器进行安装。

## 前提条件

- **Node.js** 18 及以上版本
- 支持 ESM 的包管理器（如 `npm`、`yarn`、`pnpm`、`bun`）

可以通过以下命令检查 Node.js 版本：

```bash
node --version
```

## 在新项目中使用

在空目录中执行以下命令创建项目骨架：

```bash
npm init
```

根据提示填写项目信息，然后安装 VitePress：

```bash
npm install -D vitepress vue
```

> **提示**：VitePress 仅作为开发依赖安装，不会进入生产代码。

## 在已有项目中使用

如果要将 VitePress 集成到现有项目中，请直接安装：

```bash
npm install -D vitepress
```

然后在项目中创建 `docs/` 目录，作为文档站点的根目录。

## 使用包管理器

### npm

```bash
npm install -D vitepress vue
```

### yarn

```bash
yarn add -D vitepress vue
```

### pnpm

```bash
pnpm add -D vitepress vue
```

### bun

```bash
bun add -D vitepress vue
```

## 手动安装

如果你不想使用任何包管理器，也可以手动准备项目：

1. 创建一个新目录，进入该目录。
2. 创建 `package.json`：

   ```json
   {
     "name": "vitepress-site",
     "version": "1.0.0",
     "type": "module",
     "scripts": {
       "docs:dev": "vitepress dev",
       "docs:build": "vitepress build",
       "docs:preview": "vitepress preview"
     }
   }
   ```

3. 创建 `docs/index.md` 与 `docs/.vitepress/config.ts`。

## 全局安装

VitePress 也可以全局安装：

```bash
npm install -g vitepress
```

但**不推荐**全局安装，因为不同项目可能依赖不同版本。

## 验证安装

安装完成后，可以执行以下命令验证：

```bash
npx vitepress --version
```

## 下一步

- 阅读 [快速开始](./getting-started) 创建你的第一篇文档
- 了解如何编写 [Markdown](./markdown) 内容
