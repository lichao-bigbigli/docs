# 在 Markdown 中使用 Vue

VitePress 的强大之处在于：你可以在 Markdown 文件中直接使用 Vue 组件。这是 VitePress 与普通静态站点生成器最大的不同之一。

## 自动注册组件

放在 `.vitepress/components/` 目录下的组件会被自动注册为全局组件，可以直接在 Markdown 中使用而无需引入。

例如，创建 `.vitepress/components/Counter.vue`：

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">点击了 {{ count }} 次</button>
</template>
```

然后在任意 Markdown 文件中直接使用：

```md
# 我的页面

试试看这个计数器：

<Counter />
```

## 使用 script setup

在 Markdown 中还可以使用 `<script setup>` 块来编写 Vue 3 的组合式 API：

```md
<script setup>
import { ref } from 'vue'

const message = ref('你好！')
</script>

# {{ message }}

<button @click="message = '世界！'">改变文字</button>
```

## 使用组件 Props

如果你的组件接收 props，可以这样传递：

```vue
<!-- MyComponent.vue -->
<script setup>
defineProps({
  title: String,
  count: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div>
    <h3>{{ title }}</h3>
    <p>计数：{{ count }}</p>
  </div>
</template>
```

使用方式：

```md
<MyComponent title="示例" :count="5" />
```

## 响应式数据

```md
<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const double = computed(() => count.value * 2)
</script>

当前计数：**{{ count }}**，双倍：**{{ double }}**

<button @click="count++">+1</button>
```

## 组件库

你可以使用任何 Vue 组件库，比如 Element Plus、Naive UI 等。先安装：

```bash
npm install element-plus
```

然后在 `.vitepress/theme/index.ts` 中注册：

```ts
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
  }
}
```

之后就可以在 Markdown 中直接使用 Element Plus 的组件：

```md
<el-button type="primary">主要按钮</el-button>
<el-input v-model="input" placeholder="请输入" />
```

## 动态组件

```md
<script setup>
import { ref, computed } from 'vue'
import HomeView from './components/HomeView.vue'
import AboutView from './components/AboutView.vue'

const view = ref('home')
const current = computed(() => view.value === 'home' ? HomeView : AboutView)
</script>

<button @click="view = 'home'">首页</button>
<button @click="view = 'about'">关于</button>

<component :is="current" />
```

## 注意事项

- 组件中不能使用根级别的 `<style>`，但可以使用 `<style scoped>`。
- 客户端响应式语法（`ref`、`reactive` 等）需要通过 `<script setup>` 引入。
- 服务端渲染时避免使用 `window`、`document` 等浏览器 API。

## 下一步

- 了解 [站点配置](./site-config)
- 探索 [主题配置](./theme-config)
