<template>
  <ui-popup 
  title="新增标签" 
  width="500px" 
  @onSubmit="onSubmit"
  @onCancel="onCancel"
  :isFooter="true">
    <el-form :model="forms" ref="form" label-width="80px">
      <el-form-item 
      label="标签名" 
      :rules="[{required: true, message: '标签名不能为空', trigger: 'blur'}]"
      prop="label">
        <el-input style="width: 260px;" v-model="forms.label"></el-input>
      </el-form-item>
    </el-form>
  </ui-popup>
</template>

<script>
export default {
  props: {
    params: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      forms: {
        label: '',
      },
      isEdit: false
    }
  },
  created() {
    if (this.$overall.emptyObj(this.params)) {
      this.isEdit = true
      this.forms = {
        label: this.params.label,
        id: this.params.id
      }
    }
  },
  methods: {
    onCancel() {
      this.reject()
    },
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          const actions = this.isEdit ? 'updateLabel' : 'addLabel'
          const msg = this.isEdit ? '修改成功' : '添加成功'
          this.$api[actions](this.forms).then(res => {
            this.resolve()
            this.$message.success(msg)
          }).catch(e => {
            // this.reject()
          })
        }
      })
    },
  },
}
</script>