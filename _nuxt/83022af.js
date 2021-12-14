(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{394:function(t,e,n){"use strict";(function(t){var o=n(17),l=n(27),r=n(40),c=n(41),m=n(22),h=n(5),d=(n(37),n(7),n(76),n(11));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(m.a)(t);if(e){var l=Object(m.a)(this).constructor;n=Reflect.construct(o,arguments,l)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var f=function(t,e,n,desc){var o,l=arguments.length,r=l<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(r=(l<3?o(r):l>3?o(e,n,r):o(e,n))||r);return l>3&&r&&Object.defineProperty(e,n,r),r},_=function(e){Object(r.a)(c,e);var n=v(c);function c(){var e;return Object(o.a)(this,c),(e=n.apply(this,arguments)).baseUrl="https://nakamura196.github.io/kunshujo",e.siteName=e.$t("電子展示『捃拾帖』"),e.siteDesc="このシステムは、東京大学総合図書館所蔵の田中芳男文庫『捃拾帖』を中心とした電子展示サイトです。貼り込み資料単位の検索ができます。",e.top="https://nakamura196.github.io/kunshujo/img/ogp/home.webp",e.visualization=t.env.visualization,e.items=[],e.menu=[{label:"about_",to:{name:"page-slug",params:{slug:"about"}},icon:"mdi-information",top:!0},{label:"検索例",to:{name:"example"},icon:"mdi-view-list",top:!0,description:"本システムの検索例を紹介します。"},{label:"検索",to:{name:"search-slug"},icon:"mdi-magnify",top:!0,description:"アイテムを検索します"},{label:"その他の検索",to:{name:"search-list"},icon:"mdi-magnify",description:"アイテム以外を検索します。",top:!0},{label:"category",to:{name:"category-list"},icon:"mdi-chart-bar",description:"メタデータ別の集計結果を表示します。",top:!0},{label:"map",to:{name:"map"},icon:"mdi-map",description:"地図から探す",top:!0},{label:"機械学習関連サービス",to:{name:"ml"},icon:"mdi-api",description:"機械学習関連サービスについて紹介します。",top:!0},{label:"タグ修正アプリ",href:"https://kunshujo-c.web.app/",icon:"mdi-tag",description:"機械が付与したタグを修正するためのアプリケーションです。",top:!0,blank:!0},{label:"可視化",to:{name:"vis"},img:"https://nakamura196.github.io/kunshujo/img/etc/pd_banner_magnified.webp",description:"各種可視化を行います。",top:!0},{label:"電子展示『捃拾帖』",href:"https://kunshujo.dl.itc.u-tokyo.ac.jp/",icon:"mdi-database",description:"第1~18帖までの『捃拾帖』について、東京大学史料編纂所が作成した目録を用いて検索可能なシステムです。",top:!0,blank:!0}],e}return Object(l.a)(c,[{key:"head",value:function(){return{titleTemplate:null,title:this.siteName}}}]),c}(d.Vue);_=f([Object(d.Component)({})],_),e.a=_}).call(this,n(95))},638:function(t,e,n){"use strict";n.r(e);var o=n(394).a,l=n(26),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"mb-5"},[n("v-parallax",{attrs:{src:t.top,height:"250"}},[n("v-layout",{staticClass:"white--text",attrs:{column:"","align-center":"","justify-center":""}},[n("h1",{staticClass:"white--text mb-2 display-1 text-center"},[n("b",[t._v(t._s(t.siteName))])]),t._v(" "),n("v-btn",{staticClass:"mt-5 mb-5",attrs:{large:"",to:t.localePath({name:"search-slug"}),color:"primary"}},[t._v(t._s(t.$t("try_out")))])],1)],1)],1),t._v(" "),n("v-container",{staticClass:"mt-10"},[n("div",{staticClass:"mb-5 pb-5 text-center"},[n("p",{staticClass:"py-5",domProps:{innerHTML:t._s(t.siteDesc)}})]),t._v(" "),t.menu.length>0?n("div",[n("v-row",[t._l(t.menu,(function(e,o){return[e.top?n("v-col",{key:o,attrs:{cols:"6",md:3}},[n("v-card",{staticClass:"mb-2",attrs:{flat:"","no-body":""}},[n(e.to?"nuxt-link":"a",{tag:"component",attrs:{href:e.href||null,target:e.blank?"_blank":null,to:e.to?t.localePath(e.to):null}},[e.img?[n("div",{staticClass:"text-center grey lighten-2",staticStyle:{height:"150px"}},[n("v-img",{staticStyle:{height:"150px"},attrs:{contain:"",src:e.img}})],1)]:[n("div",{staticClass:"text-center grey lighten-2 pa-10",staticStyle:{height:"150px"}},[n("v-icon",{attrs:{size:"75"}},[t._v(t._s(e.icon))])],1)]],2),t._v(" "),n("div",{staticClass:"pa-2 pt-4"},[n("h3",[n(e.to?"nuxt-link":"a",{tag:"component",attrs:{href:e.href||null,target:e.blank?"_blank":null,to:e.to?t.localePath(e.to):null}},[t._v("\n                    "+t._s(t.$t(e.label))+"\n                  ")])],1),t._v(" "),e.description?n("div",{staticClass:"mt-2"},[t._v("\n                  "+t._s(e.description)+"\n                  "),e.to2||e.href2?n("div",{staticClass:"mt-2"},[n("v-btn",{attrs:{to:t.localePath(e.to2||null),href:e.href2||null,target:e.target2||null,rounded:"",color:"primary darken-2",depressed:""}},[t._v(t._s(t.$t(e.label2))+"\n                      "),e.target2?n("v-icon",{staticClass:"ml-1"},[t._v("mdi-exit-to-app")]):t._e()],1)],1):t._e()]):t._e()])],1)],1):t._e()]}))],2)],1):t._e()]),t._v(" "),n("v-sheet",{attrs:{color:"grey lighten-3"}},[n("v-container",{staticClass:"mt-10 py-10"},[n("v-card-title",[n("h3",[t._v(t._s(t.$t("updates")))])]),t._v(" "),n("v-card-text",[n("ul",{staticClass:"text--primary"},[n("li",[t._v("2021年XX月XX日: システムを公開しました。")])])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);