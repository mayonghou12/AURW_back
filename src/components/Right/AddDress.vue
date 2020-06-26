//婚纱
<template>
    <div>
      <el-form
        :model="formdata"
        :rules="rules"
        ref="formadd"
      >
        <el-form-item
          label="请输入图片标题"
          prop="title"
          :inline-message="true"
        >
          <el-input v-model="formdata.title"></el-input>
        </el-form-item>

        <el-form-item
          label="请选择要上传图片"
          prop="imageUrl"
        >
          <el-upload
            class="avatar-uploader"
            action="/api/upload"
            list-type="picture-card"
            :on-change="changeUpload"
            :auto-upload="false"
            :on-success="imgUploadSuccess"
            :on-remove="removeUpload"
            ref="upload"
            multiple
          >
            <!-- <img width="100%" height="100%" v-if="formdata.imageUrl" :src="formdata.imageUrl" class="avatar"> -->
            <i class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>

        <el-form-item
          label="状态"
          prop="status"
        >
          <el-select :popper-append-to-body="false" v-model="formdata.status" placeholder="请选择">
            <el-option
            label="上线"
            :value="1">
            </el-option>
            <el-option
            label="下线"
            :value="0">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item
          label="时间"
          prop="createTime"
        >
          <el-date-picker
            v-model="formdata.createTime"
            type="datetime"
            placeholder="选择日期时间"
          >
          </el-date-picker>
        </el-form-item>

      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button>取 消</el-button>
        <el-button :loading="loading" @click="submitForm" type="primary">确 定</el-button>
      </span>
    </div>
</template>

<script>
import { setDress } from 'public/axiosRequest'
export default {
  data () {
    const sheckImg = (rule, value, callback) => {
      if (this.imgList.length > 0) {
        callback()
      } else {
        callback(new Error('请上传图片'))
      }
    }
    return {
      formdata: {
        status: '',
        createTime: '',
        imageUrl: '',
        file: {}
      },
      imgList: [],
      imgUrl: [],
      imgId: [],
      loading: false,
      rules: {
        title: [{
          required: true,
          message: '请输入图片标题！',
          trigger: 'blur'
        }, {
          min: 3,
          max: 20,
          message: '请输入图片标题 5导到20个字符之间',
          trigger: 'blur'
        }],
        status: [{
          required: true,
          message: '请选择状态',
          trigger: 'blur'
        }],
        createTime: [{
          required: true,
          message: '请选择日期',
          trigger: 'blur'
        }],
        imageUrl: [
          {
            validator: sheckImg, trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    changeUpload (file, fileList) {
      this.imgList = fileList
      // console.log(fileList)
      // console.log(file, fileList)
      // var url = window.URL.createObjectURL(file.raw)
      // this.formdata.imageUrl = url
      // this.formdata.file = file
    },
    removeUpload (file, fileList) {
      this.imgList = fileList
    },
    // 图片上传成功的回调函数
    imgUploadSuccess (response, file, filelist) {
      if (response.status === 200) {
        this.imgUrl.push(response.data.img || '')
        this.imgId.push(response.data.id || '')
        // 表示图片上传完成  上传旅拍的其他信息以及图片信息
        if (this.imgUrl.length >= this.imgList.length) {
          // 图片上传成功 获取到图片的id
          // 上传banner的信息
          var data = {
            title: this.formdata.title,
            status: this.formdata.status,
            createTime: this.formdata.createTime,
            imgId: this.imgId.join(','),
            imgUrl: this.imgUrl.join(',')
          }
          // 调用封装的axios方法
          setDress(data, () => {
            this.loading = false
            this.$emit('closeModal')
            // 刷新列表数据
            this.$store.dispatch('getDressList')
          }, () => {
            this.loading = false
          })
        }
      }
    },
    submitForm () {
      this.$refs.formadd.validate((valid) => {
        // console.log(valid)
        if (valid) {
          this.loading = false
          this.$refs.upload.submit()
        }
      })
    }
  }
}
</script>
