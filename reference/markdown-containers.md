# 自定义容器

VitePress 自带了几个常用的自定义容器，用于展示不同类型的内容。

## 内置容器

### 提示（tip）

```md
::: tip 提示
这是一段提示信息。
:::
```

### 警告（warning）

```md
::: warning 警告
这是一段警告信息。
:::
```

### 危险（danger）

```md
::: danger 危险
这是一段危险信息。
:::
```

### 信息（info）

```md
::: info 信息
这是一段信息提示。
:::
```

### 详情（details）

```md
::: details 点击查看详情
这是一段可折叠的内容。
:::
```

## 嵌套使用

容器可以相互嵌套：

```md
::: tip 提示
这是外层提示
  ::: warning 注意
  这是内层警告
  :::
:::
```

## 容器内代码块

```md
::: tip 提示
这是一个代码示例：

```ts
const a = 1
```
:::
```

## 容器内列表

```md
::: tip 提示
这是一个列表：

- 项目 1
- 项目 2
- 项目 3
:::
```

## 容器内嵌套代码组

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

## 自定义标题

```md
::: tip 💡 小贴士
这是一段提示信息。
:::
```

## 自定义容器

通过主题配置或自定义主题，可以添加自己的容器类型。

### 修改默认标签

```typescript
// .vitepress/config.ts
markdown: {
  container: {
    tipLabel: '提示',
    warningLabel: '警告',
    dangerLabel: '危险',
    infoLabel: '信息',
    detailsLabel: '详细信息'
  }
}
```

### 自定义容器

创建 `.vitepress/theme/index.ts`：

```typescript
import DefaultTheme from 'vitepress/theme'
import MyContainer from './MyContainer.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('MyContainer', MyContainer)
  }
}
```

或者通过 markdown-it 插件：

```typescript
import MarkdownIt from 'markdown-it'

const md = MarkdownIt()
md.use((md) => {
  md.use(require('markdown-it-container'), 'note', {
    validate(params, tr) {
      return params.trim().match(/^note\s+(.*)$/)
    },
    render(tokens, idx) {
      const [, title] = tokens[idx].info.trim().match(/^note\s+(.*)$/)
      if (tokens[idx].nesting === 1) {
        return `<div class="note-container"><p class="note-title">${title}</p>\n`
      }
      return '</div>\n'
    }
  })
})

export default {
  markdown: {
    config: md
  }
}
```

使用：

```md
::: note 备注
这是一段备注信息。
:::
```

## 完整示例

```md
# 容器示例

::: tip 提示
这是一个提示容器。
:::

::: warning 警告
这是一个警告容器。
:::

::: danger 危险
这是一个危险容器。
:::

::: info 信息
这是一个信息容器。
:::

::: details 点击查看
这是一段可折叠的详情内容。
:::
```

效果：

# 容器示例

::: tip 提示
这是一个提示容器。
:::

::: warning 警告
这是一个警告容器。
:::

::: danger 危险
这是一个危险容器。
:::

::: info 信息
这是一个信息容器。
:::

::: details 点击查看
这是一段可折叠的详情内容。
:::

## 下一步

- 了解 [代码块](./markdown-code) 的更多配置
- 返回 [语法扩展总览](./markdown-syntax)
