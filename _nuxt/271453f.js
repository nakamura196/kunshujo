(window.webpackJsonp=window.webpackJsonp||[]).push([[25,13,17,18,19,26],{569:function(t,e,n){var content=n(570);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("dc0628f2",content,!0,{sourceMap:!1})},570:function(t,e,n){var o=n(19)(!1);o.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:0;pointer-events:none}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=o},572:function(t,e,n){"use strict";n.r(e);var o=n(22),r=n(31),c=n(39),l=n(35),f=n(18),h=n(8),d=(n(10),n(3),n(68),n(37)),v=n(573);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){Object(c.a)(n,t);var e=m(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"title",get:function(){return this.item.label}},{key:"url",get:function(){return this.item.url}}]),n}(d.Vue);y([Object(d.Prop)()],j.prototype,"item",void 0);var O=j=y([Object(d.Component)({components:{ShareButtons:v.default}})],j),_=n(54),k=n(60),x=n.n(k),w=n(286),R=n(218),C=n(267),component=Object(_.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{color:"primary",depressed:"",icon:""}},o),[n("v-icon",[t._v("mdi-share-variant")])],1)]}}])},[t._v(" "),n("ShareButtons",{attrs:{url:t.url,title:t.title}})],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VBtn:w.a,VIcon:R.a,VMenu:C.a})},573:function(t,e,n){"use strict";n.r(e);var o=n(22),r=n(31),c=n(39),l=n(35),f=n(18),h=n(8),d=(n(10),n(3),n(68),n(37));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).baseUrl="https://kunshujo-i.dl.itc.u-tokyo.ac.jp",t}return Object(r.a)(n,[{key:"copyLink",value:function(){var t=this.url;document.addEventListener("copy",(function e(n){n.clipboardData.setData("text/plain",t),n.preventDefault(),document.removeEventListener("copy",e)})),document.execCommand("copy")}},{key:"twitterUrl",get:function(){return"https://twitter.com/intent/tweet?url="+this.url+"&text="+this.title}},{key:"facebookUrl",get:function(){return"https://www.facebook.com/sharer/sharer.php?u="+this.url}},{key:"pocketUrl",get:function(){return"http://getpocket.com/edit?url="+this.url}}]),n}(d.Vue);m([Object(d.Prop)({required:!0})],y.prototype,"url",void 0),m([Object(d.Prop)({required:!0})],y.prototype,"title",void 0);var j=y=m([d.Component],y),O=n(54),_=n(60),k=n.n(_),x=n(286),w=n(266),R=n(218),C=n(582),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{flat:""}},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.twitterUrl}},o),[n("v-icon",[t._v("mdi-twitter")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s("Twitter"))])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.facebookUrl}},o),[n("v-icon",[t._v("mdi-facebook")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s("Facebook"))])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.pocketUrl}},o),[n("img",{staticStyle:{"font-size":"24px"},attrs:{src:t.baseUrl+"/img/icons/pocket.svg"}})])]}}])},[t._v(" "),n("span",[t._v(t._s("Pocket"))])])],1)}),[],!1,null,null,null);e.default=component.exports;k()(component,{VBtn:x.a,VCard:w.a,VIcon:R.a,VTooltip:C.a})},575:function(t,e,n){var content=n(584);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("cdc2c944",content,!0,{sourceMap:!1})},577:function(t,e,n){"use strict";n.r(e);var o=n(22),r=n(39),c=n(35),l=n(18),f=n(8),h=(n(10),n(3),n(68),n(37)),d=n(580);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var m=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(r.a)(n,t);var e=v(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return n}(h.Vue);m([Object(h.Prop)({default:240})],y.prototype,"width",void 0),m([Object(h.Prop)({default:300})],y.prototype,"height",void 0),m([Object(h.Prop)({default:[]})],y.prototype,"data",void 0);var j=y=m([Object(h.Component)({components:{CardItem:d.default}})],y),O=(n(583),n(54)),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"horizontal-list"},t._l(t.data,(function(e,o){return n("li",{key:o,staticClass:"item mb-2"},[n("CardItem",{key:"value_"+o,attrs:{horizontal:!0,item:e,width:t.width,height:t.height}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports},580:function(t,e,n){"use strict";n.r(e);var o=n(22),r=n(39),c=n(35),l=n(18),f=n(8),h=(n(10),n(3),n(68),n(37)),d=n(572);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var m=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(r.a)(n,t);var e=v(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).baseUrl="https://kunshujo-i.dl.itc.u-tokyo.ac.jp",t}return n}(h.Vue);m([Object(h.Prop)({required:!0})],y.prototype,"item",void 0),m([Object(h.Prop)({default:300})],y.prototype,"width",void 0),m([Object(h.Prop)({default:300})],y.prototype,"height",void 0),m([Object(h.Prop)({default:!1})],y.prototype,"horizontal",void 0);var j=y=m([Object(h.Component)({components:{ResultOption:d.default}})],y),O=n(54),_=n(60),k=n.n(_),x=n(266),w=n(90),R=n(225),C=n(557),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{class:t.horizontal?"":"mb-4",style:t.horizontal?"width: "+t.width+"px;":"",attrs:{"no-body":"",flat:"",outlined:""}},[n("nuxt-link",{attrs:{to:t.localePath(t.item.to)}},[n("v-img",{staticClass:"grey lighten-2",staticStyle:{height:"150px"},attrs:{src:t.item.thumbnail||t.baseUrl+"/img/icons/no-image.webp",contain:"",width:"100%"}})],1),t._v(" "),n("div",{staticClass:"pa-4",style:t.horizontal?"width: "+t.width+"px; height: "+t.height+"px; overflow-y: auto;":""},[n("nuxt-link",{attrs:{to:t.localePath(t.item.to)}},[n("h4",{domProps:{innerHTML:t._s(t.item.label)}})]),t._v(" "),t.item.description?n("p",{staticClass:"mt-2 mb-0",domProps:{innerHTML:t._s(t.item.description)}}):t._e()],1),t._v(" "),n("v-card-actions",{staticClass:"pa-0"},[n("v-spacer")],1)],1)}),[],!1,null,null,null);e.default=component.exports;k()(component,{VCard:x.a,VCardActions:w.a,VImg:R.a,VSpacer:C.a})},582:function(t,e,n){"use strict";var o=n(2),r=(n(26),n(569),n(115)),c=n(29),l=n(166),f=n(99),h=n(229),d=n(56),v=n(0),m=n(14),y=n(5);e.a=Object(y.a)(c.a,l.a,f.a,h.a,d.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!(this.bottom||this.left||this.top||this.right),o=!1!==this.attach?e.offsetLeft:e.left,r=0;return this.top||this.bottom||n?r=o+e.width/2-content.width/2:(this.left||this.right)&&(r=o+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(r,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!1!==this.attach?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=n+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=n+e.height/2-content.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),!1===this.attach&&(o+=this.pageYOffset),"".concat(this.calcYOverflow(o),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(v.h)(this.maxWidth),minWidth:Object(v.h)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(v.t)(this,"activator",!0)&&Object(m.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=r.a.options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===v.x.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(o.a)(t,this.contentClass,!0),Object(o.a)(t,"menuable__content__active",this.isActive),Object(o.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},583:function(t,e,n){"use strict";n(575)},584:function(t,e,n){var o=n(19)(!1);o.push([t.i,".horizontal-list{overflow-x:auto;white-space:nowrap;-webkit-overflow-scrolling:touch;padding-left:0!important;padding-right:0}.item{display:inline-block;margin-right:8px;margin-left:8px}",""]),t.exports=o},614:function(t,e,n){"use strict";n.r(e);n(68),n(38),n(25),n(43),n(32),n(23),n(6),n(46),n(47),n(36);var o=n(27),r=n(22),c=n(31),l=n(39),f=n(35),h=n(18),d=n(8),v=(n(84),n(10),n(3),n(64),n(37)),m=n(577),y=n(114),j=n.n(y);function O(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,r=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw r}}}}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(h.a)(t);if(e){var r=Object(h.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(f.a)(this,n)}}var x=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},w=function(t){Object(l.a)(f,t);var e,n=k(f);function f(){var t;return Object(r.a)(this,f),(t=n.apply(this,arguments)).moreLikeThisData=[],t.baseUrl="https://kunshujo-i.dl.itc.u-tokyo.ac.jp",t}return Object(c.a)(f,[{key:"mounted",value:function(){this.moreLikeThis()}},{key:"watchId",value:function(){this.moreLikeThis()}},{key:"moreLikeThis",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(){var e,n,o,r,c,l,f,h,d,v,m,y,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get(this.baseUrl+"/data/index.json");case 2:e=(e=t.sent).data,n={},o=O(e);try{for(o.s();!(r=o.n()).done;)c=r.value,n[c.objectID]=c}catch(t){o.e(t)}finally{o.f()}return t.next=9,j.a.get(this.baseUrl+"/data/relation2.json");case 9:if(l=(l=t.sent).data,f=this.item.objectID,h=[],!l[f]){t.next=34;break}d=l[f],v=O(d),t.prev=16,v.s();case 18:if((m=v.n()).done){t.next=26;break}if(y=m.value,_=n[y],n[y]){t.next=23;break}return t.abrupt("continue",24);case 23:h.push({id:y,label:_.label,thumbnail:_.thumbnail,description:_.tag?_.tag.join(", "):null,to:{name:"item-id",params:{id:y}}});case 24:t.next=18;break;case 26:t.next=31;break;case 28:t.prev=28,t.t0=t.catch(16),v.e(t.t0);case 31:return t.prev=31,v.f(),t.finish(31);case 34:this.moreLikeThisData=h;case 35:case"end":return t.stop()}}),t,this,[[16,28,31,34]])}))),function(){return e.apply(this,arguments)})}]),f}(v.Vue);x([Object(v.Prop)({required:!0})],w.prototype,"item",void 0),x([Object(v.Watch)("itemId")],w.prototype,"watchId",null);var R=w=x([Object(v.Component)({components:{HorizontalItems:m.default}})],w),C=n(54),component=Object(C.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.moreLikeThisData.length>0?n("div",[n("div",{staticClass:"text-center my-5"},[n("h3",{staticClass:"mb-2"},[t._v(t._s(t.$t("一連の資料")))]),t._v(" "),n("small",[t._v("複数のページに渡っている場合、前後の資料がここに表示されます")])]),t._v(" "),n("HorizontalItems",{attrs:{data:t.moreLikeThisData,height:150}})],1):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);