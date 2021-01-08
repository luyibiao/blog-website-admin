<template>
  <ui-popup title="上传图片">
    <b-upload 
      @on-remove="uploadRemove"
      @on-success="uploadSuccess" 
      :limit="1"
      action="http://192.168.210.46:8080/api/upload1/upload1"
      />
      <el-button @click="reject()">取消</el-button>
      <el-button type="primary" @click="onsubmit">确定</el-button>
  </ui-popup>
</template>

<script>
export default {
  methods: {
    onsubmit() {},
    uploadRemove() {},
    uploadSuccess() {

    }
  },
}
</script>