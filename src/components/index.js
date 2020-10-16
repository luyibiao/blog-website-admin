
import Vue from 'vue'
// 图标
import iconfont from './iconfont'
// 富文本编辑器
import quill from './quill'

// popup框
import popup from './popup';

// js方法
import jsComp from './js';

// table
import table from './btable'

// 图片上传
import upload from './upload'

// 基础组件
import tableLayout from './basic'

var conponents = [
  ...iconfont,
  ...quill,
  ...popup,
  ...table,
  ...upload,
  ...tableLayout
]


//出口函数为组件安装函数
const install = vm => {
  conponents.forEach(component => {
    vm.component(component.name, component)
  });
  for (const key in jsComp) {
    if (!vm.prototype.hasOwnProperty(key)) {
      Vue.prototype[key] = jsComp[key];
    }else{
      console.warn( key + '被占用')
    }
  }
}
export default {
  install,
}