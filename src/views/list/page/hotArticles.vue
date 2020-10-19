<!--热评文章-->
<template>
  <div class="hot-article">
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
        hot_comments: '1'
      }
    }
  },
}
</script>

<style lang="scss">
  .hot-article{}
</style>