<template>
  <ui-popup title="修改" width="800px">
    <el-form :model="forms" label-width="80px" ref="ruleform">
      <el-form-item label="名称" prop="name" :rules="[{required: true, message: '请输入名称', trigger: 'blur'}]">
        <el-input v-model="forms.name" style="width: 220px;" placeholder="请输入名称"></el-input>
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
        <el-button type="primary" @click="save" :loading="loading">保存</el-button>
      </el-form-item>
    </el-form>
  </ui-popup>
</template>

<script>
import addSideColumn from './addSideColumn'
export default {
  props: {
    params: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      loading: false,
      forms: {
        name: '',
        route_url: '',
        side_column: ''
      },
      routeList: [{
        routeVal: 'article-column'
      }],
    }
  },
  created() {
    Object.keys(this.forms).forEach(v => {
      this.forms[v] = this.params[v]
    })
    // this.forms.name = this.params.name
  },
  methods: {
    addSide() {
      const list = this.forms.side_column ? this.forms.side_column.split(',') : []
      this.$popup(addSideColumn, {list}).then(res => {
        this.forms.side_column = res.join(',')
      })
    },
    save() {
      this.$refs.ruleform.validate(valid => {
        if (!valid) return 
        const sendData = {
          id: this.params.id,
          name: this.forms.name,
          route_url: this.forms.route_url,
          side_column: this.forms.side_column,
        }
        // 如果是二级栏目， 需要带上父级栏目id 
        if (this.params.action === 'updateSecondsArticle') {
          sendData.articletype_id = this.params.articletype_id
        }
        // console.log(sendData, this.params.action) 
        // return
        this.$api[this.params.action](sendData).then(_ => {
          this.$message.success('修改成功')
          this.loading = false
          this.resolve()
        }).catch(_ => {
          this.loading = false
        })
      })
    }
  },
}
</script>