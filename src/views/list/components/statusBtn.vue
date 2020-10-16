<template>
  <el-button 
  size="mini"
  type="text"
  @click="click"
  class="article-components-status_btn">
    {{getStatus().text || ''}}
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
    getStatus() {
      if (this.$overall.emptyObj(this.info)) {
        const o = {
          LINE: {
            text: '下线',
            code: 'OFFLINE',
            type: 'primary'
          },
          OFFLINE: {
            text: '上线',
            code: 'LINE',
            type: 'success'
          },
        }
        return o[this.info.status]
      } else {
        return {}
      }
    },
    click() {
     this.callback && this.callback({
       id: this.info.id,
       status: this.getStatus().code
     }) 
    }
  },
}
</script>