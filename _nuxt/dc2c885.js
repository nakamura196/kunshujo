(window.webpackJsonp=window.webpackJsonp||[]).push([[2729,2726,2732],{3247:function(t,e,r){"use strict";r.r(e);r(76),r(28),r(32),r(19),r(18),r(34),r(20);var n=r(17),o=r(27),c=r(40),l=r(41),f=r(22),v=r(5),d=(r(37),r(7),r(35),r(23),r(24),r(33),r(11)),m=r(374);function y(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var j=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},k=function(t){Object(c.a)(r,t);var e=_(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).baseUrl="https://nakamura196.github.io/kunshujo",t.items3=[],t.headers=[{value:"image"},{text:t.$t("地名"),value:"label"},{text:t.$t("legend"),value:"category"},{text:t.$t("description"),value:"description"},{text:t.$t("拡大図"),value:"拡大図"}],t}return Object(o.a)(r,[{key:"isMobile",get:function(){return!!["xs","sm"].includes(this.$vuetify.breakpoint.name)}},{key:"items2",get:function(){var t,e=[],r=y(this.items.hits);try{for(r.s();!(t=r.n()).done;){var n=t.value,o={id:n._id,label:n._source.label,image:n._source.thumbnail,category:this.$utils.formatArrayValue(n._source.category),description:this.$utils.formatArrayValue(n._source.description),curation:n._source.curation,member:n._source.member,"図":this.$utils.formatArrayValue(n._source.図)};e.push(o)}}catch(t){r.e(t)}finally{r.f()}return e}},{key:"getImage",value:function(t){return""}},{key:"getLegend",value:function(t){return"1"}}]),r}(d.Vue);j([Object(d.Prop)({})],k.prototype,"items",void 0);var O=k=j([Object(d.Component)({components:{ResultOption:m.default}})],k),w=r(26),component=Object(w.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isMobile?t._l(t.items.hits,(function(e){return r("v-card",{key:e.id,staticClass:"mb-4",attrs:{flat:"",outlined:""}},[r("div",{staticClass:"pa-2"},[r("nuxt-link",{attrs:{to:t.localePath({name:"item-id",params:{id:e._id}})}},[r("v-layout",{attrs:{"justify-center":""}},[r("v-img",{staticClass:"grey lighten-2",staticStyle:{height:"90px"},attrs:{contain:"","max-height":"90","max-width":"90",width:"100%",src:e._source.thumbnail}})],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("div",{staticClass:"pa-2 grey lighten-4"},[r("div",[r("small",[t._v(t._s(t.$t("地名")))])]),t._v(" "),r("nuxt-link",{attrs:{to:t.localePath({name:"item-id",params:{id:e._id}})}},[t._v(t._s(e._source.label))])],1),t._v(" "),r("v-divider"),t._v(" "),r("div",{staticClass:"pa-2"},[r("div",[r("small",[t._v(t._s(t.$t("legend")))])]),t._v("\n        "+t._s(t.$utils.formatArrayValue(e._source.category))+"\n      ")]),t._v(" "),e._source.description&&""!=e._source.description[0]?[r("v-divider"),t._v(" "),r("div",{staticClass:"pa-2 grey lighten-4"},[r("div",[r("small",[t._v(t._s(t.$t("description")))])]),t._v("\n          "+t._s(t.$utils.formatArrayValue(e._source.description))+"\n        ")])]:t._e(),t._v(" "),r("v-divider"),t._v(" "),r("div",{staticClass:"pa-2"},[r("div",[r("small",[t._v(t._s(t.$t("拡大図")))])]),t._v(" "),r("a",{attrs:{rounded:"",depressed:"",target:"_blank",color:"primary darken-2",href:"https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/icv/?curation="+e._source.curation+"&xywh="+e._source.member.split("#xywh=")[1]+"&mode=annotation&lang=ja"}},[t._v(t._s(t.$utils.formatArrayValue(e._source.図))+"\n          "),r("v-icon",{staticClass:"ml-1",attrs:{color:"primary"}},[t._v("mdi-exit-to-app")])],1)])],2)})):[r("v-data-table",{attrs:{"disable-sort":!0,headers:t.headers,items:t.items2,"hide-default-footer":"","items-per-page":-1},scopedSlots:t._u([{key:"item.image",fn:function(e){var n=e.item;return[r("nuxt-link",{attrs:{to:t.localePath({name:"item-id",params:{id:n.id}})}},[r("v-img",{staticClass:"grey lighten-2 my-2",staticStyle:{height:"90px"},attrs:{contain:"","max-height":"90","max-width":"90",width:"100%",src:n.image}})],1)]}},{key:"item.label",fn:function(e){var n=e.item;return[r("nuxt-link",{attrs:{to:t.localePath({name:"item-id",params:{id:n.id}})}},[t._v("\n          "+t._s(n.label)+"\n        ")])]}},{key:"item.拡大図",fn:function(e){var n=e.item;return[r("a",{attrs:{rounded:"",depressed:"",target:"_blank",color:"primary darken-2",href:"https://www.hi.u-tokyo.ac.jp/collection/degitalgallary/icv/?curation="+n.curation+"&xywh="+n.member.split("#xywh=")[1]+"&mode=annotation&lang=ja"}},[t._v(t._s(t.$utils.formatArrayValue(n.図))+"\n          "),r("v-icon",{staticClass:"ml-1",attrs:{color:"primary"}},[t._v("mdi-exit-to-app")])],1)]}}],null,!1,3590250898)})],t._v(" "),t._e()],2)}),[],!1,null,null,null);e.default=component.exports},373:function(t,e,r){"use strict";r.r(e);var n=r(17),o=r(27),c=r(40),l=r(41),f=r(22),v=r(5),d=(r(37),r(7),r(76),r(11));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},h=function(t){Object(c.a)(r,t);var e=m(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).baseUrl="https://nakamura196.github.io/kunshujo",t}return Object(o.a)(r,[{key:"copyLink",value:function(){var t=this.url;document.addEventListener("copy",(function e(r){r.clipboardData.setData("text/plain",t),r.preventDefault(),document.removeEventListener("copy",e)})),document.execCommand("copy")}},{key:"twitterUrl",get:function(){return"https://twitter.com/intent/tweet?url="+this.url+"&text="+this.title}},{key:"facebookUrl",get:function(){return"https://www.facebook.com/sharer/sharer.php?u="+this.url}},{key:"pocketUrl",get:function(){return"http://getpocket.com/edit?url="+this.url}}]),r}(d.Vue);y([Object(d.Prop)({required:!0})],h.prototype,"url",void 0),y([Object(d.Prop)({required:!0})],h.prototype,"title",void 0);var _=h=y([d.Component],h),j=r(26),component=Object(j.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:""}},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.twitterUrl}},n),[r("v-icon",[t._v("mdi-twitter")])],1)]}}])},[t._v(" "),r("span",[t._v(t._s("Twitter"))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.facebookUrl}},n),[r("v-icon",[t._v("mdi-facebook")])],1)]}}])},[t._v(" "),r("span",[t._v(t._s("Facebook"))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.pocketUrl}},n),[r("img",{staticStyle:{"font-size":"24px"},attrs:{src:t.baseUrl+"/img/icons/pocket.svg"}})])]}}])},[t._v(" "),r("span",[t._v(t._s("Pocket"))])])],1)}),[],!1,null,null,null);e.default=component.exports},374:function(t,e,r){"use strict";r.r(e);var n=r(17),o=r(27),c=r(40),l=r(41),f=r(22),v=r(5),d=(r(37),r(7),r(76),r(11)),m=r(373);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var h=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=function(t){Object(c.a)(r,t);var e=y(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"title",get:function(){return this.item.label}},{key:"url",get:function(){return this.item.url}}]),r}(d.Vue);h([Object(d.Prop)()],_.prototype,"item",void 0);var j=_=h([Object(d.Component)({components:{ShareButtons:m.default}})],_),k=r(26),component=Object(k.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{color:"primary",depressed:"",icon:""}},n),[r("v-icon",[t._v("mdi-share-variant")])],1)]}}])},[t._v(" "),r("ShareButtons",{attrs:{url:t.url,title:t.title}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);