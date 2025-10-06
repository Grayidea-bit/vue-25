<script setup lang="ts">
    import { ref, onMounted, onUnmounted, computed } from 'vue';
    import { useRouter, useRoute } from 'vue-router';
    import { usePageTransition } from '@utils/usePageNavigator'

    const isScrolled = ref(false);
    const { isAnimate, navigateTo } = usePageTransition();
    const router = useRouter();
    const route = useRoute();

    const nowRoute = computed(() => route.path);

    const handleScroll = () => {
        isScrolled.value = window.scrollY > 0;
    };

    // const moving = async (goal: string) => {
    //     if (nowRoute.value === goal) return;
    //     isAnimate.value = true;
    
    //     setTimeout(() => {
    //         router.push(goal);
    //         // isAnimate.value = false;
    //     }, 300);

    //     setTimeout(() => {
    //         isAnimate.value = false;
    //     }, 600);
    // };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });


    const buttonClass = 'hover:text-white hover:scale-110  py-1 px-3 cursor-pointer transition-all duration-300 hover:bg-pink rounded';
</script>

<template>
    <div :class="[
        'sticky top-0 w-full h-25 bg-dark text-beige flex items-center justify-between  transition-all duration-300 px-75 z-1000',
        { 'opacity-90': isScrolled, 'opacity-100': !isScrolled }
    ]">
        <h1 class="text-2xl font-bold  cursor-pointer" @click="navigateTo('/')">Gray's Work</h1>

        <div class="flex items-center space-x-4 ">
            <!-- 背景遮罩 -->
            <div v-if="isAnimate" 
                 :class="['fixed inset-0 top-25 z-50',{'animate-page-transition': isAnimate}]">
            </div>

            <button 
                :class="[[buttonClass],{'bg-pink': nowRoute === '/portfolio'}]"
                @click="navigateTo('/portfolio')"
            >
                Portfolio
            </button>
            <button                 
                :class="[[buttonClass],{'bg-pink': nowRoute === '/diary'}]"
                @click="navigateTo('/diary')"
            >
                Diary
            </button>
            <button                 
                :class="[[buttonClass],{'bg-pink': nowRoute === '/aboutme'}]" 
                @click="navigateTo('/aboutme')"
            >
                About Me
            </button>
            <button                 
                :class="[[buttonClass],{'bg-pink': nowRoute === '/aboutthissite'}]"
                @click="navigateTo('/aboutthissite')"
            >
                About This Site
            </button>
        </div>
    </div>

</template>