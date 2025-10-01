<script setup lang="ts">
  import AppHeader from '@/components/AppHeader.vue'
  import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <div class="w-full min-h-screen flex flex-col justify-between scroll-smooth">
      <RouterView />
    <AppFooter />
  </div>
</template>