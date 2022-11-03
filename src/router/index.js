import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import ToDoList from '../views/ToDoList.vue';
import ToDoCreate from '../views/ToDoCreate.vue';
import ToDoUpdate from '../views/ToDoUpdate.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "", redirect: { name: "home" } },
    { path: "/home", name: "home", component: Home },
    { path: "/todoCreate", name: "todoCreate", component: ToDoCreate },
    { path: "/todoUpdate/:id", name: "todoUpdate", component: ToDoUpdate },
    { path: "/todolist", name: "todolist", component: ToDoList }
  ]
})

export default router
