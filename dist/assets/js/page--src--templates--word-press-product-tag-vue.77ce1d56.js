(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/Ljq":function(t,e,a){"use strict";a.r(e);a("TeQF"),a("qePV");var r=a("Wsvf"),i=a("nJNL"),s=a("yQiR"),n={components:{},props:{post:{type:Object,required:!0}}},l=(a("8RPe"),a("KHd+")),o=Object(l.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("g-link",{staticClass:"no-deco",attrs:{to:t.post.uri}},[a("div",{staticClass:"post-card  "},[t.post.onSale?a("div",{staticClass:"badge-sale"},[a("p",[t._v("In Offerta!")])]):t._e(),a("div",{staticClass:"post-card__header"},[t.post.image?a("g-image",{staticClass:"post-card__image",attrs:{alt:"Cover image",src:t.post.image.mediaItemUrl}}):t._e()],1),a("div",{staticClass:"post-card__content"},[a("div",{staticClass:"box-cate"},t._l(t.post.productCategories.nodes,(function(e){return a("div",{key:e.slug},[a("p",[t._v(t._s(e.name))])])})),0),a("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__title",domProps:{innerHTML:t._s(t.post.name)}}),a("div",{staticClass:"flex-price"},[t.post.salePrice?a("div",[a("p",{staticClass:"price-regular"},[t._v(t._s(t.post.regularPrice))]),a("p",{staticClass:"sale-regular"},[t._v(t._s(t.post.salePrice))])]):t._e(),t.post.salePrice?t._e():a("div",[a("p",{staticClass:"sale-regular"},[t._v(t._s(t.post.regularPrice))])])]),a("g-link",{staticClass:"post-card__link button-pieno",attrs:{to:t.post.uri}},[t._v("Leggi tutto")])],1)])])}),[],!1,null,"6521c4b5",null).exports,c={components:{Pager:r.a,Post:i.a,SiteSidebarProduct:s.a,PostCardProductTag:o},metaInfo:function(){return{}},data:function(){return{limitationList:15,filter:{min_price:0,max_price:100}}},computed:{productsFiltered:function(){var t=this;return this.$page.productTag.products.edges.filter((function(e){return Number(e.node.price)>=t.filter.min_price&&Number(e.node.price)<=t.filter.max_price}))}}},p=(a("edIy"),null),u=Object(l.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",{staticClass:"side",attrs:{sidebarproduct:!0}},[a("div",[a("div",{staticClass:"breadcrumbs"},[a("ul",t._l(t.$page.productTag.seo.breadcrumbs,(function(e){return a("li",{key:e.text},[a("g-link",{directives:[{name:"g-image",rawName:"v-g-image"}],attrs:{to:e.url},domProps:{innerHTML:t._s(e.text)}})],1)})),0)]),a("div",{staticClass:"post-title"},[a("h1",[t._v(t._s(t.$page.productTag.name)+" ")])]),a("h3",[t._v("Filtra per prezzo")]),a("div",{staticClass:"rangeslider",attrs:{"data-role":"rangeslider"}},[a("div",[a("label",{attrs:{for:"price-min"}},[t._v("Minimo: "+t._s(t.filter.min_price)+" €")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.min_price,expression:"filter['min_price']"}],attrs:{type:"range",name:"price-min",id:"price-min",min:"0",max:"100"},domProps:{value:t.filter.min_price},on:{__r:function(e){return t.$set(t.filter,"min_price",e.target.value)}}})]),a("div",[a("label",{attrs:{for:"price-max"}},[t._v("Massimo: "+t._s(t.filter.max_price)+" €")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.max_price,expression:"filter['max_price']"}],attrs:{type:"range",name:"price-max",id:"price-max",min:"0",max:"100"},domProps:{value:t.filter.max_price},on:{__r:function(e){return t.$set(t.filter,"max_price",e.target.value)}}})])]),t.productsFiltered.length?t._e():a("h3",[t._v("Nessun risultato.")]),a("div",{staticClass:"content-category"},t._l(t.productsFiltered,(function(e,r){return r>=1?a("PostCardProductTag",{key:e.node.id,attrs:{post:e.node}}):t._e()})),1)])])}),[],!1,null,"c7c7b236",null);"function"==typeof p&&p(u);e.default=u.exports},"5IQw":function(t,e,a){},"8RPe":function(t,e,a){"use strict";a("sb3Y")},Wsvf:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("Kw5r");var r=a("DOVJ"),i=(a("Y6W1"),a("ma9I"),a("2B1R"),a("qePV"),a("rB9j"),a("UxlC"),a("VTBJ")),s=a("fVfk"),n={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,e){var a=e.props,n=e.data,o=e.parent,c=a.info,p=a.showLinks,u=a.showNavigation,d=a.ariaLabel,g=function(t,e){var a=t.currentPage,r=void 0===a?1:a,i=t.totalPages,s=void 0===i?1:i,n=Math.ceil(e/2),l=Math.floor(r-n),o=Math.floor(r+n);s<=e?(l=0,o=s):r<=n?(l=0,o=e):r+n>=s&&(l=s-e,o=s);for(var c=[],p=l+1;p<=o;p++)c.push(p);return{current:r,total:s,start:l,end:o,pages:c}}(c,a.range),v=g.current,f=g.total,m=g.pages,_=g.start,b=g.end,C=Object(s.d)(o.$route),L=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";e===v&&(n=a.ariaCurrentLabel);var c={to:l(C,e),exact:!0};return a.activeLinkClass&&(c.activeClass=a.activeLinkClass),a.exactActiveLinkClass&&(c.exactActiveClass=a.exactActiveLinkClass),t(r.a,{class:[a.linkClass,o],attrs:Object(i.a)(Object(i.a)({},c),{},{"aria-label":n.replace("%n",e),"aria-current":v===e})},[s])},x=p?m.map((function(t){return L(t,t,a.ariaLinkLabel)})):[];if(u){var y=a.firstLabel,h=a.prevLabel,P=a.nextLabel,k=a.lastLabel,S=a.ariaFirstLabel,w=a.ariaPrevLabel,N=a.ariaNextLabel,j=a.ariaLastLabel,O=a.firstClass,M=a.prevClass,T=a.nextClass,$=a.lastClass,I=a.navClass;v>1&&x.unshift(L(v-1,h,w,[M,I])),_>0&&x.unshift(L(1,y,S,[O,I])),v<f&&x.push(L(v+1,P,N,[T,I])),b<f&&x.push(L(f,k,j,[$,I]))}return x.length<2?null:t("nav",Object(i.a)(Object(i.a)({},n),{},{attrs:{role:"navigation","aria-label":d}}),x)}};function l(t,e){var a=/\/$/.test(t)?"/":"";return e>1?Object(s.g)(t)+"/".concat(e).concat(a):t}a("6NbQ")},dZMv:function(t,e,a){},edIy:function(t,e,a){"use strict";a("5IQw")},i4mA:function(t,e,a){"use strict";a("dZMv")},nJNL:function(t,e,a){"use strict";var r={props:{post:{type:Object,required:!0}}},i=(a("i4mA"),a("KHd+")),s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box-image",style:{backgroundImage:"linear-gradient(to bottom, rgba(55, 66, 69, 0.52), rgba(0, 0, 0, 0.73)), url("+t.post.featuredMedia.sourceUrl+")"}},[a("g-link",{attrs:{to:t.post.path}},[a("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.post.title)}})]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"excerpt",domProps:{innerHTML:t._s(t.post.excerpt)}}),a("g-link",{staticClass:"read-more",attrs:{to:t.post.path}},[t._v("\n    Leggi altro\n  ")])],1)}),[],!1,null,"ee21d672",null);e.a=s.exports},sb3Y:function(t,e,a){}}]);