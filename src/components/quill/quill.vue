<template>
  <div class="components-quill">
    <quillEditor 
    :value="value"
    :options="editorOption"
    @change="change"/>

    
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
import uploadImage from './components/uploadImage'
export default {
  name: 'b-quill',
  props: {
    value: [String]
  },
  components: {
    quillEditor
  },
  data() {
    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        ['blockquote', 'code-block'],

        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
        [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
        [{ direction: 'rtl' }], // text direction

        [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],
        ['image'],
        ['clean'] // remove formatting button
      ]
      const _this = this
    return {
      content: '',
      editorOption: {
        modules: {
          toolbar: {
            container: toolbarOptions,
            handlers: {
              'image': function() {
                _this.$popup(uploadImage) 
              }
            }
          },
        }
      }
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