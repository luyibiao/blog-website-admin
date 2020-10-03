import homeMenu from '../home'
import editMenu from '../edit'

const menu = {
    //模块名
    home: {
        name: '数据',
        icon: 'iconxin-xitong',
        children: homeMenu
    },
    edit: {
        name: '编辑',
        children: editMenu
    }
}
export default menu