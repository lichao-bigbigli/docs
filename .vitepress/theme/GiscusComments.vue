<script setup>
import { onMounted, onBeforeUnmount, ref, watch, nextTick } from 'vue'
import { useRoute, useData } from 'vitepress'

const route = useRoute()
const { page } = useData()
const commentsEl = ref(null)
const isDocPage = ref(false)

function initGiscus() {
  if (!page.value?.frontmatter) return
  isDocPage.value = true

  if (commentsEl.value) {
    commentsEl.value.innerHTML = ''
  }

  nextTick(() => {
    const config = {
      repo: 'lichao-bigbigli/docs',
      repoId: 'R_kgDOS9dteQ',
      category: 'General',
      categoryId: 'DIC_kwDOS9dtec4C_ooA',
      mapping: 'pathname',
      strict: '0',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'top',
      theme: 'preferred_color_scheme',
      lang: 'zh-CN',
      loading: 'lazy',
    }

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.async = true
    script.crossOrigin = 'anonymous'
    script.setAttribute('data-repo', config.repo)
    script.setAttribute('data-repo-id', config.repoId)
    script.setAttribute('data-category', config.category)
    script.setAttribute('data-category-id', config.categoryId)
    script.setAttribute('data-mapping', config.mapping)
    script.setAttribute('data-strict', config.strict)
    script.setAttribute('data-reactions-enabled', config.reactionsEnabled)
    script.setAttribute('data-emit-metadata', config.emitMetadata)
    script.setAttribute('data-input-position', config.inputPosition)
    script.setAttribute('data-theme', config.theme)
    script.setAttribute('data-lang', config.lang)
    script.setAttribute('data-loading', config.loading)

    commentsEl.value?.appendChild(script)
  })
}

onMounted(() => {
  initGiscus()
})

let timer = null
watch(() => route.path, () => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    initGiscus()
  }, 300)
})

onBeforeUnmount(() => {
  clearTimeout(timer)
})
</script>

<template>
  <div v-if="isDocPage" class="giscus-wrapper">
    <div class="giscus-title">
      <span class="giscus-icon">💬</span>
      <span>留言交流</span>
    </div>
    <div ref="commentsEl" class="giscus-container"></div>
  </div>
</template>

<style scoped>
.giscus-wrapper {
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
}

.giscus-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--vp-c-text-1);
}

.giscus-icon {
  font-size: 20px;
}

.giscus-container {
  min-height: 100px;
}
</style>
