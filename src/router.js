import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        // {
        //     path: '*',
        //     name: 'page-not-found',
        //     component: () => import('./views/PageNotFound.vue')
        // },
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/details/:imdbID?',
            name: 'details',
            component: () => import('./views/Details.vue')
        },
    ]
})
