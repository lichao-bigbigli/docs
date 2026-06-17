# 自定义主题示例

为你的 VitePress 站点创建自定义主题。

## 第 1 步：创建主题目录

```bash
mkdir -p .vitepress/theme
```

## 第 2 步：创建主题入口

新建 `.vitepress/theme/index.ts`：

```typescript
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  // 在这里自定义主题
}
```

## 第 3 步：自定义样式

新建 `.vitepress/theme/custom.css`：

```css
:root {
  --vp-c-brand: #646cff;
  --vp-c-brand-light: #747bff;
  --vp-c-brand-dark: #535bf2;
  
  --vp-c-text-primary: #1a1a1a;
  --vp-c-text-secondary: #595959;
  --vp-c-text-muted: #8c8c8c;
  
  --vp-bg-color: #ffffff;
  --vp-bg-color-secondary: #f5f5f5;
  
  --vp-sidebar-width: 300px;
  
  --vp-font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.dark {
  --vp-c-text-primary: #ffffff;
  --vp-c-text-secondary: #bfbfbf;
  --vp-c-text-muted: #808080;
  
  --vp-bg-color: #1a1a1a;
  --vp-bg-color-secondary: #262626;
}

.vp-doc h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.vp-doc h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

.vp-doc p {
  margin-bottom: 1rem;
  line-height: 1.75;
}
```

## 第 4 步：自定义组件

覆盖默认组件：

```typescript
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import MyNav from './components/MyNav.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-before': () => h(MyNav),
      'footer': () => h(MyFooter)
    })
  }
}
```

## 第 5 步：添加自定义组件

新建 `.vitepress/theme/components/MyNav.vue`：

```vue
<script setup>
</script>

<template>
  <div class="custom-nav">
    自定义导航栏
  </div>
</template>

<style scoped>
.custom-nav {
  padding: 0.5rem 1rem;
  background: var(--vp-c-brand);
  color: white;
  text-align: center;
}
</style>
```

## 第 6 步：测试你的主题

启动开发服务器：

```bash
npm run docs:dev
```

你的自定义样式应该已经应用到了站点上。

## 核心概念

1. **CSS 变量**：覆盖默认主题变量
2. **主题继承**：扩展默认主题
3. **组件覆盖**：替换特定组件
4. **布局插槽**：在指定位置插入内容

## 相关文档

- [主题配置](../guide/theme-config) - 配置主题
- [在 Markdown 中使用 Vue](../guide/vue-components) - 使用 Vue 组件
