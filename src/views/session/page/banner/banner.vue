<template>
  <div class="session-banner">
    <table-layout>
      <template #form>
        <el-button type="primary" @click="$router.push('./banner-edit')">增加</el-button>
      </template>
      <template>
        <b-table 
        action="queryArticle" 
        hasPagination
        :forms="forms"
        :refresh="refresh"
        :columns="columns" />
      </template>
    </table-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      forms: {
        status: 'LINE',
        refresh: false,
        columns: [{
          label: '序号',
          type: 'index',
        }, {
          label: '图片',
          prop: 'imgUrl'
        }, {
          label: '类型',
          render: scope => (
            <p>{scope.row.type == 1 ? '本地跳转' : '外链'}</p>
          )
        }, {
          label: '操作',
          render: scope => (
            <div>
              <el-button type="text">编辑</el-button>
              <el-button type="text">删除</el-button>
            </div>
          )
        }]
      }
    }
  },
}
</script>

<style lang="scss">
.session-banner {
  height: 100%;
}
</style>