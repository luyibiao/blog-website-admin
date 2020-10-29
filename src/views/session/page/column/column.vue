<template>
  <div class="session-column">
    <table-layout>
      <template #form>
        <div>
          <el-button type="primary" @click="$router.push('./column/add')">增加栏目</el-button>
        </div>
        <div class="session-column_tabs">
          <el-tabs v-model="activeName" type="card" >
            <el-tab-pane label="一级栏目" name="firstColumn"></el-tab-pane>
            <el-tab-pane label="二级专题栏目" name="secondColumn"></el-tab-pane>
          </el-tabs>
        </div>
      </template>
      <component :is="activeName"/>
    </table-layout>      
  </div>
</template>

<script>
import firstColumn from './components/first-column'
import secondColumn from './components/second-column'
export default {
  components: {
    firstColumn,
    secondColumn
  },
  data() {
    return {
      activeName: 'firstColumn'
    }
  },
}
</script>

<style lang="scss">
  .session-column {
    .session-column_tabs {
      margin-top: 40px;
    }
  }
</style>