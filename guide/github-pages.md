# GitHub Pages 部署

GitHub Pages 是部署 VitePress 站点的免费且最简单的方式之一。

## 1. 创建 GitHub 仓库

在 GitHub 上创建一个新仓库，例如 `my-docs`。

## 2. 配置 base

在 `.vitepress/config.ts` 中设置 `base`，与仓库名一致：

```typescript
export default defineConfig({
  base: '/my-docs/',
  // ...其他配置
})
```

如果你使用的是**用户/组织页面**（`username.github.io`），则 `base` 应为 `/`。

## 3. 创建 GitHub Actions 工作流

在项目根目录创建 `.github/workflows/deploy.yml`：

```yaml
name: 部署文档

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: 设置 Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: 安装依赖
        run: npm ci

      - name: 构建
        run: npm run docs:build

      - name: 上传构建产物
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: 部署到 GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 4. 配置 Pages

1. 进入 GitHub 仓库的 **Settings** > **Pages**
2. **Source** 选择 **GitHub Actions**
3. 保存

## 5. 推送代码

```bash
git init
git add .
git commit -m "初始化文档站点"
git branch -M main
git remote add origin https://github.com/username/my-docs.git
git push -u origin main
```

## 6. 查看部署

进入仓库的 **Actions** 选项卡，可以看到构建与部署的进度。几分钟后，访问：

```
https://username.github.io/my-docs/
```

即可看到你的站点。

## 自定义域名

### 在仓库中配置

1. 在仓库的 **Settings** > **Pages** > **Custom domain** 中输入你的域名。
2. 在 `docs/public/` 目录下创建 `CNAME` 文件，写入域名：

   ```
   docs.example.com
   ```

### DNS 配置

在你的域名 DNS 服务商处添加 CNAME 记录：

| 主机记录 | 记录类型 | 记录值                          |
| -------- | -------- | ------------------------------- |
| docs     | CNAME    | username.github.io.             |

或对于顶级域名：

| 主机记录 | 记录类型 | 记录值                |
| -------- | -------- | --------------------- |
| @        | A        | 185.199.108.153       |
| @        | A        | 185.199.109.153       |
| @        | A        | 185.199.110.153       |
| @        | A        | 185.199.111.153       |

## HTTPS

GitHub Pages 默认会为自定义域名自动签发 Let's Encrypt 证书。在 **Settings** > **Pages** 中勾选 **Enforce HTTPS** 即可。

## 常见问题

### 404 错误

通常是 `base` 配置不正确。请检查：

```typescript
base: '/my-docs/'  // 与仓库名一致
```

### 资源加载失败

可能是 `base` 与部署路径不匹配。开发时使用 `/`，部署到子路径时使用 `/repo-name/`。

### Actions 失败

检查 **Actions** 选项卡中的报错信息。常见原因：

- Node.js 版本过低
- 依赖安装失败
- 构建脚本错误

## 下一步

- 了解 [Netlify / Vercel 部署](./netlify-vercel)
- 返回 [静态部署总览](./deployment)
