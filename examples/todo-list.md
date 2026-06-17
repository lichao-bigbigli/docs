# 待办清单示例

使用 Vue 3 创建一个完整的待办事项应用。

## 创建组件

新建 `.vitepress/components/TodoList.vue`：

```vue
<script setup>
import { ref } from 'vue'

const todos = ref([
  { id: 1, text: '学习 VitePress', done: false },
  { id: 2, text: '构建一个站点', done: false },
  { id: 3, text: '部署到 GitHub Pages', done: true }
])

const newTodo = ref('')

function addTodo() {
  if (newTodo.value.trim()) {
    todos.value.push({
      id: Date.now(),
      text: newTodo.value.trim(),
      done: false
    })
    newTodo.value = ''
  }
}

function toggleTodo(id) {
  const todo = todos.value.find(t => t.id === id)
  if (todo) {
    todo.done = !todo.done
  }
}

function deleteTodo(id) {
  todos.value = todos.value.filter(t => t.id !== id)
}

function clearCompleted() {
  todos.value = todos.value.filter(t => !t.done)
}
</script>

<template>
  <div class="todo-list">
    <h2>待办清单</h2>
    
    <div class="input-container">
      <input 
        v-model="newTodo" 
        @keyup.enter="addTodo"
        placeholder="添加新的待办..."
      />
      <button @click="addTodo">添加</button>
    </div>
    
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input 
          type="checkbox" 
          :checked="todo.done"
          @change="toggleTodo(todo.id)"
        />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="deleteTodo(todo.id)">×</button>
      </li>
    </ul>
    
    <div class="footer">
      <span>剩余 {{ todos.filter(t => !t.done).length }} 项</span>
      <button @click="clearCompleted">清除已完成</button>
    </div>
  </div>
</template>

<style scoped>
.todo-list {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 8px;
}

.input-container {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

input[type="text"] {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

button {
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 4px;
  background: #646cff;
  color: white;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover {
  background: #535bf2;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: white;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

li span {
  flex: 1;
}

li span.done {
  text-decoration: line-through;
  color: #888;
}

li button {
  background: #ff6b6b;
  width: 2rem;
  height: 2rem;
  padding: 0;
  font-size: 1.25rem;
  line-height: 1;
}

li button:hover {
  background: #ee5a5a;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #ddd;
  font-size: 0.875rem;
  color: #666;
}

.footer button {
  background: #888;
  font-size: 0.875rem;
}

.footer button:hover {
  background: #666;
}
</style>
```

## 使用组件

在 Markdown 文件中：

```md
# 待办清单示例

<TodoList />

## 功能

- 添加新待办
- 切换待办状态
- 删除单个待办
- 清除已完成的待办
```

## 运行结果

你会看到一个功能完整的待办清单：

- 输入并按回车或点击 "添加" 来新增待办
- 勾选复选框切换待办状态
- 点击 "×" 按钮删除某个待办
- 点击 "清除已完成" 一次性清除所有已完成的待办
- 底部显示未完成项的数量

## 核心概念

1. **响应式数组**：使用 `ref` 包装数组
2. **v-for**：列表渲染
3. **v-model**：双向数据绑定
4. **事件处理**：键盘与鼠标事件
5. **条件类名**：动态 class 绑定

## 相关文档

- [在 Markdown 中使用 Vue](../guide/vue-components) - 了解 Vue 组件
- [Markdown 基础](../guide/markdown) - 编写 Markdown 内容
