<template>
  <div class="components-quill">
    <quillEditor 
    :value="value"
    @change="change"/>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
export default {
  name: 'b-quill',
  props: {
    value: [String]
  },
  components: {
    quillEditor
  },
  data() {
    return {
      content: ''
    }
  },
  methods: {
    change(e) {
      this.$emit('input', e.html)
    }
  },
}
</script>

<style lang="scss">
  .components-quill {
    
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    .quill-editor {
      height: 100%;
      display: flex;
      flex-direction: column;
      // height: 100%;
      .ql-container {
        flex: 1;
        height: 0px;
      }
    }
  }
</style>