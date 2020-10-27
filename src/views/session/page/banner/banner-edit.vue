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
          <span style="margin-left: 10px;color: #909399;" v-if="forms.article_id">已选择{{forms.article_title}}</span>
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
        article_id: '',
        article_title: '',
      },
      fileList: [],
      row: {},
      id: ''
    }
  },
  created() {
    this.id = this.$route.query.id
    this.id && (this.getDetail())
  },
  methods: {
    init(res) {
      Object.keys(this.forms).map(v => {
        if (res.hasOwnProperty(v)) {
          this.forms[v] = res[v]
        }
      })
      this.selectArr = JSON.parse(this.forms.label || '[]')
      this.fileList.push({
        url: res.imgUrl
      })

      console.log(this.forms)
    },

    getDetail() {
      this.loading = true
      this.$api.queryBannerDetail({
        id: this.id
      }).then(res => {
        this.init(res)
        this.loading = false
      }).catch(e => {
        this.loading = false
      })
    },
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
        this.forms.article_title = res.title
        this.row = res
      })
    },
    save() {
      if (!this.forms.logoPath && !this.forms.imgUrl) {
        this.$message.error('图片不能为空')
        return
      }
      if (this.forms.type == 1 && !this.forms.article_id) {
        this.$message.error('跳转文章不能为空')
        return
      }
      if(this.forms.type == 2 && !this.forms.url) {
        this.$message.error('外链不能为空')
        return
      }
      this.loading = true
      if (this.forms.type == 1) {
        this.forms.url = ''
      } else {
        this.forms.article_id = ''
        this.forms.article_title = ''
      }
      const action = this.id ? 'updatebanner' : 'addbnner'
      const sendData = {...this.forms}
      if (this.id) sendData.id = this.id
      this.$api[action](sendData).then(res => {
        this.$message.success('保存成功')
        this.$router.push('./banner')
      }).catch(e => {
        this.loading = false
      })
    },
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