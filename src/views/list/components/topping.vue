<template>
  <el-button type="text" size="mini" @click="click">
    {{info.topping == 1 ? '取消置顶' : '置顶'}}
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
        topping: this.info.topping == 1 ? 0 : 1
      })
    }
  },
}
</script>