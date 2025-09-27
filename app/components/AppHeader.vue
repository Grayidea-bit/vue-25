<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Portfolio',
    to: '/portfolio',
    active: route.path.startsWith('/portfolio')
  },
  {
    label: 'Diary',
    to: '/diary',
    active: route.path.startsWith('/diary')
  },
  {
    label: 'About Me',
    to: '/aboutMe',
    active: route.path.startsWith('/aboutMe')
  },
  {
    label: 'About This Site',
    to: '/aboutThisSite',
    active: route.path.startsWith('/aboutThisSite')
  },
])
</script>

<template>
  <UHeader>
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>
    <template #right>
      <UNavigationMenu :items="items" />
      <UColorModeButton />
    </template>
  </UHeader>
</template>
