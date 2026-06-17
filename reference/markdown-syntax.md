# Markdown 语法扩展

VitePress 在标准 Markdown 语法之外，提供了大量增强功能。本节汇总常用的语法扩展。

## 行高亮

````md
```ts{1,3-5}
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的站点',
  description: '描述'
})
```
````

- `{1}` - 高亮第 1 行
- `{1,3-5}` - 高亮第 1、3、4、5 行

## 单词高亮

````md
```ts{1,3-5}{hl:2,4}
```
````

使用 `hl:` 标记需要**额外**高亮的行。

## 聚焦

````md
```ts{1,3-5}// focus
```
````

在行尾添加 `// focus` 可以只聚焦该行，其他行淡化显示。

## diff 差异

````md
```ts
export default defineConfig({
  title: '我的站点',
- description: '旧描述'
+ description: '新描述'
})
```
````

以 `+` 开头的行会高亮为新增，`-` 为删除。

## 错误与警告标记

````md
```ts
function add(a: number, b: number) {
  if (typeof a !== 'number') // [!code warning]
    throw new TypeError('a 必须是数字')
  return a + b
}
```
````

支持的标记：

- `[!code warning]` - 警告
- `[!code error]` - 错误

## 代码块标题

````md
```ts{title:"我的配置文件"}
export default defineConfig({
  title: '我的站点'
})
```
````

通过 `title` 字段为代码块添加标题。

## 行号

默认情况下，VitePress 会在每个代码块左侧显示行号。可以在站点配置中关闭：

```typescript
markdown: {
  lineNumbers: false
}
```

或者在单个代码块中关闭：

````md
```ts:no-line-numbers
const a = 1
```
````

## 着色

````md
```ts
function add(a: number, b: number) { // [!code highlight]
  return a + b
}
```
````

## 自定义容器

```md
::: tip 提示
这是一段提示内容。
:::

::: warning 警告
这是一段警告内容。
:::

::: danger 危险
这是一段危险内容。
:::

::: info 信息
这是一段信息内容。
:::

::: details 点击查看详情
这是一段可折叠的内容。
:::
```

效果：

::: tip 提示
这是一段提示内容。
:::

::: warning 警告
这是一段警告内容。
:::

::: danger 危险
这是一段危险内容。
:::

::: info 信息
这是一段信息内容。
:::

::: details 点击查看详情
这是一段可折叠的内容。
:::

## 代码组

```md
::: code-group
```ts [config.ts]
export default defineConfig({
  title: '我的站点'
})
```

```js [config.js]
module.exports = {
  title: '我的站点'
}
```
:::
```

效果：

::: code-group
```ts [config.ts]
export default defineConfig({
  title: '我的站点'
})
```

```js [config.js]
module.exports = {
  title: '我的站点'
}
```
:::

## 徽章

```md
### 标题 <Badge type="info" text="新增" />
### 标题 <Badge type="tip" text="v1.0" />
### 标题 <Badge type="warning" text="实验性" />
### 标题 <Badge type="danger" text="已废弃" />
```

效果：

### 标题 <Badge type="info" text="新增" />
### 标题 <Badge type="tip" text="v1.0" />
### 标题 <Badge type="warning" text="实验性" />
### 标题 <Badge type="danger" text="已废弃" />

## 任务列表

```md
- [x] 已完成
- [ ] 未完成
```

效果：

- [x] 已完成
- [ ] 未完成

## 数学公式

VitePress 默认不开启数学公式支持。如需使用，请安装 [markdown-it-mathjax3](https://www.npmjs.com/package/markdown-it-mathjax3) 等插件。

## Mermaid 图表

通过自定义插件支持：

```typescript
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({
  // 你的配置
})
```

## 下一步

- 了解 [自定义容器](./markdown-containers) 的更多细节
- 了解 [代码块](./markdown-code) 的高级配置
