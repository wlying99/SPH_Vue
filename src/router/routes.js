import Home from "../view/Home"
import Login from "@/view/Login"
import Register from "@/view/Register"
import Search from "@/view/Search"
import Detail from "@/view/Detail"

export default [{
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
        // path: "/search",
        path: '/search/:keyword?',
        component: Search,
        meta: { show: true },
        name: "search"
    }, {
        path: "/detail/:skuId",
        component: Detail,
        meta: { show: true }
    }

]