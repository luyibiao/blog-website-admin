<template>
  <ui-popup title="修改" width="800px">
    <el-form :model="forms" label-width="80px" ref="ruleform">
      <el-form-item label="名称" prop="column_name" :rules="[{required: true, message: '请输入名称', trigger: 'blur'}]">
        <el-input v-model="forms.column_name" style="width: 220px;" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" @click="save" :loading="loading">保存</el-button>
      </el-form-item>
    </el-form>
  </ui-popup>
</template>

<script>
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
        column_name: ''
      }
    }
  },
  created() {
    this.forms.column_name = this.params.column_name
  },
  methods: {
    save() {
      this.$refs.ruleform.validate(valid => {
        if (!valid) return 
        const sendData = {
          id: this.params.id,
          column_name: this.forms.column_name
        }
        this.$api['updateSideColumn'](sendData).then(_ => {
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