//咨询
<template>
    <div>
      <el-button @click="showModal" type="primary">添加图片</el-button>
      <el-table
        :data="tableData"
      >
      <el-table-column
        label="咨询图片"
      >
        <template slot-scope="scope">
            <!-- <span>{{scope.row.cover}}</span> -->
            <img width="80" :src="api + scope.row.img_url" />
        </template>
      </el-table-column>
      <el-table-column
        label="新闻标题"
        prop="jou_title"
      >
      </el-table-column>
      <el-table-column
        label="上传时间"
        prop="jou_uploadTime"
       >
       </el-table-column>
       <el-table-column
        label="新闻详情"
        prop="jou_detail"
       >
       </el-table-column>`
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
        <AddService @closeModal="closeModal"></AddService>
      </el-dialog>
    </div>
</template>

<script>
import AddService from './AddService'
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
      return this.$store.state.Service.ServiceList
    },
    total () {
      return this.$store.state.Service.total
    }
  },
  created () {
    this.getService()
  },
  components: {
    AddService
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
      this.getService()
    },
    changePageSize (size) {
      this.pageSize = size
      this.getService()
    },
    getService () {
      this.$store.dispatch('getServiceList', {
        current: this.current,
        pageSize: this.pageSize
      })
    }
  }
}
</script>
