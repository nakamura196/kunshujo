(window.webpackJsonp=window.webpackJsonp||[]).push([[1846],{2241:function(e,t,l){"use strict";l.r(t);l(76);var o=l(17),r=l(27),n=l(40),c=l(41),d=l(22),v=l(5),m=(l(37),l(7),l(23),l(11));function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,o=Object(d.a)(e);if(t){var r=Object(d.a)(this).constructor;l=Reflect.construct(o,arguments,r)}else l=o.apply(this,arguments);return Object(c.a)(this,l)}}var y=function(e,t,l,desc){var o,r=arguments.length,n=r<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,l):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,l,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(n=(r<3?o(n):r>3?o(t,l,n):o(t,l))||n);return r>3&&n&&Object.defineProperty(t,l,n),n},h=function(e){Object(n.a)(l,e);var t=f(l);function l(){var e;return Object(o.a)(this,l),(e=t.apply(this,arguments)).baseUrl="https://nakamura196.github.io/kunshujo",e}return Object(r.a)(l,[{key:"name",get:function(){return{default:{label:"item",index:"data/index.json",aggs:{book:{key:"book",sort:"",label:"book",value:{},more:!1,open:!0},agentials:{key:"agentials",sort:"",label:"agentials",value:{},more:!1,open:!0},places:{key:"places",sort:"",label:"places",value:{},more:!1,open:!0},orgs:{key:"orgs",sort:"",label:"orgs",value:{},more:!1,open:!0},keywords:{key:"keywords",sort:"",label:"keywords",value:{},more:!1,open:!0},times:{key:"times",sort:"",label:"times",value:{},more:!1,open:!0}},sort:[{label:"適合度",value:"_score"}],defaultSort:"_score:desc",defaultLayout:"grid",name:"item-id",detail:[{label:"book",value:"book"},{label:"tags",value:"tags",type:"text"},{label:"agentials",value:"agentials"},{label:"places",value:"places"},{label:"keywords",value:"keywords"},{label:"times",value:"times"}],advanced:[],layout:[{label:"list",value:"list",icon:"mdi-view-list",component:"search-layout-list"},{label:"grid",value:"grid",icon:"mdi-view-grid",component:"search-layout-grid"},{label:"graph",value:"graph",icon:"mdi-chart-bar",component:"search-layout-graph"}],list:[{label:"tags",value:"tags"},{label:"book",value:"book"}]},entity:{label:"entity",index:"data/entity.json",aggs:{"タイプ":{key:"タイプ",sort:"",label:"タイプ",value:{},more:!1,open:!0}},sort:[{label:"適合度",value:"_score"}],defaultSort:"_score:desc",defaultLayout:"grid",name:"entity-id",detail:[{label:"タイプ",value:"タイプ"}],advanced:[],layout:[{label:"list",value:"list",icon:"mdi-view-list",component:"search-layout-list"},{label:"grid",value:"grid",icon:"mdi-view-grid",component:"search-layout-grid"},{label:"graph",value:"graph",icon:"mdi-chart-bar",component:"search-layout-graph"}],list:[{label:"タイプ",value:"タイプ"}]}}[this.$route.params.slug||"default"].name}}]),l}(m.Vue);y([Object(m.Prop)({})],h.prototype,"items",void 0);var k=h=y([Object(m.Component)({})],h),w=l(26),component=Object(w.a)(k,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"mt-5"},[l("v-row",e._l(e.items.hits,(function(t,o){return l("v-col",{key:o,attrs:{cols:"6",md:"3"}},[l("v-card",{staticClass:"mb-4",attrs:{flat:"","no-body":""}},[l("nuxt-link",{attrs:{to:e.localePath({name:e.name,params:{id:t._id}})}},[l("v-img",{staticClass:"grey lighten-2",staticStyle:{height:"150px"},attrs:{contain:"","max-height":"150",width:"100%",src:t._source.thumbnail||e.baseUrl+"/img/icons/no-image.webp"}})],1),e._v(" "),l("div",{staticClass:"pa-4"},[l("nuxt-link",{attrs:{to:e.localePath({name:e.name,params:{id:t._id}})}},[l("h4",[e._v(e._s(t._source.label))])])],1)],1)],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);