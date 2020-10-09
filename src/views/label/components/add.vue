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
  data() {
    return {
      forms: {
        label: '',
      }
    }
  },
  methods: {
    onCancel() {
      this.reject()
    },
    onSubmit() {
      this.$api.addLabel(this.forms).then(res => {
        
        this.resolve()
      }).catch(e => {
        this.reject()
      })
    },
  },
}
</script>