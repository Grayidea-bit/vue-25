import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const isAnimate = ref(false);

export function usePageTransition() {
    const router = useRouter();
    const route = useRoute();

    const navigateTo = async (path: string) => {
        if (route.path === path) return;
        
        isAnimate.value = true;
    
        setTimeout(() => {
            router.push(path);
        }, 300);

        setTimeout(() => {
            isAnimate.value = false;
        }, 600);
    };

    return {
        isAnimate,
        navigateTo
    };
}