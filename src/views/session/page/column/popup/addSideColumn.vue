<template>
  <ui-popup width="800px" title="选择侧边栏">
    <el-transfer
      v-model="value"
      :props="{
        key: 'code',
        label: 'column_name'
      }"
      :data="list">
    </el-transfer>
  </ui-popup>
</template>

<script>
export default {
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
        console.log(this.list)
      })
    }
  },
}
</script>