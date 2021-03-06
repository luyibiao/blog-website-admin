export default {
  // 十六进制转rgba 
  colorToRGB(val, opa) {
    var pattern = /^(#?)[a-fA-F0-9]{6}$/; //16进制颜色值校验规则
      var isOpa = typeof opa == 'number'; //判断是否有设置不透明度

      if (!pattern.test(val)) { //如果值不符合规则返回空字符
          return '';
      }

      var v = val.replace(/#/, ''); //如果有#号先去除#号
      var rgbArr = [];
      var rgbStr = '';

      for (var i = 0; i < 3; i++) {
          var item = v.substring(i * 2, i * 2 + 2);
          var num = parseInt(item, 16);
          rgbArr.push(num);
      }

      rgbStr = rgbArr.join();
      rgbStr = 'rgb' + (isOpa ? 'a' : '') + '(' + rgbStr + (isOpa ? ',' + opa : '') + ')';
      return rgbStr;
  },

  // 设置vuex中面包屑的值
  setBreadcrumb({prevTitle, prevUrl, currentTitle} = {}) {
    store.commit('setbBreadcrumbInfo', {
      prevTitle: prevTitle || '首页',
      prevUrl: prevUrl || '/',
      currentTitle: currentTitle || $vue.$route.meta.title
    })
  },

  // 判断是否为对象
  isObject: val => Object.prototype.toString.call(val).slice(8, -1) === 'Object',

  // 判断对象是否为空
  emptyObj(val, isEnumerable = false) {
    return !!(Object.prototype.toString.call(val) === '[object Object]' ? 
    isEnumerable ? 
    Reflect.ownKeys(val) : 
    Object.keys(val).length : 
    false)
  },

  // 文章状态
  statusList: [
    // 上线装填
    {code: 'LINE', name: '上线'},
    {code: 'OFFLINE', name: '下线'},
  ],

  // 文章类型
  articlesType: [{
    name: '技术分享'
  }]
}