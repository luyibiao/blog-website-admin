<template>
  <div class="session-banner">
    <table-layout>
      <template #form>
        <el-button type="primary" @click="$router.push('./banner-edit')">增加</el-button>
      </template>
      <template>
        <b-table 
        action="querybanner" 
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
      },
      refresh: false,
      columns: [{
        label: '序号',
        type: 'index',
      }, {
        label: '文章标题',
        prop: 'article_title',
        render: scope => {
          let ele = null
          const row = scope.row
          if (row.article_id) {
            ele = <router-link to={'/edit/articles?id=' + row.article_id}>{row.article_title}</router-link>
          } else {
            ele = <span>无</span>
          }
          return ele
        }
      }, {
        label: '文章状态',
        render: scope => (
          <p>{this.$vueFilters.formatStatus(scope.row.status, this.$overall.statusList) || '无'}</p>
        )
      },{
        label: '图片',
        prop: 'imgUrl',
        render: scope => (
          <img src={scope.row.imgUrl} class="session-banner-img"/>
        )
      }, {
        label: '类型',
        render: scope => (
          <p>{scope.row.type == 1 ? '本地跳转' : '外链'}</p>
        )
      }, {
        label: '操作',
        render: scope => (
          <div>
            <el-button type="text" onClick={this.edit.bind(this, scope.row)}>编辑</el-button>
            <el-button type="text" onClick={this.deletes.bind(this, scope.row)}>删除</el-button>
          </div>
        )
      }]
    }
  },
  created() {
    this.$api.queryWYYmusic()
  },
  methods: {
    edit(row) {
      this.$router.push({
        name: 'banner-edit',
        query: {
          id: row.id
        }
      })
    },
    deletes(row) {
      this.$confirm('确定删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        this.loading = true
        this.$api.deleteBanner({
          id: row.id
        }).then(_ => {
          this.loading = false
          this.$message.success('删除成功')
          this.refresh = !this.refresh
        }).catch(e => {
          this.loading = false
        })
      })
    }
  },
}
</script>

<style lang="scss">
.session-banner {
  height: 100%;
  .session-banner-img {
    width: 120px;
    height: 80px;
  }
}
</style>