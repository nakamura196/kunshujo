(window.webpackJsonp=window.webpackJsonp||[]).push([[161,125],{566:function(e,t,r){"use strict";r.r(t);var o=r(22),n=r(39),c=r(35),l=r(18),m=r(8),d=(r(10),r(3),r(68),r(37));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=Object(l.a)(e);if(t){var n=Object(l.a)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return Object(c.a)(this,r)}}var f=function(e,t,r,desc){var o,n=arguments.length,c=n<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(n<3?o(c):n>3?o(t,r,c):o(t,r))||c);return n>3&&c&&Object.defineProperty(t,r,c),c},y=function(e){Object(n.a)(r,e);var t=h(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return r}(d.Vue);f([Object(d.Prop)({required:!0})],y.prototype,"items",void 0);var _=y=f([d.Component],y),v=r(54),k=r(60),w=r.n(k),j=r(574),x=r(556),O=r(218),E=r(82),component=Object(v.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-2 px-0 mx-0",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:e.items},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);t.default=component.exports;w()(component,{VBreadcrumbs:j.a,VContainer:x.a,VIcon:O.a,VSheet:E.a})},567:function(e,t,r){var content=r(568);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("b1bed018",content,!0,{sourceMap:!1})},568:function(e,t,r){var o=r(19)(!1);o.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=o},574:function(e,t,r){"use strict";r(9),r(6),r(11),r(3),r(10),r(12),r(15);var o=r(2),n=(r(64),r(567),r(69)),c=r(5);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=Object(c.a)(n.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(o.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return e("li",[e(r,m(m({},data),{},{attrs:m(m({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),h=r(0),f=Object(h.i)("v-breadcrumbs__divider","li"),y=r(16);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}t.a=Object(c.a)(y.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(f,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var o=this.items[i];r.push(o.text),t?e.push(this.$scopedSlots.item({item:o})):e.push(this.$createElement(d,{key:r.join("."),props:o},[o.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},903:function(e,t,r){"use strict";r.r(t);r(68);var o=r(22),n=r(31),c=r(39),l=r(35),m=r(18),d=r(8),h=(r(10),r(3),r(33),r(44),r(23),r(50),r(37)),f=r(566);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=Object(m.a)(e);if(t){var n=Object(m.a)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return Object(l.a)(this,r)}}var _=function(e,t,r,desc){var o,n=arguments.length,c=n<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(n<3?o(c):n>3?o(t,r,c):o(t,r))||c);return n>3&&c&&Object.defineProperty(t,r,c),c},v=function(e){Object(c.a)(r,e);var t=y(r);function r(){var e;return Object(o.a)(this,r),(e=t.apply(this,arguments)).title=e.$t("example"),e.baseUrl="https://kunshujo2022.dl.itc.u-tokyo.ac.jp",e.items2=[{description:"『捃拾帖』には、時の内閣総理大臣や文化人など様々な人物が登場します。明治時代の著名人で検索すると、思わぬ資料と出会えるかもしれません。",index:1,label:"こんなところに著名人",value:[{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/IT%C5%8C_Hirobumi.jpg/440px-IT%C5%8C_Hirobumi.jpg",label:"chname:伊藤博文",value:{name:"search-slug",query:{"fc-agential":"chname:伊藤博文"}}},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Eiichi_Shibusawa.jpg/800px-Eiichi_Shibusawa.jpg",label:"chname:渋沢栄一",value:{name:"search-slug",query:{"fc-agential":"chname:渋沢栄一"}}},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Shigenobu_Okuma_5.jpg/440px-Shigenobu_Okuma_5.jpg",label:"chname:大隈重信",value:{name:"search-slug",query:{"fc-agential":"chname:大隈重信"}}},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Makino_Tomitaro.jpg/800px-Makino_Tomitaro.jpg",label:"chname:牧野富太郎",value:{name:"search-slug",query:{"fc-agential":"chname:牧野富太郎"}}},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Kato_Hiroyuki.jpg/400px-Kato_Hiroyuki.jpg",label:"chname:加藤弘之",value:{name:"search-slug",query:{"fc-agential":"chname:加藤弘之"}}}]},{description:'田中芳男は甘いものが好きだったようで、お菓子の包み紙や広告が多くあります。（そして<a href="https://iiif.dl.itc.u-tokyo.ac.jp/repo/s/tanaka/document/7c2275c1-d86a-464f-9cc2-0f32869a26c7#?cv=46&c=0&m=0&s=0&xywh=4312,1770,1769,2406">「菓子唱歌」</a>という自作の楽曲もあります。）レトロな広告や老舗菓子店の商品など、明治スイーツの世界をお楽しみください。',index:2,label:"明治スイーツの世界",value:[{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Youkan_001.jpg/1280px-Youkan_001.jpg",label:"keyword:羊羹",value:{name:"search-slug",query:{"fc-keyword":"keyword:羊羹"}}},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Japanese_Senbeis.jpg/1024px-Japanese_Senbeis.jpg",label:"keyword:煎餅",value:{name:"search-slug",query:{"fc-keyword":"keyword:煎餅"}}},{image:"https://upload.wikimedia.org/wikipedia/ja/a/a5/%E3%82%AF%E3%83%83%E3%82%AD%E3%83%BC%E3%81%A8%E3%83%93%E3%82%B9%E3%82%B1%E3%83%83%E3%83%88.jpg",label:"keyword:ビスケット",value:{name:"search-slug",query:{"fc-keyword":"keyword:ビスケット"}}},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Caramel-1.jpg/1024px-Caramel-1.jpg",label:"keyword:キャラメル",value:{name:"search-slug",query:{"fc-keyword":"keyword:キャラメル"}}},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Gaufrette_of_Tokyo_Fugetsudo.jpg/440px-Gaufrette_of_Tokyo_Fugetsudo.jpg",label:"org:凮月堂",value:{name:"search-slug",query:{"fc-org":"org:凮月堂"}}},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1024px-A_small_cup_of_coffee.JPG",label:"keyword:珈琲",value:{name:"search-slug",query:{"fc-keyword":"keyword:珈琲"}}}]},{description:"田中芳男は様々な公職についていたこともあり、東京大学と関連する資料が含まれています。また彼の自宅が文京区本郷にあったことから、本郷界隈の資料も多くあります。",index:3,label:"捃拾帖から東大を知る",value:[{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/PSM_V64_D470_Imperial_university_of_tokyo.png/500px-PSM_V64_D470_Imperial_university_of_tokyo.png",label:"org:帝国大学",value:{name:"search-slug",query:{"fc-org":"org:帝国大学"}}},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Komaba_I_Campus_-_University_of_Tokyo_3.jpg/1280px-Komaba_I_Campus_-_University_of_Tokyo_3.jpg",label:"keyword:駒場",value:{name:"search-slug",query:{"fc-keyword":"keyword:駒場"}}},{image:"https://upload.wikimedia.org/wikipedia/commons/b/b3/Bunkyou_Koishikawa_Botanical_Japanese_Garden_1_%281%29.JPG",label:"org:小石川植物園",value:{name:"search-slug",query:{"fc-org":"org:小石川植物園"}}},{image:"https://upload.wikimedia.org/wikipedia/commons/6/69/ToudaiAkamon.jpg",label:"keyword:赤門",value:{name:"search-slug",query:{"fc-keyword":"keyword:赤門"}}},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/%E6%9D%B1%E4%BA%AC%E5%A4%A7%E5%AD%A6%E6%9C%AC%E9%83%B7%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9%E6%AD%A3%E9%96%80.JPG/540px-%E6%9D%B1%E4%BA%AC%E5%A4%A7%E5%AD%A6%E6%9C%AC%E9%83%B7%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9%E6%AD%A3%E9%96%80.JPG",label:"place:本郷 (文京区)",value:{name:"search-slug",query:{"fc-place":"place:本郷 (文京区)"}}}]},{description:"田中芳男は殖産興業や啓蒙活動に努め、内国勧業博覧会や海外での万博実施に大きく貢献しました。また枇杷や西洋リンゴを広めたり、大日本水産会の幹事に就任するなど様々な分野で活躍した人物です。それらに関する資料も捃拾帖には残されています。",index:4,label:"田中芳男の業績",value:[{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Tokyo-Ueno-Park-National-Industrial-Exhibition-Museum-Hiroshige-III-1877.png/1280px-Tokyo-Ueno-Park-National-Industrial-Exhibition-Museum-Hiroshige-III-1877.png",label:"keyword:内国勧業博覧会",value:{name:"search-slug",query:{"fc-keyword":"keyword:内国勧業博覧会"}}},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Le_Chateau_d%27eau_and_plaza%2C_Exposition_Universal%2C_1900%2C_Paris%2C_France.jpg/1024px-Le_Chateau_d%27eau_and_plaza%2C_Exposition_Universal%2C_1900%2C_Paris%2C_France.jpg",label:"keyword:万国博覧会",value:{name:"search-slug",query:{"fc-keyword":"keyword:万国博覧会"}}},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Eriobotrya_japonica_C.jpg/800px-Eriobotrya_japonica_C.jpg",label:"keyword:枇杷",value:{name:"search-slug",query:{"fc-keyword":"keyword:枇杷"}}},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Sankaido_Building.jpg/1024px-Sankaido_Building.jpg",label:"org:大日本水産会",value:{name:"search-slug",query:{"fc-org":"org:大日本水産会"}}},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Forest01s2048.jpg/1024px-Forest01s2048.jpg",label:"org:大日本山林会",value:{name:"search-slug",query:{"fc-org":"org:大日本山林会"}}}]},{description:"日本全国にとどまらず、海外も含め各地域の様々な情報が捃拾帖には残されています。",index:5,label:"その他",value:[{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Hirosaki_Montage.jpg/420px-Hirosaki_Montage.jpg",label:"place:弘前市",value:{name:"search-slug",query:{"fc-place":"place:弘前市"}}},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Shirakawago.jpg/1024px-Shirakawago.jpg",label:"place:岐阜県",value:{name:"search-slug",query:{"fc-place":"place:岐阜県"}}},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/170811_Rokko-Arima_Ropeway_Kobe_Japan00n.jpg/450px-170811_Rokko-Arima_Ropeway_Kobe_Japan00n.jpg",label:"place:有馬温泉",value:{name:"search-slug",query:{"fc-place":"place:有馬温泉"}}},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Isoteien-sakurajima2.jpg/1024px-Isoteien-sakurajima2.jpg",label:"place:鹿児島県",value:{name:"search-slug",query:{"fc-place":"place:鹿児島県"}}},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/View_From_Montparnasse_Tower_%28255652451%29.jpeg/1280px-View_From_Montparnasse_Tower_%28255652451%29.jpeg",label:"place:パリ",value:{name:"search-slug",query:{"fc-place":"place:パリ"}}}]}],e.items=[{label:"渋沢栄一とのやりとり",to:{name:"search-slug",query:{"fc-agential":"chname:渋沢栄一"}},img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Eiichi_Shibusawa.jpg/200px-Eiichi_Shibusawa.jpg",description:"hogehoge"},{label:"建物の検索",to:{name:"search-slug",params:{slug:"object"},query:{"fc-mtag":"建物"}},img:"https://iiif.dl.itc.u-tokyo.ac.jp/iiif/kunshujou/A00_6010/038/038_0069.tif/5545,3670,904,1064/200,/0/default.jpg",description:"hogehoge"}],e.bh=[{text:e.$t("top"),disabled:!1,to:e.localePath({name:"index"}),exact:!0},{text:e.title}],e}return Object(n.a)(r,[{key:"fix",value:function(e){return e.includes(":")?e.split(":")[1]:e}},{key:"head",value:function(){return{title:this.title}}}]),r}(h.Vue),k=v=_([Object(h.Component)({components:{Breadcrumbs:f.default}})],v),w=r(54),j=r(60),x=r.n(j),O=r(558),E=r(556),C=r(225),P=r(559),component=Object(w.a)(k,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Breadcrumbs",{attrs:{items:e.bh}}),e._v(" "),r("v-container",{staticClass:"my-5 mb-10"},[r("h2",{staticClass:"mb-5"},[e._v(e._s(e.title))]),e._v(" "),r("p",[e._v("\n      3万件を超える貼り込み資料を前に、「何を検索しよう？」「一体、どんなものがあるんだろう？」と思った方は、ぜひ以下の検索例から『捃拾帖』の世界をのぞいてみてください。\n    ")]),e._v(" "),e._l(e.items2,(function(t,o){return r("div",{key:o,staticClass:"mt-5 mt-10"},[r("h3",{staticClass:"mb-5"},[e._v(e._s(t.label))]),e._v(" "),r("p",{staticClass:"mb-5",domProps:{innerHTML:e._s(t.description)}}),e._v(" "),r("v-row",e._l(t.value,(function(t,o){return r("v-col",{key:o,attrs:{cols:"6",md:"3"}},[r("nuxt-link",{attrs:{to:e.localePath(t.value)}},[r("v-img",{staticClass:"grey lighten-2",staticStyle:{height:"150px"},attrs:{"max-height":"150",contain:"",src:t.image||e.baseUrl+"/img/icons/no-image.webp",width:"100%"}})],1),e._v(" "),r("nuxt-link",{attrs:{to:e.localePath(t.value)}},[r("h3",{staticClass:"mt-2"},[e._v(e._s(e.fix(t.label)))])])],1)})),1)],1)}))],2)],1)}),[],!1,null,null,null);t.default=component.exports;x()(component,{VCol:O.a,VContainer:E.a,VImg:C.a,VRow:P.a})}}]);