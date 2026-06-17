# 代码块

VitePress 在 Markdown 代码块的基础上，提供了大量增强功能，包括代码高亮、行高亮、错误标记、代码组等。

## 基础代码块

````md
```ts
export default defineConfig({
  title: '我的站点'
})
```
````

效果：

```ts
export default defineConfig({
  title: '我的站点'
})
```

## 支持的语言

VitePress 使用 [Shiki](https://shiki.style/) 进行代码高亮，支持 [数百种语言](https://shiki.style/languages)。常用语言包括：

- `js`、`javascript`
- `ts`、`typescript`
- `html`
- `css`、`scss`、`less`
- `json`
- `bash`、`sh`、`shell`
- `md`、`markdown`
- `vue`
- `python`
- `java`
- `go`
- `rust`
- `php`
- `sql`

## 主题

通过 `markdown.theme` 配置高亮主题：

```typescript
export default defineConfig({
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})
```

常用主题：

- `github-light` / `github-dark`
- `one-light` / `one-dark-pro`
- `vitesse-light` / `vitesse-dark`
- `material-theme-lighter` / `material-theme-darker`
- `nord`
- `tokyo-night`

完整主题列表：[Shiki Themes](https://shiki.style/themes)。

## 行高亮

通过 `{}` 标记需要高亮的行：

````md
```ts{1,3-5}
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的站点',
  description: '描述'
})
```
````

效果：

```ts{1,3-5}
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的站点',
  description: '描述'
})
```

支持的语法：

- `{1}` - 高亮第 1 行
- `{1,3}` - 高亮第 1 和第 3 行
- `{1-3}` - 高亮 1 到 3 行
- `{1,3-5,7}` - 多个范围

## 单词高亮

通过 `hl:` 标记额外高亮的行：

````md
```ts
import { defineConfig } from 'vitepress' // [!code highlight:2]
import other from 'other'

export default defineConfig({
  title: '我的站点',
  description: '描述' // [!code highlight:4]
})
```
````

效果：

```ts
import { defineConfig } from 'vitepress' // [!code highlight]
import other from 'other'

export default defineConfig({
  title: '我的站点',
  description: '描述' // [!code highlight]
})
```

## 聚焦

通过行尾注释聚焦某行：

````md
```ts{1}
import { defineConfig } from 'vitepress' // focus
```
````

效果：

```ts{1}
import { defineConfig } from 'vitepress' // focus
```

## 错误与警告

````md
```ts
function add(a, b) { // [!code error]
  return a - b
}
```
````

效果：

```ts
function add(a, b) { // [!code error]
  return a - b
}
```

支持的标记：

- `[!code warning]` - 警告
- `[!code error]` - 错误
- `[!code highlight]` - 高亮

## diff 差异

以 `+` 或 `-` 开头的行会以差异方式显示：

````md
```ts
export default defineConfig({
  title: '我的站点',
- description: '旧描述'
+ description: '新描述'
})
```
````

效果：

```ts
export default defineConfig({
  title: '我的站点',
- description: '旧描述'
+ description: '新描述'
})
```

## 代码组

通过 `code-group` 容器显示多语言代码块：

```md
::: code-group
```ts [TypeScript]
export default defineConfig({
  title: '我的站点'
})
```

```js [JavaScript]
module.exports = {
  title: '我的站点'
}
```
:::
```

效果：

::: code-group
```ts [TypeScript]
export default defineConfig({
  title: '我的站点'
})
```

```js [JavaScript]
module.exports = {
  title: '我的站点'
}
```
:::

## 代码块标题

通过 `title` 设置代码块标题：

````md
```ts{title:"配置文件"}
export default defineConfig({
  title: '我的站点'
})
```
````

## 行号

默认显示行号。关闭方式：

全局：

```typescript
markdown: {
  lineNumbers: false
}
```

单个代码块：

````md
```ts:no-line-numbers
const a = 1
```
````

## 着色

通过 `[!code highlight]` 标记需要高亮的行：

````md
```ts
function add(a, b) { // [!code highlight]
  return a + b
}
```
````

效果：

```ts
function add(a, b) { // [!code highlight]
  return a + b
}
```

## 完整示例

````md
# 完整代码块示例

## 基础

```ts
const a = 1
```

## 行高亮

```ts{1,3}
const a = 1
const b = 2
const c = 3
```

## 错误标记

```ts
const a = 1
const b = a.x // [!code error]
```

## diff

```ts
const a = 1
- const b = 2
+ const b = 3
```
````

## 下一步

- 了解 [自定义容器](./markdown-containers)
- 返回 [语法扩展总览](./markdown-syntax)
