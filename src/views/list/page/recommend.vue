<!--推荐文章-->
<template>
  <div class="article-topping">
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
        recommend: 1
      }
    }
  },
}
</script>

<style lang="scss">
  .article-topping {}
</style>