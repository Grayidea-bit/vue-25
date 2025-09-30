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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;