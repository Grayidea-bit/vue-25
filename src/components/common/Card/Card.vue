<script setup lang="ts">

    const props = withDefaults(defineProps<{
        title: string;
        description: string;
        miniature: string;
        picLoc?: 'right' | 'left';
    }>(), {
        picLoc: 'left'
    });

    const picLoc = props.picLoc === 'right' ? 'flex-row-reverse' : 'flex-row';


</script>


<template>
    <div :class="['w-full h-60 flex border-2 border-gray-300 rounded-lg overflow-hidden relative hover:scale-110 transition-transform duration-300 ease-in-out', picLoc]">
        <div class="w-3/5 h-full bg-gray-800 flex flex-col items-center overflow-hidden">
            <img :src="props.miniature" alt="Miniature" class="h-full inset-0 object-cover" />
        </div>
        <div 
            class="w-full h-full flex flex-col items-left p-4 gap-4"
        >
            <h1 class="text-6xl font-bold">{{ props.title }}</h1>
            <p class="text-lg">{{ props.description }}</p>
        </div>
    </div>
</template>
