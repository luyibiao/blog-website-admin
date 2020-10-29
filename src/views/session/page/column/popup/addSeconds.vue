<template>
  <ui-popup class="column-addSeconds" title="增加二级栏目" width="800px">
    <p class="inner">一级栏目名称： {{params.name}}</p>
    <el-form :model="forms" label-width="80px" ref="ruleform">
      <el-form-item label="栏目名称" prop="name" :rules="[{required: true, message: '名称不能为空', trigger: 'blur'}]">
        <el-input v-model="forms.name" style="width: 220px;" placeholder="输入二级栏目名称" />
      </el-form-item>
      <el-form-item label="栏目code" :rules="[{validator: checkCode, trigger: 'blur'}]" prop="code">
        <el-input v-model="forms.code" style="width: 220px;" placeholder="输入二级栏目code">
          <template slot="prepend">{{params.code || ''}}-</template>
        </el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" @click="save" v-loading="loading">保存</el-button>
      </el-form-item>
    </el-form>
  </ui-popup>
</template>

<script>
import { pureCapitalizedEnglish } from '@/utils/reg'
export default {
  props: {
    params: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      forms: {
        name: '',
        code: ''
      },
      loading: false
    }
  },
 
  methods: {
    save() {
      this.loading = true
      const sendData = {
        ...this.forms,
        articletype_id: this.params.id,
        articletype_code: this.params.code
      }
      sendData.code = this.params.code + '-' + sendData.code
      this.$api.addSecondsArticleType(sendData).then(res => {
        this.$message.success('保存成功')
        this.loading = false
        this.resolve()
      }).catch(e => {
        this.loading = false
      })
    },
    checkCode(rule, val, callback) {
      if (!val) {
        callback(new Error('code不能为空'))
        return
      }
      if (!pureCapitalizedEnglish.test(val)) {
        callback(new Error('code只能为大写字母'))
        return
      }
      callback()
    },
  },
}
</script>

<style lang="scss">
  .column-addSeconds {
    .inner {
      margin-bottom: 20px;
    }
  }
</style>