<template>
    <div>
      <el-button @click="showModal" type="primary">添加图片</el-button>
      <el-table
        :data="tableData"
      >
      <el-table-column
        label="酒店图片"
      >
        <template slot-scope="scope">
            <span>{{scope.row.cover}}</span>
            <img width="80" :src="api + scope.row.img_url" />
        </template>
      </el-table-column>
       <el-table-column
        label="酒店名称"
        prop="hot_name"
      >
      </el-table-column>
      <el-table-column
        label="酒店描述"
        prop="hot_detail"
       >
       </el-table-column>`
        <el-table-column
            label="状态"
        >
        <template slot-scope="scope">
            <el-button @click="filtersClick(scope.row)" type="text" >{{scope.row.status == 0 ? '下线' : '上线'}}</el-button>
            <!-- <a>{{scope.row.status == 1 ? '下线' : '上线'}}</a> -->
        </template>
        </el-table-column>
        <el-table-column
            label="操作"
        >
        <template slot-scope="scope">
         <el-button type="text" size="small">编辑</el-button>
         <el-button @click="delectClick(scope.row)" type="text" size="small">删除</el-button>
          <!-- <a>{{scope.row.status == 1 ? '下线' : '上线'}}</a> -->
        </template>
        </el-table-column>
      </el-table>
      <el-pagination
      background
      layout="prev,pager,next,sizes"
      :total="total"
      :page-size="pageSize"
      :page-sizes="[2,5,10]"
      @current-change="changePage"
      @size-change="changePageSize"
      >
      </el-pagination>
      <el-dialog
        :visible="isShowDialog"
        title="添加图片"
        :model="false"
        :before-close="closeModal"
        :modal-append-to-body="false"
      >
        <AddHotel @closeModal="closeModal"></AddHotel>
      </el-dialog>
    </div>
</template>

<script>
import AddHotel from './AddHotel'
import { FiltersTowTour, DeteleTowTour } from 'public/axiosRequest'
import { api } from 'public/api'
export default {
  data () {
    return {
      isShowDialog: false,
      pageSize: 5,
      current: 1,
      api
    }
  },
  computed: {
    tableData () {
      return this.$store.state.Hotel.HotelList
    },
    total () {
      return this.$store.state.Hotel.total
    }
  },
  created () {
    this.getHotel()
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
      this.getHotel()
    },
    changePageSize (size) {
      this.pageSize = size
      this.getHotel()
    },
    getHotel () {
      this.$store.dispatch('getHotelList', {
        current: this.current,
        pageSize: this.pageSize
      })
    },
    filtersClick (row) {
      FiltersTowTour((row), () => {
        this.$emit('closeModal')
        // 刷新列表数据
        this.$store.dispatch('getHotelList')
      })
      this.getHotel()
    },
    delectClick (row) {
      DeteleTowTour((row), () => {
        this.$emit('closeModal')
        // 刷新列表数据
        this.$store.dispatch('getHotelList')
      })
      this.getHotel()
    }
  }
}
</script>
