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
          <el-button type="primary" @click="dialogVisible = true">新增标签</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      >
      <el-input 
          style="width: 260px;" 
          v-model="label"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="aa">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
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
    aa() {
      this.$api.addLabel({
        label: this.label
      })
    }
  },
}
</script>