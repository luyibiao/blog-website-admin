<template>
  <ui-popup 
  width="800px" 
  title="选择侧边栏" 
  :isFooter="true"
  @onSubmit="onSubmit"
  @onCancel="onCancel">
    <el-transfer
      v-model="value"
      :titles="['所有侧边栏', '已选择的侧边栏']"
      :props="{
        key: 'code',
        label: 'column_name'
      }"
      target-order="push"
      :data="list">
    </el-transfer>
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
      value: [],
      list: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.$api.querySideColumn().then(res => {
        this.list = res.list
        this.value = this.params.list
      })
    },
    onCancel() {
      this.reject()
    },
    onSubmit() {
      console.log(this.value)
      // return
      this.resolve(this.value)
    }
  },
}
</script>