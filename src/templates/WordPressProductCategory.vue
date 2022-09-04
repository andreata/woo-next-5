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

  <!--       
        <select v-model="filter['category']">
        
            <option value="shop" selected="selected">Shop</option>
            <option value="accessories">Accessories</option>
        </select> -->

    

        <div class="post-title">
            <h1>{{ $page.productCategory.name }} </h1>
        </div>

        <h3>Filtra per prezzo</h3>
    <div data-role="rangeslider" class="rangeslider">
        <div>
            <label for="price-min">Minimo: {{filter['min_price']}} €</label>
            <input type="range" name="price-min" id="price-min" min="0" max="100"  v-model="filter['min_price']">
        </div>

        <div>
            <label for="price-max">Massimo: {{filter['max_price']}} €</label>
            <input type="range" name="price-max" id="price-max"  min="0" max="100" v-model="filter['max_price']">
        </div>
      </div>
        <h3 v-if="!productsFiltered.length">Nessun risultato.</h3>
        <div class="content-category">
            
            <PostCardProductCategory :post="edge.node" v-for="(edge, index) in productsFiltered" :key="edge.node.id" /> 

         
          
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
    products(first: 50) {
      edges {
        node {
          
          ... on WordPress_SimpleProduct {
                id
                name
                slug
                onSale
                image {
                    mediaItemUrl
                }
                regularPrice
                salePrice
                price(format: RAW)
                uri
                productCategories {
                    nodes {
                        name
                        slug
                    }
                }
          }
      
            ... on WordPress_VariableProduct {
                id
                name
                slug
                onSale
                image {
                    mediaItemUrl
                }
                regularPrice
                salePrice
                price(format: RAW)
                uri
                productCategories {
                    nodes {
                        name
                        slug
                    }
                }
            }
            ... on WordPress_ExternalProduct {
                id
                name
                slug
                onSale
                image {
                    mediaItemUrl
                }
                regularPrice
                salePrice
                price(format: RAW)
                uri
                productCategories {
                    nodes {
                        name
                        slug
                    }
                }
            }
            ... on WordPress_GroupProduct {
                id
                name
                slug
                onSale
                image {
                    mediaItemUrl
                }
                uri
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
      filter:{
          min_price: 0,
          max_price: 100,
      },
      
    }
  },
  computed: {
      
      productsFiltered() {

          return this.$page.productCategory.products.edges.filter(item => {  

              
              
              //return (item.node.productCategories.nodes.filter(cat => cat.slug == this.filter['category']).length > 0)
              return (Number(item.node.price) >= this.filter['min_price'] && Number(item.node.price) <= this.filter['max_price'])
           
          })
      }
  }

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

.rangeslider {
    margin-bottom: 20px;
    >div {
        display: grid;
        grid-template-columns: 1fr 2fr;
        max-width: 400px;
            align-items: center;
    }
}

@media screen and (-webkit-min-device-pixel-ratio:0) {
    input[type='range'] {
    border-radius: 30px;
      height: 5px;
      -webkit-appearance: none;
      background-color: var(--orang-color); 
    }
    
    input[type='range']::-webkit-slider-runnable-track {
      height: 5px;
      -webkit-appearance: none;
      color: var(--orang-color); 
    
    }
    
    input[type='range']::-webkit-slider-thumb {
      width: 12px;
      -webkit-appearance: none;
      height: 12px;
      border-radius: 50%;
      margin-top: -3px;
      cursor: ew-resize;
      background: black; 
      
    }

}
/** FF*/
input[type="range"]::-moz-range-progress {
  background-color: var(--orang-color); 
}
input[type="range"]::-moz-range-track {  
  background-color:var(--orang-color); 
}
/* IE*/
input[type="range"]::-ms-fill-lower {
  background-color:var(--orang-color); 
}
input[type="range"]::-ms-fill-upper {  
  background-color: var(--orang-color); 
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