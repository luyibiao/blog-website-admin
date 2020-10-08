<template>
  <div class="edit-articles">
    <div class="edit-articles_forms">
      <el-form ref="ruleform" :model="form" label-position="right" label-width="80px">
        <el-form-item label="文章标题">
          <el-input 
          placeholder="请输入标题"
          v-model="form.title" 
          style="width: 300px" 
          size="medium"></el-input>
        </el-form-item>
        <el-form-item label="作者" >
          <el-input 
          v-model="form.author" 
          style="width: 120px" 
          placeholder="请输入作者"
          size="medium"></el-input>
        </el-form-item>
        <el-form-item label="文章logo" >
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :limit="1"
            style="width: 50px"
            >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
       
        <el-form-item label="标签" >
          <!-- <el-select v-model="form.label" style="width: 150px;" size="medium">
            <el-option></el-option>
          </el-select> -->
        </el-form-item>
      </el-form>
    </div>
    <div class="edit-articles_quill">
      <b-quill v-model="form.content"/>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      form: {
        // 标题
        title: '',
        // 作者
        author: '九七',
        // 标签
        label: '',
        // 富文本内容
        content: '11'
      }
    }
  },
}
</script>

<style lang="scss">
  .edit-articles {
    .edit-articles_forms {
      // width: 600px;
      // margin: 20px auto;
      flex: 1;
    }
    .edit-articles_quill {
      width: 90%;
      // margin: 0px auto;
      min-width: 800px;
      max-width: 1200px;
      // flex: 1;
      height: 800px;
    }
  }
</style>