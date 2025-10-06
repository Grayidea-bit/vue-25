<template>
  <article class="markdown-article" v-html="renderedMarkdown"></article>
</template>

<script setup lang='ts'>
  import { computed } from 'vue';
  import MarkdownIt from 'markdown-it';

  const props = withDefaults(defineProps<{
      content: string;
  }>(), {
      content: ''
  });

  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
  });

  const renderedMarkdown = computed(() => {
    return md.render(props.content);
  });
</script>

<style scoped>
.markdown-article {
  line-height: 1.6;
  color: #333;
}

.markdown-article :deep(h1),
.markdown-article :deep(h2),
.markdown-article :deep(h3),
.markdown-article :deep(h4),
.markdown-article :deep(h5),
.markdown-article :deep(h6) {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
}

.markdown-article :deep(h1) {
  font-size: 2em;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.3em;
}

.markdown-article :deep(h2) {
  font-size: 1.5em;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.3em;
}

.markdown-article :deep(p) {
  margin-bottom: 16px;
}

.markdown-article :deep(code) {
  background-color: #f6f8fa;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}

.markdown-article :deep(pre) {
  background-color: #f6f8fa;
  padding: 16px;
  border-radius: 6px;
  overflow-x: auto;
}

.markdown-article :deep(pre code) {
  background-color: transparent;
  padding: 0;
}

.markdown-article :deep(blockquote) {
  border-left: 4px solid #ddd;
  padding-left: 16px;
  color: #666;
  margin: 16px 0;
}

.markdown-article :deep(ul),
.markdown-article :deep(ol) {
  padding-left: 2em;
  margin-bottom: 16px;
}

.markdown-article :deep(a) {
  color: #0366d6;
  text-decoration: none;
}

.markdown-article :deep(a:hover) {
  text-decoration: underline;
}
</style>