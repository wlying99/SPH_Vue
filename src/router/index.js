import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../view/Home"
import Login from "@/view/Login"
import Register from "@/view/Register"
import Search from "@/view/Search"

Vue.use(VueRouter)

const routes = [{
        path: "/",
        redirect: '/home'
    }, {
        path: '/home',
        component: Home,
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/register",
        component: Register
    },
    {
        path: "/search",
        component: Search,
        name: "search"
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router