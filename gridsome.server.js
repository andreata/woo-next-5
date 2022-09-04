module.exports = function (api) {

    /* const productApi = require("./src/services/productApi.js");

    api.loadSource(async (actions) => {
        const collection = actions.addCollection("Product");
        const data = await productApi.getProducts();
            
        data.forEach((element) => {
            collection.addNode({
            id: element.id,
            name: element.name,
            images: {
                big: element.images.big,
                small: element.images.small,
            },
            descriptions: {
                short: element.descriptions.short,
                long: element.descriptions.long,
            },
            price: element.price,
            url: element.url,
            });
        });
    }); */
    
    api.createPages(async ({ graphql, createPage }) =>{
        // Use the Pages API here: https://gridsome.org/docs/pages-api
        const { data } = await graphql(`
        query {
            posts(first: 200){
                nodes{
                    title
                    postId
                    slug
                    id
                }
            }
        }
        `)    

        data.posts.nodes.forEach(function(node, index){
            createPage({
                path: `/${node.slug}`,
                component: './src/templates/WordPressPost.vue',
                context: {
                    id: node.id,
                    postId: node.postId,
                    slug: node.slug,
                    title: node.title,
                }
            })
        })

    })

    api.createPages(async ({ graphql, createPage }) =>{
        
        const { data } = await graphql(`
            query {
                categories(first: 200) {
                    edges {
                        node {
                            name
                            slug
                            id
                            uri
                        }
                    }
                }       
            }
        `)    

        data.categories.edges.forEach(({ node }) => {
            /* 
            if ('null' != node.children.edges) {
                createPage({
                    path: `${node.uri}/${node.slug}`,
                    component: './src/templates/WordPressCategory.vue',
                    context: {
                        id: node.id,
                        slug: node.slug,
                        title: node.name
                    }
                })
            } else { 
                createPage({
                    path: `/category/${node.slug}`,
                    component: './src/templates/WordPressCategory.vue',
                    context: {
                        id: node.id,
                        slug: node.slug,
                        title: node.name
                    }
                })
            }  */

            createPage({
                    path: `/${node.uri}`,
                    component: './src/templates/WordPressCategory.vue',
                    context: {
                        id: node.id,
                        slug: node.slug,
                        title: node.name
                    }
                })
        })

    })

    api.createPages(async ({ graphql, createPage }) =>{
        
        const { data } = await graphql(`
            query {
                tags(first: 200) {
                    edges {
                        node {
                            name
                            slug
                            id
                            uri
                        }
                    }
                }       
            }
        `)    

        data.tags.edges.forEach(({ node }) => {
            createPage({
                path: `/${node.uri}`,
                component: './src/templates/WordPressPostTag.vue',
                context: {
                    id: node.id,
                    slug: node.slug,
                    title: node.name
                }
            })
        })

    })

    
    api.createPages(async ({ graphql, createPage }) =>{
        
        const { data } = await graphql(`
            query {
                pages(first: 200) {
                    edges {
                        node {
                            title
                            slug
                            id
                        }
                    }
                }       
            }
        `)    

        data.pages.edges.forEach(({ node }) => {
            createPage({
                path: `/${node.slug}`,
                component: './src/templates/WordPressPage.vue',
                context: {
                    id: node.id,
                    slug: node.slug,
                    title: node.title
                }
            })
        })

    })

    /*
    *
    * WOO
    * */

    api.createPages(async ({ graphql, createPage }) =>{
        
        const { data } = await graphql(`
            query {
                products(first: 200){
                    nodes{
                        ... on WordPress_SimpleProduct {
                            name
                            slug
                            id
                            uri
                        }
                        ... on WordPress_VariableProduct {
                            name
                            slug
                            id
                            uri
                        }
                        ... on WordPress_ExternalProduct {
                            name
                            slug
                            id
                            uri
                        }
                        ... on WordPress_GroupProduct {
                            name
                            slug
                            id
                            uri
                        }
                    }
                }
            }
        `)    

        data.products.nodes.forEach(function(node, index){
            createPage({
                path: `/${node.uri}`,
                component: './src/templates/WordPressProduct.vue',
                context: {
                    id: node.id,
                    slug: node.slug,
                    title: node.name,
                }
            })
        })

    })

    api.createPages(async ({ graphql, createPage }) =>{
        
        const { data } = await graphql(`
            query {
                productCategories(first: 200) {
                    edges {
                        node {
                            name
                            slug
                            id
                            uri
                        }
                    }
                }       
            }
        `)    

        data.productCategories.edges.forEach(({ node }) => {
   

            createPage({
                    path: `/${node.uri}`,
                    component: './src/templates/WordPressProductCategory.vue',
                    context: {
                        id: node.id,
                        slug: node.slug,
                        title: node.name
                    }
                })
        })

    })

    api.createPages(async ({ graphql, createPage }) =>{
        
        const { data } = await graphql(`
            query {
                productTags(first: 200) {
                    edges {
                        node {
                            name
                            slug
                            id
                            uri
                        }
                    }
                }       
            }
        `)    

        data.productTags.edges.forEach(({ node }) => {
   

            createPage({
                    path: `/${node.uri}`,
                    component: './src/templates/WordPressProductTag.vue',
                    context: {
                        id: node.id,
                        slug: node.slug,
                        title: node.name
                    }
                })
        })

    })
}


