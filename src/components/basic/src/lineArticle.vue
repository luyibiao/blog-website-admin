<template>
  <ui-popup 
  title="选择文章"
  width="1000px"
  top="20px"
  @onSubmit="onSubmit"
  @onCancel="onCancel"
  highlight-current-row
  class="components-lineArticle">
    <table-layout>
      <template #form>
        <el-form :model="forms" inline  label-position="left">
          <el-form-item label="标题">
            <el-input v-model="forms.title" style="width: 220px;"></el-input>
          </el-form-item>
          <el-form-item label="作者">
            <el-input v-model="forms.author" style="width: 150px;"></el-input>
          </el-form-item>
          <el-form-item label="文章类型">
            <el-select v-model="forms.type" style="width: 120px;">
              <el-option label="全部" value=""></el-option>
              <el-option 
                :label="item.name"
                :value="item.code"
                v-for="(item, index) in getArticleType" 
                :key="index" />
            </el-select>
          </el-form-item>
         
          <el-form-item>
            <el-button type="primary" @click="onSearch">搜索</el-button>
          </el-form-item>
        </el-form>
      </template>
      <template>
        <b-table 
        :handleCurrentChanges="handleCurrentChange"
        action="queryArticle" 
        hasPagination
        :forms="forms"
        :refresh="refresh"
        :columns="columns" />
        </template>
    </table-layout>
    
  </ui-popup>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'b-lineArticle',
  data() {
    return {
      forms: {
        title: '',
        type: '',
        status: 'LINE'
      },
      refresh: false,
      loading: false,
      columns: [{
        label: '文章标题',
        prop: 'title',
        width: '180px',
        // render: scope => <router-link to={'/edit/articles?id=' + scope.row.id}>{scope.row.title}</router-link>
      }, {
        label: '文章作者',
        prop: 'author'
      }, {
        label: '观看和评论数',
        render: scope => (
          <div>
            <p>观看数： {scope.row.watch_num}</p>
            <p>评论数： {scope.row.comment_num}</p>
          </div>
        ),
        width: '130px'
      }, {
        label: '文章logo',
        width: '150px',
        render: scope => (
          <img src={scope.row.logo} class="article-components_logos"/>
        )
      }, {
        label: '标签',
        width: '220px',
        render: scope => {
          const list = JSON.parse(scope.row.label || '[]')
          const el = list.map(v => (
            <el-tag class="article-components_label">{v.label}</el-tag>
          ))
          return (
            <div>
              {el}
            </div>
          )
        }
      }, {
        label: '文章类型',
        render: scope => (
          <span>{this.$vueFilters.formatStatus(scope.row.type, this.getArticleType)}</span>
        )
      }],
      row: {}
    }
  },

  computed: {
    ...mapGetters(['getArticleType'])
  },
  methods: {
    onSearch() {
      this.refresh = !this.refresh
    },
    onSubmit() {},
    onCancel() {
      this.reject()
    },
    handleCurrentChange(val) {
      this.resolve(val)
    }
  },
}
</script>

<style lang="scss">
  .components-lineArticle {
    // height: 800px;
    // width: 800px;
    .article-components_logos {
      width: 100px;
    }
    .popup__body {
      height: 800px;
    }
    .el-dialog {
      .table-container {
          
        }
    }
  }
</style>