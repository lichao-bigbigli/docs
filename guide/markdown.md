# Markdown 基础

VitePress 内置了强大的 Markdown 扩展能力。本节介绍常用的 Markdown 语法。

## 标题

```md
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
```

## 段落与换行

段落之间用空行分隔。在一行的末尾添加两个或以上空格可以强制换行。

## 强调

```md
**加粗**
*斜体*
~~删除线~~
```

效果：**加粗**、*斜体*、~~删除线~~

## 列表

### 无序列表

```md
- 项目 1
- 项目 2
  - 子项目 2.1
  - 子项目 2.2
- 项目 3
```

### 有序列表

```md
1. 第一项
2. 第二项
3. 第三项
```

## 链接

### 内部链接

内部链接会自动转换为 SPA 导航：

```md
[首页](/)
[快速开始](/guide/getting-started)
[config 参考](/reference/config)
```

### 外部链接

```md
[VitePress 官网](https://vitepress.dev)
```

## 图片

```md
![替代文字](/logo.svg)
```

## 代码块

使用三个反引号包裹代码块，并指定语言：

````md
```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的站点'
})
```
````

支持的语言包括：`javascript`、`typescript`、`html`、`css`、`json`、`bash`、`markdown`、`vue` 等。

### 行高亮

在代码块中标记需要高亮的行：

````md
```ts{2,4-5}
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的站点',
  description: '描述'
})
```
````

效果：第 2、4、5 行会高亮显示。

## 表格

```md
| 列 1 | 列 2 | 列 3 |
| ---- | ---- | ---- |
| A    | B    | C    |
| D    | E    | F    |
```

## 引用

```md
> 这是一段引用文字。
> 可以跨多行。
```

## 分割线

```md
---
```

## 任务列表

```md
- [x] 已完成
- [ ] 未完成
```

## Emoji

```md
:tada: :100: :rocket:
```

效果：:tada: :100: :rocket:

## 转义

如果需要显示 Markdown 语法本身，可以使用反斜杠 `\` 转义：

```md
\*\*不被解析为加粗\*\*
```

## 下一步

- 了解 [Frontmatter](./frontmatter) 元数据
- 在 Markdown 中使用 [Vue 组件](./vue-components)
