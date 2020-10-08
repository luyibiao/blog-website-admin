
import Vue from 'vue'
// 图标
import iconfont from './iconfont'
// 富文本编辑器
import quill from './quill'

var conponents = [
  ...iconfont,
  ...quill
]


//出口函数为组件安装函数
const install = vm => {
  conponents.forEach(component => {
    vm.component(component.name, component)
  });
  // for (const key in jsComp) {
  //   if (!vm.prototype.hasOwnProperty(key)) {
  //     Vue.prototype[key] = jsComp[key];
  //   }else{
  //     console.warn( key + '被占用')
  //   }
  // }
}
export default {
  install,
}