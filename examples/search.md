# 搜索示例

为你的 VitePress 站点添加搜索功能。

## 本地搜索

启用本地搜索：

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  themeConfig: {
    search: {
      provider: 'local'
    }
  }
})
```

### 配置本地搜索

```typescript
search: {
  provider: 'local',
  options: {
    detailedView: true
  }
}
```

## Algolia 搜索

启用 Algolia 搜索：

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  themeConfig: {
    search: {
      provider: 'algolia',
      options: {
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_API_KEY',
        indexName: 'YOUR_INDEX_NAME'
      }
    }
  }
})
```

### 配置 Algolia 搜索

```typescript
search: {
  provider: 'algolia',
  options: {
    appId: 'YOUR_APP_ID',
    apiKey: 'YOUR_API_KEY',
    indexName: 'YOUR_INDEX_NAME',
    placeholder: '搜索文档',
    searchParameters: {
      hitsPerPage: 10
    }
  }
}
```

## Algolia 设置步骤

### 第 1 步：注册 Algolia

1. 访问 [Algolia](https://www.algolia.com/)
2. 注册账户
3. 创建新应用
4. 创建新索引

### 第 2 步：获取 API Key

1. 进入 API Keys 区域
2. 复制你的 Application ID
3. 复制你的 Search API Key
4. 复制你的 Admin API Key（用于建立索引）

### 第 3 步：索引内容

使用 Algolia Crawler 或 CLI 来索引你的文档。

#### 使用 Algolia Crawler

1. 进入 Crawler 区域
2. 创建新 Crawler
3. 配置 Crawler 抓取你的文档站点
4. 启动 Crawler

#### 使用 Algolia CLI

```bash
npm install -g @algolia/cli

algolia init
algolia push
```

### 第 4 步：配置 VitePress

将 Algolia 凭据更新到你的 VitePress 配置中。

## 自定义搜索

创建自定义搜索组件：

```vue
<script setup>
import { ref } from 'vue'

const query = ref('')
const results = ref([])

function search() {
  // 在此实现你的搜索逻辑
  results.value = []
}
</script>

<template>
  <div class="search">
    <input 
      v-model="query" 
      @keyup.enter="search"
      placeholder="搜索..."
    />
    <button @click="search">搜索</button>
    
    <div v-if="results.length > 0" class="results">
      <div v-for="result in results" :key="result.id">
        <a :href="result.url">{{ result.title }}</a>
        <p>{{ result.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search {
  position: relative;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.results {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 0.5rem;
  max-height: 300px;
  overflow-y: auto;
}

.results div {
  padding: 0.75rem;
  border-bottom: 1px solid #eee;
}

.results div:last-child {
  border-bottom: none;
}

.results a {
  display: block;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.results p {
  margin: 0;
  font-size: 0.875rem;
  color: #666;
}
</style>
```

## 核心概念

1. **本地搜索**：内置搜索，无需外部依赖
2. **Algolia 搜索**：功能强大的搜索服务
3. **自定义搜索**：自行实现搜索方案

## 相关文档

- [主题配置](../guide/theme-config) - 配置主题
- [在 Markdown 中使用 Vue](../guide/vue-components) - 使用 Vue 组件
