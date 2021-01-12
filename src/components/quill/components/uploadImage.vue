<template>
  <ui-popup title="上传图片">
    <b-upload 
      @on-remove="uploadRemove"
      @on-success="uploadSuccess" 
      :limit="1"
      :action="action"
      />
      <el-button @click="reject()">取消</el-button>
      <el-button type="primary" @click="onsubmit">确定</el-button>
  </ui-popup>
</template>

<script>
export default {
  data() {
    return {
      action: '',
      logoPath: ''
    }
  },
  created() {
    this.action = process.env.NODE_ENV === 'production' ?  'http://www.97blognb.cn/api/upload1/upload1' : 'http://192.168.100.169:8080/api/upload1/upload1'
  },
  methods: {
    onsubmit() {
      this.resolve({
        path: this.logoPath
      })
    },
    uploadRemove() {
      this.logoPath = ''
    },
    uploadSuccess(e) {
      this.logoPath = e.path
    }
  },
}
</script>