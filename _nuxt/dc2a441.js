(window.webpackJsonp=window.webpackJsonp||[]).push([[45,21,27],{566:function(e,t,r){"use strict";r.r(t);var n=r(22),o=r(39),l=r(35),c=r(18),f=r(8),d=(r(10),r(3),r(68),r(37));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(c.a)(e);if(t){var o=Object(c.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var m=function(e,t,r,desc){var n,o=arguments.length,l=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(o<3?n(l):o>3?n(t,r,l):n(t,r))||l);return o>3&&l&&Object.defineProperty(t,r,l),l},h=function(e){Object(o.a)(r,e);var t=v(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return r}(d.Vue);m([Object(d.Prop)({required:!0})],h.prototype,"items",void 0);var y=h=m([d.Component],h),k=r(54),_=r(60),j=r.n(_),x=r(576),O=r(556),R=r(218),w=r(82),component=Object(k.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-2 px-0 mx-0",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:e.items},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);t.default=component.exports;j()(component,{VBreadcrumbs:x.a,VContainer:O.a,VIcon:R.a,VSheet:w.a})},578:function(e,t,r){var content=r(587);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("2c6cf8ac",content,!0,{sourceMap:!1})},579:function(e,t,r){"use strict";r.r(t);var n=r(22),o=r(39),l=r(35),c=r(18),f=r(8),d=(r(10),r(3),r(68),r(37));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(c.a)(e);if(t){var o=Object(c.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var m=function(e,t,r,desc){var n,o=arguments.length,l=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(o<3?n(l):o>3?n(t,r,l):n(t,r))||l);return o>3&&l&&Object.defineProperty(t,r,l),l},h={};h=r(595);var y=function(e){Object(o.a)(r,e);var t=v(r);function r(){var e;return Object(n.a)(this,r),(e=t.apply(this,arguments)).tileProviders=[{name:"地理院タイル",visible:!0,url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'}],e}return r}(d.Vue);m([Object(d.Prop)()],y.prototype,"markers",void 0),m([Object(d.Prop)({default:7})],y.prototype,"zoom",void 0),m([Object(d.Prop)({default:function(){return[33,130]}})],y.prototype,"center",void 0),m([Object(d.Prop)({default:function(){return[]}})],y.prototype,"rectangles",void 0),m([Object(d.Prop)({default:function(){return null}})],y.prototype,"geojson",void 0);var k=y=m([Object(d.Component)({components:{"l-marker-cluster":h}})],y),_=(r(586),r(54)),component=Object(_.a)(k,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("client-only",[r("l-map",{staticStyle:{"z-index":"0"},attrs:{zoom:e.zoom,center:e.center}},[r("l-control-layers",{attrs:{position:"topright"}}),e._v(" "),e._l(e.tileProviders,(function(e){return r("l-tile-layer",{key:e.name,attrs:{name:e.name,visible:e.visible,url:e.url,attribution:e.attribution,"layer-type":"base"}})})),e._v(" "),e._l(e.rectangles,(function(e,t){return r("l-rectangle",{key:t,attrs:{bounds:e.bounds,"l-style":e.style}})})),e._v(" "),e.geojson&&Object.keys(e.geojson).length>0?r("l-geo-json",{attrs:{geojson:e.geojson,options:e.options}}):e._e(),e._v(" "),r("l-marker-cluster",e._l(e.markers,(function(marker,t){return r("l-marker",{key:t,attrs:{"lat-lng":marker.latlng}},[marker.content?r("l-popup",[r("div",{domProps:{innerHTML:e._s(marker.content)}})]):e._e()],1)})),1)],2)],1)}),[],!1,null,null,null);t.default=component.exports},586:function(e,t,r){"use strict";r(578)},587:function(e,t,r){var n=r(19)(!1);n.push([e.i,'.leaflet-cluster-anim .leaflet-marker-icon,.leaflet-cluster-anim .leaflet-marker-shadow{transition:transform .3s ease-out,opacity .3s ease-in}.leaflet-cluster-spider-leg{transition:stroke-dashoffset .3s ease-out,stroke-opacity .3s ease-in}.marker-cluster-small{background-color:rgba(181,226,140,.6)}.marker-cluster-small div{background-color:rgba(110,204,57,.6)}.marker-cluster-medium{background-color:rgba(241,211,87,.6)}.marker-cluster-medium div{background-color:rgba(240,194,12,.6)}.marker-cluster-large{background-color:rgba(253,156,115,.6)}.marker-cluster-large div{background-color:rgba(241,128,23,.6)}.leaflet-oldie .marker-cluster-small{background-color:#b5e28c}.leaflet-oldie .marker-cluster-small div{background-color:#6ecc39}.leaflet-oldie .marker-cluster-medium{background-color:#f1d357}.leaflet-oldie .marker-cluster-medium div{background-color:#f0c20c}.leaflet-oldie .marker-cluster-large{background-color:#fd9c73}.leaflet-oldie .marker-cluster-large div{background-color:#f18017}.marker-cluster{background-clip:padding-box;border-radius:20px}.marker-cluster div{width:30px;height:30px;margin-left:5px;margin-top:5px;text-align:center;border-radius:15px;font:12px "Helvetica Neue",Arial,Helvetica,sans-serif}.marker-cluster span{line-height:30px}',""]),e.exports=n},591:function(e,t,r){"use strict";r.r(t);r(68),r(38),r(25),r(43),r(32),r(6),r(46),r(47),r(36);var n=r(27),o=r(22),l=r(31),c=r(39),f=r(35),d=r(18),v=r(8),m=(r(84),r(10),r(3),r(23),r(50),r(64),r(37)),h=r(577),y=r(114),k=r.n(y);function _(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var O=function(e,t,r,desc){var n,o=arguments.length,l=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(o<3?n(l):o>3?n(t,r,l):n(t,r))||l);return o>3&&l&&Object.defineProperty(t,r,l),l},R=function(e){Object(c.a)(f,e);var t,r=x(f);function f(){var e;return Object(o.a)(this,f),(e=r.apply(this,arguments)).moreLikeThisData=[],e.baseUrl="https://kunshujo2022.dl.itc.u-tokyo.ac.jp",e}return Object(l.a)(f,[{key:"mounted",value:function(){this.moreLikeThis()}},{key:"watchId",value:function(){this.moreLikeThis()}},{key:"moreLikeThis",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(){var t,r,n,o,l,c,f,d,v,m,h,y,j,x,O,R,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get(this.baseUrl+"/data/index.json");case 2:t=(t=e.sent).data,r={},n=_(t);try{for(n.s();!(o=n.n()).done;)l=o.value,r[l.objectID]=l}catch(e){n.e(e)}finally{n.f()}return c=this.item,f=c.manifest,d=f.split("/"),v=d[d.length-2],e.next=13,k.a.get(this.baseUrl+"/data/relations/".concat(v,".json"));case 13:if(m=(m=e.sent).data,h=this.item.objectID,y=[],m[h]&&m[h].texts){j=m[h].texts,x=_(j);try{for(x.s();!(O=x.n()).done;)R=O.value,w=r[R],y.push({id:R,label:w.label,thumbnail:w.thumbnail,description:w.tag.join(", "),to:{name:"item-id",params:{id:R}}})}catch(e){x.e(e)}finally{x.f()}}this.moreLikeThisData=y;case 19:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),f}(m.Vue);O([Object(m.Prop)({required:!0})],R.prototype,"item",void 0),O([Object(m.Watch)("itemId")],R.prototype,"watchId",null);var w=R=O([Object(m.Component)({components:{HorizontalItems:h.default}})],R),C=r(54),component=Object(C.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.moreLikeThisData.length>0?r("div",[r("div",{staticClass:"text-center"},[r("h3",{staticClass:"my-5"},[e._v(e._s(e.$t("タイトルが似ているアイテム")))])]),e._v(" "),r("HorizontalItems",{attrs:{data:e.moreLikeThisData,height:150}})],1):e._e()}),[],!1,null,null,null);t.default=component.exports},592:function(e,t,r){"use strict";r.r(t);var n=r(22),o=r(39),l=r(35),c=r(18),f=r(8),d=(r(10),r(3),r(68),r(37));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(c.a)(e);if(t){var o=Object(c.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var m=function(e,t,r,desc){var n,o=arguments.length,l=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(o<3?n(l):o>3?n(t,r,l):n(t,r))||l);return o>3&&l&&Object.defineProperty(t,r,l),l},h=function(e){Object(o.a)(r,e);var t=v(r);function r(){var e;return Object(n.a)(this,r),(e=t.apply(this,arguments)).baseUrl="https://kunshujo2022.dl.itc.u-tokyo.ac.jp",e}return r}(d.Vue),y=h=m([Object(d.Component)({components:{}})],h),k=r(54),_=r(60),j=r.n(_),x=r(82),component=Object(k.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-sheet",{staticClass:"text-center pa-10 mt-10",attrs:{color:"grey lighten-4"}},[r("small",[r("h3",{staticClass:"mb-5"},[e._v(e._s(e.$t("license")))]),e._v(" "),r("nuxt-link",{attrs:{to:e.localePath({name:"page-slug",params:{slug:"reuse"}})}},[e._v(e._s(e.baseUrl+"/page/reuse"))])],1)])}),[],!1,null,null,null);t.default=component.exports;j()(component,{VSheet:x.a})},600:function(e,t,r){"use strict";(function(e){r(68);var n=r(27),o=r(22),l=r(31),c=r(39),f=r(35),d=r(18),v=r(8),m=(r(84),r(10),r(3),r(32),r(36),r(34),r(23),r(50),r(37)),h=r(572),y=r(591),k=r(604),_=r(623),j=r(592),x=r(566),O=r(579);function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var w=function(e,t,r,desc){var n,o=arguments.length,l=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(o<3?n(l):o>3?n(t,r,l):n(t,r))||l);return o>3&&l&&Object.defineProperty(t,r,l),l},C=function(t){Object(c.a)(v,t);var f,d=R(v);function v(){var t;return Object(o.a)(this,v),(t=d.apply(this,arguments)).item={},t.height=300,t.hide=e.env.hide||{},t.searches={default:{label:"item",index:"data/index.json",aggs:{agential:{key:"agential",sort:"",label:"agential",value:{},more:!1,open:!0},place:{key:"place",sort:"",label:"place",value:{},more:!1,open:!0},org:{key:"org",sort:"",label:"org",value:{},more:!1,open:!0},keyword:{key:"keyword",sort:"",label:"keyword",value:{},more:!1,open:!0},book:{key:"book",sort:"",label:"book",value:{},more:!1,open:!0},time:{key:"time",sort:"",label:"time",value:{},more:!1,open:!0},color:{key:"color",sort:"",label:"color",value:{},more:!1,open:!0},mtag:{key:"mtag",sort:"",label:"mtag",value:{},more:!1,open:!0}},sort:[{label:"ID",value:"index"},{label:"適合度",value:"_score"}],defaultSort:"index:asc",defaultLayout:"grid",name:"item-id",detail:[{label:"book",value:"book"},{label:"tag",value:"tag",type:"text"},{label:"agential",value:"agential"},{label:"org",value:"org"},{label:"place",value:"place"},{label:"keyword",value:"keyword"},{label:"time",value:"time"},{label:"color",value:"color"},{label:"mtag",value:"mtag"}],advanced:[],layout:[{label:"list",value:"list",icon:"mdi-view-list",component:"search-layout-list"},{label:"grid",value:"grid",icon:"mdi-view-grid",component:"search-layout-grid"},{label:"graph",value:"graph",icon:"mdi-chart-bar",component:"search-layout-graph"}],list:[{label:"tag",value:"tag"},{label:"book",value:"book"}]},entity:{label:"entity",index:"data/entity.json",aggs:{"タイプ":{key:"タイプ",sort:"",label:"タイプ",value:{},more:!1,open:!0}},sort:[{label:"ID",value:"index"},{label:"適合度",value:"_score"},{label:"出現頻度",value:"count"}],defaultSort:"count:desc",defaultLayout:"grid",name:"entity-id",detail:[{label:"タイプ",value:"タイプ"}],advanced:[],layout:[{label:"list",value:"list",icon:"mdi-view-list",component:"search-layout-list"},{label:"grid",value:"grid",icon:"mdi-view-grid",component:"search-layout-grid"},{label:"graph",value:"graph",icon:"mdi-chart-bar",component:"search-layout-graph"}],list:[{label:"タイプ",value:"タイプ"},{label:"description",value:"description"}]},object:{label:"object",index:"data/gcv.json",aggs:{mtag:{key:"mtag",sort:"",label:"mtag",value:{},more:!1,open:!0},color:{key:"color",sort:"",label:"color",value:{},more:!1,open:!0},score:{key:"score",sort:"",label:"score",value:{},more:!1,open:!0}},sort:[{label:"ID",value:"index"},{label:"適合度",value:"_score"},{label:"score",value:"score"}],defaultSort:"_score:desc",defaultLayout:"grid",name:"object-id",detail:[{label:"mtag",value:"mtag"},{label:"color",value:"color"},{label:"score",value:"score",type:"text"}],advanced:[],layout:[{label:"list",value:"list",icon:"mdi-view-list",component:"search-layout-list"},{label:"grid",value:"grid",icon:"mdi-view-grid",component:"search-layout-grid"},{label:"graph",value:"graph",icon:"mdi-chart-bar",component:"search-layout-graph"}],list:[{label:"score",value:"score"}]}},t.baseUrl="https://kunshujo2022.dl.itc.u-tokyo.ac.jp",t.snackbar=!1,t}return Object(l.a)(v,[{key:"asyncData",value:(f=Object(n.a)(regeneratorRuntime.mark((function e(t){var n,o,l,c,f,d,v,m,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.payload,o=t.app,t.$axios,t.params,!n){e.next=5;break}return e.abrupt("return",{item:n});case 5:return l=o.context.params.id,e.next=8,r.e(8).then(r.t.bind(null,676,3));case 8:for(v in c=e.sent,f={},d={},c)m=c[v],(h=m.objectID)===l&&(d=m),h&&(f[h]=m);return e.abrupt("return",{item:d,markers:[],center:null,index:f});case 13:case"end":return e.stop()}}),e)}))),function(e){return f.apply(this,arguments)})},{key:"url",get:function(){return this.baseUrl+this.$route.fullPath}},{key:"id",get:function(){return this.item.objectID}},{key:"title",get:function(){return this.item.label}},{key:"thumbnail",get:function(){return this.item.thumbnail}},{key:"myText",get:function(){var e="電子展示『捃拾帖』（拡張版）",footer="東京大学";if("en"===this.$i18n.locale){var t=this.$t(e)+" - "+this.$t(footer);return'"'.concat(this.title,'" ').concat(t," (").concat(this.url,")")}return"『".concat(this.title,"』").concat("電子展示『捃拾帖』（拡張版） - 東京大学"," (").concat(this.url,")")}},{key:"aggs",get:function(){return this.searches.entity.detail}},{key:"bh",get:function(){return[{text:this.$t("index"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.$t("entity"),disabled:!1,to:this.localePath({name:"search-slug",params:{slug:"entity"},query:this.$route.query}),exact:!0},{text:this.title}]}},{key:"getField",value:function(e){switch(e){case"chname":return"agential";case"place":return"place";case"time":return"time";case"org":return"org";case"keyword":return"keyword"}}},{key:"to",get:function(){var e=this.$route.params.id,t=e.split(":")[0],r={};return r["fc-"+this.getField(t)]=e,{name:"search-slug",query:r}}},{key:"getQuery",value:function(e,t){var map={};return map["fc-".concat(e)]=t,map}},{key:"writeToClipboard",value:function(){navigator.clipboard.writeText(this.myText).catch((function(e){console.error(e)})),this.snackbar=!0}},{key:"head",value:function(){var title=this.title;return{title:title,meta:[{hid:"og:title",property:"og:title",content:"『"+title+"』"+this.$t("電子展示『捃拾帖』（拡張版）")+" - "+this.$t("東京大学")},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:url",property:"og:url",content:this.url},{hid:"og:image",property:"og:image",content:this.thumbnail}]}}}]),v}(m.Vue);C=w([Object(m.Component)({components:{ResultOption:h.default,MoreLikeThis:y.default,SimilarImages:k.default,License:j.default,Breadcrumbs:x.default,MapMain:O.default,RelatedEntities:_.default}})],C),t.a=C}).call(this,r(143))},623:function(e,t,r){"use strict";r.r(t);r(68),r(38),r(25),r(43),r(32),r(23),r(6),r(46),r(47),r(36);var n=r(27),o=r(22),l=r(31),c=r(39),f=r(35),d=r(18),v=r(8),m=(r(84),r(10),r(3),r(34),r(64),r(37)),h=r(577),y=r(114),k=r.n(y);function _(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var O=function(e,t,r,desc){var n,o=arguments.length,l=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(o<3?n(l):o>3?n(t,r,l):n(t,r))||l);return o>3&&l&&Object.defineProperty(t,r,l),l},R=function(e){Object(c.a)(f,e);var t,r=x(f);function f(){var e;return Object(o.a)(this,f),(e=r.apply(this,arguments)).moreLikeThisData=[],e.baseUrl="https://kunshujo2022.dl.itc.u-tokyo.ac.jp",e}return Object(l.a)(f,[{key:"mounted",value:function(){this.moreLikeThis()}},{key:"watchId",value:function(){this.moreLikeThis()}},{key:"moreLikeThis",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(){var t,data,r,n,o,l,c,f,d,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://kunshujo2022.dl.itc.u-tokyo.ac.jp/data/entity_relation.json");case 2:if(t=e.sent,data=t.data,r=[],n=this.item.objectID,!data[n]){e.next=28;break}o=data[n],l=_(o),e.prev=9,l.s();case 11:if((c=l.n()).done){e.next=20;break}if(f=c.value,d=f.label,v=this.index[d]){e.next=17;break}return e.abrupt("continue",18);case 17:r.push({objectID:v.objectID,thumbnail:v.thumbnail,label:v.label,to:{name:"entity-id",params:{id:v.objectID}},description:"".concat(this.$t("タイプ"),": ").concat(this.$t(v["タイプ"].join(", "))," / ").concat(this.$t("共起頻度"),": ").concat(f.value)});case 18:e.next=11;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(9),l.e(e.t0);case 25:return e.prev=25,l.f(),e.finish(25);case 28:this.moreLikeThisData=r;case 29:case"end":return e.stop()}}),e,this,[[9,22,25,28]])}))),function(){return t.apply(this,arguments)})}]),f}(m.Vue);O([Object(m.Prop)({required:!0})],R.prototype,"item",void 0),O([Object(m.Prop)({required:!0})],R.prototype,"index",void 0),O([Object(m.Watch)("itemId")],R.prototype,"watchId",null);var w=R=O([Object(m.Component)({components:{HorizontalItems:h.default}})],R),C=r(54),component=Object(C.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.moreLikeThisData.length>0?r("div",[r("div",{staticClass:"text-center"},[r("h3",{staticClass:"my-5"},[e._v(e._s(e.$t("関連するエンティティ")))])]),e._v(" "),r("HorizontalItems",{attrs:{data:e.moreLikeThisData,height:150}})],1):e._e()}),[],!1,null,null,null);t.default=component.exports},718:function(e,t,r){"use strict";r.r(t);var n=r(600).a,o=r(54),l=r(60),c=r.n(l),f=r(286),d=r(266),v=r(90),m=r(558),h=r(556),y=r(218),k=r(225),_=r(267),j=r(559),x=r(82),O=r(598),R=r(683),w=r(557),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Breadcrumbs",{attrs:{items:e.bh}}),e._v(" "),e.thumbnail?[r("div",{staticStyle:{"background-color":"#f5f5f5"}},[r("v-container",{staticClass:"py-0",style:"height: "+e.height+"px"},[r("v-img",{style:"height: "+e.height+"px",attrs:{"mx-auto":"",contain:"",src:e.thumbnail}})],1)],1)]:e._e(),e._v(" "),r("v-container",{staticClass:"mt-5"},[r("h1",{staticClass:"mb-5"},[e._v("\n      "+e._s(e.title)+"\n    ")]),e._v(" "),e.item.description&&e.item.description[0]?r("p",{domProps:{innerHTML:e._s(e.$utils.formatArrayValue(e.item.description,"<br />"))}}):e._e(),e._v(" "),r("p",{staticClass:"text-center"},[e._e(),e._v(" "),e._e(),e._v(" "),r("span",{staticClass:"mx-2"}),e._v(" "),r("v-menu",{attrs:{"offset-y":"","close-on-content-click":!1},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({staticClass:"ma-1",attrs:{color:"primary",depressed:"",icon:""}},n),[r("v-icon",[e._v("mdi-comment-quote-outline")])],1)]}}])},[e._v(" "),r("v-card",{attrs:{flat:"",width:"400px"}},[r("div",{staticClass:"pt-4 px-4"},[r("h4",{staticClass:"mb-2"},[e._v(e._s(e.$t("citation")))]),e._v(" "),r("p",[e._v(e._s(e.myText))])]),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{rounded:"",color:"primary"},on:{click:function(t){return e.writeToClipboard()}}},[e._v("\n              "+e._s(e.$t("citation_copy"))+"\n            ")])],1)],1)],1),e._v(" "),r("ResultOption",{staticClass:"ma-1",attrs:{item:{label:e.title,url:e.url}}})],1),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"4"}}),e._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-btn",{staticClass:"my-10",attrs:{large:"",rounded:"",block:"",color:"primary darken-2",depressed:"",to:e.localePath(e.to)}},["ja"===e.$i18n.locale?[e._v("\n            "+e._s(Number(e.item.count))+" 件のアイテムを検索\n          ")]:[e._v(" Search "+e._s(Number(e.item.count))+" items ")],e._v(" "),r("v-icon",{staticClass:"ml-1"},[e._v("mdi-magnify")])],2)],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}})],1),e._v(" "),r("v-simple-table",{staticClass:"pt-5",scopedSlots:e._u([{key:"default",fn:function(){return[r("tbody",[e._l(e.aggs,(function(t,n){return[!e.hide[t.value]&&e.item[t.value]&&e.item[t.value].length>0&&e.item[t.value][0]?r("tr",{key:n},[r("td",{staticClass:"py-4"},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"3"}},[e._v(e._s(e.$t(t.label)))]),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"9"}},e._l(e.item[t.value],(function(n,o){return r("span",{key:o},["text"===t.type?["jk"===t.value?[r("v-btn",{staticClass:"ma-1",attrs:{rounded:"",color:"primary darken-2",depressed:"",target:"_blank",href:"https://japanknowledge.com/psnl/display/?lid="+n}},[e._v("Personal\n                            "),r("v-icon",{staticClass:"ml-2"},[e._v("mdi-exit-to-app")])],1),e._v(" "),r("v-btn",{staticClass:"ma-1",attrs:{rounded:"",color:"primary darken-2",depressed:"",target:"_blank",href:"https://japanknowledge.com/lib/display/?lid="+n}},[e._v("Lib\n                            "),r("v-icon",{staticClass:"ml-2"},[e._v("mdi-exit-to-app")])],1),e._v(" "),r("v-btn",{staticClass:"ma-1",attrs:{rounded:"",color:"primary darken-2",depressed:"",target:"_blank",href:"https://japanknowledge-com.utokyo.idm.oclc.org/lib/display/?lid="+n}},[e._v("東京大学限定; EZproxy\n                            "),r("v-icon",{staticClass:"ml-2"},[e._v("mdi-exit-to-app")])],1)]:[e._v("\n                          "+e._s(n)+"\n                        ")]]:"link"===t.type?[r("a",{attrs:{href:n,target:"_blank"}},[e._v(e._s(n)+"\n                          "),r("v-icon",{staticClass:"ml-1",attrs:{color:"primary"}},[e._v("mdi-exit-to-app")])],1)]:[r("nuxt-link",{attrs:{to:e.localePath({name:"search-slug",params:{slug:"entity"},query:e.getQuery(t.value,n)})}},[e._v(e._s(n))])],e._v(" "),o!==e.item[t.value].length-1?r("br"):e._e()],2)})),0)],1)],1)]):e._e()]}))],2)]},proxy:!0}])})],1),e._v(" "),e.markers.length>0?r("v-container",{staticClass:"mt-10 pa-10"},[r("MapMain",{staticStyle:{width:"100%",height:"300px"},attrs:{markers:e.markers,center:e.center}})],1):e._e(),e._v(" "),e.item.license?r("v-sheet",{staticClass:"text-center pa-10 mt-10",attrs:{color:"grey lighten-4"}},[r("small",[r("h3",{staticClass:"mb-5"},[e._v(e._s(e.$t("license")))]),e._v(" "),r("License",{attrs:{uri:e.item.license}})],1)]):e._e(),e._v(" "),r("v-container",[r("div",{staticClass:"mt-10"},[r("RelatedEntities",{ref:"ri",attrs:{item:e.item,index:e.index}})],1)]),e._v(" "),r("License"),e._v(" "),r("v-sheet",{staticClass:"text-center pa-10 my-10"},[r("small",[r("h3",{staticClass:"mb-5"},[e._v(e._s(e.$t("last_updated")))]),e._v("\n\n      "+e._s(e.item._updated)+"\n    ")])]),e._v(" "),r("v-snackbar",{attrs:{color:"primary",timeout:2e3},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[r("div",{staticClass:"pa-2 text-center"},[e._v("\n      "+e._s(e.$t("copied"))+"\n    ")])])],2)}),[],!1,null,null,null);t.default=component.exports;c()(component,{MapMain:r(579).default}),c()(component,{VBtn:f.a,VCard:d.a,VCardActions:v.a,VCol:m.a,VContainer:h.a,VIcon:y.a,VImg:k.a,VMenu:_.a,VRow:j.a,VSheet:x.a,VSimpleTable:O.a,VSnackbar:R.a,VSpacer:w.a})}}]);