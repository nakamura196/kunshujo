(window.webpackJsonp=window.webpackJsonp||[]).push([[1864,1831,1832,1836,1837,1838,1840,1841,1842,1843],{2353:function(t,e,r){"use strict";r.r(e);var n=r(397).a,o=r(26),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Breadcrumbs",{attrs:{items:t.bh}}),t._v(" "),t.iframeUrl?[r("div",{staticStyle:{"background-color":"#f5f5f5"}},[r("v-container",{staticClass:"py-0",staticStyle:{height:"450px"}},[r("iframe",{attrs:{src:t.iframeUrl,width:"100%",height:"450",allowfullscreen:"",frameborder:"0"}})])],1)]:t._e(),t._v(" "),r("v-container",{staticClass:"mt-5"},[r("h1",{staticClass:"mb-5"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),r("p",{staticClass:"text-center"},[t._e(),t._v(" "),t.viewerUrl?r("v-btn",{staticClass:"ma-1",attrs:{icon:"",target:"_blank",href:t.viewerUrl}},[r("img",{attrs:{src:t.baseUrl+"/img/icons/icp-logo.svg",width:"24px"}})]):t._e(),t._v(" "),r("span",{staticClass:"mx-2"}),t._v(" "),r("v-menu",{attrs:{"offset-y":"","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-1",attrs:{color:"primary",depressed:"",icon:""}},n),[r("v-icon",[t._v("mdi-comment-quote-outline")])],1)]}}])},[t._v(" "),r("v-card",{attrs:{flat:"",width:"400px"}},[r("div",{staticClass:"pt-4 px-4"},[r("h4",{staticClass:"mb-2"},[t._v(t._s(t.$t("citation")))]),t._v(" "),r("p",[t._v(t._s(t.myText))])]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{rounded:"",color:"primary"},on:{click:function(e){return t.writeToClipboard()}}},[t._v("\n              "+t._s(t.$t("citation_copy"))+"\n            ")])],1)],1)],1),t._v(" "),r("ResultOption",{staticClass:"ma-1",attrs:{item:{label:t.title,url:t.url}}})],1),t._v(" "),r("v-simple-table",{staticClass:"pt-5",scopedSlots:t._u([{key:"default",fn:function(){return[r("tbody",[t.item.description&&t.item.description[0]?r("tr",[r("td",{staticClass:"py-4"},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"3"}},[t._v(t._s(t.$t("description")))]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"9"},domProps:{innerHTML:t._s(t.$utils.formatArrayValue(t.item.description,"<br />"))}})],1)],1)]):t._e(),t._v(" "),t._l(t.aggs,(function(e,n){return[!t.hide[e.value]&&t.item[e.value]&&t.item[e.value].length>0&&t.item[e.value][0]?r("tr",{key:n},[r("td",{staticClass:"py-4"},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"3"}},[t._v(t._s(t.$t(e.label)))]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"9"}},t._l(t.item[e.value],(function(n,o){return r("span",{key:o},["text"===e.type?["jk"===e.value?[r("v-btn",{staticClass:"ma-1",attrs:{rounded:"",color:"primary darken-2",depressed:"",target:"_blank",href:"https://japanknowledge.com/psnl/display/?lid="+n}},[t._v("Personal\n                            "),r("v-icon",{staticClass:"ml-2"},[t._v("mdi-exit-to-app")])],1),t._v(" "),r("v-btn",{staticClass:"ma-1",attrs:{rounded:"",color:"primary darken-2",depressed:"",target:"_blank",href:"https://japanknowledge.com/lib/display/?lid="+n}},[t._v("Lib\n                            "),r("v-icon",{staticClass:"ml-2"},[t._v("mdi-exit-to-app")])],1),t._v(" "),r("v-btn",{staticClass:"ma-1",attrs:{rounded:"",color:"primary darken-2",depressed:"",target:"_blank",href:"https://japanknowledge-com.utokyo.idm.oclc.org/lib/display/?lid="+n}},[t._v("東京大学限定; EZproxy\n                            "),r("v-icon",{staticClass:"ml-2"},[t._v("mdi-exit-to-app")])],1)]:[t._v("\n                          "+t._s(n)+"\n                        ")]]:"link"===e.type?[r("a",{attrs:{href:n,target:"_blank"}},[t._v(t._s(n)+"\n                          "),r("v-icon",{staticClass:"ml-1",attrs:{color:"primary"}},[t._v("mdi-exit-to-app")])],1)]:[r("nuxt-link",{attrs:{to:t.localePath({name:"search-slug",query:t.getQuery(e.value,n)})}},[t._v(t._s(t.formatLabel(n)))]),t._v(" "),n.includes(":")?[r("v-btn",{staticClass:"ma-1",attrs:{small:"",color:"primary darken-2",rounded:"",depressed:"",to:t.localePath({name:"entity-id",params:{id:n}})}},[t._v("\n                            詳細をみる\n                          ")])]:t._e()],t._v(" "),o!==t.item[e.value].length-1?r("span",{staticClass:"mr-5"}):t._e()],2)})),0)],1)],1)]):t._e()]}))],2)]},proxy:!0}])})],1),t._v(" "),t.markers.length>0?r("v-container",{staticClass:"mt-10 pa-10"},[r("MapMain",{staticStyle:{width:"100%",height:"300px"},attrs:{markers:t.markers,center:t.center}})],1):t._e(),t._v(" "),t.item.license?r("v-sheet",{staticClass:"text-center pa-10 mt-10",attrs:{color:"grey lighten-4"}},[r("small",[r("h3",{staticClass:"mb-5"},[t._v(t._s(t.$t("license")))]),t._v(" "),r("License",{attrs:{uri:t.item.license}})],1)]):t._e(),t._v(" "),r("v-container",[r("div",{staticClass:"mt-10"},[r("MoreLikeThis",{ref:"mlt",attrs:{item:t.item}})],1),t._v(" "),r("div",{staticClass:"mt-10"},[r("SimilarImages",{ref:"mlt2",attrs:{item:t.item}})],1)]),t._v(" "),r("v-sheet",{staticClass:"text-center pa-10 mt-10",attrs:{color:"grey lighten-4"}},[r("small",[r("h3",{staticClass:"mb-5"},[t._v(t._s(t.$t("license")))]),t._v(" "),"ja"==t.$i18n.locale?[r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[r("img",{staticStyle:{"border-width":"0"},attrs:{alt:"クリエイティブ・コモンズ・ライセンス",src:"https://i.creativecommons.org/l/by/4.0/88x31.png"}})]),r("br"),t._v("この作品は"),r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[t._v("クリエイティブ・コモンズ 表示 4.0 国際 ライセンス")]),t._v("の下に提供されています。\n      ")]:[r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[r("img",{staticStyle:{"border-width":"0"},attrs:{alt:"Creative Commons License",src:"https://i.creativecommons.org/l/by/4.0/88x31.png"}})]),r("br"),t._v("This work is licensed under a\n        "),r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[t._v("Creative Commons Attribution 4.0 International License")]),t._v(".\n      ")]],2)]),t._v(" "),r("v-sheet",{staticClass:"text-center pa-10 my-10"},[r("small",[r("h3",{staticClass:"mb-5"},[t._v(t._s(t.$t("last_updated")))]),t._v("\n\n      "+t._s(t.item._updated)+"\n    ")])]),t._v(" "),r("v-snackbar",{attrs:{color:"primary",timeout:2e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[r("div",{staticClass:"pa-2 text-center"},[t._v("\n      "+t._s(t.$t("copied"))+"\n    ")])])],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MapMain:r(381).default})},372:function(t,e,r){"use strict";r.r(e);var n=r(17),o=r(41),c=r(40),l=r(22),f=r(5),v=(r(37),r(7),r(76),r(11));function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var m=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},h=function(t){Object(o.a)(r,t);var e=d(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(v.Vue);m([Object(v.Prop)({required:!0})],h.prototype,"items",void 0);var y=h=m([v.Component],h),_=r(26),component=Object(_.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-2 px-0 mx-0",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports},373:function(t,e,r){"use strict";r.r(e);var n=r(17),o=r(27),c=r(41),l=r(40),f=r(22),v=r(5),d=(r(37),r(7),r(76),r(11));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var h=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},y=function(t){Object(c.a)(r,t);var e=m(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).baseUrl="https://nakamura196.github.io/kunshujo",t}return Object(o.a)(r,[{key:"copyLink",value:function(){var t=this.url;document.addEventListener("copy",(function e(r){r.clipboardData.setData("text/plain",t),r.preventDefault(),document.removeEventListener("copy",e)})),document.execCommand("copy")}},{key:"twitterUrl",get:function(){return"https://twitter.com/intent/tweet?url="+this.url+"&text="+this.title}},{key:"facebookUrl",get:function(){return"https://www.facebook.com/sharer/sharer.php?u="+this.url}},{key:"pocketUrl",get:function(){return"http://getpocket.com/edit?url="+this.url}}]),r}(d.Vue);h([Object(d.Prop)({required:!0})],y.prototype,"url",void 0),h([Object(d.Prop)({required:!0})],y.prototype,"title",void 0);var _=y=h([d.Component],y),k=r(26),component=Object(k.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:""}},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.twitterUrl}},n),[r("v-icon",[t._v("mdi-twitter")])],1)]}}])},[t._v(" "),r("span",[t._v(t._s("Twitter"))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.facebookUrl}},n),[r("v-icon",[t._v("mdi-facebook")])],1)]}}])},[t._v(" "),r("span",[t._v(t._s("Facebook"))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.pocketUrl}},n),[r("img",{staticStyle:{"font-size":"24px"},attrs:{src:t.baseUrl+"/img/icons/pocket.svg"}})])]}}])},[t._v(" "),r("span",[t._v(t._s("Pocket"))])])],1)}),[],!1,null,null,null);e.default=component.exports},374:function(t,e,r){"use strict";r.r(e);var n=r(17),o=r(27),c=r(41),l=r(40),f=r(22),v=r(5),d=(r(37),r(7),r(76),r(11)),m=r(373);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=function(t){Object(c.a)(r,t);var e=h(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"title",get:function(){return this.item.label}},{key:"url",get:function(){return this.item.url}}]),r}(d.Vue);y([Object(d.Prop)()],_.prototype,"item",void 0);var k=_=y([Object(d.Component)({components:{ShareButtons:m.default}})],_),j=r(26),component=Object(j.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{color:"primary",depressed:"",icon:""}},n),[r("v-icon",[t._v("mdi-share-variant")])],1)]}}])},[t._v(" "),r("ShareButtons",{attrs:{url:t.url,title:t.title}})],1)}),[],!1,null,null,null);e.default=component.exports},375:function(t,e,r){var content=r(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(80).default)("cdc2c944",content,!1,{sourceMap:!1})},376:function(t,e,r){var content=r(383);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(80).default)("2c6cf8ac",content,!1,{sourceMap:!1})},377:function(t,e,r){"use strict";r.r(e);var n=r(17),o=r(41),c=r(40),l=r(22),f=r(5),v=(r(37),r(7),r(76),r(11)),d=r(378);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var h=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},y=function(t){Object(o.a)(r,t);var e=m(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(v.Vue);h([Object(v.Prop)({default:240})],y.prototype,"width",void 0),h([Object(v.Prop)({default:300})],y.prototype,"height",void 0),h([Object(v.Prop)({default:[]})],y.prototype,"data",void 0);var _=y=h([Object(v.Component)({components:{CardItem:d.default}})],y),k=(r(379),r(26)),component=Object(k.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"horizontal-list"},t._l(t.data,(function(e,n){return r("li",{key:n,staticClass:"item"},[r("CardItem",{key:"value_"+n,staticClass:"mt-2 mb-4",attrs:{horizontal:!0,item:e,width:t.width,height:t.height}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports},378:function(t,e,r){"use strict";r.r(e);var n=r(17),o=r(41),c=r(40),l=r(22),f=r(5),v=(r(37),r(7),r(76),r(11)),d=r(374);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var h=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},y=function(t){Object(o.a)(r,t);var e=m(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).baseUrl="https://nakamura196.github.io/kunshujo",t}return r}(v.Vue);h([Object(v.Prop)({required:!0})],y.prototype,"item",void 0),h([Object(v.Prop)({default:300})],y.prototype,"width",void 0),h([Object(v.Prop)({default:300})],y.prototype,"height",void 0),h([Object(v.Prop)({default:!1})],y.prototype,"horizontal",void 0);var _=y=h([Object(v.Component)({components:{ResultOption:d.default}})],y),k=r(26),component=Object(k.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{class:t.horizontal?"":"mb-4",style:t.horizontal?"width: "+t.width+"px;":"",attrs:{"no-body":"",flat:"",outlined:""}},[r("nuxt-link",{attrs:{to:t.localePath(t.item.to)}},[r("v-img",{staticClass:"grey lighten-2",staticStyle:{height:"150px"},attrs:{src:t.item.thumbnail||t.baseUrl+"/img/icons/no-image.webp",contain:"",width:"100%"}})],1),t._v(" "),r("div",{staticClass:"pa-4",style:t.horizontal?"width: "+t.width+"px; height: "+t.height+"px; overflow-y: auto;":""},[r("nuxt-link",{attrs:{to:t.localePath(t.item.to)}},[r("h4",{domProps:{innerHTML:t._s(t.item.label)}})]),t._v(" "),t.item.description?r("p",{staticClass:"mt-2 mb-0"},[t._v("\n      "+t._s(t.item.description)+"\n    ")]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports},379:function(t,e,r){"use strict";r(375)},380:function(t,e,r){var n=r(79)(!1);n.push([t.i,".horizontal-list{overflow-x:auto;white-space:nowrap;-webkit-overflow-scrolling:touch;padding-left:0!important;padding-right:0}.item{display:inline-block;margin-right:16px;margin-left:16px}",""]),t.exports=n},381:function(t,e,r){"use strict";r.r(e);var n=r(17),o=r(41),c=r(40),l=r(22),f=r(5),v=(r(37),r(7),r(76),r(11));function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var m=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},h={};h=r(386);var y=function(t){Object(o.a)(r,t);var e=d(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).tileProviders=[{name:"地理院タイル",visible:!0,url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'}],t}return r}(v.Vue);m([Object(v.Prop)()],y.prototype,"markers",void 0),m([Object(v.Prop)({default:7})],y.prototype,"zoom",void 0),m([Object(v.Prop)({default:function(){return[33,130]}})],y.prototype,"center",void 0),m([Object(v.Prop)({default:function(){return[]}})],y.prototype,"rectangles",void 0),m([Object(v.Prop)({default:function(){return null}})],y.prototype,"geojson",void 0);var _=y=m([Object(v.Component)({components:{"l-marker-cluster":h}})],y),k=(r(382),r(26)),component=Object(k.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("client-only",[r("l-map",{staticStyle:{"z-index":"0"},attrs:{zoom:t.zoom,center:t.center}},[r("l-control-layers",{attrs:{position:"topright"}}),t._v(" "),t._l(t.tileProviders,(function(t){return r("l-tile-layer",{key:t.name,attrs:{name:t.name,visible:t.visible,url:t.url,attribution:t.attribution,"layer-type":"base"}})})),t._v(" "),t._l(t.rectangles,(function(t,e){return r("l-rectangle",{key:e,attrs:{bounds:t.bounds,"l-style":t.style}})})),t._v(" "),t.geojson&&Object.keys(t.geojson).length>0?r("l-geo-json",{attrs:{geojson:t.geojson,options:t.options}}):t._e(),t._v(" "),r("l-marker-cluster",t._l(t.markers,(function(marker,e){return r("l-marker",{key:e,attrs:{"lat-lng":marker.latlng}},[marker.content?r("l-popup",[r("div",{domProps:{innerHTML:t._s(marker.content)}})]):t._e()],1)})),1)],2)],1)}),[],!1,null,null,null);e.default=component.exports},382:function(t,e,r){"use strict";r(376)},383:function(t,e,r){var n=r(79)(!1);n.push([t.i,'.leaflet-cluster-anim .leaflet-marker-icon,.leaflet-cluster-anim .leaflet-marker-shadow{transition:transform .3s ease-out,opacity .3s ease-in}.leaflet-cluster-spider-leg{transition:stroke-dashoffset .3s ease-out,stroke-opacity .3s ease-in}.marker-cluster-small{background-color:rgba(181,226,140,.6)}.marker-cluster-small div{background-color:rgba(110,204,57,.6)}.marker-cluster-medium{background-color:rgba(241,211,87,.6)}.marker-cluster-medium div{background-color:rgba(240,194,12,.6)}.marker-cluster-large{background-color:rgba(253,156,115,.6)}.marker-cluster-large div{background-color:rgba(241,128,23,.6)}.leaflet-oldie .marker-cluster-small{background-color:#b5e28c}.leaflet-oldie .marker-cluster-small div{background-color:#6ecc39}.leaflet-oldie .marker-cluster-medium{background-color:#f1d357}.leaflet-oldie .marker-cluster-medium div{background-color:#f0c20c}.leaflet-oldie .marker-cluster-large{background-color:#fd9c73}.leaflet-oldie .marker-cluster-large div{background-color:#f18017}.marker-cluster{background-clip:padding-box;border-radius:20px}.marker-cluster div{width:30px;height:30px;margin-left:5px;margin-top:5px;text-align:center;border-radius:15px;font:12px "Helvetica Neue",Arial,Helvetica,sans-serif}.marker-cluster span{line-height:30px}',""]),t.exports=n},389:function(t,e,r){"use strict";r.r(e);var n=r(17),o=r(27),c=r(41),l=r(40),f=r(22),v=r(5),d=(r(37),r(7),r(76),r(11)),m=r(377);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=function(t){Object(c.a)(r,t);var e=h(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).moreLikeThisData=[],t.baseUrl="https://nakamura196.github.io/kunshujo",t}return Object(o.a)(r,[{key:"mounted",value:function(){this.moreLikeThis()}},{key:"watchId",value:function(){this.moreLikeThis()}},{key:"moreLikeThis",value:function(){this.item.texts&&(this.moreLikeThisData=this.item.texts)}}]),r}(d.Vue);y([Object(d.Prop)({required:!0})],_.prototype,"item",void 0),y([Object(d.Watch)("itemId")],_.prototype,"watchId",null);var k=_=y([Object(d.Component)({components:{HorizontalItems:m.default}})],_),j=r(26),component=Object(j.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.moreLikeThisData.length>0?r("div",[r("div",{staticClass:"text-center"},[r("h3",{staticClass:"my-5"},[t._v(t._s(t.$t("タイトルが似ているアイテム")))])]),t._v(" "),r("HorizontalItems",{attrs:{data:t.moreLikeThisData,height:150}})],1):t._e()}),[],!1,null,null,null);e.default=component.exports},390:function(t,e,r){"use strict";r.r(e);var n=r(17),o=r(27),c=r(41),l=r(40),f=r(22),v=r(5),d=(r(37),r(7),r(76),r(11)),m=r(377);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=function(t){Object(c.a)(r,t);var e=h(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).moreLikeThisData=[],t.baseUrl="https://nakamura196.github.io/kunshujo",t}return Object(o.a)(r,[{key:"mounted",value:function(){this.moreLikeThis()}},{key:"watchId",value:function(){this.moreLikeThis()}},{key:"moreLikeThis",value:function(){this.item.images&&(this.moreLikeThisData=this.item.images)}}]),r}(d.Vue);y([Object(d.Prop)({required:!0})],_.prototype,"item",void 0),y([Object(d.Watch)("itemId")],_.prototype,"watchId",null);var k=_=y([Object(d.Component)({components:{HorizontalItems:m.default}})],_),j=r(26),component=Object(j.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.moreLikeThisData.length>0?r("div",[r("div",{staticClass:"text-center"},[r("h3",{staticClass:"my-5"},[t._v(t._s(t.$t("画像が似ているアイテム")))])]),t._v(" "),r("HorizontalItems",{attrs:{data:t.moreLikeThisData,height:150}})],1):t._e()}),[],!1,null,null,null);e.default=component.exports},391:function(t,e,r){"use strict";r.r(e);var n=r(17),o=r(41),c=r(40),l=r(22),f=r(5),v=(r(37),r(7),r(76),r(11));function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var m=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},h=function(t){Object(o.a)(r,t);var e=d(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(v.Vue);m([Object(v.Prop)({required:!0})],h.prototype,"uri",void 0);var y=h=m([Object(v.Component)({components:{}})],h),_=r(26),component=Object(_.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",["http://creativecommons.org/licenses/by/4.0/"===t.uri?["ja"==t.$i18n.locale?[t._m(0),r("br"),t._v("この作品は"),r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[t._v("クリエイティブ・コモンズ 表示 4.0 国際 ライセンス")]),t._v("の下に提供されています。\n    ")]:[t._m(1),r("br"),t._v("This work is licensed under a\n      "),r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[t._v("Creative Commons Attribution 4.0 International License")]),t._v(".\n    ")]]:t._e()],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[e("img",{staticStyle:{"border-width":"0"},attrs:{alt:"クリエイティブ・コモンズ・ライセンス",src:"https://i.creativecommons.org/l/by/4.0/88x31.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[e("img",{staticStyle:{"border-width":"0"},attrs:{alt:"Creative Commons License",src:"https://i.creativecommons.org/l/by/4.0/88x31.png"}})])}],!1,null,null,null);e.default=component.exports},397:function(t,e,r){"use strict";(function(t){r(76),r(28),r(23),r(32),r(19),r(24),r(33),r(34),r(20);var n=r(6),o=r(17),c=r(27),l=r(41),f=r(40),v=r(22),d=r(5),m=(r(51),r(37),r(7),r(59),r(18),r(58),r(35),r(42),r(11)),h=r(374),y=r(389),_=r(390),k=r(391),j=r(78),O=r.n(j),x=r(372),R=r(381);function w(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return C(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var $=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},L=function(e){Object(l.a)(v,e);var r,f=P(v);function v(){var e;return Object(o.a)(this,v),(e=f.apply(this,arguments)).item={},e.hide=t.env.hide||{},e.baseUrl="https://nakamura196.github.io/kunshujo",e.snackbar=!1,e}return Object(c.a)(v,[{key:"asyncData",value:(r=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,o,c,data,l,f,v,d,m,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.payload,n=e.app,e.$axios,e.params,!r){t.next=5;break}return t.abrupt("return",{item:r});case 5:return o=n.context.params.id,t.next=8,O.a.get("https://nakamura196.github.io/kunshujo/data/index.json");case 8:c=t.sent,data=c.data,l={},f=w(data),t.prev=13,f.s();case 15:if((v=f.n()).done){t.next=22;break}if((d=v.value).objectID!==o){t.next=20;break}return l=d,t.abrupt("break",22);case 20:t.next=15;break;case 22:t.next=27;break;case 24:t.prev=24,t.t0=t.catch(13),f.e(t.t0);case 27:return t.prev=27,f.f(),t.finish(27);case 30:return m=[],h=[33,130],t.abrupt("return",{item:l,center:h,markers:m});case 33:case"end":return t.stop()}}),t,null,[[13,24,27,30]])}))),function(t){return r.apply(this,arguments)})},{key:"url",get:function(){return this.baseUrl+this.$route.fullPath}},{key:"id",get:function(){return this.item.objectID}},{key:"title",get:function(){return this.item.label}},{key:"thumbnail",get:function(){return this.item.thumbnail}},{key:"myText",get:function(){var t="電子展示『捃拾帖』",footer="東京大学";if("en"===this.$i18n.locale){var e=this.$t(t)+" - "+this.$t(footer);return'"'.concat(this.title,'" ').concat(e," (").concat(this.url,")")}return"『".concat(this.title,"』").concat("電子展示『捃拾帖』 - 東京大学"," (").concat(this.url,")")}},{key:"aggs",get:function(){return[{label:"book",value:"book"},{label:"tag",value:"tag",type:"text"},{label:"agential",value:"agential"},{label:"org",value:"org"},{label:"place",value:"place"},{label:"keyword",value:"keyword"},{label:"time",value:"time"}]}},{key:"bh",get:function(){return[{text:this.$t("index"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.$t("search"),disabled:!1,to:this.localePath({name:"search-slug"}),exact:!0},{text:this.title}]}},{key:"viewerUrl",get:function(){var t=this.item,e=(t.manifest,t.member.split("#xywh="));return"http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest="+t.manifest+"&canvas="+e[0]+"&xywh="+e[1]+"&xywh_highlight=border"}},{key:"iframeUrl",get:function(){var t=this.item.manifest,e=this.item.member;return this.baseUrl+"/curation/?manifest="+t+"&canvas="+encodeURIComponent(e)}},{key:"rdfUrl",get:function(){return t.env.DATA_URL+"/snorql/?describe=http%3A%2F%2Fexample.org%2Fdata%2F"+this.$route.params.id}},{key:"getQuery",value:function(t,e){var map={};return map["fc-".concat(t)]=e,map}},{key:"writeToClipboard",value:function(){navigator.clipboard.writeText(this.myText).catch((function(t){console.error(t)})),this.snackbar=!0}},{key:"head",value:function(){var title=this.title;return{title:title,meta:[{hid:"og:title",property:"og:title",content:"『"+title+"』"+this.$t("電子展示『捃拾帖』")+" - "+this.$t("東京大学")},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:url",property:"og:url",content:this.url},{hid:"og:image",property:"og:image",content:this.thumbnail}]}}},{key:"formatLabel",value:function(t){return t.includes(":")&&(t=t.split(":")[1]),t}}]),v}(m.Vue);L=$([Object(m.Component)({components:{ResultOption:h.default,MoreLikeThis:y.default,SimilarImages:_.default,License:k.default,Breadcrumbs:x.default,MapMain:R.default}})],L),e.a=L}).call(this,r(94))}}]);