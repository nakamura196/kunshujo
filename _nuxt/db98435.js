(window.webpackJsonp=window.webpackJsonp||[]).push([[49,21,27],{566:function(t,e,r){"use strict";r.r(e);var n=r(22),o=r(39),c=r(35),l=r(18),f=r(8),d=(r(10),r(3),r(68),r(37));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var h=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},v=function(t){Object(o.a)(r,t);var e=m(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(d.Vue);h([Object(d.Prop)({required:!0})],v.prototype,"items",void 0);var y=v=h([d.Component],v),k=r(54),j=r(60),_=r.n(j),O=r(576),x=r(556),R=r(218),w=r(82),component=Object(k.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-2 px-0 mx-0",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VBreadcrumbs:O.a,VContainer:x.a,VIcon:R.a,VSheet:w.a})},578:function(t,e,r){var content=r(587);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("2c6cf8ac",content,!0,{sourceMap:!1})},579:function(t,e,r){"use strict";r.r(e);var n=r(22),o=r(39),c=r(35),l=r(18),f=r(8),d=(r(10),r(3),r(68),r(37));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var h=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},v={};v=r(595);var y=function(t){Object(o.a)(r,t);var e=m(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).tileProviders=[{name:"地理院タイル",visible:!0,url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'}],t}return r}(d.Vue);h([Object(d.Prop)()],y.prototype,"markers",void 0),h([Object(d.Prop)({default:7})],y.prototype,"zoom",void 0),h([Object(d.Prop)({default:function(){return[33,130]}})],y.prototype,"center",void 0),h([Object(d.Prop)({default:function(){return[]}})],y.prototype,"rectangles",void 0),h([Object(d.Prop)({default:function(){return null}})],y.prototype,"geojson",void 0);var k=y=h([Object(d.Component)({components:{"l-marker-cluster":v}})],y),j=(r(586),r(54)),component=Object(j.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("client-only",[r("l-map",{staticStyle:{"z-index":"0"},attrs:{zoom:t.zoom,center:t.center}},[r("l-control-layers",{attrs:{position:"topright"}}),t._v(" "),t._l(t.tileProviders,(function(t){return r("l-tile-layer",{key:t.name,attrs:{name:t.name,visible:t.visible,url:t.url,attribution:t.attribution,"layer-type":"base"}})})),t._v(" "),t._l(t.rectangles,(function(t,e){return r("l-rectangle",{key:e,attrs:{bounds:t.bounds,"l-style":t.style}})})),t._v(" "),t.geojson&&Object.keys(t.geojson).length>0?r("l-geo-json",{attrs:{geojson:t.geojson,options:t.options}}):t._e(),t._v(" "),r("l-marker-cluster",t._l(t.markers,(function(marker,e){return r("l-marker",{key:e,attrs:{"lat-lng":marker.latlng}},[marker.content?r("l-popup",[r("div",{domProps:{innerHTML:t._s(marker.content)}})]):t._e()],1)})),1)],2)],1)}),[],!1,null,null,null);e.default=component.exports},586:function(t,e,r){"use strict";r(578)},587:function(t,e,r){var n=r(19)(!1);n.push([t.i,'.leaflet-cluster-anim .leaflet-marker-icon,.leaflet-cluster-anim .leaflet-marker-shadow{transition:transform .3s ease-out,opacity .3s ease-in}.leaflet-cluster-spider-leg{transition:stroke-dashoffset .3s ease-out,stroke-opacity .3s ease-in}.marker-cluster-small{background-color:rgba(181,226,140,.6)}.marker-cluster-small div{background-color:rgba(110,204,57,.6)}.marker-cluster-medium{background-color:rgba(241,211,87,.6)}.marker-cluster-medium div{background-color:rgba(240,194,12,.6)}.marker-cluster-large{background-color:rgba(253,156,115,.6)}.marker-cluster-large div{background-color:rgba(241,128,23,.6)}.leaflet-oldie .marker-cluster-small{background-color:#b5e28c}.leaflet-oldie .marker-cluster-small div{background-color:#6ecc39}.leaflet-oldie .marker-cluster-medium{background-color:#f1d357}.leaflet-oldie .marker-cluster-medium div{background-color:#f0c20c}.leaflet-oldie .marker-cluster-large{background-color:#fd9c73}.leaflet-oldie .marker-cluster-large div{background-color:#f18017}.marker-cluster{background-clip:padding-box;border-radius:20px}.marker-cluster div{width:30px;height:30px;margin-left:5px;margin-top:5px;text-align:center;border-radius:15px;font:12px "Helvetica Neue",Arial,Helvetica,sans-serif}.marker-cluster span{line-height:30px}',""]),t.exports=n},591:function(t,e,r){"use strict";r.r(e);r(68),r(38),r(25),r(43),r(32),r(6),r(46),r(47),r(36);var n=r(27),o=r(22),c=r(31),l=r(39),f=r(35),d=r(18),m=r(8),h=(r(84),r(10),r(3),r(23),r(50),r(64),r(37)),v=r(577),y=r(114),k=r.n(y);function j(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return _(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var x=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},R=function(t){Object(l.a)(f,t);var e,r=O(f);function f(){var t;return Object(o.a)(this,f),(t=r.apply(this,arguments)).moreLikeThisData=[],t.baseUrl="https://kunshujo2022.dl.itc.u-tokyo.ac.jp",t}return Object(c.a)(f,[{key:"mounted",value:function(){this.moreLikeThis()}},{key:"watchId",value:function(){this.moreLikeThis()}},{key:"moreLikeThis",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,n,o,c,l,f,d,m,h,v,y,_,O,x,R,w;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get(this.baseUrl+"/data/index.json");case 2:e=(e=t.sent).data,r={},n=j(e);try{for(n.s();!(o=n.n()).done;)c=o.value,r[c.objectID]=c}catch(t){n.e(t)}finally{n.f()}return l=this.item,f=l.manifest,d=f.split("/"),m=d[d.length-2],t.next=13,k.a.get(this.baseUrl+"/data/relations/".concat(m,".json"));case 13:if(h=(h=t.sent).data,v=this.item.objectID,y=[],h[v]&&h[v].texts){_=h[v].texts,O=j(_);try{for(O.s();!(x=O.n()).done;)R=x.value,w=r[R],y.push({id:R,label:w.label,thumbnail:w.thumbnail,description:w.tag.join(", "),to:{name:"item-id",params:{id:R}}})}catch(t){O.e(t)}finally{O.f()}}this.moreLikeThisData=y;case 19:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),f}(h.Vue);x([Object(h.Prop)({required:!0})],R.prototype,"item",void 0),x([Object(h.Watch)("itemId")],R.prototype,"watchId",null);var w=R=x([Object(h.Component)({components:{HorizontalItems:v.default}})],R),C=r(54),component=Object(C.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.moreLikeThisData.length>0?r("div",[r("div",{staticClass:"text-center"},[r("h3",{staticClass:"my-5"},[t._v(t._s(t.$t("タイトルが似ているアイテム")))])]),t._v(" "),r("HorizontalItems",{attrs:{data:t.moreLikeThisData,height:150}})],1):t._e()}),[],!1,null,null,null);e.default=component.exports},592:function(t,e,r){"use strict";r.r(e);var n=r(22),o=r(39),c=r(35),l=r(18),f=r(8),d=(r(10),r(3),r(68),r(37));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var h=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},v=function(t){Object(o.a)(r,t);var e=m(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).baseUrl="https://kunshujo2022.dl.itc.u-tokyo.ac.jp",t}return r}(d.Vue),y=v=h([Object(d.Component)({components:{}})],v),k=r(54),j=r(60),_=r.n(j),O=r(82),component=Object(k.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-sheet",{staticClass:"text-center pa-10 mt-10",attrs:{color:"grey lighten-4"}},[r("small",[r("h3",{staticClass:"mb-5"},[t._v(t._s(t.$t("license")))]),t._v(" "),r("nuxt-link",{attrs:{to:t.localePath({name:"page-slug",params:{slug:"reuse"}})}},[t._v(t._s(t.baseUrl+"/page/reuse"))])],1)])}),[],!1,null,null,null);e.default=component.exports;_()(component,{VSheet:O.a})},601:function(t,e,r){"use strict";(function(t){r(68),r(38),r(25),r(43),r(32),r(6),r(46),r(47),r(36);var n=r(27),o=r(22),c=r(31),l=r(39),f=r(35),d=r(18),m=r(8),h=(r(84),r(10),r(3),r(34),r(23),r(50),r(26),r(55),r(33),r(44),r(37)),v=r(572),y=r(614),k=r(591),j=r(604),_=r(622),O=r(592),x=r(114),R=r.n(x),w=r(566),C=r(579);function I(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return P(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function P(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var S=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},$=function(e){Object(l.a)(d,e);var r,f=T(d);function d(){var e;return Object(o.a)(this,d),(e=f.apply(this,arguments)).item={},e.hide=t.env.hide||{},e.baseUrl="https://kunshujo2022.dl.itc.u-tokyo.ac.jp",e.snackbar=!1,e}return Object(c.a)(d,[{key:"asyncData",value:(r=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,o,c,l,data,f,d,m,h,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.payload,n=e.app,o=null,!r){t.next=6;break}o=r,t.next=30;break;case 6:return c=n.context.params.id,t.next=9,R.a.get("https://kunshujo2022.dl.itc.u-tokyo.ac.jp/data/index.json");case 9:l=t.sent,data=l.data,f=I(data),t.prev=13,f.s();case 15:if((d=f.n()).done){t.next=22;break}if((m=d.value).objectID!==c){t.next=20;break}return o=m,t.abrupt("break",22);case 20:t.next=15;break;case 22:t.next=27;break;case 24:t.prev=24,t.t0=t.catch(13),f.e(t.t0);case 27:return t.prev=27,f.f(),t.finish(27);case 30:return h=[],v=[33,130],t.abrupt("return",{item:o,center:v,markers:h});case 33:case"end":return t.stop()}}),t,null,[[13,24,27,30]])}))),function(t){return r.apply(this,arguments)})},{key:"url",get:function(){return this.baseUrl+this.$route.fullPath}},{key:"id",get:function(){return this.item.objectID}},{key:"title",get:function(){return this.item.label}},{key:"thumbnail",get:function(){return this.item.thumbnail}},{key:"myText",get:function(){var t="電子展示『捃拾帖』（拡張版）",footer="東京大学";if("en"===this.$i18n.locale){var e=this.$t(t)+" - "+this.$t(footer);return'"'.concat(this.title,'" ').concat(e," (").concat(this.url,")")}return"『".concat(this.title,"』").concat("電子展示『捃拾帖』（拡張版） - 東京大学"," (").concat(this.url,")")}},{key:"aggs",get:function(){return[{label:"book",value:"book"},{label:"tag",value:"tag",type:"text"},{label:"agential",value:"agential"},{label:"org",value:"org"},{label:"place",value:"place"},{label:"keyword",value:"keyword"},{label:"time",value:"time"},{label:"color",value:"color"},{label:"mtag",value:"mtag"}]}},{key:"bh",get:function(){return[{text:this.$t("index"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.$t("search"),disabled:!1,to:this.localePath({name:"search-slug",query:this.$route.query}),exact:!0},{text:this.title}]}},{key:"viewerUrl",get:function(){var t=this.item,e=(t.manifest,t.member.split("#xywh="));return"http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest="+t.manifest+"&canvas="+e[0]+"&xywh="+e[1]+"&xywh_highlight=border"}},{key:"viewerUrl2",get:function(){var t=this.item,e=t.manifest,r=t.member.split("#xywh="),n=e.split("/iiif/")[1].split("/manifest")[0],o=Number(r[0].split("/canvas/p")[1])-1,c=r[1];return"https://iiif.dl.itc.u-tokyo.ac.jp/repo/s/tanaka/document/".concat(n,"#?cv=").concat(o,"&c=0&m=0&s=0&xywh=").concat(c)}},{key:"iframeUrl",get:function(){var t=this.item.manifest,e=this.item.member;return this.baseUrl+"/curation/?manifest="+t.replace("https://iiif.dl.itc.u-tokyo.ac.jp/repo",this.baseUrl+"/data")+".json&canvas="+encodeURIComponent(e)}},{key:"rdfUrl",get:function(){return t.env.DATA_URL+"/snorql/?describe=http%3A%2F%2Fexample.org%2Fdata%2F"+this.$route.params.id}},{key:"getQuery",value:function(t,e){var map={};return map["fc-".concat(t)]=e,map}},{key:"writeToClipboard",value:function(){navigator.clipboard.writeText(this.myText).catch((function(t){console.error(t)})),this.snackbar=!0}},{key:"head",value:function(){var title=this.title;return{title:title,meta:[{hid:"og:title",property:"og:title",content:"『"+title+"』"+this.$t("電子展示『捃拾帖』（拡張版）")+" - "+this.$t("東京大学")},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:url",property:"og:url",content:this.url},{hid:"og:image",property:"og:image",content:this.thumbnail}]}}},{key:"formatLabel",value:function(t){return t.includes(":")&&(t=t.split(":")[1]),t}}]),d}(h.Vue);$=S([Object(h.Component)({components:{RelatedItems:y.default,MoreLikeThis:k.default,SimilarImages:j.default,Objects:_.default,ResultOption:v.default,License:O.default,Breadcrumbs:w.default,MapMain:C.default}})],$),e.a=$}).call(this,r(143))},614:function(t,e,r){"use strict";r.r(e);r(68),r(38),r(25),r(43),r(32),r(23),r(6),r(46),r(47),r(36);var n=r(27),o=r(22),c=r(31),l=r(39),f=r(35),d=r(18),m=r(8),h=(r(84),r(10),r(3),r(64),r(37)),v=r(577),y=r(114),k=r.n(y);function j(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return _(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var x=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},R=function(t){Object(l.a)(f,t);var e,r=O(f);function f(){var t;return Object(o.a)(this,f),(t=r.apply(this,arguments)).moreLikeThisData=[],t.baseUrl="https://kunshujo2022.dl.itc.u-tokyo.ac.jp",t}return Object(c.a)(f,[{key:"mounted",value:function(){this.moreLikeThis()}},{key:"watchId",value:function(){this.moreLikeThis()}},{key:"moreLikeThis",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,n,o,c,l,f,d,m,h,v,y,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get(this.baseUrl+"/data/index.json");case 2:e=(e=t.sent).data,r={},n=j(e);try{for(n.s();!(o=n.n()).done;)c=o.value,r[c.objectID]=c}catch(t){n.e(t)}finally{n.f()}return t.next=9,k.a.get(this.baseUrl+"/data/relation2.json");case 9:if(l=(l=t.sent).data,f=this.item.objectID,d=[],!l[f]){t.next=34;break}m=l[f],h=j(m),t.prev=16,h.s();case 18:if((v=h.n()).done){t.next=26;break}if(y=v.value,_=r[y],r[y]){t.next=23;break}return t.abrupt("continue",24);case 23:d.push({id:y,label:_.label,thumbnail:_.thumbnail,description:_.tag?_.tag.join(", "):null,to:{name:"item-id",params:{id:y}}});case 24:t.next=18;break;case 26:t.next=31;break;case 28:t.prev=28,t.t0=t.catch(16),h.e(t.t0);case 31:return t.prev=31,h.f(),t.finish(31);case 34:this.moreLikeThisData=d;case 35:case"end":return t.stop()}}),t,this,[[16,28,31,34]])}))),function(){return e.apply(this,arguments)})}]),f}(h.Vue);x([Object(h.Prop)({required:!0})],R.prototype,"item",void 0),x([Object(h.Watch)("itemId")],R.prototype,"watchId",null);var w=R=x([Object(h.Component)({components:{HorizontalItems:v.default}})],R),C=r(54),component=Object(C.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.moreLikeThisData.length>0?r("div",[r("div",{staticClass:"text-center my-5"},[r("h3",{staticClass:"mb-2"},[t._v(t._s(t.$t("一連の資料")))]),t._v(" "),r("small",[t._v("複数のページに渡っている場合、前後の資料がここに表示されます")])]),t._v(" "),r("HorizontalItems",{attrs:{data:t.moreLikeThisData,height:150}})],1):t._e()}),[],!1,null,null,null);e.default=component.exports},622:function(t,e,r){"use strict";r.r(e);var n=r(27),o=r(22),c=r(31),l=r(39),f=r(35),d=r(18),m=r(8),h=(r(84),r(10),r(3),r(68),r(38),r(25),r(43),r(32),r(23),r(6),r(46),r(47),r(36),r(37)),v=r(577),y=r(114),k=r.n(y);function j(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return _(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var x=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},R=function(t){Object(l.a)(f,t);var e,r=O(f);function f(){var t;return Object(o.a)(this,f),(t=r.apply(this,arguments)).moreLikeThisData=[],t.baseUrl="https://kunshujo2022.dl.itc.u-tokyo.ac.jp",t}return Object(c.a)(f,[{key:"mounted",value:function(){this.moreLikeThis()}},{key:"watchId",value:function(){this.moreLikeThis()}},{key:"moreLikeThis",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,n,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.item.objectID,t.next=3,k.a.get(this.baseUrl+"/data/gcv.json");case 3:r=(r=t.sent).data,n=[],o=j(r);try{for(o.s();!(c=o.n()).done;)(l=c.value).within===e&&n.push({id:l.objectID,label:l.label,thumbnail:l.thumbnail,to:{name:"object-id",params:{id:l.objectID}}})}catch(t){o.e(t)}finally{o.f()}this.moreLikeThisData=n;case 9:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),f}(h.Vue);x([Object(h.Prop)({required:!0})],R.prototype,"item",void 0),x([Object(h.Watch)("itemId")],R.prototype,"watchId",null);var w=R=x([Object(h.Component)({components:{HorizontalItems:v.default}})],R),C=r(54),component=Object(C.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.moreLikeThisData.length>0?r("div",[r("div",{staticClass:"text-center my-5"},[r("h3",{staticClass:"mb-2"},[t._v(t._s(t.$t("オブジェクト"))+"（"+t._s(t.$t("mtag"))+"）")])]),t._v(" "),r("HorizontalItems",{attrs:{data:t.moreLikeThisData,height:150}})],1):t._e()}),[],!1,null,null,null);e.default=component.exports},719:function(t,e,r){"use strict";r.r(e);var n=r(601).a,o=r(54),c=r(60),l=r.n(c),f=r(286),d=r(266),m=r(90),h=r(558),v=r(556),y=r(218),k=r(267),j=r(559),_=r(82),O=r(598),x=r(683),R=r(557),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Breadcrumbs",{attrs:{items:t.bh}}),t._v(" "),t.iframeUrl?[r("div",{staticStyle:{"background-color":"#f5f5f5"}},[r("v-container",{staticClass:"py-0",staticStyle:{height:"450px"}},[r("iframe",{staticClass:"px-10",attrs:{src:t.iframeUrl,width:"100%",height:"450",allowfullscreen:"",frameborder:"0"}})])],1)]:t._e(),t._v(" "),r("v-container",{staticClass:"mt-5"},[r("h1",{staticClass:"mb-5"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),r("p",{staticClass:"text-center"},[t._e(),t._v(" "),(t.viewerUrl,t._e()),t._v(" "),t.viewerUrl2?r("v-btn",{staticClass:"ma-1",attrs:{color:"primary",rounded:"",depressed:"",icon:!1,target:"_blank",href:t.viewerUrl2}},[r("span",{staticClass:"mr-2"},[t._v("公開元サイトで見る")])]):t._e(),t._v(" "),r("span",{staticClass:"mx-2"}),t._v(" "),r("v-menu",{attrs:{"offset-y":"","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-1",attrs:{color:"primary",depressed:"",icon:""}},n),[r("v-icon",[t._v("mdi-comment-quote-outline")])],1)]}}])},[t._v(" "),r("v-card",{attrs:{flat:"",width:"400px"}},[r("div",{staticClass:"pt-4 px-4"},[r("h4",{staticClass:"mb-2"},[t._v(t._s(t.$t("citation")))]),t._v(" "),r("p",[t._v(t._s(t.myText))])]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{rounded:"",color:"primary"},on:{click:function(e){return t.writeToClipboard()}}},[t._v("\n              "+t._s(t.$t("citation_copy"))+"\n            ")])],1)],1)],1),t._v(" "),r("ResultOption",{staticClass:"ma-1",attrs:{item:{label:t.title,url:t.url}}})],1),t._v(" "),r("v-simple-table",{staticClass:"pt-5",scopedSlots:t._u([{key:"default",fn:function(){return[r("tbody",[t.item.description&&t.item.description[0]?r("tr",[r("td",{staticClass:"py-4"},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"3"}},[t._v(t._s(t.$t("description")))]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"9"},domProps:{innerHTML:t._s(t.$utils.formatArrayValue(t.item.description,"<br />"))}})],1)],1)]):t._e(),t._v(" "),t._l(t.aggs,(function(e,n){return[!t.hide[e.value]&&t.item[e.value]&&t.item[e.value].length>0&&t.item[e.value][0]?r("tr",{key:n},[r("td",{staticClass:"py-4"},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"3"}},[t._v(t._s(t.$t(e.label)))]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"9"}},t._l(t.item[e.value],(function(n,o){return r("span",{key:o},["text"===e.type?[t._v("\n                        \n                        \n                          "+t._s(n)+"\n                        \n                      ")]:"link"===e.type?[r("a",{attrs:{href:n,target:"_blank"}},[t._v(t._s(n)+"\n                          "),r("v-icon",{staticClass:"ml-1",attrs:{color:"primary"}},[t._v("mdi-exit-to-app")])],1)]:[r("nuxt-link",{attrs:{to:t.localePath({name:"search-slug",query:t.getQuery(e.value,n)})}},[t._v(t._s(t.$utils.custom(t.formatLabel(n))))]),t._v(" "),n.includes(":")?[r("v-btn",{staticClass:"ma-1",attrs:{small:"",color:"primary darken-2",rounded:"",depressed:"",to:t.localePath({name:"entity-id",params:{id:n}})}},[t._v("\n                            詳細をみる\n                          ")])]:t._e()],t._v(" "),o!==t.item[e.value].length-1?r("span",{staticClass:"mr-5"}):t._e()],2)})),0)],1)],1)]):t._e()]}))],2)]},proxy:!0}])})],1),t._v(" "),t.markers.length>0?r("v-container",{staticClass:"mt-10 pa-10"},[r("MapMain",{staticStyle:{width:"100%",height:"300px"},attrs:{markers:t.markers,center:t.center}})],1):t._e(),t._v(" "),t.item.license?r("v-sheet",{staticClass:"text-center pa-10 mt-10",attrs:{color:"grey lighten-4"}},[r("small",[r("h3",{staticClass:"mb-5"},[t._v(t._s(t.$t("license")))]),t._v(" "),r("License",{attrs:{uri:t.item.license}})],1)]):t._e(),t._v(" "),r("v-container",{staticClass:"mb-10",attrs:{fluid:""}},[r("div",{staticClass:"mt-10"},[r("RelatedItems",{ref:"mlt",attrs:{item:t.item}})],1),t._v(" "),r("div",{staticClass:"mt-10"},[r("MoreLikeThis",{ref:"mlt",attrs:{item:t.item}})],1),t._v(" "),r("div",{staticClass:"mt-10"},[r("SimilarImages",{ref:"mlt2",attrs:{item:t.item}})],1),t._v(" "),r("div",{staticClass:"mt-10"},[r("Objects",{ref:"mlt2",attrs:{item:t.item}})],1)]),t._v(" "),r("License"),t._v(" "),r("v-sheet",{staticClass:"text-center pa-10 my-10"},[r("small",[r("h3",{staticClass:"mb-5"},[t._v(t._s(t.$t("last_updated")))]),t._v("\n\n      "+t._s(t.item._updated)+"\n    ")])]),t._v(" "),r("v-snackbar",{attrs:{color:"primary",timeout:2e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[r("div",{staticClass:"pa-2 text-center"},[t._v("\n      "+t._s(t.$t("copied"))+"\n    ")])])],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{MapMain:r(579).default}),l()(component,{VBtn:f.a,VCard:d.a,VCardActions:m.a,VCol:h.a,VContainer:v.a,VIcon:y.a,VMenu:k.a,VRow:j.a,VSheet:_.a,VSimpleTable:O.a,VSnackbar:x.a,VSpacer:R.a})}}]);