<template>
  <el-button type="text" @click="click">
    {{info.hot_comments == 1 ? '取消热评' : '设为热评'}}
  </el-button>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    callback: {
      type: Function,
      default: null
    }
  },
  methods: {
    click() {
      this.callback && this.callback({
        id: this.info.id,
        hot_comments: this.info.hot_comments == 1 ? 0 : 1
      })
    }
  },
}
</script>