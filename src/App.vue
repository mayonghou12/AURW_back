<template>
  <div class="index">
    <!-- <Top></Top> -->
      <Left></Left>
    <!-- 第五步 通过路由标签将页面挂载上路 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Top from './components/Top'
import Left from './components/Left'
// 导出的是vue实例所需要的对象
export default {
  components: {
    // Top,
    Left
  }
}
</script>

<style>
 .index {
   z-index: 999;
   position: relative;
 }
</style>
