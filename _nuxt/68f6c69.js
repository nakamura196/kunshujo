(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{743:function(e,l,t){"use strict";t.r(l);t(68);var o=t(22),r=t(31),n=t(39),c=t(35),d=t(18),v=t(8),m=(t(10),t(3),t(25),t(37));function y(e){var l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=Object(d.a)(e);if(l){var r=Object(d.a)(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return Object(c.a)(this,t)}}var f=function(e,l,t,desc){var o,r=arguments.length,n=r<3?l:null===desc?desc=Object.getOwnPropertyDescriptor(l,t):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,l,t,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(n=(r<3?o(n):r>3?o(l,t,n):o(l,t))||n);return r>3&&n&&Object.defineProperty(l,t,n),n},h=function(e){Object(n.a)(t,e);var l=y(t);function t(){var e;return Object(o.a)(this,t),(e=l.apply(this,arguments)).baseUrl="https://kunshujo-i.dl.itc.u-tokyo.ac.jp",e}return Object(r.a)(t,[{key:"name",get:function(){return{default:{label:"item",index:"data/index.json",aggs:{agential:{key:"agential",sort:"",label:"agential",value:{},more:!1,open:!0},place:{key:"place",sort:"",label:"place",value:{},more:!1,open:!0},org:{key:"org",sort:"",label:"org",value:{},more:!1,open:!0},keyword:{key:"keyword",sort:"",label:"keyword",value:{},more:!1,open:!0},book:{key:"book",sort:"",label:"book",value:{},more:!1,open:!0},time:{key:"time",sort:"",label:"time",value:{},more:!1,open:!0},color:{key:"color",sort:"",label:"color",value:{},more:!1,open:!0},mtag:{key:"mtag",sort:"",label:"mtag",value:{},more:!1,open:!0}},sort:[{label:"ID",value:"index"},{label:"適合度",value:"_score"}],defaultSort:"index:asc",defaultLayout:"grid",name:"item-id",detail:[{label:"book",value:"book"},{label:"tag",value:"tag",type:"text"},{label:"agential",value:"agential"},{label:"org",value:"org"},{label:"place",value:"place"},{label:"keyword",value:"keyword"},{label:"time",value:"time"},{label:"color",value:"color"},{label:"mtag",value:"mtag"}],advanced:[],layout:[{label:"list",value:"list",icon:"mdi-view-list",component:"search-layout-list"},{label:"grid",value:"grid",icon:"mdi-view-grid",component:"search-layout-grid"},{label:"graph",value:"graph",icon:"mdi-chart-bar",component:"search-layout-graph"}],list:[{label:"tag",value:"tag"},{label:"book",value:"book"}]},entity:{label:"entity",index:"data/entity.json",aggs:{"タイプ":{key:"タイプ",sort:"",label:"タイプ",value:{},more:!1,open:!0}},sort:[{label:"ID",value:"index"},{label:"適合度",value:"_score"},{label:"出現頻度",value:"count"}],defaultSort:"count:desc",defaultLayout:"grid",name:"entity-id",detail:[{label:"タイプ",value:"タイプ"}],advanced:[],layout:[{label:"list",value:"list",icon:"mdi-view-list",component:"search-layout-list"},{label:"grid",value:"grid",icon:"mdi-view-grid",component:"search-layout-grid"},{label:"graph",value:"graph",icon:"mdi-chart-bar",component:"search-layout-graph"}],list:[{label:"タイプ",value:"タイプ"},{label:"description",value:"description"}]},object:{label:"object",index:"data/gcv.json",aggs:{mtag:{key:"mtag",sort:"",label:"mtag",value:{},more:!1,open:!0},color:{key:"color",sort:"",label:"color",value:{},more:!1,open:!0},score:{key:"score",sort:"",label:"score",value:{},more:!1,open:!0}},sort:[{label:"ID",value:"index"},{label:"適合度",value:"_score"},{label:"score",value:"score"}],defaultSort:"_score:desc",defaultLayout:"grid",name:"object-id",detail:[{label:"mtag",value:"mtag"},{label:"color",value:"color"},{label:"score",value:"score",type:"text"}],advanced:[],layout:[{label:"list",value:"list",icon:"mdi-view-list",component:"search-layout-list"},{label:"grid",value:"grid",icon:"mdi-view-grid",component:"search-layout-grid"},{label:"graph",value:"graph",icon:"mdi-chart-bar",component:"search-layout-graph"}],list:[{label:"score",value:"score"}]}}[this.$route.params.slug||"default"].name}}]),t}(m.Vue);f([Object(m.Prop)({})],h.prototype,"items",void 0);var k=h=f([Object(m.Component)({})],h),w=t(54),j=t(60),x=t.n(j),O=t(266),_=t(558),R=t(225),C=t(559),component=Object(w.a)(k,(function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"mt-5"},[t("v-row",e._l(e.items.hits,(function(l,o){return t("v-col",{key:o,attrs:{cols:"6",md:"3"}},[t("v-card",{staticClass:"mb-4",attrs:{flat:"","no-body":""}},[t("nuxt-link",{attrs:{to:e.localePath({name:e.name,params:{id:l._id},query:e.$route.query})}},[t("v-img",{staticClass:"grey lighten-2",staticStyle:{height:"150px"},attrs:{contain:"","max-height":"150",width:"100%",src:l._source.thumbnail||e.baseUrl+"/img/icons/no-image.webp"}})],1),e._v(" "),t("div",{staticClass:"pa-4"},[t("nuxt-link",{attrs:{to:e.localePath({query:e.$route.query,name:e.name,params:{id:l._id}})}},[t("h4",[e._v(e._s(e.$utils.translate(l._source.label)))])])],1)],1)],1)})),1)],1)}),[],!1,null,null,null);l.default=component.exports;x()(component,{VCard:O.a,VCol:_.a,VImg:R.a,VRow:C.a})}}]);