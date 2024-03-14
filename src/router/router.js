import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '@/components/LoginForm.vue';
import RegisterForm from '@/components/RegisterForm.vue';
import HomeForm from '@/components/HomeForm.vue';
import WorldForm from '@/components/WorldForm.vue';
import SelectYourProfile from '@/components/SelectYourProfile';
import NationalTeam from '@/components/NationalTeam';

const routes = [
    { path: '/', redirect: '/login' },  // Redirection vers /menu par défaut
    { path: '/login', component: LoginForm },
    { path: '/register', component: RegisterForm },
    { path: '/home', component: HomeForm },
    { path: '/world-cup', component: WorldForm },
    { path: '/selectprofile', component: SelectYourProfile },
    { path: '/nationalteams', component: NationalTeam },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
