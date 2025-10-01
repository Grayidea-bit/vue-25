import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('@pages/Main.vue')
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: () => import('@pages/Portfolio.vue')
    },
    {
        path: '/diary',
        name: 'Diary',
        component: () => import('@pages/Diary.vue')
    },
    {
        path: '/aboutme',
        name: 'AboutMe',
        component: () => import('@pages/AboutMe.vue')
    },
    {
        path: '/aboutthissite',
        name: 'AboutThisSite',
        component: () => import('@pages/AboutThisSite.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;