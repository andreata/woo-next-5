<template>
  <Layout :sidebarproduct="true" class="side">

   

    <div>
        <div class="breadcrumbs">
            <ul>
                <li v-for="breadcrumb in $page.productCategory.seo.breadcrumbs" :key="breadcrumb.text">
                    <g-link :to="breadcrumb.url" v-html="breadcrumb.text"></g-link>
                </li>
            </ul>
        </div>

        <div class="post-title">
            <h1>{{ $page.productCategory.name }} </h1>
        </div>

        <div class="content-category">
             <PostCardProductCategory :post="edge.node" v-for="(edge, index) in $page.productCategory.products.edges" :key="edge.node.id"
          v-if="index >= 1" />
        </div>
          

      <!-- <li v-for="(edge, index) in $page.productCategory.products.edges" :key="edge.node.id" v-if="index > 5">

      <g-image alt="Cover image" v-if="edge.node.image" class="post-card__image"
            :src="edge.node.image.mediaItemUrl" />

            <p :to="edge.node.uri" v-html="edge.node.name" />

            <p  v-html="edge.node.productCategories.nodes.name" />
            
            </p>
          </li> -->

    </div>
  </Layout>
</template>

<page-query>


query Categoryprod ($slug: ID!) {
  productCategory(idType: SLUG, id: $slug) {
    name
    link
    seo {
        breadcrumbs {
            text
            url
        }
        schema {
            raw
        }
        canonical
        metaDesc
        metaKeywords
        title
        twitterDescription
        cornerstone
        focuskw
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphDescription
        opengraphImage {
            mediaItemUrl
        }
    }
    products(first: 10) {
      edges {
        node {
          id
          name
          slug
          onSale
          image {
            mediaItemUrl
          }
          ... on WordPress_SimpleProduct {
                regularPrice
                salePrice
                price(format: RAW)
                
          }
          productCategories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  }
}

</page-query>

<script>
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'
import SiteSidebarProduct from '~/components/SiteSidebarProduct.vue'
import PostCardProductCategory from '~/components/PostCardProductCategory.vue'


export default {
  components: {
    Pager,
    Post,
    SiteSidebarProduct,
    PostCardProductCategory,
 
  
  },
  metaInfo () {
    return {
      //title: this.$page.wordPressCategory.title
    }
  },
  data() {
    
    return {
      limitationList:15,
    }
  },
}
</script>

<style lang="scss" scoped>

.recent-half {
  width: 100%;
}
ul.block-ul {
    display: block;
    width: 100%;
    li {
      max-width: 90%;
    }
}
.carousel-cell {
  max-width: 150px;
}


.breadcrumbs {
    margin-top: 20px;
}

.max-width {
  max-width: var(--content-width);
    margin: 0 auto;
    padding:0;
}
.post-title {
  @media screen and (min-width: 768px) {
    padding: calc(var(--space) / 2) 0 0 0;
    padding-top: 0;
  }
    padding-bottom: 0;
   
    margin: 0 auto;
}
@media screen and (max-width: 768px) {
    .content-category {
        grid-column-gap: 10px;
            
    }
  .post-title {
    margin-top: var(--space);
  }
  .post-title, .breadcrumbs {
    @media screen and (min-width: 768px) {
      padding: 0 var(--space);
    }
  }
}
.content-category {
  display: grid;
  @media screen and (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  } 
  .post-card {
      margin: 3px;
  }
  
}
</style>