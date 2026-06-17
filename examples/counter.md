# 计数器示例

使用 Vue 3 创建一个交互式计数器组件。

## 创建组件

新建 `.vitepress/components/Counter.vue`：

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

function decrement() {
  count.value--
}

function reset() {
  count.value = 0
}
</script>

<template>
  <div class="counter">
    <h2>计数器：{{ count }}</h2>
    <div class="controls">
      <button @click="decrement">-</button>
      <span>{{ count }}</span>
      <button @click="increment">+</button>
      <button @click="reset">重置</button>
    </div>
  </div>
</template>

<style scoped>
.counter {
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 8px;
  text-align: center;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

button {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background: #646cff;
  color: white;
  transition: background 0.2s;
}

button:hover {
  background: #535bf2;
}

span {
  font-size: 2rem;
  font-weight: bold;
  min-width: 4rem;
  display: inline-block;
}
</style>
```

## 使用组件

在 Markdown 文件中：

```md
# 计数器示例

<Counter />

## 工作原理

计数器使用 Vue 3 的 `ref` 创建响应式状态。点击按钮时调用方法对计数进行增加、减少或重置。
```

## 运行结果

你会看到一个交互式计数器：

- 点击 "+" 按钮时计数增加
- 点击 "-" 按钮时计数减少
- 点击 "重置" 按钮时计数归零

## 核心概念

1. **响应式状态**：使用 `ref` 创建响应式变量
2. **事件处理**：使用 `@click` 处理按钮点击
3. **模板语法**：使用 `{{ }}` 显示响应式值
4. **作用域样式**：使用 `<style scoped>` 为组件编写独立样式

## 相关文档

- [在 Markdown 中使用 Vue](../guide/vue-components) - 了解 Vue 组件
- [Markdown 基础](../guide/markdown) - 编写 Markdown 内容
