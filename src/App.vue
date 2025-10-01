<script setup lang="ts">
  import AppHeader from '@/components/AppHeader.vue'
  import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <div class="w-full min-h-screen flex flex-col justify-between scroll-smooth">
    <div class="h-fit w-3/5 flex flex-col mx-auto">
      <div class="w-full" />
      <RouterView />
    </div>
    <AppFooter />
  </div>
</template>