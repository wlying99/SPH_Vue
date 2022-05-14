<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- 再Home、Search显示的，在登录，注册隐藏 -->
    <!-- 最原始方法 -->
    <!-- <Footer v-show="$route.path=='/home' ||$route.path=='/search'"></Footer> -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>
<script>

import Header from "./components/Header"
import Footer from "./components/Footer"
  export default{
    name:'App',
    components:{Header,Footer},
    mounted(){
      //根组件中 mounted只执行一次
       this.$store.dispatch('categoryList');
    }
  }
</script>

<style>
</style>
