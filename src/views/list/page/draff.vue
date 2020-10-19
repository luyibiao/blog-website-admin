<!--草稿文章-->
<template>
  <div class="article-draff">
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
        draft: '0'
      }
    }
  },
}
</script>

<style lang="scss">
  .article-draff {}
</style>