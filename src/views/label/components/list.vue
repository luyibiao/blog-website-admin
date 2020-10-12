<template>
  <div class="components-label_list">
    <b-table 
    :columns="columns" 
    action="queryLabelList" 
    hasPagination
    :forms="forms"
    :refresh="refresh"></b-table>
  </div>
</template>

<script>
import edit from './edit'
export default {
  props: {
    refresh: {
      type: Boolean,
      default: false
    },
    forms: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      columns: [
        {label: '标签名称', prop: 'label'},
        {
          label: '创建时间', 
          prop: 'create_time',
          render: scope => (
            <span>{this.$vueFilters.formatDatetime(scope.row.create_time, 'yyyy-MM-dd')}</span>
          )
        },
        {
          label: '操作',
          render: scope => (
            <div>
              <el-button type="text" onClick={this.editLabel.bind(this, scope.row)}>编辑</el-button>
              <el-button type="text" onClick={this.deleteLabel.bind(this, scope.row)}>删除</el-button>
            </div>
          )
        }
      ]
    }
  },
  methods: {
    editLabel(item) {
      console.log(item)
      this.$popup(edit, item).then(res => {
        this.$emit('change')
      })
    },
    deleteLabel(row) {
      this.$confirm('确定删除该标签？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        this.$api.deleteLabel({
          id: row.id
        }).then(_ => {
          this.$message.success('删除成功')
          this.$emit('change')
        })
      })
    }
  },
}
</script>

<style lang="scss">
  .components-label_list {
    height: 100%;
  }
</style>