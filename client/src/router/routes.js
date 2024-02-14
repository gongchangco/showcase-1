
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', name: 'home', component: () => import('pages/HomeView.vue') },
      { path: '/login', name: 'login', component: () => import('pages/LoginView.vue') },
      { path: '/inventory', name: 'inventory', component: () => import('pages/InventoryView.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
