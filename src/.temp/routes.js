const c1 = () => import(/* webpackChunkName: "page--src--templates--word-press-product-category-vue" */ "/Applications/MAMP/htdocs/woo-next-5/src/templates/WordPressProductCategory.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--word-press-product-tag-vue" */ "/Applications/MAMP/htdocs/woo-next-5/src/templates/WordPressProductTag.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--word-press-product-vue" */ "/Applications/MAMP/htdocs/woo-next-5/src/templates/WordPressProduct.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--word-press-post-tag-vue" */ "/Applications/MAMP/htdocs/woo-next-5/src/templates/WordPressPostTag.vue")
const c5 = () => import(/* webpackChunkName: "page--src--templates--word-press-category-vue" */ "/Applications/MAMP/htdocs/woo-next-5/src/templates/WordPressCategory.vue")
const c6 = () => import(/* webpackChunkName: "page--src--templates--word-press-post-vue" */ "/Applications/MAMP/htdocs/woo-next-5/src/templates/WordPressPost.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--home-landing-one-step-vue" */ "/Applications/MAMP/htdocs/woo-next-5/src/pages/homeLandingOneStep.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--home-landing-vue" */ "/Applications/MAMP/htdocs/woo-next-5/src/pages/homeLanding.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--chi-siamo-vue" */ "/Applications/MAMP/htdocs/woo-next-5/src/pages/ChiSiamo.vue")
const c10 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Applications/MAMP/htdocs/woo-next-5/node_modules/gridsome/app/pages/404.vue")
const c11 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Applications/MAMP/htdocs/woo-next-5/src/pages/Index.vue")

export default [
  {
    path: "/categoria-prodotto/clothing/tshirts/",
    component: c1
  },
  {
    path: "/categoria-prodotto/clothing/hoodies/",
    component: c1
  },
  {
    path: "/categoria-prodotto/clothing/accessories/",
    component: c1
  },
  {
    path: "/tag-prodotto/verde/",
    component: c2
  },
  {
    path: "/prodotto/v-neck-t-shirt/",
    component: c3
  },
  {
    path: "/tag-prodotto/super-brand/",
    component: c2
  },
  {
    path: "/prodotto/wordpress-pennant/",
    component: c3
  },
  {
    path: "/tag-prodotto/sintetico/",
    component: c2
  },
  {
    path: "/tag/telefonia/",
    component: c4
  },
  {
    path: "/prodotto/t-shirt-with-logo/",
    component: c3
  },
  {
    path: "/prodotto/t-shirt/",
    component: c3
  },
  {
    path: "/prodotto/single/",
    component: c3
  },
  {
    path: "/prodotto/sunglasses/",
    component: c3
  },
  {
    path: "/tag-prodotto/lana/",
    component: c2
  },
  {
    path: "/tag/mondo/",
    component: c4
  },
  {
    path: "/prodotto/polo/",
    component: c3
  },
  {
    path: "/prodotto/long-sleeve-tee/",
    component: c3
  },
  {
    path: "/prodotto/logo-collection/",
    component: c3
  },
  {
    path: "/tag-prodotto/giallo/",
    component: c2
  },
  {
    path: "/prodotto/hoodie-with-logo/",
    component: c3
  },
  {
    path: "/prodotto/hoodie-with-pocket/",
    component: c3
  },
  {
    path: "/prodotto/hoodie-with-zipper/",
    component: c3
  },
  {
    path: "/tag/fibra/",
    component: c4
  },
  {
    path: "/categoria-prodotto/senza-categoria/",
    component: c1
  },
  {
    path: "/prodotto/hoodie/",
    component: c3
  },
  {
    path: "/categoria-prodotto/shop/",
    component: c1
  },
  {
    path: "/category/senza-categoria/",
    component: c5
  },
  {
    path: "/tag-prodotto/brand/",
    component: c2
  },
  {
    path: "/tag-prodotto/azzurro/",
    component: c2
  },
  {
    path: "/tag/adsl/",
    component: c4
  },
  {
    path: "/prodotto/beanie-with-logo/",
    component: c3
  },
  {
    path: "/prodotto/cap/",
    component: c3
  },
  {
    path: "/prodotto/beanie/",
    component: c3
  },
  {
    path: "/prodotto/belt/",
    component: c3
  },
  {
    path: "/categoria-prodotto/music/",
    component: c1
  },
  {
    path: "/prodotto/album/",
    component: c3
  },
  {
    path: "/categoria-prodotto/decor/",
    component: c1
  },
  {
    path: "/category/consigli-per-risparmiare/",
    component: c5
  },
  {
    path: "/categoria-prodotto/clothing/",
    component: c1
  },
  {
    path: "/category/blog/",
    component: c5
  },
  {
    path: "/ridurre-i-consumi-e-possibile-se-sai-come-fare-2/",
    component: c6
  },
  {
    path: "/ridurre-i-consumi-e-possibile-se-sai-come-fare-3/",
    component: c6
  },
  {
    path: "/ridurre-i-consumi-e-possibile-se-sai-come-fare/",
    component: c6
  },
  {
    path: "/home-landing-one-step/",
    component: c7
  },
  {
    path: "/home-landing/",
    component: c8
  },
  {
    path: "/chi-siamo/",
    component: c9
  },
  {
    path: "/ciao-mondo/",
    component: c6
  },
  {
    name: "404",
    path: "/404/",
    component: c10
  },
  {
    name: "home",
    path: "/",
    component: c11
  },
  {
    name: "*",
    path: "*",
    component: c10
  }
]
