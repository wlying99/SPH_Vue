<template>
  <div>
    <!-- 三级联动全局组件，已经注册为全局组件 不需要再引入 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floorList" :key="floor.id" :list=floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
  import ListContainer from "./ListContainer"
  import Recommend from "./Recommend"
  import Rank from "./Rank"
  import Like from "./Like"
  import Floor from "./Floor"
  import Brand from './Brand'

  import{mapState} from 'vuex'

  export default {
    name:'',
    components:{ListContainer,Recommend,Rank,Like,Floor,Brand},
     mounted(){
      this.$store.dispatch('getFloorList')
    },
    computed:{
      ...mapState({
        floorList : (state) => {
          return state.home.floorList
        }
      })
    }
  }
</script>

<style>

</style>