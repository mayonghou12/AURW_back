//婚纱
<template>
    <div>
      <el-button @click="showModal" type="primary">添加图片</el-button>
      <el-table
        :data="tableData"
      >
      <el-table-column
        label="珠宝照"
      >
        <template slot-scope="scope">
            <!-- <span>{{scope.row.cover}}</span> -->
            <img width="80" :src="api + scope.row.img_url" />
        </template>
      </el-table-column>
      <el-table-column
        label="上传时间"
        prop="jew_createTime"
      >
      </el-table-column>
        <el-table-column
            label="状态"
        >
        <template slot-scope="scope">
            <el-link type="primary">{{scope.row.status == 0 ? '下线' : '上线'}}</el-link>
            <!-- <a>{{scope.row.status == 1 ? '下线' : '上线'}}</a> -->
        </template>
        </el-table-column>
        <el-table-column
            label="操作"
        >
        <template>
          <el-link type="primary">编辑</el-link>
          <el-link style="margin-left:5px" type="danger">删除</el-link>
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
        <AddJewellery @closeModal="closeModal"></AddJewellery>
      </el-dialog>
    </div>
</template>

<script>
import AddJewellery from './AddJewellery'
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
      return this.$store.state.jewel.JewelList
    },
    total () {
      return this.$store.state.jewel.total
    }
  },
  created () {
    this.getJewel()
  },
  components: {
    AddJewellery
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
      this.getJewel()
    },
    changePageSize (size) {
      this.pageSize = size
      this.getJewel()
    },
    getJewel () {
      this.$store.dispatch('getJewelList', {
        current: this.current,
        pageSize: this.pageSize
      })
    }
  }
}
</script>
