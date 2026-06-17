# Netlify / Vercel 部署

Netlify 和 Vercel 是两个流行的现代前端托管平台，都支持 VitePress 站点的零配置部署。

## Netlify

### 方式一：通过 Git 部署（推荐）

1. 登录 [Netlify](https://app.netlify.com/)
2. 点击 **Add new site** > **Import an existing project**
3. 选择你的 Git 仓库
4. 配置构建设置：

   | 字段        | 值                       |
   | ----------- | ------------------------ |
   | Build command | `npm run docs:build`   |
   | Publish directory | `docs/.vitepress/dist` |

5. 点击 **Deploy site**

### 方式二：通过 `netlify.toml` 配置

在项目根目录创建 `netlify.toml`：

```toml
[build]
  command = "npm run docs:build"
  publish = "docs/.vitepress/dist"

[build.environment]
  NODE_VERSION = "20"

# SPA 路由回退
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

然后将代码推送到 Git，Netlify 会自动读取配置。

### 方式三：通过 Netlify CLI

```bash
npm install -g netlify-cli
netlify deploy --prod
```

按照提示登录 Netlify 并授权。

### 自定义域名

1. 在 Netlify 控制台进入 **Domain settings**
2. 点击 **Add custom domain**
3. 按照提示配置 DNS 记录

Netlify 会自动签发 HTTPS 证书。

### 环境变量

在 **Site settings** > **Environment variables** 中添加：

```
SITE_TITLE=我的站点
```

## Vercel

### 方式一：通过 Git 部署（推荐）

1. 登录 [Vercel](https://vercel.com/)
2. 点击 **Add New** > **Project**
3. 选择你的 Git 仓库
4. 配置构建设置：

   | 字段           | 值                        |
   | -------------- | ------------------------- |
   | Framework Preset | VitePress             |
   | Build Command  | `npm run docs:build`      |
   | Output Directory | `docs/.vitepress/dist`  |

5. 点击 **Deploy**

### 方式二：通过 `vercel.json` 配置

在项目根目录创建 `vercel.json`：

```json
{
  "builds": [
    {
      "src": "docs/.vitepress/config.ts",
      "use": "@vitepress/vercel"
    }
  ]
}
```

然后安装 `@vitepress/vercel`：

```bash
npm install -D @vitepress/vercel
```

这种方式支持 Vercel 的高级功能，例如 ISR（增量静态再生）。

### 方式三：通过 Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

### 自定义域名

1. 在 Vercel 控制台进入项目 **Settings** > **Domains**
2. 输入域名并按照提示配置

Vercel 会自动签发 HTTPS 证书。

### 环境变量

在 **Settings** > **Environment Variables** 中添加：

```
SITE_TITLE=我的站点
```

## 对比

| 特性         | Netlify                 | Vercel                  |
| ------------ | ----------------------- | ----------------------- |
| 免费额度     | 100GB 流量/月           | 100GB 流量/月           |
| 构建时间     | 300 分钟/月             | 6000 分钟/月            |
| 自定义域名   | 支持                    | 支持                    |
| HTTPS        | 自动                    | 自动                    |
| 表单处理     | 内置                    | 需使用 Vercel Functions |
| 边缘函数     | 支持                    | 支持（更优）            |
| 预览部署     | 每个 PR 自动生成        | 每个 PR 自动生成        |

## 常见问题

### 部署后页面 404

通常是构建产物路径配置错误。检查：

- **Netlify**：Publish directory 是否为 `docs/.vitepress/dist`
- **Vercel**：Output Directory 是否为 `docs/.vitepress/dist`

### 资源 404

检查 `base` 配置。子路径部署时记得设置 `base: '/repo-name/'`。

### 构建失败

查看部署日志，常见原因：

- 依赖未安装：检查 `package.json`
- Node.js 版本不匹配：在 `netlify.toml` 或 Vercel 控制台设置 `NODE_VERSION=20`

## 下一步

- 返回 [静态部署总览](./deployment)
- 了解 [GitHub Pages 部署](./github-pages)
