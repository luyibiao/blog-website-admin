<template>
  <ui-popup 
  :title="title"
  :isFooter="true"
  @onSubmit="onSubmit"
  @onCancel="onCancel"
  width="700px"
  class="edit-addlabel">
    <div class="edit-addlabel_search">
      <el-input 
       style="width: 320px" 
       placeholder="搜索标签"
        v-model="lables">
        <el-button slot="append" icon="el-icon-search" @click="onSearch"></el-button>
      </el-input>
    </div>
    <div class="edit-addlabel_content">
      <span
      :class="classes(item)"
      class="edit-addlabel_tag"
      @click="onSelect(item)"
      v-for="(item, index) in list" :key="index">
        {{item.label}}
      </span>
    </div>
    
  </ui-popup>
</template>

<script>
export default {
  props: {
    params: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      lables: '',
      title: '选择标签',
      list: [],
      pages: {
        pageSize: 20,
        pageIndex: 0,
      },
      selectList: []
    }
  },
  created() {
    this.selectList = this.params.list
    this.getList()
  },
  methods: {
    onSearch() {
      this.pages.pageIndex = 0
      this.getList()
    },
    getList() {
      const sendData = {
        label: this.lables,
        ...this.pages
      }
      this.$api.queryLabelList(sendData).then(res => {
        this.list = res.list
      }).catch( e => {
        this.reject()
      })
    },

    classes(item) {
      const some = this.selectList.some(v => v.id === item.id)
      return [
        some && 'is-select'
      ]
    },

    onSelect(item) {
      const index = this.selectList.findIndex(v => v.id === item.id)
      if (index >= 0) {
        this.selectList.splice(index, 1)
      } else {
        if (this.selectList.length === 5) {
          this.$message.info('最多添加五个标签')
          return
        }
        this.selectList.push(item)
      }
    },

    onCancel() {
      this.reject()
    },
    onSubmit() {
      this.resolve(this.selectList)
    }
  },
}
</script>

<style lang="scss" scoped>
  .edit-addlabel {
    .edit-addlabel_search {
      text-align: center;
    }
    .edit-addlabel_content {
      padding: 15px;
      box-sizing: border-box;
      border: 1px solid #e0e0e0;
      margin-top: 20px;
      .edit-addlabel_tag {
        display: inline-block;
        padding: 6px 12px;
        background: #fff;
        border: 1px solid #f5dab1;
        font-size: 14px;
        border-radius: 4px;
        margin-right: 8px;
        color: #e6a23c;
        user-select: none;
        cursor: pointer;
        &:hover {
          
        }
        &.is-select {
          background-color: #e6a23c;
          border-color: #e6a23c;
          color: #fff;
        }
      }
    }
  }
</style>