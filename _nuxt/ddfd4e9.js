(window.webpackJsonp=window.webpackJsonp||[]).push([[129,126,132,139],{570:function(t,e,n){var content=n(571);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("dc0628f2",content,!0,{sourceMap:!1})},571:function(t,e,n){var r=n(19)(!1);r.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:0;pointer-events:none}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=r},573:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(31),c=n(39),l=n(35),f=n(18),h=n(8),d=(n(10),n(3),n(68),n(37)),v=n(575);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},_=function(t){Object(c.a)(n,t);var e=m(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"title",get:function(){return this.item.label}},{key:"url",get:function(){return this.item.url}}]),n}(d.Vue);y([Object(d.Prop)()],_.prototype,"item",void 0);var j=_=y([Object(d.Component)({components:{ShareButtons:v.default}})],_),O=n(54),k=n(60),x=n.n(k),w=n(291),C=n(218),R=n(267),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{color:"primary",depressed:"",icon:""}},r),[n("v-icon",[t._v("mdi-share-variant")])],1)]}}])},[t._v(" "),n("ShareButtons",{attrs:{url:t.url,title:t.title}})],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VBtn:w.a,VIcon:C.a,VMenu:R.a})},575:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(31),c=n(39),l=n(35),f=n(18),h=n(8),d=(n(10),n(3),n(68),n(37));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).baseUrl="https://kunshujo-i.dl.itc.u-tokyo.ac.jp",t}return Object(o.a)(n,[{key:"copyLink",value:function(){var t=this.url;document.addEventListener("copy",(function e(n){n.clipboardData.setData("text/plain",t),n.preventDefault(),document.removeEventListener("copy",e)})),document.execCommand("copy")}},{key:"twitterUrl",get:function(){return"https://twitter.com/intent/tweet?url="+this.url+"&text="+this.title}},{key:"facebookUrl",get:function(){return"https://www.facebook.com/sharer/sharer.php?u="+this.url}},{key:"pocketUrl",get:function(){return"http://getpocket.com/edit?url="+this.url}}]),n}(d.Vue);m([Object(d.Prop)({required:!0})],y.prototype,"url",void 0),m([Object(d.Prop)({required:!0})],y.prototype,"title",void 0);var _=y=m([d.Component],y),j=n(54),O=n(60),k=n.n(O),x=n(291),w=n(266),C=n(218),R=n(583),component=Object(j.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{flat:""}},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.twitterUrl}},r),[n("v-icon",[t._v("mdi-twitter")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s("Twitter"))])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.facebookUrl}},r),[n("v-icon",[t._v("mdi-facebook")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s("Facebook"))])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.pocketUrl}},r),[n("img",{staticStyle:{"font-size":"24px"},attrs:{src:t.baseUrl+"/img/icons/pocket.svg"}})])]}}])},[t._v(" "),n("span",[t._v(t._s("Pocket"))])])],1)}),[],!1,null,null,null);e.default=component.exports;k()(component,{VBtn:x.a,VCard:w.a,VIcon:C.a,VTooltip:R.a})},583:function(t,e,n){"use strict";var r=n(2),o=(n(26),n(570),n(115)),c=n(29),l=n(167),f=n(99),h=n(229),d=n(56),v=n(0),m=n(14),y=n(5);e.a=Object(y.a)(c.a,l.a,f.a,h.a,d.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!(this.bottom||this.left||this.top||this.right),r=!1!==this.attach?e.offsetLeft:e.left,o=0;return this.top||this.bottom||n?o=r+e.width/2-content.width/2:(this.left||this.right)&&(o=r+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(o,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!1!==this.attach?e.offsetTop:e.top,r=0;return this.top||this.bottom?r=n+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(r=n+e.height/2-content.height/2),this.nudgeTop&&(r-=parseInt(this.nudgeTop)),this.nudgeBottom&&(r+=parseInt(this.nudgeBottom)),!1===this.attach&&(r+=this.pageYOffset),"".concat(this.calcYOverflow(r),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(v.h)(this.maxWidth),minWidth:Object(v.h)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(v.t)(this,"activator",!0)&&Object(m.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=o.a.options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===v.x.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(r.a)(t,this.contentClass,!0),Object(r.a)(t,"menuable__content__active",this.isActive),Object(r.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},758:function(t,e,n){"use strict";n(283);var r=n(289);e.a=Object(r.a)("layout")},905:function(t,e,n){"use strict";n.r(e);n(68),n(38),n(43),n(32),n(23),n(47),n(36);var r=n(22),o=n(31),c=n(39),l=n(35),f=n(18),h=n(8),d=(n(10),n(3),n(33),n(25),n(6),n(46),n(37)),v=n(573);function m(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var j=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=_(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).baseUrl="https://kunshujo-i.dl.itc.u-tokyo.ac.jp",t.items3=[],t.headers=[{value:"image"},{text:t.$t("地名"),value:"label"},{text:t.$t("legend"),value:"category"},{text:t.$t("description"),value:"description"},{text:t.$t("拡大図"),value:"拡大図"}],t}return Object(o.a)(n,[{key:"isMobile",get:function(){return!!["xs","sm"].includes(this.$vuetify.breakpoint.name)}},{key:"items2",get:function(){var t,e=[],n=m(this.items.hits);try{for(n.s();!(t=n.n()).done;){var r=t.value,o={id:r._id,label:r._source.label,image:r._source.thumbnail,category:this.$utils.formatArrayValue(r._source.category),description:this.$utils.formatArrayValue(r._source.description),curation:r._source.curation,member:r._source.member,"図":this.$utils.formatArrayValue(r._source.図)};e.push(o)}}catch(t){n.e(t)}finally{n.f()}return e}},{key:"getImage",value:function(t){return""}},{key:"getLegend",value:function(t){return"1"}}]),n}(d.Vue);j([Object(d.Prop)({})],O.prototype,"items",void 0);var k=O=j([Object(d.Component)({components:{ResultOption:v.default}})],O),x=n(54),w=n(60),C=n.n(w),R=n(266),A=n(886),V=n(261),S=n(218),$=n(225),P=n(758),T=n(598),component=Object(x.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isMobile?t._l(t.items.hits,(function(e){return n("v-card",{key:e.id,staticClass:"mb-4",attrs:{flat:"",outlined:""}},[n("div",{staticClass:"pa-2"},[n("nuxt-link",{attrs:{to:t.localePath({name:"item-id",params:{id:e._id}})}},[n("v-layout",{attrs:{"justify-center":""}},[n("v-img",{staticClass:"grey lighten-2",staticStyle:{height:"90px"},attrs:{contain:"","max-height":"90","max-width":"90",width:"100%",src:e._source.thumbnail}})],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("div",{staticClass:"pa-2 grey lighten-4"},[n("div",[n("small",[t._v(t._s(t.$t("地名")))])]),t._v(" "),n("nuxt-link",{attrs:{to:t.localePath({name:"item-id",params:{id:e._id}})}},[t._v(t._s(e._source.label))])],1),t._v(" "),n("v-divider"),t._v(" "),n("div",{staticClass:"pa-2"},[n("div",[n("small",[t._v(t._s(t.$t("legend")))])]),t._v("\n        "+t._s(t.$utils.formatArrayValue(e._source.category))+"\n      ")]),t._v(" "),e._source.description&&""!=e._source.description[0]?[n("v-divider"),t._v(" "),n("div",{staticClass:"pa-2 grey lighten-4"},[n("div",[n("small",[t._v(t._s(t.$t("description")))])]),t._v("\n          "+t._s(t.$utils.formatArrayValue(e._source.description))+"\n        ")])]:t._e(),t._v(" "),n("v-divider"),t._v(" "),n("div",{staticClass:"pa-2"},[n("div",[n("small",[t._v(t._s(t.$t("拡大図")))])]),t._v(" "),n("a",{attrs:{rounded:"",depressed:"",target:"_blank",color:"primary darken-2",href:"https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/icv/?curation="+e._source.curation+"&xywh="+e._source.member.split("#xywh=")[1]+"&mode=annotation&lang=ja"}},[t._v(t._s(t.$utils.formatArrayValue(e._source.図))+"\n          "),n("v-icon",{staticClass:"ml-1",attrs:{color:"primary"}},[t._v("mdi-exit-to-app")])],1)])],2)})):[n("v-data-table",{attrs:{"disable-sort":!0,headers:t.headers,items:t.items2,"hide-default-footer":"","items-per-page":-1},scopedSlots:t._u([{key:"item.image",fn:function(e){var r=e.item;return[n("nuxt-link",{attrs:{to:t.localePath({name:"item-id",params:{id:r.id}})}},[n("v-img",{staticClass:"grey lighten-2 my-2",staticStyle:{height:"90px"},attrs:{contain:"","max-height":"90","max-width":"90",width:"100%",src:r.image}})],1)]}},{key:"item.label",fn:function(e){var r=e.item;return[n("nuxt-link",{attrs:{to:t.localePath({name:"item-id",params:{id:r.id}})}},[t._v("\n          "+t._s(r.label)+"\n        ")])]}},{key:"item.拡大図",fn:function(e){var r=e.item;return[n("a",{attrs:{rounded:"",depressed:"",target:"_blank",color:"primary darken-2",href:"https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/icv/?curation="+r.curation+"&xywh="+r.member.split("#xywh=")[1]+"&mode=annotation&lang=ja"}},[t._v(t._s(t.$utils.formatArrayValue(r.図))+"\n          "),n("v-icon",{staticClass:"ml-1",attrs:{color:"primary"}},[t._v("mdi-exit-to-app")])],1)]}}],null,!1,3590250898)})],t._v(" "),t._e()],2)}),[],!1,null,null,null);e.default=component.exports;C()(component,{VCard:R.a,VDataTable:A.a,VDivider:V.a,VIcon:S.a,VImg:$.a,VLayout:P.a,VSimpleTable:T.a})}}]);