<script setup lang="ts">
  import AppHeader from '@/components/AppHeader.vue'
  import AppFooter from '@/components/AppFooter.vue'
  import { usePageTransition } from '@utils/usePageNavigator'

  const { isAnimate } = usePageTransition();
</script>

<template>
  <AppHeader />
    <div v-if="isAnimate" 
          :class="['fixed inset-0 top-25 z-50',{'animate-page-transition': isAnimate}]">
    </div>
    <div class="w-full min-h-screen flex flex-col justify-between scroll-smooth">
      <RouterView />
  </div>
  <AppFooter />
</template>