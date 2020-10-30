<template>
  <b-table 
    :columns="columns" 
    action="queryArticleType" 
    v-loading="loading"
    :refresh="refresh"
    ></b-table>
</template>

<script>
import addSeconds from '../popup/addSeconds'
import updateColumn from '../popup/update'
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
            <el-button type="text" onClick={this.addSeconds.bind(this, scope.row)}>增加二级栏目</el-button>
            <el-button type="text" onClick={this.updates.bind(this, scope.row)}>修改</el-button>
            {scope.row.article_total === 0 && <el-button onClick={this.deletes.bind(this, scope.row)} type="text">删除</el-button>}
          </div>
        )
      }],
      loading: false,
      refresh: false
    }
  },
  methods: {
    // 增加二级栏目
    addSeconds(row) {
      this.$popup(addSeconds, row).then(res => {
        this.refresh = !this.refresh
      })
    },
    // 修改
    updates(row) {
      this.$popup(updateColumn, {
        ...row,
        action: 'updateArticleType'
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
        this.$api.deleteArticleType({id: row.id}).then(_ => {
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

<style lang="scss">
  .first-column {
    // height: 100%;
  }
</style>