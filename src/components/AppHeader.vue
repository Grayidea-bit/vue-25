<script setup lang="ts">
    import { ref, onMounted, onUnmounted, onUpdated, computed } from 'vue';
    import { useRouter, useRoute } from 'vue-router';

    const isScrolled = ref(false);
    const isAnimate = ref(false);
    const router = useRouter();
    const route = useRoute();

    const nowRoute = computed(() => route.path);

    const handleScroll = () => {
        isScrolled.value = window.scrollY > 0;
    };

    const moving = async (goal: string) => {
        if (nowRoute.value === goal) return;
        isAnimate.value = true;
    
        setTimeout(() => {
            router.push(goal);
            // isAnimate.value = false;
        }, 300);

        setTimeout(() => {
            isAnimate.value = false;
        }, 600);
    };

    onUpdated(() => {
        console.log('Component updated');
    });

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });


    const buttonClass = 'hover:text-white hover:scale-110 text-gray-300 py-1 px-3 cursor-pointer transition-all duration-300 hover:bg-gray-600 rounded';
</script>

<template>
    <div :class="[
        'sticky top-0 w-full h-25 bg-gray-800 text-white flex items-center justify-between  transition-all duration-300 px-75 z-1000',
        { 'opacity-90': isScrolled, 'opacity-100': !isScrolled }
    ]">
        <h1 class="text-2xl font-bold text-white cursor-pointer" @click="moving('/')">Gray's Work</h1>

        <div class="flex items-center space-x-4">
            <!-- 背景遮罩 -->
            <div v-if="isAnimate" 
                 :class="['fixed inset-0 top-25 z-50',{'animate-page-transition': isAnimate}]">
            </div>

            <button 
                :class="[[buttonClass],{'bg-gray-700': nowRoute === '/portfolio'}]"
                @click="moving('/portfolio')"
            >
                Portfolio
            </button>
            <button                 
                :class="[[buttonClass],{'bg-gray-700': nowRoute === '/diary'}]"
                @click="moving('/diary')"
            >
                Diary
            </button>
            <button                 
                :class="[[buttonClass],{'bg-gray-700': nowRoute === '/aboutme'}]" 
                @click="moving('/aboutme')"
            >
                About Me
            </button>
            <button                 
                :class="[[buttonClass],{'bg-gray-700': nowRoute === '/aboutthissite'}]"
                @click="moving('/aboutthissite')"
            >
                About This Site
            </button>
        </div>
    </div>

</template>