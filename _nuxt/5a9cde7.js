(window.webpackJsonp=window.webpackJsonp||[]).push([[154,125],{566:function(t,e,d){"use strict";d.r(e);var f=d(22),n=d(39),r=d(35),c=d(18),o=d(8),l=(d(10),d(3),d(68),d(37));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var d,f=Object(c.a)(t);if(e){var n=Object(c.a)(this).constructor;d=Reflect.construct(f,arguments,n)}else d=f.apply(this,arguments);return Object(r.a)(this,d)}}var v=function(t,e,d,desc){var f,n=arguments.length,r=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,d):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(o.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,d,desc);else for(var i=t.length-1;i>=0;i--)(f=t[i])&&(r=(n<3?f(r):n>3?f(e,d,r):f(e,d))||r);return n>3&&r&&Object.defineProperty(e,d,r),r},h=function(t){Object(n.a)(d,t);var e=m(d);function d(){return Object(f.a)(this,d),e.apply(this,arguments)}return d}(l.Vue);v([Object(l.Prop)({required:!0})],h.prototype,"items",void 0);var _=h=v([l.Component],h),j=d(54),y=d(60),w=d.n(y),x=d(576),O=d(556),k=d(218),P=d(82),component=Object(j.a)(_,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("v-sheet",{attrs:{color:"grey lighten-2"}},[d("v-container",{staticClass:"py-2 px-0 mx-0",attrs:{fluid:""}},[d("v-breadcrumbs",{staticClass:"py-0",attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[d("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;w()(component,{VBreadcrumbs:x.a,VContainer:O.a,VIcon:k.a,VSheet:P.a})},567:function(t,e,d){var content=d(568);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(20).default)("b1bed018",content,!0,{sourceMap:!1})},568:function(t,e,d){var f=d(19)(!1);f.push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),t.exports=f},576:function(t,e,d){"use strict";d(9),d(6),d(11),d(3),d(10),d(12),d(15);var f=d(2),n=(d(64),d(567),d(69)),r=d(5);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(object);t&&(d=d.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,d)}return e}function o(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l=Object(r.a)(n.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(f.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),d=e.tag,data=e.data;return t("li",[t(d,o(o({},data),{},{attrs:o(o({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),m=d(0),v=Object(m.i)("v-breadcrumbs__divider","li"),h=d(16);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(object);t&&(d=d.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,d)}return e}e.a=Object(r.a)(h.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(v,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,d=[],i=0;i<this.items.length;i++){var f=this.items[i];d.push(f.text),e?t.push(this.$scopedSlots.item({item:f})):t.push(this.$createElement(l,{key:d.join("."),props:f},[f.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},590:function(t,e,d){var content=d(591);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(20).default)("7c06aa28",content,!0,{sourceMap:!1})},591:function(t,e,d){var f=d(19)(!1);f.push([t.i,".theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:rgba(0,0,0,.6)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#f5f5f5}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid rgba(0,0,0,.12)}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#505050}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid hsla(0,0%,100%,.12)}.v-data-table{line-height:1.5;max-width:100%}.v-data-table>.v-data-table__wrapper>table{width:100%;border-spacing:0}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{padding:0 16px;transition:height .2s cubic-bezier(.4,0,.6,1)}.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:left}.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:right}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto!important}.v-data-table__progress th{height:auto!important;border:none!important;padding:0;position:relative}.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>th{height:32px}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-data-table--fixed-header>.v-data-table__wrapper,.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr>th{border-bottom:0!important;position:-webkit-sticky;position:sticky;top:0;z-index:2}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed-header.v-data-table--dense>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:32px}",""]),t.exports=f},598:function(t,e,d){"use strict";d(9),d(6),d(11),d(3),d(10),d(12),d(15);var f=d(2),n=(d(26),d(590),d(0)),r=d(16),c=d(5);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(object);t&&(d=d.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,d)}return e}e.a=Object(c.a)(r.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n.h)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},602:function(t,e,d){"use strict";(function(t){d(68);var f=d(27),n=d(22),r=d(31),c=d(39),o=d(35),l=d(18),m=d(8),v=(d(84),d(10),d(3),d(32),d(36),d(37)),h=d(566);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var d,f=Object(l.a)(t);if(e){var n=Object(l.a)(this).constructor;d=Reflect.construct(f,arguments,n)}else d=f.apply(this,arguments);return Object(o.a)(this,d)}}var j=function(t,e,d,desc){var f,n=arguments.length,r=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,d):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,d,desc);else for(var i=t.length-1;i>=0;i--)(f=t[i])&&(r=(n<3?f(r):n>3?f(e,d,r):f(e,d))||r);return n>3&&r&&Object.defineProperty(e,d,r),r},y=function(e){Object(c.a)(m,e);var o,l=_(m);function m(){var e;return Object(n.a)(this,m),(e=l.apply(this,arguments)).title=e.$t("地名分類・凡例"),e.baseUrl="https://kunshujo-i.dl.itc.u-tokyo.ac.jp",e.legend=t.env.legend,e.items=[],e.prefix="https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/ryukyu/data/files/legend/",e}return Object(r.a)(m,[{key:"asyncData",value:(o=Object(f.a)(regeneratorRuntime.mark((function e(f){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=f.payload,f.app,f.$axios,!n){e.next=5;break}return e.abrupt("return",{item:n});case 5:return e.next=8,d(751)("./"+t.env.index);case 8:return r=e.sent,e.abrupt("return",{index:r});case 10:case"end":return e.stop()}}),e)}))),function(t){return o.apply(this,arguments)})},{key:"bh",get:function(){return[{text:this.$t("index"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.title}]}},{key:"getQuery",value:function(t,e){var d={"fc-category":t};return"合計"!==e&&(d["fc-図"]=e),d}},{key:"headers",get:function(){var t=[];for(var e in t.push({text:this.$t("絵図"),value:"name"}),this.legend)t.push({text:e,value:e});return t.push({text:"合計",value:"sum"}),t}},{key:"mounted",value:function(){var t=this.index,legend=this.legend,e={};for(var d in t){var f=t[d];try{if(!f.objectID[0])continue}catch(t){continue}var n=f.category[0],map=f["図"][0];e[map]||(e[map]={});var r=e[map];legend[n]&&(r[n]||(r[n]=0),r[n]+=1)}var c=[],o={sum:0};for(var l in e){var m=e[l],v={name:l};c.push(v);var h=0;for(var _ in m){var j=m[_];v[_]=j,h+=j,o[_]||(o[_]=0),o[_]+=j}v.sum=h,o.sum+=h}var y={name:"合計"};for(var w in c.push(y),o)y[w]=o[w];this.items=c}},{key:"items4legend",get:function(){var legend=this.legend,t=[];for(var e in legend)t.push(e);return t}}]),m}(v.Vue);y=j([Object(v.Component)({components:{Breadcrumbs:h.default}})],y),e.a=y}).call(this,d(143))},751:function(t,e,d){var map={"./404.html":[800,7,205],"./CNAME":[801,7,206],"./curation/css/icviewer-embedded.bundle.css":[802,7,181],"./curation/css/styles.css":[804,7,182],"./curation/index.html":[806,7,207],"./curation/js/icviewer-embedded.bundle.min":[621,7,10,12],"./curation/js/icviewer-embedded.bundle.min.js":[621,7,10,12],"./curation/js/scripts":[627,7,13],"./curation/js/scripts.js":[627,7,13],"./data":[600,3,4],"./data/":[600,3,4],"./data/conf":[628,3,14],"./data/conf.json":[628,3,14],"./data/entity":[610,3,3],"./data/entity.json":[610,3,3],"./data/entity_relation":[629,3,15],"./data/entity_relation.json":[629,3,15],"./data/example":[630,3,16],"./data/example.json":[630,3,16],"./data/gcv":[631,3,17],"./data/gcv.json":[631,3,17],"./data/iiif/0364c8f6-cc96-4e7e-9d12-b315d15b1970/manifest":[632,3,18],"./data/iiif/0364c8f6-cc96-4e7e-9d12-b315d15b1970/manifest.json":[632,3,18],"./data/iiif/0ad3333a-e5e8-4a6e-8468-38a15250ee2a/manifest":[633,3,19],"./data/iiif/0ad3333a-e5e8-4a6e-8468-38a15250ee2a/manifest.json":[633,3,19],"./data/iiif/0deed30d-27bb-497e-a02a-dcb49b8f9fec/manifest":[634,3,20],"./data/iiif/0deed30d-27bb-497e-a02a-dcb49b8f9fec/manifest.json":[634,3,20],"./data/iiif/0f382464-3cf6-4f4b-bdd1-173383dc9ceb/manifest":[635,3,21],"./data/iiif/0f382464-3cf6-4f4b-bdd1-173383dc9ceb/manifest.json":[635,3,21],"./data/iiif/0fc5274d-3268-413b-9003-abf62990b767/manifest":[636,3,22],"./data/iiif/0fc5274d-3268-413b-9003-abf62990b767/manifest.json":[636,3,22],"./data/iiif/0fe2056e-ed9e-4f98-8bcb-fb34d74c8900/manifest":[637,3,23],"./data/iiif/0fe2056e-ed9e-4f98-8bcb-fb34d74c8900/manifest.json":[637,3,23],"./data/iiif/1075aa77-448a-4d85-8c02-867135fa524e/manifest":[638,3,24],"./data/iiif/1075aa77-448a-4d85-8c02-867135fa524e/manifest.json":[638,3,24],"./data/iiif/143ad571-fcb2-4413-85f4-99a8e7dee319/manifest":[639,3,25],"./data/iiif/143ad571-fcb2-4413-85f4-99a8e7dee319/manifest.json":[639,3,25],"./data/iiif/169317bc-a601-437b-b670-c3ac2d48c028/manifest":[640,3,26],"./data/iiif/169317bc-a601-437b-b670-c3ac2d48c028/manifest.json":[640,3,26],"./data/iiif/173cf4f6-e59c-4767-94f1-56724de7c41b/manifest":[641,3,27],"./data/iiif/173cf4f6-e59c-4767-94f1-56724de7c41b/manifest.json":[641,3,27],"./data/iiif/17449564-cdc9-4d77-a86a-28aa2941ab1a/manifest":[642,3,28],"./data/iiif/17449564-cdc9-4d77-a86a-28aa2941ab1a/manifest.json":[642,3,28],"./data/iiif/1b02b90f-a6bb-4997-b0bd-93333aaeb4ec/manifest":[643,3,29],"./data/iiif/1b02b90f-a6bb-4997-b0bd-93333aaeb4ec/manifest.json":[643,3,29],"./data/iiif/1cf47d2f-3c9f-4466-b632-f9a431789234/manifest":[644,3,30],"./data/iiif/1cf47d2f-3c9f-4466-b632-f9a431789234/manifest.json":[644,3,30],"./data/iiif/25db717b-2e9f-4da6-ae19-f11769447250/manifest":[645,3,31],"./data/iiif/25db717b-2e9f-4da6-ae19-f11769447250/manifest.json":[645,3,31],"./data/iiif/276aa11d-2300-4195-aecd-ae748e2d838c/manifest":[646,3,32],"./data/iiif/276aa11d-2300-4195-aecd-ae748e2d838c/manifest.json":[646,3,32],"./data/iiif/28f334b3-8ef0-4e98-92d8-1f055514cef3/manifest":[647,3,33],"./data/iiif/28f334b3-8ef0-4e98-92d8-1f055514cef3/manifest.json":[647,3,33],"./data/iiif/29ce9528-b3c8-475b-8d40-74cb99083cae/manifest":[648,3,34],"./data/iiif/29ce9528-b3c8-475b-8d40-74cb99083cae/manifest.json":[648,3,34],"./data/iiif/2b1f5a0c-f86d-4841-ad50-506537a03310/manifest":[649,3,35],"./data/iiif/2b1f5a0c-f86d-4841-ad50-506537a03310/manifest.json":[649,3,35],"./data/iiif/2c9e47b9-821a-42e1-84ed-9457929e7c7c/manifest":[650,3,36],"./data/iiif/2c9e47b9-821a-42e1-84ed-9457929e7c7c/manifest.json":[650,3,36],"./data/iiif/2d522f09-a944-4348-afcc-69cf87e9dae4/manifest":[651,3,37],"./data/iiif/2d522f09-a944-4348-afcc-69cf87e9dae4/manifest.json":[651,3,37],"./data/iiif/30b2e26b-35b2-4a88-b42b-1e049162844d/manifest":[652,3,38],"./data/iiif/30b2e26b-35b2-4a88-b42b-1e049162844d/manifest.json":[652,3,38],"./data/iiif/30e8938e-030b-4696-abfa-af83b744b5e3/manifest":[653,3,39],"./data/iiif/30e8938e-030b-4696-abfa-af83b744b5e3/manifest.json":[653,3,39],"./data/iiif/31ca43e6-50e9-46ad-97f5-ee9013820b19/manifest":[654,3,40],"./data/iiif/31ca43e6-50e9-46ad-97f5-ee9013820b19/manifest.json":[654,3,40],"./data/iiif/34cbce49-7bf4-4416-8ea6-e49f80da2131/manifest":[655,3,41],"./data/iiif/34cbce49-7bf4-4416-8ea6-e49f80da2131/manifest.json":[655,3,41],"./data/iiif/39efadf4-2c5e-45e9-ac71-4fad6289c031/manifest":[656,3,42],"./data/iiif/39efadf4-2c5e-45e9-ac71-4fad6289c031/manifest.json":[656,3,42],"./data/iiif/4095d9ee-3665-4de8-ac47-84cd7181ce46/manifest":[657,3,43],"./data/iiif/4095d9ee-3665-4de8-ac47-84cd7181ce46/manifest.json":[657,3,43],"./data/iiif/439de0af-e08a-476d-a4f4-db91daee0413/manifest":[658,3,44],"./data/iiif/439de0af-e08a-476d-a4f4-db91daee0413/manifest.json":[658,3,44],"./data/iiif/483f16f2-0b92-46aa-8392-43ddba7ff12e/manifest":[659,3,45],"./data/iiif/483f16f2-0b92-46aa-8392-43ddba7ff12e/manifest.json":[659,3,45],"./data/iiif/4ee1ce31-6891-4647-8cf8-6ab8fbabd33d/manifest":[660,3,46],"./data/iiif/4ee1ce31-6891-4647-8cf8-6ab8fbabd33d/manifest.json":[660,3,46],"./data/iiif/54aa2554-80d8-4671-b71d-734a2ac09915/manifest":[661,3,47],"./data/iiif/54aa2554-80d8-4671-b71d-734a2ac09915/manifest.json":[661,3,47],"./data/iiif/58dd4258-e1ea-4561-8f0d-a13be6649b12/manifest":[662,3,48],"./data/iiif/58dd4258-e1ea-4561-8f0d-a13be6649b12/manifest.json":[662,3,48],"./data/iiif/5e106c1e-aa24-46c6-ba69-3a5a289a73a5/manifest":[663,3,49],"./data/iiif/5e106c1e-aa24-46c6-ba69-3a5a289a73a5/manifest.json":[663,3,49],"./data/iiif/5e421818-26f3-4b60-b01d-c917afc75c38/manifest":[664,3,50],"./data/iiif/5e421818-26f3-4b60-b01d-c917afc75c38/manifest.json":[664,3,50],"./data/iiif/5f1aaff5-7454-4d4e-b1dd-80662ea489ee/manifest":[665,3,51],"./data/iiif/5f1aaff5-7454-4d4e-b1dd-80662ea489ee/manifest.json":[665,3,51],"./data/iiif/62695043-36c6-4de2-a954-fdd9f38b6f1b/manifest":[666,3,52],"./data/iiif/62695043-36c6-4de2-a954-fdd9f38b6f1b/manifest.json":[666,3,52],"./data/iiif/64945590-996a-4b3b-876e-36b0662cf6dc/manifest":[667,3,53],"./data/iiif/64945590-996a-4b3b-876e-36b0662cf6dc/manifest.json":[667,3,53],"./data/iiif/652cf259-2cc7-462e-8c60-4dfc84e3f2ae/manifest":[668,3,54],"./data/iiif/652cf259-2cc7-462e-8c60-4dfc84e3f2ae/manifest.json":[668,3,54],"./data/iiif/67188e3b-6b9c-4df7-b70a-e62362273654/manifest":[669,3,55],"./data/iiif/67188e3b-6b9c-4df7-b70a-e62362273654/manifest.json":[669,3,55],"./data/iiif/6933f8b6-8c8d-40d7-80b2-8f2df5198638/manifest":[670,3,56],"./data/iiif/6933f8b6-8c8d-40d7-80b2-8f2df5198638/manifest.json":[670,3,56],"./data/iiif/69cf4ccb-2fc5-43f9-9eb8-1a54e1ca3c35/manifest":[671,3,57],"./data/iiif/69cf4ccb-2fc5-43f9-9eb8-1a54e1ca3c35/manifest.json":[671,3,57],"./data/iiif/71f2357d-94b3-40ca-a7d9-99163760019e/manifest":[672,3,58],"./data/iiif/71f2357d-94b3-40ca-a7d9-99163760019e/manifest.json":[672,3,58],"./data/iiif/721a0cd7-37d3-4529-b58d-628a57d81313/manifest":[673,3,59],"./data/iiif/721a0cd7-37d3-4529-b58d-628a57d81313/manifest.json":[673,3,59],"./data/iiif/7261622d-75b5-494b-bd55-e56036845651/manifest":[674,3,60],"./data/iiif/7261622d-75b5-494b-bd55-e56036845651/manifest.json":[674,3,60],"./data/iiif/7529b21b-41a3-4177-ae1c-5a059ae7f4fe/manifest":[675,3,61],"./data/iiif/7529b21b-41a3-4177-ae1c-5a059ae7f4fe/manifest.json":[675,3,61],"./data/iiif/78ffe4be-515d-4f74-b8d2-e2fa83f345f1/manifest":[676,3,62],"./data/iiif/78ffe4be-515d-4f74-b8d2-e2fa83f345f1/manifest.json":[676,3,62],"./data/iiif/79e31f56-6e0b-4cde-9527-ad158948080c/manifest":[677,3,63],"./data/iiif/79e31f56-6e0b-4cde-9527-ad158948080c/manifest.json":[677,3,63],"./data/iiif/7c2275c1-d86a-464f-9cc2-0f32869a26c7/manifest":[678,3,64],"./data/iiif/7c2275c1-d86a-464f-9cc2-0f32869a26c7/manifest.json":[678,3,64],"./data/iiif/7cdad438-6d4a-4b18-8901-23f241da346d/manifest":[679,3,65],"./data/iiif/7cdad438-6d4a-4b18-8901-23f241da346d/manifest.json":[679,3,65],"./data/iiif/7dc435f6-2e3c-4051-ba0a-24da16a7afa6/manifest":[680,3,66],"./data/iiif/7dc435f6-2e3c-4051-ba0a-24da16a7afa6/manifest.json":[680,3,66],"./data/iiif/7f91ae1e-6ffa-4681-bb0f-862be1bd1cb0/manifest":[681,3,67],"./data/iiif/7f91ae1e-6ffa-4681-bb0f-862be1bd1cb0/manifest.json":[681,3,67],"./data/iiif/807028c6-85e6-46e7-8f3a-a78723e58996/manifest":[682,3,68],"./data/iiif/807028c6-85e6-46e7-8f3a-a78723e58996/manifest.json":[682,3,68],"./data/iiif/87878a8b-d0d3-45fc-831e-c58d875f6560/manifest":[683,3,69],"./data/iiif/87878a8b-d0d3-45fc-831e-c58d875f6560/manifest.json":[683,3,69],"./data/iiif/87c6ab5d-eeb2-4b73-8c2c-8a6044b667de/manifest":[684,3,70],"./data/iiif/87c6ab5d-eeb2-4b73-8c2c-8a6044b667de/manifest.json":[684,3,70],"./data/iiif/8ca2356e-ccde-4403-891e-c3817926a2ca/manifest":[685,3,71],"./data/iiif/8ca2356e-ccde-4403-891e-c3817926a2ca/manifest.json":[685,3,71],"./data/iiif/8e7b55c0-dfce-4166-aca9-57a58f873c67/manifest":[686,3,72],"./data/iiif/8e7b55c0-dfce-4166-aca9-57a58f873c67/manifest.json":[686,3,72],"./data/iiif/92ef19fb-2604-423e-99f6-9b95dec2a17a/manifest":[687,3,73],"./data/iiif/92ef19fb-2604-423e-99f6-9b95dec2a17a/manifest.json":[687,3,73],"./data/iiif/99b263e4-abe9-4a27-a59e-67f06d67d030/manifest":[688,3,74],"./data/iiif/99b263e4-abe9-4a27-a59e-67f06d67d030/manifest.json":[688,3,74],"./data/iiif/9b04125a-2ce5-4910-b659-7ffc0080f62f/manifest":[689,3,75],"./data/iiif/9b04125a-2ce5-4910-b659-7ffc0080f62f/manifest.json":[689,3,75],"./data/iiif/a6d5491b-7a43-4082-819b-b98c2d026b94/manifest":[690,3,76],"./data/iiif/a6d5491b-7a43-4082-819b-b98c2d026b94/manifest.json":[690,3,76],"./data/iiif/a78aa5da-a3eb-4639-b4cc-86b458f9d2a5/manifest":[691,3,77],"./data/iiif/a78aa5da-a3eb-4639-b4cc-86b458f9d2a5/manifest.json":[691,3,77],"./data/iiif/a9055dc2-460a-42fd-8d6e-3be8e4f7a253/manifest":[692,3,78],"./data/iiif/a9055dc2-460a-42fd-8d6e-3be8e4f7a253/manifest.json":[692,3,78],"./data/iiif/ae3d341e-14cd-4903-bfe3-e101e4431eaa/manifest":[693,3,79],"./data/iiif/ae3d341e-14cd-4903-bfe3-e101e4431eaa/manifest.json":[693,3,79],"./data/iiif/ae79a1ed-6f7a-4da5-85b0-4394cc6e7351/manifest":[694,3,80],"./data/iiif/ae79a1ed-6f7a-4da5-85b0-4394cc6e7351/manifest.json":[694,3,80],"./data/iiif/aec0992d-92cc-475e-960d-6913be247e5d/manifest":[695,3,81],"./data/iiif/aec0992d-92cc-475e-960d-6913be247e5d/manifest.json":[695,3,81],"./data/iiif/b5421e75-a38d-46fc-bb4b-c3c4228655db/manifest":[696,3,82],"./data/iiif/b5421e75-a38d-46fc-bb4b-c3c4228655db/manifest.json":[696,3,82],"./data/iiif/b9e13ab9-1a8a-43c7-8576-30b5545f5bbd/manifest":[697,3,83],"./data/iiif/b9e13ab9-1a8a-43c7-8576-30b5545f5bbd/manifest.json":[697,3,83],"./data/iiif/b9e50108-b8b0-43e5-ae16-c5c51d3e457c/manifest":[698,3,84],"./data/iiif/b9e50108-b8b0-43e5-ae16-c5c51d3e457c/manifest.json":[698,3,84],"./data/iiif/bb29bf81-f2b1-4a33-bdc1-b77702a802ca/manifest":[699,3,85],"./data/iiif/bb29bf81-f2b1-4a33-bdc1-b77702a802ca/manifest.json":[699,3,85],"./data/iiif/c3f81395-eb01-43c2-a7ef-61a87abeb84d/manifest":[700,3,86],"./data/iiif/c3f81395-eb01-43c2-a7ef-61a87abeb84d/manifest.json":[700,3,86],"./data/iiif/c4c6cfea-78f1-4f43-ac2a-658cd230e9e0/manifest":[701,3,87],"./data/iiif/c4c6cfea-78f1-4f43-ac2a-658cd230e9e0/manifest.json":[701,3,87],"./data/iiif/c638c6e3-1a52-4725-89f1-bae61ed29b0b/manifest":[702,3,88],"./data/iiif/c638c6e3-1a52-4725-89f1-bae61ed29b0b/manifest.json":[702,3,88],"./data/iiif/c679f065-d691-46f6-98ee-f8cf705ad421/manifest":[703,3,89],"./data/iiif/c679f065-d691-46f6-98ee-f8cf705ad421/manifest.json":[703,3,89],"./data/iiif/c8e64d67-51af-4cfb-99f9-2c191ac4ef3b/manifest":[704,3,90],"./data/iiif/c8e64d67-51af-4cfb-99f9-2c191ac4ef3b/manifest.json":[704,3,90],"./data/iiif/c8f6e88e-80f1-4012-992d-70748707d9d0/manifest":[705,3,91],"./data/iiif/c8f6e88e-80f1-4012-992d-70748707d9d0/manifest.json":[705,3,91],"./data/iiif/c9e4d2a8-4e68-4e05-9d06-e371a3246ff0/manifest":[706,3,92],"./data/iiif/c9e4d2a8-4e68-4e05-9d06-e371a3246ff0/manifest.json":[706,3,92],"./data/iiif/ca3f01bb-cefe-40fd-bbf6-d50aa9a0f530/manifest":[707,3,93],"./data/iiif/ca3f01bb-cefe-40fd-bbf6-d50aa9a0f530/manifest.json":[707,3,93],"./data/iiif/cfd7f07c-65a0-4a3f-89f3-99e9f78a67c3/manifest":[708,3,94],"./data/iiif/cfd7f07c-65a0-4a3f-89f3-99e9f78a67c3/manifest.json":[708,3,94],"./data/iiif/d09a5554-d84d-4f0f-b6e9-102755e7c2fa/manifest":[709,3,95],"./data/iiif/d09a5554-d84d-4f0f-b6e9-102755e7c2fa/manifest.json":[709,3,95],"./data/iiif/d1c6c567-4bfa-464d-afd0-c70cbab52729/manifest":[710,3,96],"./data/iiif/d1c6c567-4bfa-464d-afd0-c70cbab52729/manifest.json":[710,3,96],"./data/iiif/d230f1f8-5929-4138-bb28-1108d77fd32a/manifest":[711,3,97],"./data/iiif/d230f1f8-5929-4138-bb28-1108d77fd32a/manifest.json":[711,3,97],"./data/iiif/d31a5d15-afe1-411d-abaa-ed9263d5c800/manifest":[712,3,98],"./data/iiif/d31a5d15-afe1-411d-abaa-ed9263d5c800/manifest.json":[712,3,98],"./data/iiif/d50ddf55-64e5-4f37-9388-ca176be0ba5b/manifest":[713,3,99],"./data/iiif/d50ddf55-64e5-4f37-9388-ca176be0ba5b/manifest.json":[713,3,99],"./data/iiif/d5301ff8-a047-4216-a85f-cd220b4f3dbd/manifest":[714,3,100],"./data/iiif/d5301ff8-a047-4216-a85f-cd220b4f3dbd/manifest.json":[714,3,100],"./data/iiif/d613637d-cf29-4f4f-9857-06c49e490fd3/manifest":[715,3,101],"./data/iiif/d613637d-cf29-4f4f-9857-06c49e490fd3/manifest.json":[715,3,101],"./data/iiif/d92bfa51-20c9-4343-931a-e1cee9fffaeb/manifest":[716,3,102],"./data/iiif/d92bfa51-20c9-4343-931a-e1cee9fffaeb/manifest.json":[716,3,102],"./data/iiif/dc100a27-bdd9-47f1-8d55-ecc0c1f6db1f/manifest":[717,3,103],"./data/iiif/dc100a27-bdd9-47f1-8d55-ecc0c1f6db1f/manifest.json":[717,3,103],"./data/iiif/de25754d-12ff-4fd4-850c-976ec5651c8d/manifest":[718,3,104],"./data/iiif/de25754d-12ff-4fd4-850c-976ec5651c8d/manifest.json":[718,3,104],"./data/iiif/e4756874-9c62-4abf-9588-ab6b243df0ba/manifest":[719,3,105],"./data/iiif/e4756874-9c62-4abf-9588-ab6b243df0ba/manifest.json":[719,3,105],"./data/iiif/ec7ba99b-8ada-479f-bcf8-ba529fbc1a6b/manifest":[720,3,106],"./data/iiif/ec7ba99b-8ada-479f-bcf8-ba529fbc1a6b/manifest.json":[720,3,106],"./data/iiif/efe2f570-44bd-4d67-8eac-96047a0d87ed/manifest":[721,3,107],"./data/iiif/efe2f570-44bd-4d67-8eac-96047a0d87ed/manifest.json":[721,3,107],"./data/iiif/f04d8345-93d2-4fd0-9d76-c07efb99d99f/manifest":[722,3,108],"./data/iiif/f04d8345-93d2-4fd0-9d76-c07efb99d99f/manifest.json":[722,3,108],"./data/iiif/f4a66780-da62-4519-8fcb-99e0f2e3cb01/manifest":[723,3,109],"./data/iiif/f4a66780-da62-4519-8fcb-99e0f2e3cb01/manifest.json":[723,3,109],"./data/iiif/f63b1a51-3b48-4b44-9347-e4310c520092/manifest":[724,3,110],"./data/iiif/f63b1a51-3b48-4b44-9347-e4310c520092/manifest.json":[724,3,110],"./data/iiif/f763be26-ab92-4674-8872-4fffe3926d4a/manifest":[725,3,111],"./data/iiif/f763be26-ab92-4674-8872-4fffe3926d4a/manifest.json":[725,3,111],"./data/iiif/f893d33f-70cf-4131-a8fe-328645a01f98/manifest":[726,3,112],"./data/iiif/f893d33f-70cf-4131-a8fe-328645a01f98/manifest.json":[726,3,112],"./data/iiif/f8bc0d0d-1efe-459e-bab0-720d34e23ac2/manifest":[727,3,113],"./data/iiif/f8bc0d0d-1efe-459e-bab0-720d34e23ac2/manifest.json":[727,3,113],"./data/iiif/fddf3c29-660a-42af-939e-9422225b6ab6/manifest":[728,3,114],"./data/iiif/fddf3c29-660a-42af-939e-9422225b6ab6/manifest.json":[728,3,114],"./data/iiif/fe453878-946c-4b2b-bdc8-e0ca25c6cc7a/manifest":[729,3,115],"./data/iiif/fe453878-946c-4b2b-bdc8-e0ca25c6cc7a/manifest.json":[729,3,115],"./data/iiif/fe60f253-679a-4b1f-bf92-203bd1c2498a/manifest":[730,3,116],"./data/iiif/fe60f253-679a-4b1f-bf92-203bd1c2498a/manifest.json":[730,3,116],"./data/iiif/fea6e704-4502-4468-8179-5513c49db08b/manifest":[731,3,117],"./data/iiif/fea6e704-4502-4468-8179-5513c49db08b/manifest.json":[731,3,117],"./data/index":[600,3,4],"./data/index.json":[600,3,4],"./data/object_relation":[732,3,118],"./data/object_relation.json":[732,3,118],"./data/relation":[733,3,119],"./data/relation.json":[733,3,119],"./data/relation2":[734,3,120],"./data/relation2.json":[734,3,120],"./data/trans":[735,3,121],"./data/trans.json":[735,3,121],"./icon.png":[842,7,184],"./img/etc/data.png":[843,7,185],"./img/etc/mirador3.png":[844,7,186],"./img/etc/pd_banner_magnified.png":[845,7,187],"./img/etc/pd_banner_magnified.webp":[846,7,188],"./img/etc/pixplot.png":[847,7,189],"./img/etc/pixplot.webp":[848,7,190],"./img/icons/apple-touch-icon.png":[849,7,191],"./img/icons/favicon-16.png":[850,7,192],"./img/icons/favicon-32.png":[851,7,193],"./img/icons/favicon-48.png":[852,7,194],"./img/icons/favicon-72.png":[853,7,195],"./img/icons/icon-512.png":[854,7,196],"./img/icons/icp-logo.svg":[855,7,197],"./img/icons/iiif-logo.svg":[856,7,198],"./img/icons/no-image.webp":[857,7,199],"./img/icons/pocket.svg":[858,7,200],"./img/icons/rdf-logo.svg":[859,7,201],"./img/ogp/home.jpg":[860,7,202],"./img/ogp/home.webp":[861,7,203],"./sw":[736,7,11],"./sw.js":[736,7,11]};function f(t){if(!d.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],f=e[0];return Promise.all(e.slice(2).map(d.e)).then((function(){return d.t(f,e[1])}))}f.keys=function(){return Object.keys(map)},f.id=751,t.exports=f},911:function(t,e,d){"use strict";d.r(e);var f=d(602).a,n=d(54),r=d(60),c=d.n(r),o=d(556),l=d(225),m=d(598),component=Object(n.a)(f,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",[d("Breadcrumbs",{attrs:{items:t.bh}}),t._v(" "),d("v-container",{staticClass:"my-5"},[d("h2",{staticClass:"mb-5"},[t._v(t._s(t.title))]),t._v(" "),d("h3",{staticClass:"mt-10 mb-5"},[t._v(t._s(t.$t("分類")))]),t._v(" "),d("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[d("thead",[d("tr",t._l(t.headers,(function(header,e){return d("th",{key:e,staticClass:"text-left"},[t._v("\n              "+t._s(header.text)+"\n            ")])})),0)]),t._v(" "),d("tbody",t._l(t.items,(function(e,f){return d("tr",{key:f},t._l(t.headers,(function(header,f){return d("td",{key:f},[["sum","name"].includes(header.value)?[t._v("\n                "+t._s(e[header.value])+"\n              ")]:[d("nuxt-link",{attrs:{to:t.localePath({name:"search",query:t.getQuery(header.value,e.name)})}},[t._v("\n                  "+t._s(e[header.value])+"\n                ")])]],2)})),0)})),0)]},proxy:!0}])}),t._v(" "),d("h3",{staticClass:"mt-10 mb-5"},[t._v(t._s(t.$t("凡例")))]),t._v(" "),d("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[d("thead",[d("tr",[d("th",{staticClass:"text-left"}),t._v(" "),d("th",{staticClass:"text-left"},[t._v("分類")])])]),t._v(" "),d("tbody",t._l(t.items4legend,(function(e,f){return d("tr",{key:f},[d("td",[d("v-img",{attrs:{width:"25",src:t.prefix+"/"+e+".png"}})],1),t._v(" "),d("td",[t._v(t._s(e))])])})),0)]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VContainer:o.a,VImg:l.a,VSimpleTable:m.a})}}]);