
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/vue', component: () => import('pages/VueEx.vue') },
      { path: '/shop', component: () => import('pages/ShoppingList.vue') },
      { path: '/music', component: () => import('pages/MyMusic.vue') },
      { path: '/todo', component: () => import('pages/Todo.vue') },

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
