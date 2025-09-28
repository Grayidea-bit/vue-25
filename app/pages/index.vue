<script setup lang="ts">
import { ref } from 'vue';

const links = ref([
  {
    label: 'Portfolio',
    to: '/portfolio',
    // icon: 'i-lucide-square-play'
  },
  {
    label: 'Diary',
    to: '/diary',
    // icon: 'i-lucide-square-play'
  },
  {
    label: 'About Me',
    to: '/aboutMe',
    // icon: 'i-lucide-square-play'
  },
  {
    label: 'About This Site',
    to: '/aboutThisSite',
    // icon: 'i-lucide-square-play'
  }
]);
const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
];
</script>

<template>
  <div class="flex flex-col gap-12 scroll-auto">
    <div class="h-180 flex flex-col justify-center">
      <UPageHero
        title="Welcome to Gray's Personal Site"
        description="A showcase of my portfolio and diary entries."
        :links="links"
      />
    </div>
    <USeparator />
    <UCarousel
      v-slot="{ item }"
      loop
      arrows
      dots
      :autoplay="{ delay: 2000 }"
      :items="items"
      :ui="{ item: 'basis-1/3' }"
    >
      <img :src="item" width="500" height="500" class="rounded-lg">
    </UCarousel>
  </div>
</template>