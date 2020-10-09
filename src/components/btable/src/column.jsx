
export default {
  name: 'chhColumn',
  props: {
      column: {
          type: Object, 
          default(){
              return {}
          }
      },
      scope: {
          type: Object, 
          default(){
              return {}
          }
      },
      action: {
          type: String,
          default: 'render'
      }
  },
  render(h) {
      const vm = this;
      const {column, scope, action, ...others} = vm._props
      return column[action](scope, column, h);
  },
}