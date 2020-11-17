<template>
  <el-button type="text" size="mini" @click="click">
    {{info.recommend == 1 ? '取消推荐' : '推荐'}}
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
        recommend: this.info.recommend == 1 ? 0 : 1
      })
    }
  },
}
</script>