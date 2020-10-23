<template>
  <div class="edit-articles">
    <div class="edit-articles_forms" v-loading="loading">
      <el-form 
      ref="ruleform" 
      :model="form" 
      label-position="right" 
      label-width="80px">
        <el-form-item label="文章标题" 
        prop="title"
        :rules="isEmpty('标题不能为空')">
          <el-input 
          placeholder="请输入标题"
          v-model="form.title" 
          style="width: 300px" 
          size="medium"></el-input>
        </el-form-item>
        <el-form-item label="作者" :rules="isEmpty('作者不能为空')" prop="author">
          <el-input 
          v-model="form.author" 
          style="width: 120px" 
          placeholder="请输入作者"
          size="medium"></el-input>
        </el-form-item>
        <el-form-item label="文章logo" >
          <b-upload 
          @on-remove="uploadRemove"
          @on-success="uploadSuccess" 
          :fileList="fileList"/>
        </el-form-item>
       
        <el-form-item label="标签" >
          <div>
            <el-tag 
            style="margin-right: 10px;"
            v-for="(item, index) in selectArr" 
            :key="index">
              {{item.label}}
            </el-tag>
            <el-button 
            size="mini" 
            type="primary" 
            plain 
            @click="onShowLabel">+ 增加标签</el-button>
          </div>
        </el-form-item>

        <el-form-item 
        prop="contentdesc"
        :rules="isEmpty('文章简介不能为空')"
        label="文章简介" >
          <el-input 
          type="textarea"
          v-model="form.contentdesc" 
          style="width: 320px" 
          :autosize="{
            minRows: 5, maxRows: 6
          }"
          :maxlength="600"
          show-word-limit
          placeholder="请输入文章简介"
          ></el-input>
        </el-form-item>

        <el-form-item label="文章类型" :rules="isEmpty('文章类型不能为空')">
          <el-select v-model="form.type">
            <el-option 
            :label="item.name"
            :value="item.code"
            v-for="(item, index) in getArticleType" 
            :key="index" />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="edit-articles_quill">
      <b-quill v-model="form.content"/>
      <div class="btn">
        <el-button style="margin-right: 30px;" @click="ondraft" v-if="!editFlag">存为草稿</el-button>
        <el-button type="primary" @click="submit">{{editFlag ? '修改' : '发布'}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import addLabelList from '../components/addLabel'
import { mapGetters } from 'vuex'
export default {
  name: '',
  
  data() {
    return {
      form: {
        // 标题
        title: '',
        // 作者
        author: '九七',
        // 标签
        label: '',
        // 富文本内容
        content: '',
        // 文章简介
        contentdesc: '',
        // 文章类型
        type: 1,
        // 文章状态为上线状态
        status: 'LINE',
        logoPath: '',
        logonName: '',
        logo: ''
      },
      selectArr: [],
      loading: false,
      id: '',
      fileList: [],
      editFlag: false
    }
  },
  computed: {
    ...mapGetters(['getArticleType'])
  },
  created() {
    this.id = this.$route.query.id || ''
    if (this.id) {
      this.editFlag = true
      this.getDetail()
    }
  },
  methods: {
    init(res) {
      Object.keys(this.form).map(v => {
        if (res.hasOwnProperty(v)) {
          this.form[v] = res[v]
        }
      })
      this.selectArr = JSON.parse(this.form.label || '[]')
      this.fileList.push({
        url: res.logo
      })
    },
    // 拿文章详情
    getDetail() {
      this.$api.queryArticleDetail({
        id: this.id
      }).then(res => {
        this.init(res)
      })
    },
    onShowLabel() {
      const sendData = {
        list: [
          ...this.selectArr
        ]
      }
      this.$popup(addLabelList, sendData).then(res => {
        this.selectArr = res
      }).catch(e => {
        console.log(e)
      })
    },

    // 图片上传成功
    uploadSuccess(file) {
      this.form.logoPath = file.path
      this.form.logonName = file.fName
    },

    uploadRemove() {
      this.forms.logo = ''
    },
    
    // 发布文章
    submit() {
      if (!this.form.content) {
        this.$message.error('内容不能为空')
        return
      }
      this.$refs.ruleform.validate(valid => {
        if (!valid) return
        this.loading = true
        this.form.label = JSON.stringify(this.selectArr)
        const sendData = {
          ...this.form
        }
        if (this.editFlag) {
          sendData.id = this.id
        }
        const action = this.editFlag ? 'updateArticle' : 'addArticle'
        const msg = this.editFlag ? '修改成功' : '新增成功'
        this.$api[action](sendData).then(res => {
          this.$message.success(msg)
          this.loading = false
          setTimeout(_ => {
            this.$router.replace({
              path: '/list/all'
            })
          }, 200)
        }).catch(e => {
          // this.$message.error('上传失败')
          this.loading = false
        })
      })
    },

    // 存为草稿
    ondraft() {
      this.form.status = 'DRAFT'
      this.submit()
    },

    isEmpty(msg) {
      return [{
        required: true,
        message: msg,
        trigger: 'blur'
      }]
    }
  },
}
</script>

<style lang="scss">
  .edit-articles {
    .edit-articles_forms {
      // width: 600px;
      // margin: 20px auto;
      flex: 1;
    }
    .edit-articles_quill {
      width: 90%;
      // margin: 0px auto;
      min-width: 800px;
      max-width: 1200px;
      // flex: 1;
      height: 800px;
      > .btn {
        margin: 20px 0 60px;
        text-align: center;
      }
    }
  }
</style>