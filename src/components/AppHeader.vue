<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from 'vue';
    import { useRouter } from 'vue-router';

    const isScrolled = ref(false);
    const router = useRouter();

    const handleScroll = () => {
        isScrolled.value = window.scrollY > 0;
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });
</script>

<template>
    <div :class="[
        'sticky top-0 w-full h-25 bg-gray-800 text-white flex items-center justify-between px-4 transition-all duration-300',
        { 'opacity-90': isScrolled, 'opacity-100': !isScrolled }
    ]">
        <h1 class="text-2xl font-bold text-white cursor-pointer" @click="router.push('/')">Gray's Work</h1>
        <div class="flex items-center space-x-4">
            <button class="hover:text-white text-gray-300 py-1 px-3 cursor-pointer" @click="(router.push('/portfolio'))">Portfolio</button>
            <button class="hover:text-white text-gray-300 py-1 px-3 cursor-pointer" @click="(router.push('/diary'))">Diary</button>
            <button class="hover:text-white text-gray-300 py-1 px-3 cursor-pointer" @click="(router.push('/aboutme'))">About Me</button>
            <button class="hover:text-white text-gray-300 py-1 px-3 cursor-pointer" @click="(router.push('/aboutthissite'))">About This Site</button>
        </div>
    </div>
</template>