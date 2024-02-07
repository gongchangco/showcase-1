import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginView.vue'),
        meta: {
            title: 'Login'
        }
    },
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/inventory',
        name: 'inventory',
        component: () => import('../views/InventoryView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach((to, from, next) => {
    const authenticated = localStorage.getItem('username')

    if (to.path !== '/login' && !authenticated) {
        next('/login')
    } else if (to.path === '/login' && authenticated) {
        next('/');
    } else {
        next()
    }
})

export default router