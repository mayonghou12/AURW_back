<template>
    <div class="content">
      <Right></Right>
    </div>
</template>

<script>
import Right from '../Right'
// 导出的是vue实例所需要的对象
export default {
  components: {
    Right
  }
}
</script>

<style>
  .content{
    position: fixed;
    top: 0px;
    bottom: 0;
    left: 0;
    right: 0;
    background: black;
  }
</style>
