module.exports = {
  siteName: 'Lume di Luna',
  siteDescription: 'eCommerce Jamstack',
  icon: {
    favicon: './src/assets/images/icon/favicon.svg',
    touchicon: './src/assets/images/icon/favicon.svg'
  },
  siteUrl: 'https://andreata.github.io',
  pathPrefix: '/woo-next-5',
  /*  templates: {
    Product: "/products/:id",
  },  */
  plugins: [
  
    {
      use: 'gridsome-source-graphql',
      options: {
        url: 'https://andreat143.sg-host.com/graphql',
        fieldName: 'wp',
        typeName: 'WordPress',   
        headers: {
          Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
        },  
      }, 
    },

    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900
      }
    },

    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        searchFields: ['title', 'slug', 'name'],
        collections: [
          {
            indexName: 'Post',
            query: `{ posts { edges { node { id, title, excerpt, slug, featuredImage { node { altText, mediaItemUrl } } } } } }`,
            path: 'posts.edges.node'
          },
          {
            indexName: 'Product',
            query: `{ products { edges { node { id, name, slug } } } }`,
            path: 'products.edges.node'
          }
        ],
      }
    }, 
    
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: '#',
        enabled: true,
        debug: true
      }
    }
  ],
}
