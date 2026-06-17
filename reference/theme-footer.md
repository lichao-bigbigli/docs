# 页脚配置

通过 `themeConfig.footer` 配置页脚。

## 基本用法

```typescript
themeConfig: {
  footer: {
    message: '基于 MIT 协议发布',
    copyright: '版权所有 © 2024-present VitePress'
  }
}
```

## 字段说明

| 字段          | 类型     | 说明           |
| ------------- | -------- | -------------- |
| `message`     | `string` | 主要信息       |
| `copyright`   | `string` | 版权信息       |

## 简单用法

```typescript
footer: '基于 MIT 协议发布'
```

简写形式只设置 `message`。

## HTML 内容

`message` 和 `copyright` 支持 HTML 字符串：

```typescript
footer: {
  message: '基于 <a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a> 协议发布',
  copyright: `版权所有 © 2024-${new Date().getFullYear()} <a href="https://example.com" target="_blank">My Company</a>`
}
```

## 完整示例

```typescript
themeConfig: {
  footer: {
    message: '基于 MIT 协议发布',
    copyright: '版权所有 © 2024-present <a href="https://example.com" target="_blank">My Company</a>'
  }
}
```

## 自定义页脚

如果需要更复杂的页脚，可以通过自定义主题实现：

```typescript
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h('div', { class: 'custom-footer' }, '自定义页脚')
    })
  }
}
```

## 隐藏页脚

单个页面可以在 frontmatter 中设置 `pageClass`：

```md
---
pageClass: no-footer
---
```

然后在自定义 CSS 中隐藏：

```css
.no-footer .VPFooter {
  display: none;
}
```

## 完整配置示例

```typescript
export default defineConfig({
  themeConfig: {
    footer: {
      message: '基于 MIT 协议发布',
      copyright: '版权所有 © 2024-present <a href="https://example.com">My Company</a>'
    }
  }
})
```

## 下一步

- 了解 [社交链接](./theme-social)
- 返回 [参考总览](./config)
