<template>
  <div class="session-banner-edit" v-loading="loading">
    <el-form label-width="80px" :model="forms">
      <el-form-item label="上传图片">
        <b-upload 
          @on-remove="uploadRemove"
          @on-success="uploadSuccess" 
          :fileList="fileList"/>
      </el-form-item>
      <el-form-item label="类型">
        <el-radio-group v-model="forms.type">
          <el-radio :label="1">本地跳转</el-radio>
          <el-radio :label="2">外链</el-radio>
        </el-radio-group>
      </el-form-item>
      <template v-if="forms.type == 1">
        <el-form-item label="">
          <el-button type="primary" size="mini" @click="onSelectArticle">选择文章</el-button>
          <span style="margin-left: 10px;color: #909399;" v-if="forms.article_id">已选择{{row.title}}</span>
        </el-form-item>
      </template>
      <template v-else-if="forms.type == 2">
        <el-form-item label="填写链接">
          <el-input v-model="forms.url" style="width: 330px;"></el-input>
        </el-form-item>
      </template>
    </el-form>

    <div class="session-banner-edit_btn">
      <el-button type="success" @click="save">保存</el-button>
    </div>
  </div>
</template>

<script>
import lineArticle from '@/components/basic/src/lineArticle'
export default {
  data() {
    return {
      loading: false,
      forms: {
        type: 1,
        logoPath: '',
        logonName: '',
        url: '',
        imgUrl: '',
        article_id: ''
      },
      fileList: [],
      row: {}
    }
  },
  methods: {
    // 图片上传成功
    uploadSuccess(file) {
      this.forms.logoPath = file.path
      this.forms.logonName = file.fName
    },

    uploadRemove() {
      this.forms.imgUrl = ''
    },

    // 选择文章
    onSelectArticle() {
      this.$popup(lineArticle).then(res => {
        this.forms.article_id = res.id
        this.row = res
      })
    },
    save() {
      this.loading = true
      this.$api.addbnner(this.forms).then(res => {
        this.$message.success('保存成功')
        this.$router.push('./banner')
      }).catch(e => {
        this.loading = false
      })
    }
  },
}
</script>

<style lang="scss">
  .session-banner-edit_btn {
    border-top: 1px solid #eee;
    margin-top: 20px;
    padding-top: 20px;
  }
</style>