(window.webpackJsonp=window.webpackJsonp||[]).push([[51,12],{566:function(e,t,r){"use strict";r.r(t);var n=r(22),c=r(39),o=r(35),l=r(18),d=r(8),f=(r(10),r(3),r(68),r(37));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(l.a)(e);if(t){var c=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var m=function(e,t,r,desc){var n,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(c<3?n(o):c>3?n(t,r,o):n(t,r))||o);return c>3&&o&&Object.defineProperty(t,r,o),o},h=function(e){Object(c.a)(r,e);var t=v(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return r}(f.Vue);m([Object(f.Prop)({required:!0})],h.prototype,"items",void 0);var y=h=m([f.Component],h),O=r(54),j=r(60),_=r.n(j),w=r(576),x=r(556),k=r(218),C=r(82),component=Object(O.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-2 px-0 mx-0",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:e.items},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);t.default=component.exports;_()(component,{VBreadcrumbs:w.a,VContainer:x.a,VIcon:k.a,VSheet:C.a})},567:function(e,t,r){var content=r(568);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("b1bed018",content,!0,{sourceMap:!1})},568:function(e,t,r){var n=r(19)(!1);n.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=n},576:function(e,t,r){"use strict";r(9),r(6),r(11),r(3),r(10),r(12),r(15);var n=r(2),c=(r(64),r(567),r(69)),o=r(5);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=Object(o.a)(c.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return e("li",[e(r,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),v=r(0),m=Object(v.i)("v-breadcrumbs__divider","li"),h=r(16);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}t.a=Object(o.a)(h.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(m,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(f,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},709:function(e,t,r){"use strict";r.r(t);r(68);var n=r(27),c=r(22),o=r(31),l=r(39),d=r(35),f=r(18),v=r(8),m=(r(84),r(10),r(3),r(23),r(50),r(55),r(37)),h=r(114),y=r.n(h),O=r(142),j=r(566);function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(f.a)(e);if(t){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var w=function(e,t,r,desc){var n,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(c<3?n(o):c>3?n(t,r,o):n(t,r))||o);return c>3&&o&&Object.defineProperty(t,r,o),o},x=function(e){Object(l.a)(f,e);var t,r,d=_(f);function f(){var e;return Object(c.a)(this,f),(e=d.apply(this,arguments)).title=e.$t("object_detection"),e.q="",e.mdiMagnify=O.j,e.mdiClose=O.f,e.bh=[{text:e.$t("top"),disabled:!1,to:e.localePath({name:"index"}),exact:!0},{text:e.$t("machine_learning"),disabled:!1,to:e.localePath({name:"ml"}),exact:!0},{text:e.title}],e.uploadFile=null,e.uploadedBase64="",e.previewBase64="",e.loading=!1,e}return Object(o.a)(f,[{key:"head",value:function(){return{title:this.title}}},{key:"selectedFile",value:(r=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=t.target.files,e.next=4,k(r[0]);case 4:n=e.sent,this.uploadedBase64=n;case 6:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"upload",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(){var t,r,n,c,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,t=this.uploadedBase64,r=t.split(",")[0],t=t.replace("".concat(r,","),""),n={method:"post",url:"https://d3hfvu5xqm867i.cloudfront.net/overall/detect",headers:{"Content-Type":"text/plain"},data:t},e.next=7,y()(n);case 7:c=e.sent,data=c.data,this.previewBase64="data:image/jpeg;base64,".concat(data.content),this.loading=!1;case 11:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),f}(m.Vue);x=w([Object(m.Component)({components:{Breadcrumbs:j.default}})],x);var k=function(e){return new Promise((function(t,r){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return r(e)}}))},C=x,P=r(54),R=r(60),B=r.n(R),$=r(286),D=r(556),S=r(225),V=r(265),E=r(119),component=Object(P.a)(C,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Breadcrumbs",{attrs:{items:e.bh}}),e._v(" "),r("v-container",{staticClass:"my-5 mb-10"},[r("h2",{staticClass:"mb-5"},[e._v(e._s(e.title))]),e._v(" "),r("h3",{staticClass:"mt-10 mb-5"},[e._v(e._s(e.$t("upload")))]),e._v(" "),r("div",{staticClass:"mb-5"},[r("input",{attrs:{type:"file",name:"file","truncate-length":"15"},on:{change:e.selectedFile}})]),e._v(" "),r("v-btn",{staticClass:"ma-1",attrs:{color:"primary darken-2",rounded:"",depressed:""},on:{click:e.upload}},[e._v(e._s(e.$t("upload")))]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.uploadedBase64,expression:"uploadedBase64"}]},[r("v-img",{attrs:{src:e.uploadedBase64,contain:"",width:"200",height:"200"}})],1),e._v(" "),e.loading?[r("div",{staticClass:"text-center pa-10"},[r("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]:[r("v-img",{staticClass:"my-5",attrs:{src:e.previewBase64}})],e._v(" "),r("h3",{staticClass:"mt-10 mb-5"},[e._v("URL")]),e._v(" "),r("v-text-field",{staticClass:"mb-5",attrs:{autocomplete:"off",light:"","single-line":"",filled:"",rounded:"",dense:"","hide-details":"",clearable:!0,"clear-icon":e.mdiClose,placeholder:"http://..."},model:{value:e.q,callback:function(t){e.q=t},expression:"q"}}),e._v(" "),r("v-btn",{staticClass:"ma-1",attrs:{color:"primary darken-2",rounded:"",depressed:"",href:e.q?"https://da.dl.itc.u-tokyo.ac.jp/mirador/?manifest=https://d3hfvu5xqm867i.cloudfront.net/yolo/kunshujo/?url="+e.q+"&annotationState=1":null}},[e._v(e._s(e.$t("viewer")))]),e._v(" "),r("v-btn",{staticClass:"ma-1",attrs:{color:"primary darken-2",rounded:"",depressed:"",href:e.q?"https://d3hfvu5xqm867i.cloudfront.net/yolo/kunshujo/?url="+e.q:null}},[e._v(e._s(this.$t("api")))]),e._v(" "),r("v-btn",{staticClass:"ma-1",attrs:{color:"success",rounded:"",depressed:""},on:{click:function(t){e.q="https://www.dl.ndl.go.jp/api/iiif/2586696/R0000009/full/600,/0/default.jpg"}}},[e._v("Sample 1: 国立国会図書館\n    ")]),e._v(" "),r("v-btn",{staticClass:"ma-1",attrs:{color:"success",rounded:"",depressed:""},on:{click:function(t){e.q="https://archive.wul.waseda.ac.jp/kosho/ne01/ne01_00834//ne01_00834_p0005.jpg"}}},[e._v("Sample 2: 早稲田大学\n    ")]),e._v(" "),r("v-btn",{staticClass:"ma-1",attrs:{color:"success",rounded:"",depressed:""},on:{click:function(t){e.q="https://www.kansai-u.ac.jp/Museum/osaka-toshi/img/documents/kakudai/osaka_kashi.jpg"}}},[e._v("Sample 3: 関西大学\n    ")]),e._v(" "),r("div",[r("v-img",{attrs:{src:e.q,contain:"",width:"200",height:"200"}})],1)],2)],1)}),[],!1,null,null,null);t.default=component.exports;B()(component,{VBtn:$.a,VContainer:D.a,VImg:S.a,VProgressCircular:V.a,VTextField:E.a})}}]);