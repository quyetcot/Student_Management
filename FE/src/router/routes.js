import { createRouter, createWebHistory } from "vue-router";
import { routeStudent } from "./student/routeStudent";

const routes =[
    ...routeStudent
]

const router = createRouter({
    routes,
    history:createWebHistory()
})
export default router