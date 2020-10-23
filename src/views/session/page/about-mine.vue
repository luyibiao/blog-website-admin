<template>
  <div class="session-about-mine" v-loading="loading">
    <el-form 
    ref="ruleform"
    :model="forms" 
    label-width="80px">
      <el-form-item label="头像">
        <b-upload
        @on-success="uploadSuccess" 
        @on-remove="uploadRemove"
        :fileList="fileList"/>
      </el-form-item>
      <el-form-item label="个人说明" >
        <el-input 
        clearable
        type="textarea"
        :autosize="{
          minRows: 5, maxRows: 6
        }"
        :maxlength="200"
        show-word-limit
        v-model="forms.description" 
        style="width: 320px" />
      </el-form-item>
      <el-form-item label="个人简介" 
      prop="profile"
      :rules="[{required: true, message: '个人简介不能为空', trigger: 'blur'}]">
        <el-input 
        clearable
        type="textarea"
        :autosize="{
          minRows: 5, maxRows: 6
        }"
        :maxlength="600"
        show-word-limit
        v-model="forms.profile" 
        style="width: 320px" />
      </el-form-item>
    </el-form>

    <div class="mine-quill"> 
      <b-quill v-model="forms.content" style=""/>
      <div class="mine-btn">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="save">确定</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      forms: {
        // 个人说明
        description: '',
        // 个人简介
        profile: '',
        // 详细说明
        content: '',
        logoPath: '',
        logonName: '',
        avatar: ''
      },
      fileList: [],
      loading: false,
      id: ''
    }
  },
  created() {
    this.getDetail()
  },
  methods: {
    init(res) {
      if (!this.id) return
      Object.keys(this.forms).map(v => {
        if (res.hasOwnProperty(v)) {
          this.forms[v] = res[v] || ''
        }
      })
      if (res.avatar) {
        this.fileList.push({
          url: res.avatar
        })
      }
    },
    getDetail() {
      this.loading = true
      this.$api.queryMine().then(res => {
        this.loading = false
        this.id = res.id || ''
        this.init(res)
      }).catch(e => {
        this.loading = false
      })
    },
    uploadSuccess(file) {
      this.forms.logoPath = file.path
      this.forms.logonName = file.fName
    },
    uploadRemove() {
      this.forms.avatar = ''
    },
    cancel() {
      this.$router.go(-1)
    },
    save() {
      this.$refs.ruleform.validate(valid => {
        if (valid) {
          this.loading = true
          const actions = this.id ? 'updateMine' : 'addMine'
          let sendData = {...this.forms}
          if (this.id) {
            sendData.id = this.id
          }
          this.$api[actions](sendData).then(res => {
            this.loading = false
            this.$message.success('修改成功')
          }).catch(e => {
            this.loading = false
          })
        }
      })
    }
  },
}
</script>

<style lang="scss">
  .session-about-mine {
    // padding-bottom: 70px;
    .el-upload--picture-card {
      width: 80px;
      height: 80px;
      line-height: 88px;
    }
    .el-upload-list__item {
      width: 80px;
      height: 80px;
    }
    .mine-quill {
      height: 800px;
      width: 90%;
      // margin: 0px auto;
      min-width: 800px;
      max-width: 1200px;
      margin-bottom: 70px;
    }
    .mine-btn {
      margin-top: 20px;
      text-align: center;
    }
  }
</style>