(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-507c1b14"],{"25d0":function(t,a,s){},2627:function(t,a,s){t.exports=s.p+"img/vip.c9cdc9ff.svg"},"382f":function(t,a,s){},3870:function(t,a,s){"use strict";var n=s("d98d"),i=s.n(n);i.a},"3b42":function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"profile"}},[s("nav-bar",{staticClass:"nav-bar"},[s("div",{attrs:{slot:"center"},slot:"center"},[t._v("我的档案")])]),s("user-info"),s("account-info"),s("normal-list-view",{attrs:{"list-data":t.orderList}}),s("normal-list-view",{attrs:{"list-data":t.serviceList}})],1)},i=[],c=s("a7ac"),e=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"user-info"},[n("img",{staticClass:"avatar",attrs:{src:s("7df3"),alt:""}}),n("div",{staticClass:"info"},[n("div",{staticClass:"login"},[t._v("登录/注册")]),n("div",{staticClass:"phone"},[n("img",{attrs:{src:s("4d36"),alt:""}}),n("span",[t._v("暂无绑定手机号")])])]),n("div",{staticClass:"arrow"},[n("img",{attrs:{src:s("d715"),alt:""}})])])}],o={name:"UserInfo"},l=o,v=(s("985d"),s("2877")),u=Object(v["a"])(l,e,r,!1,null,"0de8ad77",null),f=u.exports,d=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"account"},[s("div",{staticClass:"account-item"},[s("div",{staticClass:"number"},[s("span",{staticClass:"balance"},[t._v("0.00")]),t._v("元\n    ")]),s("div",{staticClass:"account-info"},[t._v("我的余额")])]),s("div",{staticClass:"account-item"},[s("div",{staticClass:"number"},[s("span",{staticClass:"balance"},[t._v("0")]),t._v("个\n    ")]),s("div",{staticClass:"account-info"},[t._v("我的优惠")])]),s("div",{staticClass:"account-item"},[s("div",{staticClass:"number"},[s("span",{staticClass:"balance"},[t._v("0")]),t._v("分\n    ")]),s("div",{staticClass:"account-info"},[t._v("我的积分")])])])}],m={name:"AccountInfo"},g=m,_=(s("b0a9"),Object(v["a"])(g,d,p,!1,null,"20403118",null)),b=_.exports,C=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"normal-list"},t._l(t.listData,(function(a,n){return s("div",{key:n,staticClass:"item"},[s("span",{staticClass:"icon"},[s("img",{attrs:{src:t.iconURL(a),alt:""}})]),s("div",{staticClass:"info"},[t._v(t._s(a.info))])])})),0)},h=[],w={name:"NormalListView",props:{listData:{type:Array,default:function(){return[]}}},methods:{iconURL:function(t){return s("c390")("./"+t.icon)}}},x=w,E=(s("9afb"),Object(v["a"])(x,C,h,!1,null,"52a0c2e0",null)),L=E.exports,O={name:"Profile",components:{NavBar:c["a"],UserInfo:f,AccountInfo:b,NormalListView:L},data:function(){return{orderList:[{icon:"message.svg",info:"我的消息"},{icon:"pointer.svg",info:"积分商城"},{icon:"vip.svg",info:"会员卡"}],serviceList:[{icon:"cart.svg",info:"我的购物车"},{icon:"shopping.svg",info:"下载购物APP"}]}}},$=O,j=(s("47dc"),Object(v["a"])($,n,i,!1,null,"ec2e13ba",null));a["default"]=j.exports},"3d7a":function(t,a,s){t.exports=s.p+"img/pointer.71eb1cd2.svg"},"47dc":function(t,a,s){"use strict";var n=s("d28c"),i=s.n(n);i.a},"4d36":function(t,a,s){t.exports=s.p+"img/phone.aa2bc9a6.svg"},"7df3":function(t,a,s){t.exports=s.p+"img/avatar.bd23b9b1.svg"},"985d":function(t,a,s){"use strict";var n=s("fd9b"),i=s.n(n);i.a},"9afb":function(t,a,s){"use strict";var n=s("25d0"),i=s.n(n);i.a},"9dc3":function(t,a,s){t.exports=s.p+"img/message.9948ca06.svg"},a7ac:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"nav-bar"},[s("div",[t._t("left")],2),s("div",[t._t("center")],2),s("div",[t._t("right")],2)])},i=[],c={name:"NavBar"},e=c,r=(s("3870"),s("2877")),o=Object(r["a"])(e,n,i,!1,null,"3fd4f736",null);a["a"]=o.exports},af67:function(t,a,s){t.exports=s.p+"img/cart.0103a021.svg"},b0a9:function(t,a,s){"use strict";var n=s("382f"),i=s.n(n);i.a},c390:function(t,a,s){var n={"./avatar.svg":"7df3","./cart.svg":"af67","./message.svg":"9dc3","./phone.svg":"4d36","./pointer.svg":"3d7a","./shopping.svg":"d88a","./vip.svg":"2627"};function i(t){var a=c(t);return s(a)}function c(t){if(!s.o(n,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=c,t.exports=i,i.id="c390"},d28c:function(t,a,s){},d715:function(t,a,s){t.exports=s.p+"img/arrow-left.95e55ae9.svg"},d88a:function(t,a,s){t.exports=s.p+"img/shopping.7354bae5.svg"},d98d:function(t,a,s){},fd9b:function(t,a,s){}}]);
//# sourceMappingURL=chunk-507c1b14.099bff0d.js.map