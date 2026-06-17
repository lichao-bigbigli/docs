# Frontmatter

Frontmatter 是 Markdown 文件开头的一段 YAML 元数据，VitePress 会读取它来控制页面的行为与外观。

## 基本格式

```md
---
title: 页面标题
description: 页面描述
---
```

## 预定义字段

VitePress 支持以下 frontmatter 字段：

### title

```md
---
title: 我的页面
---
```

页面的标题，会显示在浏览器标签、侧边栏和文章顶部。

### titleTemplate

```md
---
title: 介绍
titleTemplate: 我的站点
---
```

自定义当前页面的标题模板。

### description

```md
---
description: 这是一段描述
---
```

页面的描述，会用于 SEO meta 标签。

### layout

```md
---
layout: home
---
```

指定当前页面的布局。默认提供 `doc`（文档）、`home`（首页）、`page`（通用页面）三种。

### hero <Badge type="info" text="home 布局" />

```md
---
layout: home
hero:
  name: 站点名
  text: 标语
  tagline: 副标题
---
```

配置首页 Hero 区域。

### features <Badge type="info" text="home 布局" />

```md
---
layout: home
features:
  - title: 特性 1
    details: 详情
---
```

配置首页的特性卡片。

### sidebar

```md
---
sidebar: false
---
```

关闭当前页面的侧边栏。

### aside

```md
---
aside: false
---
```

关闭当前页面的右侧目录。

### outline

```md
---
outline: [2, 3]
---

或

---
outline: false
---
```

控制目录显示的标题级别。

### lastUpdated

```md
---
lastUpdated: true
---
```

显示最后更新时间。

### editLink

```md
---
editLink: false
---
```

关闭编辑此页链接。

### prev / next

```md
---
prev: '/guide/getting-started'
next: '/guide/installation'
---
```

自定义上一页与下一页的链接。

## 自定义字段

你也可以定义自己的 frontmatter 字段，然后在主题或布局中通过 `$frontmatter` 访问：

```md
---
author: 张三
date: 2024-01-01
tags:
  - Vue
  - VitePress
---
```

在 Vue 组件中：

```vue
<template>
  <div>
    作者：{{ $frontmatter.author }}
  </div>
</template>
```

## 完整示例

```md
---
title: 完整示例
description: 展示所有 frontmatter 字段
layout: doc
sidebar: true
aside: true
outline: [2, 3]
lastUpdated: true
editLink: true
prev: '/guide/markdown'
next: '/guide/vue-components'
---

# 完整示例

这里是正文...
```

## 下一步

- 了解 [Markdown 基础](./markdown)
- 学习在 Markdown 中使用 [Vue 组件](./vue-components)
