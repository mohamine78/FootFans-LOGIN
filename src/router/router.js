import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '@/components/LoginForm.vue';

const routes = [
    { path: '/', component: LoginForm }, // Utiliser LoginPage comme composant pour le chemin '/'
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
