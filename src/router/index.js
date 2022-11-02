import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue';
//import ToDoList from '../views/ToDoList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "", redirect: { name: "home" } },
    { path: "/home", name: "home", component: () => import('../views/Home.vue') },
    //{ path: "/home", name: "home", component: Home },
    { path: "/todolist", name: "todolist", component: () => import('../views/ToDoList.vue') }
    //{ path: "/todolist", name: "todolist", component: ToDoList }
  ]
})

export default router
