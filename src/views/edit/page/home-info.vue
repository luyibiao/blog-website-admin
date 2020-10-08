<template>
  <div class="edit-home-info">
    <div class="edit-home-tabs">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
        <el-tab-pane 
        v-for="(item, index) in tabs" 
        :key="index" 
        :label="item.label" 
        :name="item.name">

        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'banner',
      tabs: [{
        label: 'banner图',
        name: 'banner'
      }, {
        label: '热评文章',
        name: 'hot-article'
      }, {
        label: '趣事',
        name: 'fun'
      }, {
        label: '随便看看',
        name: 'lound'
      }, {
        label: '个人说明',
        name: 'desc'
      }]
    }
  },
  methods: {
    handleClick(){},
  },
}
</script>

<style lang="scss">
  .edit-home-info {
    margin-top: 20px;
  }
</style>