(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["hotArticles"],{"16f4":function(t,e,l){},"2eeb":function(t,e,l){"use strict";var n=l("1c8b"),i=l("5dfd").map,a=l("1ea7"),c=l("ff9c"),r=a("map"),o=c("map");n({target:"Array",proto:!0,forced:!r||!o},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"680a":function(t,e,l){},"771d":function(t,e,l){"use strict";var n=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"article-components-tables"},[l("table-layout",{scopedSlots:t._u([{key:"form",fn:function(){return[l("el-form",{attrs:{model:t.forms,inline:"","label-position":"left"}},[l("el-form-item",{attrs:{label:"标题"}},[l("el-input",{staticStyle:{width:"220px"},model:{value:t.forms.title,callback:function(e){t.$set(t.forms,"title",e)},expression:"forms.title"}})],1),l("el-form-item",{attrs:{label:"作者"}},[l("el-input",{staticStyle:{width:"150px"},model:{value:t.forms.author,callback:function(e){t.$set(t.forms,"author",e)},expression:"forms.author"}})],1),l("el-form-item",{attrs:{label:"文章类型"}},[l("el-select",{staticStyle:{width:"120px"},on:{change:t.typeChange},model:{value:t.forms.type,callback:function(e){t.$set(t.forms,"type",e)},expression:"forms.type"}},[l("el-option",{attrs:{label:"全部",value:""}}),t._l(t.getArticleType,(function(t,e){return l("el-option",{key:e,attrs:{label:t.name,value:t.code}})}))],2),l("el-select",{staticStyle:{"margin-left":"15px",width:"150px"},model:{value:t.forms.child_type,callback:function(e){t.$set(t.forms,"child_type",e)},expression:"forms.child_type"}},[l("el-option",{attrs:{value:"",label:"全部"}}),t._l(t.articleItemlist,(function(t,e){return l("el-option",{key:e,attrs:{label:t.name,value:t.code}})}))],2)],1),l("el-form-item",{attrs:{label:"创建时间"}},[l("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.forms.create_time,callback:function(e){t.$set(t.forms,"create_time",e)},expression:"forms.create_time"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:t.onSearch}},[t._v("搜索")])],1)],1)]},proxy:!0}])},[[l("b-table",{attrs:{action:"queryArticle",hasPagination:"",forms:Object.assign({},t.forms,t.formsProp),refresh:t.refresh,columns:t.columns}})]],2)],1)},i=[],a=(l("2eeb"),l("e793")),c=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-button",{staticClass:"article-components-status_btn",attrs:{size:"mini",type:"text"},on:{click:t.click}},[t._v(" "+t._s(t.getStatus().text||"")+" ")])},r=[],o={props:{info:{type:Object,default:function(){return{}}},callback:{type:Function,default:null}},methods:{getStatus:function(){if(this.$overall.emptyObj(this.info)){var t={LINE:{text:"下线",code:"OFFLINE",type:"primary"},OFFLINE:{text:"上线",code:"LINE",type:"success"}};return t[this.info.status]}return{}},click:function(){this.callback&&this.callback({id:this.info.id,status:this.getStatus().code})}}},s=o,u=l("9ca4"),f=Object(u["a"])(s,c,r,!1,null,null,null),p=f.exports,d=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-button",{attrs:{type:"text",size:"mini"},on:{click:t.click}},[t._v(" 发布 ")])},m=[],h={props:{info:{type:Object,default:function(){return{}}},callback:{type:Function,default:null}},methods:{click:function(){this.callback&&this.callback({id:this.info.id,status:"LINE"})}}},b=h,y=Object(u["a"])(b,d,m,!1,null,null,null),k=y.exports,v=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-button",{attrs:{type:"text",size:"mini"},on:{click:t.click}},[t._v(" "+t._s(1==t.info.topping?"取消置顶":"置顶")+" ")])},_=[],g={props:{info:{type:Object,default:function(){return{}}},callback:{type:Function,default:null}},methods:{click:function(){this.callback&&this.callback({id:this.info.id,topping:1==this.info.topping?0:1})}}},x=g,w=Object(u["a"])(x,v,_,!1,null,null,null),$=w.exports,O=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-button",{attrs:{type:"text"},on:{click:t.click}},[t._v(" "+t._s(1==t.info.hot_comments?"取消热评":"设为热评")+" ")])},j=[],F={props:{info:{type:Object,default:function(){return{}}},callback:{type:Function,default:null}},methods:{click:function(){this.callback&&this.callback({id:this.info.id,hot_comments:1==this.info.hot_comments?0:1})}}},S=F,E=Object(u["a"])(S,O,j,!1,null,null,null),A=E.exports,I=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-button",{attrs:{type:"text",size:"mini"},on:{click:t.click}},[t._v(" 删除 ")])},T=[],B={props:{info:{type:Object,default:function(){return{}}},callback:{type:Function,default:null}},methods:{click:function(){this.callback&&this.callback({id:this.info.id})}}},N=B,C=Object(u["a"])(N,I,T,!1,null,null,null),L=C.exports,z=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-button",{attrs:{type:"text",size:"mini"},on:{click:t.click}},[t._v(" "+t._s(1==t.info.recommend?"取消推荐":"推荐")+" ")])},P=[],J={props:{info:{type:Object,default:function(){return{}}},callback:{type:Function,default:null}},methods:{click:function(){this.callback&&this.callback({id:this.info.id,recommend:1==this.info.recommend?0:1})}}},q=J,M=Object(u["a"])(q,z,P,!1,null,null,null),D=M.exports,R=l("9f3a"),G={components:{statusBtn:p,draftBtn:k,toppingBtn:$,hotcBtn:A,deleteBtn:L,recommend:D},props:{formsProp:{type:Object,default:function(){return{}}}},data:function(){var t=this,e=this.$createElement;return{forms:{title:"",create_time:"",type:"",child_type:""},refresh:!1,loading:!1,columns:[{label:"文章标题",prop:"title",width:"180px",render:function(t){return e("router-link",{attrs:{to:"/edit/articles?id="+t.row.id}},[t.row.title])}},{label:"文章作者",prop:"author"},{label:"观看和评论数",render:function(t){return e("div",[e("p",["观看数： ",t.row.watch_num]),e("p",["评论数： ",t.row.comment_num])])},width:"130px"},{label:"文章logo",width:"150px",render:function(t){return e("img",{attrs:{src:t.row.logo},class:"article-components_logos"})}},{label:"标签",width:"220px",render:function(t){var l=JSON.parse(t.row.label||"[]"),n=l.map((function(t){return e("el-tag",{class:"article-components_label"},[t.label])}));return e("div",[n])}},{label:"文章状态",width:"200px",render:function(l){var n=l.row,i=null;return i=0==n.draft?e("p",["草稿文章"]):e("div",[e("p",["状态：",t.$vueFilters.formatStatus(n.status,t.$overall.statusList)]),e("p",["是否置顶：",1==n.topping?"是":"否"]),e("p",["是否热评文章：",1==n.hot_comments?"是":"否"])]),i}},{label:"文章类型",width:"150px",render:function(l){l.row,e("span",["- ",t.$vueFilters.formatStatus(l.row.child_type,t.articleItemlist)]);return e("span",[t.$vueFilters.formatStatus(l.row.type,t.getArticleType)," "])}},{label:"创建时间",prop:"create_time",width:"200px"},{label:"修改时间",prop:"update_time",width:"200px"},{label:"操作",width:"200px",fixed:"right",render:function(l){var n=l.row,i=null;return i="DRAFT"==n.status?e(k,{attrs:{info:n,callback:t.callback}}):e("div",[e(p,{attrs:{info:l.row,callback:t.callback}}),e($,{attrs:{info:l.row,callback:t.callback}}),e(D,{attrs:{info:l.row,callback:t.callback}}),e(A,{attrs:{info:l.row,callback:t.callback}})]),e("div",[i,e(L,{attrs:{info:l.row,callback:t.deleteFn}})])}}],articleItemlist:[]}},computed:Object(a["a"])({},Object(R["b"])(["getArticleType"])),created:function(){this.typeChange(this.getArticleType[0].code)},methods:{onSearch:function(){this.refresh=!this.refresh},callback:function(t){var e=this;this.loading=!0,this.$api.updateArticle(Object(a["a"])({check:1},t)).then((function(t){e.$message.success("修改成功"),e.refresh=!e.refresh,e.loading=!1})).catch((function(t){e.loading=!1}))},typeChange:function(t){var e=this;this.$api.queryTypeOrSecondsType({articletype_code:t}).then((function(t){e.articleItemlist=t.list}))},deleteFn:function(t){var e=this;this.$confirm("确定删除该文章？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(l){e.loading=!0,e.$api.deleteArticle(t).then((function(t){e.$message.success("删除成功"),e.refresh=!e.refresh,e.loading=!1})).catch((function(t){e.loading=!1}))}))}}},H=G,K=(l("7dcd"),Object(u["a"])(H,n,i,!1,null,null,null));e["a"]=K.exports},"7dcd":function(t,e,l){"use strict";var n=l("680a"),i=l.n(n);i.a},bde1:function(t,e,l){"use strict";l.r(e);var n=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"hot-article"},[l("tables",{attrs:{formsProp:t.forms}})],1)},i=[],a=l("771d"),c={components:{tables:a["a"]},data:function(){return{forms:{hot_comments:"1"}}}},r=c,o=(l("d8aa"),l("9ca4")),s=Object(o["a"])(r,n,i,!1,null,null,null);e["default"]=s.exports},d8aa:function(t,e,l){"use strict";var n=l("16f4"),i=l.n(n);i.a}}]);
//# sourceMappingURL=hotArticles.24681039.js.map