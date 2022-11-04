import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "", redirect: { name: "home" } },
    { path: "/home", name: "home", component: () => import('../views/Home.vue') },
    { path: "/todoCreate", name: "todoCreate", component: () => import('../views/ToDoCreate.vue') },
    { path: "/todoUpdate/:id", name: "todoUpdate", component: () => import('../views/ToDoUpdate.vue') },
    { path: "/todolist", name: "todolist", component: () => import('../views/ToDoList.vue') }
  ]
})

export default router
