<template>
  <el-button type="text" size="mini" @click="click">
    发布
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
        status: 'LINE'
      })
    }
  },
}
</script>