import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

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



const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    //返回一个y = 0， 代表滚动条在最上方
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 };
    }
})

export default router