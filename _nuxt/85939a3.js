(window.webpackJsonp=window.webpackJsonp||[]).push([[132,101],{372:function(t,e,r){"use strict";r.r(e);var n=r(17),c=r(40),o=r(41),l=r(22),f=r(5),d=(r(37),r(7),r(76),r(11));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var h=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},m=function(t){Object(c.a)(r,t);var e=v(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(d.Vue);h([Object(d.Prop)({required:!0})],m.prototype,"items",void 0);var y=m=h([d.Component],m),j=r(26),component=Object(j.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-2 px-0 mx-0",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports},619:function(t,e,r){"use strict";r.r(e);var n=r(17),c=r(27),o=r(40),l=r(41),f=r(22),d=r(5),v=(r(37),r(7),r(76),r(11)),h=r(93),m=r(372);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var j=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},_=function(t){Object(o.a)(r,t);var e=y(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).title=t.$t("物体検出"),t.q="",t.mdiMagnify=h.j,t.mdiClose=h.f,t.bh=[{text:t.$t("top"),disabled:!1,to:t.localePath({name:"index"}),exact:!0},{text:t.title}],t}return Object(c.a)(r,[{key:"head",value:function(){return{title:this.title}}}]),r}(v.Vue),O=_=j([Object(v.Component)({components:{Breadcrumbs:m.default}})],_),R=r(26),component=Object(R.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Breadcrumbs",{attrs:{items:t.bh}}),t._v(" "),r("v-container",{staticClass:"my-5 mb-10"},[r("h2",{staticClass:"mb-5"},[t._v(t._s(t.title))]),t._v(" "),r("h3",{staticClass:"mt-10 mb-5"},[t._v("画像をアップロードする")]),t._v(" "),r("v-btn",{staticClass:"ma-1",attrs:{color:"primary darken-2",rounded:"",depressed:"",href:"http://app.ldas.jp:5003"}},[t._v("登録画面")]),t._v(" "),r("h3",{staticClass:"mt-10 mb-5"},[t._v("URLを使う")]),t._v(" "),r("v-text-field",t._b({staticClass:"mb-5",attrs:{autocomplete:"off",light:"","single-line":"",filled:"",rounded:"",dense:"","hide-details":"",clearable:!0,"clear-icon":t.mdiClose,placeholder:"http://..."},model:{value:t.q,callback:function(e){t.q=e},expression:"q"}},"v-text-field",t.attrs,!1)),t._v(" "),r("v-btn",{staticClass:"ma-1",attrs:{color:"primary darken-2",rounded:"",depressed:"",href:t.q?"http://app.ldas.jp:5003/?image="+t.q:null}},[t._v("画像取得")]),t._v(" "),r("v-btn",{staticClass:"ma-1",attrs:{color:"primary darken-2",rounded:"",depressed:"",href:t.q?"http://app.ldas.jp:5003/v1/predict?image="+t.q:null}},[t._v("API利用")]),t._v(" "),r("v-btn",{staticClass:"ma-1",attrs:{color:"success",rounded:"",depressed:""},on:{click:function(e){t.q="https://www.dl.ndl.go.jp/api/iiif/2586696/R0000009/full/600,/0/default.jpg"}}},[t._v("Sample 1: 国立国会図書館\n    ")]),t._v(" "),r("v-btn",{staticClass:"ma-1",attrs:{color:"success",rounded:"",depressed:""},on:{click:function(e){t.q="https://archive.wul.waseda.ac.jp/kosho/ne01/ne01_00834//ne01_00834_p0005.jpg"}}},[t._v("Sample 2: 早稲田大学\n    ")]),t._v(" "),r("div",[r("v-img",{attrs:{src:t.q,contain:"",width:"200",height:"200"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);