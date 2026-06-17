# 静态部署

VitePress 生成的站点是**纯静态文件**，可以部署到任何支持静态托管的服务上。

## 构建站点

```bash
npm run docs:build
```

构建产物位于 `docs/.vitepress/dist/` 下：

```
dist
├── assets
├── index.html
├── guide
│   └── *.html
├── reference
│   └── *.html
└── sitemap.xml
```

## 部署到任意静态服务器

将 `dist/` 目录的内容上传到服务器即可。例如使用 `scp`：

```bash
scp -r dist/* user@server:/var/www/html/
```

或者使用 `rsync`：

```bash
rsync -avz dist/ user@server:/var/www/html/
```

## Nginx 配置

```nginx
server {
  listen 80;
  server_name example.com;
  root /var/www/html;
  index index.html;

  location / {
    try_files $uri $uri/ $uri.html /index.html;
  }

  # 启用 cleanUrls 时
  # try_files $uri $uri/ /index.html;
}
```

## Apache 配置

在 `dist/.htaccess` 中添加：

```apache
RewriteEngine On
RewriteBase /

# 移除 .html 扩展名
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^\.]+)$ $1.html [NC,L]
```

## 部署到 CDN

### Cloudflare Pages

1. 登录 Cloudflare 控制台
2. 创建 Pages 项目，连接 Git 仓库
3. 构建命令：`npm run docs:build`
4. 输出目录：`docs/.vitepress/dist`

### Vercel

```bash
npm i -g vercel
vercel --prod
```

或者通过 Vercel 控制台导入 Git 仓库。

### Netlify

创建 `netlify.toml`：

```toml
[build]
  command = "npm run docs:build"
  publish = "docs/.vitepress/dist"
```

## 部署到对象存储

### 阿里云 OSS

```bash
ossutil cp -r dist/ oss://my-bucket/ --update
```

### 腾讯云 COS

```bash
coscli cp -r dist/ cos://my-bucket-12345/
```

### AWS S3

```bash
aws s3 sync dist/ s3://my-bucket --delete
```

## 自动化部署

可以使用 GitHub Actions 自动部署：

```yaml
# .github/workflows/deploy.yml
name: 部署文档

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 20
      - run: npm ci
      - run: npm run docs:build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs/.vitepress/dist
```

## 部署前检查

在部署之前，建议进行以下检查：

- [ ] 站点的 `base` 配置正确
- [ ] 所有内部链接都使用相对路径
- [ ] 所有图片资源都已放入 `public/` 或使用了相对路径
- [ ] 域名解析正确
- [ ] HTTPS 证书已配置（生产环境强烈推荐）

## 下一步

- 详细了解 [GitHub Pages 部署](./github-pages)
- 了解 [Netlify/Vercel 部署](./netlify-vercel)
