<!--下线文章-->
<template>
  <div class="article-offline">
    <tables :formsProp="forms"/>
  </div>
</template>

<script>
import tables from '../components/tables'

export default {
  components: {
    tables
  },
  data() {
    return {
      forms: {
        status: 'OFFLINE'
      }
    }
  },
}
</script>

<style lang="scss">
  .article-offline {}
</style>