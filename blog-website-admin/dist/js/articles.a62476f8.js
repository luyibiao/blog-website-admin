(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["articles"],{"0548":function(t,e,i){"use strict";var l=i("0842"),s=i.n(l);s.a},"0842":function(t,e,i){},"2eeb":function(t,e,i){"use strict";var l=i("1c8b"),s=i("5dfd").map,n=i("1ea7"),a=i("ff9c"),o=n("map"),r=a("map");l({target:"Array",proto:!0,forced:!o||!r},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"338a":function(t,e,i){},3466:function(t,e,i){"use strict";var l=i("1c8b"),s=i("5dfd").findIndex,n=i("258f"),a=i("ff9c"),o="findIndex",r=!0,c=a(o);o in[]&&Array(1)[o]((function(){r=!1})),l({target:"Array",proto:!0,forced:r||!c},{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),n(o)},"6e9a":function(t,e,i){"use strict";i.r(e);var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"edit-articles"},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"edit-articles_forms"},[i("el-form",{ref:"ruleform",attrs:{model:t.form,"label-position":"right","label-width":"80px"}},[i("el-form-item",{attrs:{label:"文章标题",prop:"title",rules:t.isEmpty("标题不能为空")}},[i("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入标题",size:"medium"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),i("el-form-item",{attrs:{label:"作者",rules:t.isEmpty("作者不能为空"),prop:"author"}},[i("el-input",{staticStyle:{width:"120px"},attrs:{placeholder:"请输入作者",size:"medium"},model:{value:t.form.author,callback:function(e){t.$set(t.form,"author",e)},expression:"form.author"}})],1),i("el-form-item",{attrs:{label:"文章logo"}},[i("b-upload",{attrs:{fileList:t.fileList},on:{"on-remove":t.uploadRemove,"on-success":t.uploadSuccess}})],1),i("el-form-item",{attrs:{label:"标签"}},[i("div",[t._l(t.selectArr,(function(e,l){return i("el-tag",{key:l,staticStyle:{"margin-right":"10px"}},[t._v(" "+t._s(e.label)+" ")])})),i("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:t.onShowLabel}},[t._v("+ 增加标签")])],2)]),i("el-form-item",{attrs:{prop:"contentdesc",rules:t.isEmpty("文章简介不能为空"),label:"文章简介"}},[i("el-input",{staticStyle:{width:"320px"},attrs:{type:"textarea",autosize:{minRows:5,maxRows:6},maxlength:600,"show-word-limit":"",placeholder:"请输入文章简介"},model:{value:t.form.contentdesc,callback:function(e){t.$set(t.form,"contentdesc",e)},expression:"form.contentdesc"}})],1),i("el-form-item",{attrs:{label:"文章类型",rules:t.isEmpty("文章类型不能为空")}},[i("el-select",{staticStyle:{width:"150px"},on:{change:t.typeChange},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},t._l(t.getArticleType,(function(t,e){return i("el-option",{key:e,attrs:{label:t.name,value:t.code}})})),1),i("el-select",{staticStyle:{"margin-left":"15px",width:"150px"},model:{value:t.form.child_type,callback:function(e){t.$set(t.form,"child_type",e)},expression:"form.child_type"}},[i("el-option",{attrs:{value:"",label:"不选"}}),t._l(t.articleItemlist,(function(t,e){return i("el-option",{key:e,attrs:{label:t.name,value:t.code}})}))],2)],1)],1)],1),i("div",{staticClass:"edit-articles_quill"},[i("b-quill",{model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}}),i("div",{staticClass:"btn"},[t.editFlag?t._e():i("el-button",{staticStyle:{"margin-right":"30px"},on:{click:t.ondraft}},[t._v("存为草稿")]),i("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v(t._s(t.editFlag?"修改":"发布"))])],1)],1)])},s=[],n=(i("2eeb"),i("fe8a"),i("e35a"),i("5e9f"),i("5748")),a=i("e793"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ui-popup",{staticClass:"edit-addlabel",attrs:{title:t.title,isFooter:!0,width:"700px"},on:{onSubmit:t.onSubmit,onCancel:t.onCancel}},[i("div",{staticClass:"edit-addlabel_search"},[i("el-input",{staticStyle:{width:"320px"},attrs:{placeholder:"搜索标签"},model:{value:t.lables,callback:function(e){t.lables=e},expression:"lables"}},[i("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.onSearch},slot:"append"})],1)],1),i("div",{staticClass:"edit-addlabel_content"},t._l(t.list,(function(e,l){return i("span",{key:l,staticClass:"edit-addlabel_tag",class:t.classes(e),on:{click:function(i){return t.onSelect(e)}}},[t._v(" "+t._s(e.label)+" ")])})),0)])},r=[],c=(i("3466"),i("d497"),i("ea69"),{props:{params:{type:Object,default:function(){return{}}}},data:function(){return{lables:"",title:"选择标签",list:[],pages:{pageSize:20,pageIndex:0},selectList:[],resList:[]}},created:function(){this.selectList=this.params.list||[],this.getList()},methods:{onSearch:function(){this.pages.pageIndex=0,this.getList()},getList:function(){var t=this,e=Object(a["a"])({label:this.lables},this.pages);this.$api.queryLabelList(e).then((function(e){t.list=e.list})).catch((function(e){t.reject()}))},classes:function(t){var e=this.selectList.some((function(e){return e.id===t.id}));return[e&&"is-select"]},onSelect:function(t){var e=this.selectList.findIndex((function(e){return e.id===t.id}));if(e>=0)this.selectList.splice(e,1);else{if(5===this.selectList.length)return void this.$message.info("最多添加五个标签");this.selectList.push(t)}},onCancel:function(){this.reject()},onSubmit:function(){var t=JSON.parse(JSON.stringify(this.selectList));this.resolve(t)}}}),u=c,d=(i("b7d6"),i("9ca4")),f=Object(d["a"])(u,o,r,!1,null,"7ade3f6e",null),p=f.exports,h=i("9f3a"),m={name:"",data:function(){return{form:{title:"",author:"九七",label:"",content:"",contentdesc:"",type:"SKILL",child_type:"",status:"LINE",logoPath:"",logonName:"",logo:""},selectArr:[],loading:!1,id:"",fileList:[],editFlag:!1,articleItemlist:[]}},computed:Object(a["a"])({},Object(h["b"])(["getArticleType"])),created:function(){this.id=this.$route.query.id||"",this.id&&(this.editFlag=!0,this.getDetail()),this.typeChange(this.getArticleType[0].code)},methods:{init:function(t){var e=this;Object.keys(this.form).map((function(i){t.hasOwnProperty(i)&&(e.form[i]=t[i])})),this.selectArr=JSON.parse(this.form.label||"[]"),this.fileList.push({url:t.logo})},getDetail:function(){var t=this;this.$api.queryArticleDetail({id:this.id}).then((function(e){t.init(e)}))},onShowLabel:function(){var t=this,e={list:Object(n["a"])(this.selectArr)};this.$popup(p,e).then((function(e){t.selectArr=e})).catch((function(t){console.log(t)}))},typeChange:function(t){var e=this;this.$api.queryTypeOrSecondsType({articletype_code:t}).then((function(t){e.articleItemlist=t.list}))},uploadSuccess:function(t){console.log(t),this.form.logoPath=t.path,this.form.logonName=t.fName},uploadRemove:function(t,e){console.log(e),this.form.logo=""},submit:function(){var t=this;this.form.content?this.$refs.ruleform.validate((function(e){if(e){t.loading=!0,t.form.label=JSON.stringify(t.selectArr);var i=Object(a["a"])({},t.form);t.editFlag&&(i.id=t.id);var l=t.editFlag?"updateArticle":"addArticle",s=t.editFlag?"修改成功":"新增成功";t.$api[l](i).then((function(e){t.$message.success(s),t.loading=!1,setTimeout((function(e){t.$router.replace({path:"/list/all"})}),200)})).catch((function(e){t.loading=!1}))}})):this.$message.error("内容不能为空")},ondraft:function(){this.form.status="DRAFT",this.submit()},isEmpty:function(t){return[{required:!0,message:t,trigger:"blur"}]}}},g=m,b=(i("0548"),Object(d["a"])(g,l,s,!1,null,null,null));e["default"]=b.exports},b7d6:function(t,e,i){"use strict";var l=i("338a"),s=i.n(l);s.a},d497:function(t,e,i){"use strict";var l=i("1c8b"),s=i("5dfd").some,n=i("d7e1"),a=i("ff9c"),o=n("some"),r=a("some");l({target:"Array",proto:!0,forced:!o||!r},{some:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},ea69:function(t,e,i){"use strict";var l=i("1c8b"),s=i("e1d6"),n=i("3da3"),a=i("d88d"),o=i("3553"),r=i("1ca1"),c=i("1bbd"),u=i("1ea7"),d=i("ff9c"),f=u("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,m=Math.min,g=9007199254740991,b="Maximum allowed length exceeded";l({target:"Array",proto:!0,forced:!f||!p},{splice:function(t,e){var i,l,u,d,f,p,v=o(this),y=a(v.length),x=s(t,y),S=arguments.length;if(0===S?i=l=0:1===S?(i=0,l=y-x):(i=S-2,l=m(h(n(e),0),y-x)),y+i-l>g)throw TypeError(b);for(u=r(v,l),d=0;d<l;d++)f=x+d,f in v&&c(u,d,v[f]);if(u.length=l,i<l){for(d=x;d<y-l;d++)f=d+l,p=d+i,f in v?v[p]=v[f]:delete v[p];for(d=y;d>y-l+i;d--)delete v[d-1]}else if(i>l)for(d=y-l;d>x;d--)f=d+l-1,p=d+i-1,f in v?v[p]=v[f]:delete v[p];for(d=0;d<i;d++)v[d+x]=arguments[d+2];return v.length=y-l+i,u}})}}]);
//# sourceMappingURL=articles.a62476f8.js.map