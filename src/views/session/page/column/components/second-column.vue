<template>
  <b-table 
    :columns="columns" 
    
    action="queryArticleType" ></b-table>
</template>

<script>
export default {
  data() {
    return {
      columns: [{
        label: '栏目名称',
        prop: 'name'
      }, {
        label: '栏目code',
        prop: 'code'
      }, {
        label: '文章总数',
        prop: 'article_total'
      }, {
        label: '所属栏目名称',
        prop: 'parent_name'
      }, {
        label: '所属栏目code',
        prop: 'parent_code'
      }, {
        label: '创建时间',
        render: scope => (
          <span>{this.$vueFilters.formatDatetime(scope.row.create_time, 'yyyy-MM-dd')}</span>
        )
      },{
        label: '修改时间',
        render: scope => (
          <span>{this.$vueFilters.formatDatetime(scope.row.update_time, 'yyyy-MM-dd')}</span>
        )
      }, {
        label: '操作',
        render: scope => (
          <div>
            {scope.row.article_total === 0 && <el-button onClick={this.deletes.bind(this, scope.row)} type="text">删除</el-button>}
          </div>
        )
      }],
    }
  },

  methods: {
    deletes(row) {}
  },
}
</script>
