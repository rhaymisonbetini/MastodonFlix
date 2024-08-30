import {createMemoryHistory, createRouter} from "vue-router";

import AppHome from "./pages/AppHome.vue"
import AppTopTen from "@/pages/AppTopTen.vue";

const routers = [
    {path: '', component: AppHome},
    {path: '/top-ten', component: AppTopTen}
];

const router = createRouter({
    history: createMemoryHistory(),
    routes: routers
});

export default router;