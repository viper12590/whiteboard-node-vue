import Vue from 'vue'
import VueRouter from 'vue-router'

import unit from "@/components/unit";
import index from '@/components/index.vue';
import forum from '@/components/forum.vue';
import live from '@/components/live.vue';


Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
    { path: "/", component: index},
    { path: "/units/:id/", component: unit},
    { path: "/units/:id/forum/", component: forum},
    { path: "/live/", component: live}
];

export const router = new VueRouter({
    mode: "history",
    routes: routes
});