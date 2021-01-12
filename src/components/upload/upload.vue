<template>
  <div class="components-upload">
    <el-upload
      :action="action"
      :list-type="listType"
      :limit="limit"
      style="width: 100%"
      :on-success	="onSuccess"
      :on-remove="onRemove"
      :on-exceed="onExceed"
      :file-list="fileList"
      :headers="headers"
      >
      <i class="el-icon-plus"></i>
    </el-upload>

    
  </div>
</template>

<script>
export default {
  name: 'b-upload',
  props: {
    name: {
      type: String,
      default: ''
    },
    action: {
      type: String,
      default() {
        if (process.env.NODE_ENV !== 'production') {
          return 'http://192.168.100.169:8080/api/upload/upload'
        } else {
          return 'http://www.97blognb.cn/api/upload/upload'
        }
      }
    },
    listType: {
      type: String,
      default: 'picture-card'
    },
    limit: {
      type: [String, Number],
      default: 1
    },
    fileList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      headers: {
        token: window.store.state.user.token,
        Accept: 'application/json, text/plain, */*'
      }
    }
  },
  methods: {
    onSuccess(file) {
      if (file.code == '-1') {
        this.$message.error(file.msg)
        this.$router.push({path: '/login'})
        return
      } 
      if (file.code != '1') {
        this.$message.error(file.msg)
        return
      }
      this.$emit('on-success', file.data)
    },
    onRemove(file, fileList) {
      this.$emit('on-remove', file, fileList)
    },
    onExceed() {
      this.$message.info('最多上传一张')
    },
  },
}
</script>

<style lang="scss">
  .components-upload {
    display: inline-block;
    width: 100%;
  }
</style>