import {createWebHistory, createRouter} from "vue-router";

import AppHome from "./pages/AppHome.vue"
import AppTopTen from "@/pages/AppTopTen.vue";
import AppMovieDetails from "@/pages/AppMovieDetails.vue";

const routers = [
    {path: '', component: AppHome},
    {path: '/top-ten', component: AppTopTen},
    {path: '/movie/:id', component: AppMovieDetails}
];

const router = createRouter({
    history: createWebHistory(),
    routes: routers
});

export default router;