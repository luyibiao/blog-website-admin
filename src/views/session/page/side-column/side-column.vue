<template>
  <div class="session-side-column">
    <el-form :model="forms" label-width="80px" ref="ruleform">
      <el-form-item label="栏目名称" prop="column_name" :rules="[{required: true, message: '栏目名称不能为空', trigger: 'blur'}]">
        <el-input v-model="forms.column_name" style="width: 220px;" placeholder="栏目名称"></el-input>
      </el-form-item>
      <el-form-item label="栏目code" prop="code" :rules="[{validator: checkCode, trigger: 'blur'}]">
        <el-input v-model="forms.code" style="width: 220px;" placeholder="输入code"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button @click="save" type="primary" :loading="loading">保存</el-button>
      </el-form-item>
    </el-form>

    <b-table 
      :columns="columns" 
      action="querySideColumn" 
      :refresh="refresh"
      ></b-table>
  </div>
</template>

<script>
import { pureCapitalizedEnglish } from '@/utils/reg'
import updatePopup from './popup/updates'
export default {
  data() {
    return {
      loading: false,
      refresh: false,
      forms: {
        column_name: '',
        code: ''
      },
      list: [],
      columns: [{
        label: '栏目名称',
        prop: 'column_name'
      }, {
        label: '栏目code',
        prop: 'code'
      }, {
        label: '创建时间',
        render: scope => (
          <span>{this.$vueFilters.formatDatetime(scope.row.create_time, 'yyyy-MM-dd')}</span>
        )
      }, {
        label: '修改时间',
        render: scope => (
          <span>{this.$vueFilters.formatDatetime(scope.row.update_time, 'yyyy-MM-dd')}</span>
        )
      }, {
        label: '操作',
        render: scope => {
          return (
            <div>
              <el-button type="text" onClick={this.updates.bind(this, scope.row)}>修改</el-button>
              <el-button type="text" onClick={this.deletes.bind(this, scope.row)}>删除</el-button>
            </div>
          )
        }
      }]
    }
  },
  created() {
    
  },
  methods: {
    
    // 校验code
    checkCode(rule, val, callback) {
      if (!val) {
        callback(new Error('code不能为空'))
        return
      }
      if (!pureCapitalizedEnglish.test(val)) {
        callback(new Error('code只能为大写字母'))
        return
      }
      callback()
    },
    save() {
      this.loading = true
      this.$refs.ruleform.validate(valid => {
        if (!valid) return
        this.$api.addSideColumn(this.forms).then(res => {
          this.$message.success('新增成功')
          this.loading = false
          this.refresh = !this.refresh
          this.forms = {
            column_name: '',
            code: ''
          }
        }).catch(e => {
          this.loading = false
        })
      })
    },

    updates(row) {
      this.$popup(updatePopup, row).then(_ => {
        this.refresh = !this.refresh
      })
    },
    deletes(row) {
      this.$confirm('确定删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        this.$api.deleteSideCoulmn({id: row.id}).then(_ => {
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
  .session-side-column {
    height: 100%;
  }
</style>