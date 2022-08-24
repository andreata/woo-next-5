const c1 = () => import(/* webpackChunkName: "page--src--templates--word-press-product-category-vue" */ "/Applications/MAMP/htdocs/woo-next-5/src/templates/WordPressProductCategory.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--word-press-post-tag-vue" */ "/Applications/MAMP/htdocs/woo-next-5/src/templates/WordPressPostTag.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--word-press-category-vue" */ "/Applications/MAMP/htdocs/woo-next-5/src/templates/WordPressCategory.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--word-press-post-vue" */ "/Applications/MAMP/htdocs/woo-next-5/src/templates/WordPressPost.vue")
const c5 = () => import(/* webpackChunkName: "page--src--templates--word-press-product-vue" */ "/Applications/MAMP/htdocs/woo-next-5/src/templates/WordPressProduct.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--home-landing-one-step-vue" */ "/Applications/MAMP/htdocs/woo-next-5/src/pages/homeLandingOneStep.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--home-landing-vue" */ "/Applications/MAMP/htdocs/woo-next-5/src/pages/homeLanding.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--chi-siamo-vue" */ "/Applications/MAMP/htdocs/woo-next-5/src/pages/ChiSiamo.vue")
const c9 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Applications/MAMP/htdocs/woo-next-5/node_modules/gridsome/app/pages/404.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Applications/MAMP/htdocs/woo-next-5/src/pages/Index.vue")

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
    path: "/tag/telefonia/",
    component: c2
  },
  {
    path: "/tag/mondo/",
    component: c2
  },
  {
    path: "/tag/fibra/",
    component: c2
  },
  {
    path: "/categoria-prodotto/senza-categoria/",
    component: c1
  },
  {
    path: "/categoria-prodotto/shop/",
    component: c1
  },
  {
    path: "/category/senza-categoria/",
    component: c3
  },
  {
    path: "/tag/adsl/",
    component: c2
  },
  {
    path: "/categoria-prodotto/music/",
    component: c1
  },
  {
    path: "/categoria-prodotto/decor/",
    component: c1
  },
  {
    path: "/category/consigli-per-risparmiare/",
    component: c3
  },
  {
    path: "/categoria-prodotto/clothing/",
    component: c1
  },
  {
    path: "/category/blog/",
    component: c3
  },
  {
    path: "/ridurre-i-consumi-e-possibile-se-sai-come-fare-2/",
    component: c4
  },
  {
    path: "/ridurre-i-consumi-e-possibile-se-sai-come-fare-3/",
    component: c4
  },
  {
    path: "/ridurre-i-consumi-e-possibile-se-sai-come-fare/",
    component: c4
  },
  {
    path: "/v-neck-t-shirt/",
    component: c5
  },
  {
    path: "/wordpress-pennant/",
    component: c5
  },
  {
    path: "/t-shirt-with-logo/",
    component: c5
  },
  {
    path: "/t-shirt/",
    component: c5
  },
  {
    path: "/single/",
    component: c5
  },
  {
    path: "/sunglasses/",
    component: c5
  },
  {
    path: "/polo/",
    component: c5
  },
  {
    path: "/long-sleeve-tee/",
    component: c5
  },
  {
    path: "/logo-collection/",
    component: c5
  },
  {
    path: "/home-landing-one-step/",
    component: c6
  },
  {
    path: "/hoodie-with-logo/",
    component: c5
  },
  {
    path: "/hoodie-with-pocket/",
    component: c5
  },
  {
    path: "/hoodie-with-zipper/",
    component: c5
  },
  {
    path: "/home-landing/",
    component: c7
  },
  {
    path: "/hoodie/",
    component: c5
  },
  {
    path: "/beanie-with-logo/",
    component: c5
  },
  {
    path: "/chi-siamo/",
    component: c8
  },
  {
    path: "/ciao-mondo/",
    component: c4
  },
  {
    path: "/cap/",
    component: c5
  },
  {
    path: "/beanie/",
    component: c5
  },
  {
    path: "/belt/",
    component: c5
  },
  {
    path: "/album/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c9
  },
  {
    name: "home",
    path: "/",
    component: c10
  },
  {
    name: "*",
    path: "*",
    component: c9
  }
]
