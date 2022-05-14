import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
//三级联动的组件 注册为全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'

Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination)

import "@/mock/mockServer"

import "swiper/css/swiper.css"

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    }
}).$mount('#app')