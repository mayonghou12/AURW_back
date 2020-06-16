<template>
    <div>
      <ul>
        <!-- 路由传参{path: '/detail'} query 请求参数 -->
        <!-- <li :key="item" v-for="item in list"><router-link :to="{path: '/detail',query: {id: item}}">{{item}}</router-link></li> -->
        <!-- 通过匹配路由传参 -->
        <li :key="item" v-for="item in list"><router-link :to="'./detail/' + item">{{item}}</router-link></li>
      </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      list: [1, 2, 3, 4]
    }
  }
}
</script>
