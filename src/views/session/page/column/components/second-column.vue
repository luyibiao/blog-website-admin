<template>
  <b-table 
    :columns="columns" 
    v-loading="loading"
    :refresh="refresh"
    action="querySecondsArticleType" ></b-table>
</template>

<script>
import updateColumn from '../popup/update'
export default {
  data() {
    return {
      columns: [{
        label: '栏目名称',
        prop: 'name',
        width: '100px'
      }, {
        label: '栏目code',
        prop: 'code',
        width: '150px'
      }, {
        label: '文章总数',
        prop: 'article_total'
      }, {
        label: '父栏目名称',
        prop: 'articletype_name',
        width: '120px'
      }, {
        label: '父栏目code',
        prop: 'articletype_code',
        width: '120px'
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
            <el-button type="text" onClick={this.updates.bind(this, scope.row)}>修改</el-button>
            {scope.row.article_total === 0 && <el-button onClick={this.deletes.bind(this, scope.row)} type="text">删除</el-button>}
          </div>
        )
      }],
      refresh: false,
      loading: false
    }
  },

  methods: {
    // 修改
    updates(row) {
      this.$popup(updateColumn, {
        ...row,
        action: 'updateSecondsArticle'
      }).then(_ => {
        this.refresh = !this.refresh
      })
    },
    deletes(row) {
      this.loading = false
      this.$confirm('确定删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        this.$api.deleteSecondsArticle({id: row.id}).then(_ => {
          this.$message.success('删除成功')
          this.loading = false
          this.refresh = !this.refresh
        })
      }).catch(e => {
        this.loading = false
      })
    }
  },
}
</script>
