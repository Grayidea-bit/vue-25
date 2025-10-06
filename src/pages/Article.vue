<script setup lang="ts">
  import Article from '@components/common/Article';
  import ContentLayout from '@/layouts/contentLayout.vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const id = route.params.id as string;

  const markdownContent = `
  # Hello World

  This is **bold** and this is *italic*.

  - Item 1
  - Item 2
  - Item 3
  `;
</script>

<template>
  <ContentLayout>
    <h1 class="text-5xl font-bold">Article {{ id }}</h1>
    <Article :content="markdownContent" />
  </ContentLayout>
</template>