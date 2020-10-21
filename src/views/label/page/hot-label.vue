<template>
  <div class="views-label-hot">
    <div>
      <el-form inline>
        <el-form-item label="标签名称">
          <el-input 
          style="width: 260px;" 
          size="medium" 
          placeholder="输入标签名称查询" 
          v-model="forms.label"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <blist 
    @change="refreshFn"
    :refresh="refresh" 
    :forms="forms"></blist>
  </div>
</template>

<script>
import blist from '../components/list'
export default {
  components: {
    blist
  },
  data() {
    return {
      forms: {
        label: '',
        hot: 1
      },
      dialogVisible: false,
      label: '',
      refresh: false
    }
  },

  methods: {
    onSearch() {
      this.refresh = !this.refresh
    },
    refreshFn() {
      this.refresh = !this.refresh
    }
  },
}
</script>