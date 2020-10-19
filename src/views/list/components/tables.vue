<template>
  <div class="article-components-tables">
    <table-layout>
      <template #form>
        <el-form :model="forms" inline label-width="80px">
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
                v-for="(item, index) in typeList" 
                :key="index" />
            </el-select>
          </el-form-item>
          <el-form-item label="创建时间">
            <el-date-picker
              v-model="forms.create_time"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSearch">搜索</el-button>
          </el-form-item>
        </el-form>
      </template>
      <template>
        <b-table 
        action="queryArticle" 
        hasPagination
        :forms="{
          ...forms,
          ...formsProp
        }"
        :refresh="refresh"
        :columns="columns" />
        </template>
    </table-layout>
    
  </div>
</template>

<script>
import statusBtn from './statusBtn'
import draftBtn from './draft'
import toppingBtn from './topping'
import hotcBtn from './hotc'
import topping from './topping'
export default {
  components: {
    statusBtn,
    draftBtn,
    toppingBtn,
    hotcBtn,
  },
  props: {
    formsProp: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      forms: {
        title: '',
        create_time: '',
        type: ''
      },
      refresh: false,
      typeList: [],
      columns: [{
        label: '文章标题',
        prop: 'title',
        width: '180px'
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
        label: '文章状态',
        width: '200px',
        render: scope => {
          const row = scope.row
          let ele = null
          if (row.draft == 0) {
            ele = <p>草稿文章</p>
          } else {
            ele = (
              <div>
                <p>状态：{this.$vueFilters.formatStatus(row.status, this.$overall.statusList)}</p>
                <p>是否置顶：{row.topping == 1 ? '是' : '否'}</p>
                <p>是否热评文章：{row.hot_comments == 1 ? '是' : '否'}</p>
              </div>
            )
          }
          return ele
        }
      }, {
        label: '文章类型',
        render: scope => (
          <span>{this.$vueFilters.formatStatus(scope.row.type, this.typeList)}</span>
        )
      }, {
        label: '创建时间',
        prop: 'create_time',
        width: '200px'
      }, {
        label: '修改时间',
        prop: 'update_time',
        width: '200px'
      }, {
        label: '操作',
        width: '200px',
        fixed: 'right',
        render: scope => {
          const row = scope.row
          let ele = null
          if (row.draft == 0) {
            ele = <draftBtn info={row} callback={this.callback}></draftBtn>
          } else {
            ele = (
              <div>
                <statusBtn info={scope.row} callback={this.callback}></statusBtn>
                <toppingBtn info={scope.row} callback={this.callback}></toppingBtn>
                <hotcBtn info={scope.row} callback={this.callback}></hotcBtn>
              </div>
            )
          }
          return ele
        }
      }]
    }
  },
  created() {
    this.getTypeList()
  },
  methods: {
    // 搜索
    onSearch() {
      this.refresh = !this.refresh
    },
    getTypeList() {
      this.$api.queryArticleType().then(res => {
        this.typeList = res.list
      })
    },
    callback(data) {
      
      this.$api.updateArticle({
        check: 1,
        ...data
      }).then(res => {
        this.$message.success('修改成功')
        this.refresh = !this.refresh
      })
    }
  },
}
</script>

<style lang="scss">
  .article-components-tables {
    height: 100%;
    .article-components_logos {
      width: 120px;
    }
    .article-components_label {
      margin-right: 6px;
    }
  }
</style>