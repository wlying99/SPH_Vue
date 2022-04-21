import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../view/Home"
import Login from "@/view/Login"
import Register from "@/view/Register"
//路由懒加载方式
const Search = () =>
    import ("@/view/Search")

Vue.use(VueRouter)

//重写push|replace
const originalReplace = VueRouter.prototype.replace
const originalPush = VueRouter.prototype.push

VueRouter.prototype.replace = function replace(location, resolve, reject) {
    if (resolve && reject) {
        originalReplace.call(this, location, resolve, reject);
    } else {
        originalReplace.call(this, location, () => {}, () => {});
    }
}

VueRouter.prototype.push = function push(location, resolve, reject) {
    if (resolve && reject) {
        originalPush.call(this, location, resolve, reject);
    } else {
        originalPush.call(this, location, () => {}, () => {});
    }
}

const routes = [{
        path: "/",
        redirect: '/home'
    }, {
        path: '/home',
        component: Home,
        meta: { show: true }
    },
    {
        path: "/login",
        component: Login,
        meta: { show: false }
    },
    {
        path: "/register",
        component: Register,
        meta: { show: false }
    },
    {
        path: "/search",
        component: Search,
        meta: { show: true }
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router