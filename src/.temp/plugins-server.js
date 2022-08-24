import plugin_gridsome_plugin_flexsearch_7 from "/Applications/MAMP/htdocs/woo-next-5/node_modules/gridsome-plugin-flexsearch/gridsome.client.js"
import plugin_gridsome_plugin_gtm_8 from "/Applications/MAMP/htdocs/woo-next-5/node_modules/gridsome-plugin-gtm/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_flexsearch_7,
    options: {"pathPrefix":"/offertaSuper","siteUrl":"https://andreata.github.io","searchFields":["title","slug","name"],"collections":[{"indexName":"Post","query":"{ posts { edges { node { id, title, excerpt, slug, featuredImage { node { altText, mediaItemUrl } } } } } }","path":"posts.edges.node"},{"indexName":"Product","query":"{ products { edges { node { id, name, slug } } } }","path":"products.edges.node"}],"chunk":false,"compress":false,"autoFetch":true,"autoSetup":true,"flexsearch":{"profile":"default"}}
  },
  {
    run: plugin_gridsome_plugin_gtm_8,
    options: {"id":"#","enabled":true,"debug":true}
  }
]
