<template>
  <div class="views-label">
    <div>
      <el-form inline>
        <el-form-item label="标签名称">
          <el-input 
          style="width: 260px;" 
          size="medium" 
          placeholder="输入标签名称查询" 
          v-model="forms.keywords"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
         <el-form-item>
          <el-button type="primary" @click="onPopup">新增标签</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import add from '../components/add'
export default {
  data() {
    return {
      forms: {
        keywords: ''
      },
      dialogVisible: false,
      label: ''
    }
  },

  methods: {
    onPopup() {
      this.$popup(add).then(res => {
        console.log(res)
      })
    }
  },
}
</script>