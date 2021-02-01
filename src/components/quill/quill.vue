<template>
  <div class="components-quill">
    <quillEditor 
    :value="value"
    ref="myQuillEditor"
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
      quill: null,
      editorOption: {
        modules: {
          toolbar: {
            container: toolbarOptions,
            handlers: {
              'image': function() {
                _this.$popup(uploadImage).then(res => {
                  _this.insertImg(res)
                })
              }
            }
          },
        }
      }
    }
  },
  mounted() {
   
    
  },
  methods: {
    change(e) {
      this.$emit('input', e.html)
    },
    insertImg(info) {
      let quill = this.$refs.myQuillEditor.quill
      // 获取光标所在位置
      const pos = quill.selection.savedRange.index //这个得注意下，网上很多都是不对的
      // 插入图片到光标位置
      quill.insertEmbed(pos,'image',info.path)
      // 调整光标到最后
      // quill.setSelection(length + 1)
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
        .ql-editor  {
          line-height: 2;
          letter-spacing: 1px;
          font-size: 16px;
          color: #636b6f;
          .ql-indent-1:not(.ql-direction-rtl) {
            padding-left: 0;
            text-indent: 2em;
          }
        }
      }
    }
  }
</style>