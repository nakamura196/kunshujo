(window.webpackJsonp=window.webpackJsonp||[]).push([[52,12],{566:function(e,t,r){"use strict";r.r(t);var n=r(22),c=r(39),o=r(35),l=r(18),f=r(8),d=(r(10),r(3),r(68),r(37));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(l.a)(e);if(t){var c=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var v=function(e,t,r,desc){var n,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(c<3?n(o):c>3?n(t,r,o):n(t,r))||o);return c>3&&o&&Object.defineProperty(t,r,o),o},m=function(e){Object(c.a)(r,e);var t=h(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return r}(d.Vue);v([Object(d.Prop)({required:!0})],m.prototype,"items",void 0);var y=m=v([d.Component],m),O=r(54),j=r(60),_=r.n(j),x=r(576),P=r(556),w=r(218),k=r(82),component=Object(O.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-2 px-0 mx-0",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:e.items},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);t.default=component.exports;_()(component,{VBreadcrumbs:x.a,VContainer:P.a,VIcon:w.a,VSheet:k.a})},567:function(e,t,r){var content=r(568);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("b1bed018",content,!0,{sourceMap:!1})},568:function(e,t,r){var n=r(19)(!1);n.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=n},576:function(e,t,r){"use strict";r(9),r(6),r(11),r(3),r(10),r(12),r(15);var n=r(2),c=(r(64),r(567),r(69)),o=r(5);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=Object(o.a)(c.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return e("li",[e(r,f(f({},data),{},{attrs:f(f({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),h=r(0),v=Object(h.i)("v-breadcrumbs__divider","li"),m=r(16);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}t.a=Object(o.a)(m.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(v,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(d,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},700:function(e,t,r){"use strict";r.r(t);var n=r(22),c=r(31),o=r(39),l=r(35),f=r(18),d=r(8),h=(r(10),r(3),r(68),r(37)),v=r(566);function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(f.a)(e);if(t){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(e,t,r,desc){var n,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(c<3?n(o):c>3?n(t,r,o):n(t,r))||o);return c>3&&o&&Object.defineProperty(t,r,o),o},O=function(e){Object(o.a)(r,e);var t=m(r);function r(){var e;return Object(n.a)(this,r),(e=t.apply(this,arguments)).title=e.$t("machine_learning"),e.baseUrl="https://kunshujo2022.dl.itc.u-tokyo.ac.jp",e.items=[{label:e.$t("object_detection"),href:"https://huggingface.co/spaces/nakamura196/yolov5-kunshujo",icon:"mdi-api",description:"物体検出を試します。（Gradio版）"},{label:e.$t("similar_search"),href:"https://huggingface.co/spaces/nakamura196/ann-kunshujo",icon:"mdi-api",description:"類似画像検索を試します。（Gradio版）",top:!0},{label:e.$t("similar_search"),to:{name:"ml-sim"},icon:"mdi-api",description:"類似画像検索を試します。",top:!0}],e.bh=[{text:e.$t("top"),disabled:!1,to:e.localePath({name:"index"}),exact:!0},{text:e.title}],e}return Object(c.a)(r,[{key:"head",value:function(){return{title:this.title}}}]),r}(h.Vue),j=O=y([Object(h.Component)({components:{Breadcrumbs:v.default}})],O),_=r(54),x=r(60),P=r.n(x),w=r(558),k=r(556),R=r(559),component=Object(_.a)(j,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Breadcrumbs",{attrs:{items:e.bh}}),e._v(" "),r("v-container",{staticClass:"my-5 mb-10"},[r("h2",{staticClass:"mb-5"},[e._v(e._s(e.title))]),e._v(" "),r("v-row",{staticClass:"mt-5"},e._l(e.items,(function(t,n){return r("v-col",{key:n,attrs:{cols:"12",md:"4"}},[t.href?[r("a",{attrs:{href:t.href,target:"_blank"}},[r("h3",[e._v(e._s(t.label))])])]:[r("nuxt-link",{attrs:{to:e.localePath(t.to)}},[r("h3",[e._v(e._s(t.label))])])],e._v(" "),r("div",{staticClass:"mt-2"},[e._v("\n          "+e._s(t.description)+"\n        ")])],2)})),1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;P()(component,{VCol:w.a,VContainer:k.a,VRow:R.a})}}]);