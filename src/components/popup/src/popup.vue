<template>
  <el-dialog 
    :title="title" 
    :width="width || '70%'"
    :visible.sync="visible" 
    append-to-body 
    :close-on-click-modal="false" 
    :close-on-press-escape="false"
    @closed="closed" 
  >
    <div class="popup__body">
      <slot >这是一段信息</slot>
    </div>
    <slot name="footer" v-if="isFooter">
      <div class="dialog-footer" slot="footer">
          <span class="dialog-footer">
            <el-button @click="onCancel">取 消</el-button>
            <el-button type="primary" @click="onSubmit">确 定</el-button>
          </span>
      </div>
    </slot>
  </el-dialog>
</template>
<script>
  export default {
    name:'ui-popup',
    props: ['value','title','width', 'isFooter'],
    computed: {
      //visible控制器，点X时调用取消
      visible: {
        get: function(){
          return this.$parent.visible;
        },
        set: function(v){
          this.$parent.reject(this.value)
        }
      }
    },
    methods: {
      onCancel(){
        // this.$parent.closed();
        this.$emit('onCancel', this.value)
      },
      onSubmit(){
        this.$emit('onSubmit', this.value)
      },
      //点 X 关闭时调用父组件的注入
      closed(){
        this.$parent.closed();
      },
      
    }
  }
</script>
<style lang="scss">
@import "~@/assets/scss/variable.scss";
@import "~@/assets/scss/mixin.scss";
.el-dialog__wrapper{
  text-align: center;
  .el-dialog{
    display: inline-block;
    text-align: left;
    // min-width: 800px;
    .el-dialog__header{
      padding: 10px 20px;
      background-color: $lump-topbar-bg;
      text-align: left;
      .el-dialog__headerbtn{
        top: 14px;
      }
    }
    .el-dialog__body{
      padding: 10px;
      border-top: 1px solid $normal-border;
      border-bottom: 1px solid $normal-border;
      .popup__body{
        padding: 20px;
        max-height: 650px;
        overflow: auto;
      }
    }
  }
}
</style>