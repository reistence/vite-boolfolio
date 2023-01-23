import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import About from "./pages/About.vue";
import ProjectsList from "./pages/ProjectsList.vue";
import SingleProject from "./pages/SingleProject.vue";
import NotFound from "./pages/NotFound.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage

        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectsList
        },
        {
            path: "/projects/:slug",
            name: "single-project",
            component: SingleProject
        },
        {
            path: "/:pathMatch(.*)*",
            name: "Not-Found",
            component: NotFound,
        }
    ]
})

export {router};