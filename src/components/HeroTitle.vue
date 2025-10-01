<!--
    title: 標題
    backgroundImage: 背景圖片路徑
    textColor: 文字顏色 (Tailwind CSS 類別)
    bgTransparencyLevel: 背景透明度 (0-100)
    height: 高度 (Tailwind CSS 類別)
-->

<script setup lang="ts">
    import { computed } from 'vue';

    const props = withDefaults(defineProps<{
        title?: string,
        backgroundImage?: string,
        textColor?: string,
        bgTransparencyLevel?: number,
        height?: string,
    }>(), {
        title: 'Hero Title',
        backgroundImage: '/herobg.jpg',
        textColor: 'text-white',
        bgTransparencyLevel: 80,
        height: 'h-100',
    });

    const backgroundClass = computed(() => `bg-black/${props.bgTransparencyLevel}`);
</script>




<template>
    <div :class="['h-100 w-full overflow-hidden flex items-center justify-center', props.height]">
    <div :class="['absolute h-100 w-full', backgroundClass]"></div>  
    <span :class="['absolute z-10 text-6xl font-bold', props.textColor]">{{ props.title }}</span>
    <img 
        class="w-full object-cover"
        :src="props.backgroundImage" 
        alt="Hero Image" />
    </div>
</template>