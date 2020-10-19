<!--上线文章-->
<template>
  <div class="article-line">
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
        status: 'LINE'
      }
    }
  },
}
</script>

<style lang="scss">
  .article-line {}
</style>