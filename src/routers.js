import {createWebHistory, createRouter} from "vue-router";

import AppHome from "./pages/AppHome.vue"
import AppTopTen from "@/pages/AppTopTen.vue";
import AppMovieDetails from "@/pages/AppMovieDetails.vue";
import AuthUserProfile from "@/pages/auth/AuthUserProfile.vue";
import AuthService from "@/services/AuthService";

const routers = [
    {path: '', component: AppHome, name: 'home'},
    {path: '/top-ten', component: AppTopTen, name: 'topten'},
    {path: '/movie/:id', component: AppMovieDetails, name: 'movie-details'},
    {path: '/:notFound(.*)', component: AppHome},
    {path: '/auth', component: AuthUserProfile, name: 'auth-user', meta: {needsAuth: true}},
];

const router = createRouter({
    history: createWebHistory(),
    routes: routers
});

router.beforeEach((to, from, next) => {
    window.scrollTo({ top: 0, behavior:'smooth' });
    if (to.name.includes('auth') && !AuthService.getAuthToken()) {
        next({name: 'home'});
    } else {
        next();
    }
});

export default router;