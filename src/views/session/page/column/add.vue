<template>
  <div class="column-add">
    <el-form label-width="80px" :model="forms" ref="ruleform">
      <el-form-item label="栏目名称" prop="name" :rules="[{required: true, message: '名称不能为空', trigger: 'blur'}]">
        <el-input v-model="forms.name" style="width: 220px;" placeholder="输入栏目名称"></el-input>
      </el-form-item>
      <el-form-item label="栏目code" prop="code" :rules="[{validator: checkCode, trigger: 'blur'}]">
        <el-input v-model="forms.code" style="width: 220px;" placeholder="输入code"></el-input>
      </el-form-item>
      <el-form-item label="侧边栏目">
        <el-button @click="addSide">点击选择侧边栏目</el-button>
      </el-form-item>
      <el-form-item label="导航路由">
        <el-select v-model="forms.route_url" style="width: 200px">
          <el-option
          v-for="(item, index) in routeList" 
          :key="index"
          :label="item.routeVal"
          :value="item.routeVal"/>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-button @click="save" type="primary" :loading="loading">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { pureCapitalizedEnglish } from '@/utils/reg'
import addSideColumn from './popup/addSideColumn'
export default {
  data() {
    return {
      forms: {
        name: '',
        code: '',
        route_url: ''
      },
      loading: false,
      routeList: [{
        routeVal: 'article-column'
      }]
    }
  },
  methods: {
    // 校验code
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
    addSide() {
      this.$popup(addSideColumn)
    },
    save() {
      this.loading = true
      this.$refs.ruleform.validate(valid => {
        if (!valid) return
        this.$api.addArticleType(this.forms).then(res => {
          this.$message.success('新增成功')
          this.$router.push({
            name: 'column'
          })
          this.loading = false
        }).catch(e => {
          this.loading = false
        })
      })
    }
  },
}
</script>