(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"33+B":function(t,e,a){},A65B:function(t,e,a){"use strict";a("33+B")},Cf48:function(t,e,a){"use strict";a.r(e);var r=a("Wsvf"),i=a("nJNL"),s=a("yQiR"),n={components:{},props:{post:{type:Object,required:!0}}},l=(a("W8v3"),a("KHd+")),o=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("g-link",{staticClass:"no-deco",attrs:{to:t.post.uri}},[e("div",{staticClass:"post-card"},[t.post.onSale?e("div",{staticClass:"badge-sale"},[e("p",[t._v("In Offerta!")])]):t._e(),e("div",{staticClass:"post-card__header"},[t.post.image?e("g-image",{staticClass:"post-card__image",attrs:{alt:"Cover image",src:t.post.image.mediaItemUrl}}):t._e()],1),e("div",{staticClass:"post-card__content"},[e("div",{staticClass:"box-cate"},t._l(t.post.productCategories.nodes,(function(a){return e("div",{key:a.slug},[e("p",[t._v(t._s(a.name))])])})),0),e("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__title",domProps:{innerHTML:t._s(t.post.name)}}),e("div",{staticClass:"flex-price"},[t.post.salePrice?e("div",["VARIABLE"==t.post.type?e("span",[e("p",{staticClass:"sale-regular"},[t._v("A partire da: "+t._s(t.post.regularPrice.slice(0,6)))])]):t._e(),"VARIABLE"!=t.post.type?e("span",[e("p",{staticClass:"price-regular"},[t._v(t._s(t.post.regularPrice))]),e("p",{staticClass:"sale-regular"},[t._v(t._s(t.post.salePrice))])]):t._e()]):t._e(),t.post.salePrice?t._e():e("div",[e("p",{staticClass:"sale-regular"},[t._v(t._s(t.post.regularPrice))])])]),e("g-link",{staticClass:"post-card__link button-pieno",attrs:{to:t.post.uri}},[t._v("Leggi tutto")])],1)])])}),[],!1,null,"2529f572",null).exports,c={components:{Pager:r.a,Post:i.a,SiteSidebarProduct:s.a,PostCardProductCategory:o},metaInfo:()=>({}),data:()=>({limitationList:15,filter:{min_price:0,max_price:100}}),computed:{productsFiltered(){return this.$page.productCategory.products.edges.filter(t=>{var e=t.node.price.slice(0,4),a=Number(e);return a>=this.filter.min_price&&a<=this.filter.max_price})}}},p=(a("jRR0"),null),u=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("Layout",{staticClass:"side",attrs:{sidebarproduct:!0}},[e("div",[e("div",{staticClass:"breadcrumbs"},[e("ul",t._l(t.$page.productCategory.seo.breadcrumbs,(function(a){return e("li",{key:a.text},[e("g-link",{directives:[{name:"g-image",rawName:"v-g-image"}],attrs:{to:a.url},domProps:{innerHTML:t._s(a.text)}})],1)})),0)]),e("div",{staticClass:"post-title"},[e("h1",[t._v(t._s(t.$page.productCategory.name)+" ")])]),e("h3",[t._v("Filtra per prezzo")]),e("div",{staticClass:"rangeslider",attrs:{"data-role":"rangeslider"}},[e("div",[e("label",{attrs:{for:"price-min"}},[t._v("Minimo: "+t._s(t.filter.min_price)+" €")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.min_price,expression:"filter['min_price']"}],attrs:{type:"range",name:"price-min",id:"price-min",min:"0",max:"100"},domProps:{value:t.filter.min_price},on:{__r:function(e){return t.$set(t.filter,"min_price",e.target.value)}}})]),e("div",[e("label",{attrs:{for:"price-max"}},[t._v("Massimo: "+t._s(t.filter.max_price)+" €")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.max_price,expression:"filter['max_price']"}],attrs:{type:"range",name:"price-max",id:"price-max",min:"0",max:"100"},domProps:{value:t.filter.max_price},on:{__r:function(e){return t.$set(t.filter,"max_price",e.target.value)}}})])]),t.productsFiltered.length?t._e():e("h3",[t._v("Nessun risultato.")]),e("div",{staticClass:"content-category"},t._l(t.productsFiltered,(function(t){return e("PostCardProductCategory",{key:t.node.id,attrs:{post:t.node}})})),1)])])}),[],!1,null,"50b07fd4",null);"function"==typeof p&&p(u);e.default=u.exports},OBvc:function(t,e,a){},W8v3:function(t,e,a){"use strict";a("iZIF")},Wsvf:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a("Kw5r");var r=a("DOVJ"),i=(a("Y6W1"),a("fVfk")),s={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:(t,{props:e,data:a,parent:s})=>{const{info:l,showLinks:o,showNavigation:c,ariaLabel:p}=e,{current:u,total:d,pages:g,start:f,end:v}=function({currentPage:t=1,totalPages:e=1},a){const r=Math.ceil(a/2);let i=Math.floor(t-r),s=Math.floor(t+r);e<=a?(i=0,s=e):t<=r?(i=0,s=a):t+r>=e&&(i=e-a,s=e);const n=[];for(let t=i+1;t<=s;t++)n.push(t);return{current:t,total:e,start:i,end:s,pages:n}}(l,e.range),m=Object(i.d)(s.$route),_=(a,i=a,s=i,l="")=>{a===u&&(s=e.ariaCurrentLabel);const o={to:n(m,a),exact:!0};return e.activeLinkClass&&(o.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(o.exactActiveClass=e.exactActiveLinkClass),t(r.a,{class:[e.linkClass,l],attrs:{...o,"aria-label":s.replace("%n",a),"aria-current":u===a}},[i])},C=o?g.map(t=>_(t,t,e.ariaLinkLabel)):[];if(c){const{firstLabel:t,prevLabel:a,nextLabel:r,lastLabel:i}=e,{ariaFirstLabel:s,ariaPrevLabel:n,ariaNextLabel:l,ariaLastLabel:o}=e,{firstClass:c,prevClass:p,nextClass:g,lastClass:m,navClass:b}=e;u>1&&C.unshift(_(u-1,a,n,[p,b])),f>0&&C.unshift(_(1,t,s,[c,b])),u<d&&C.push(_(u+1,r,l,[g,b])),v<d&&C.push(_(d,i,o,[m,b]))}return C.length<2?null:t("nav",{...a,attrs:{role:"navigation","aria-label":p}},C)}};function n(t,e){const a=/\/$/.test(t)?"/":"";return e>1?Object(i.g)(t)+`/${e}${a}`:t}a("6NbQ")},iZIF:function(t,e,a){},jRR0:function(t,e,a){"use strict";a("OBvc")},nJNL:function(t,e,a){"use strict";var r={props:{post:{type:Object,required:!0}}},i=(a("A65B"),a("KHd+")),s=Object(i.a)(r,(function(){var t=this._self._c;return t("div",{staticClass:"box-image",style:{backgroundImage:`linear-gradient(to bottom, rgba(55, 66, 69, 0.52), rgba(0, 0, 0, 0.73)), url(${this.post.featuredMedia.sourceUrl})`}},[t("g-link",{attrs:{to:this.post.path}},[t("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.post.title)}})]),t("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"excerpt",domProps:{innerHTML:this._s(this.post.excerpt)}}),t("g-link",{staticClass:"read-more",attrs:{to:this.post.path}},[this._v("\n    Leggi altro\n  ")])],1)}),[],!1,null,"ee21d672",null);e.a=s.exports}}]);