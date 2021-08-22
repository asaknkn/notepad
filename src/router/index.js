import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
Vue.use(VueRouter);
var routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () { return import(/* webpackChunkName: "about" */ '../views/About.vue'); }
    },
    {
        path: '/new',
        name: 'New',
        component: function () { return import('../views/New.vue'); }
    },
    {
        path: '/edit/:id',
        name: 'Edit',
        component: function () { return import('../views/Edit.vue'); }
    }
];
var router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
});
export default router;
//# sourceMappingURL=index.js.map