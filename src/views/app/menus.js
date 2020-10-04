import homeMenu from '../home'
import editMenu from '../edit'
import listMenu from '../list'
import labelMenu from '../label'
import sessionMenu from '../session'

const menu = {
    //模块名
    home: {
        name: '数据管理',
        icon: 'iconxin-xitong',
        children: homeMenu
    },
    edit: {
        name: '文章管理',
        children: editMenu
    },
    list: {
        name: '文章列表',
        children: listMenu
    },
    label: {
        name: '标签列表',
        children: labelMenu
    },
    session: {
        name: '权限设置',
        children: sessionMenu
    }
}
export default menu