<script setup lang="ts">
const props = defineProps<{
    title: string;
    description: string;
    // miniature: string;
}>();

</script>


<template>
    <div class="w-full h-40 flex flex-row border-2 border-gray-300 rounded-lg overflow-hidden relative">
        <!-- <img :src="props.miniature" alt="Miniature" class="absolute inset-0 w-full h-full object-cover" /> -->
        <div 
            class="w-full h-full bg-cover bg-center flex flex-col justify-center items-center"
        >
            <h1 class="text-6xl font-bold">{{ props.title }}</h1>
            <p class="text-lg">{{ props.description }}</p>
        </div>
    </div>
</template>
