<template>
    <div>
        <AddHotel @closeModal="closeModal"></AddHotel>
    </div>
</template>
<script>
import AddHotel from './AddHotel'
export default {
  data () {
    return {
      isShowDialog: false,
      pageSize: 5,
      current: 1
    }
  },
  computed: {
    tableData () {
      return this.$store.state.banner.bannerList
    },
    total () {
      return this.$store.state.banner.total
    }
  },
  created () {
    this.getBanner()
  },
  components: {
    AddHotel
  },
  methods: {
    showModal () {
      this.isShowDialog = true
    },
    closeModal () {
      this.isShowDialog = false
    },
    changePage (current) {
      this.current = current
      // 通过当前页码的改变 改变当前页的数据
      this.getBanner()
    },
    changePageSize (size) {
      this.pageSize = size
      this.getBanner()
    },
    getBanner () {
      this.$store.dispatch('getBannerList', {
        current: this.current,
        pageSize: this.pageSize
      })
    }
  }
}
</script>
