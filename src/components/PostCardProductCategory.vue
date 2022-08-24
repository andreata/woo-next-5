<template>
<g-link class="no-deco" :to="post.slug">
  <div class="post-card  ">
      <div v-if="post.onSale" class="badge-sale">
      <p>In Offerta!</p>
      </div> 
    <div class="post-card__header">
      <g-image alt="Cover image" v-if="post.image" class="post-card__image"
        :src="post.image.mediaItemUrl" /> 
    </div>
    <div class="post-card__content">
      <div class="box-cate">
        <div v-for="node in post.productCategories.nodes" :key="node.slug">
          <p>{{ node.name }}</p>

        </div> 
      </div>
      
      <h2 class="post-card__title" v-html="post.name" />

      <div class="flex-price">   
          <p v-if="post.salePrice" class="sale-regular">{{ post.salePrice }}</p>     
        <p class="price-regular">{{ post.regularPrice }}</p>
        
      </div>
   
   
      <g-link class="post-card__link button-pieno" :to="post.slug">Leggi tutto</g-link> 


    </div>
  </div>
  </g-link>
</template>




<script>

export default {
  components: {
   
    
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },

}
</script>

<style lang="scss" scoped>
.container-box {
  .post-card {
    height: 100%;
    margin-bottom: 0;
    
    
  }
}
.no-deco {
    text-decoration: none;
}
.container-box, .content-category {
  .post-card {
    &__header {
 
    }
  }
}

.flex-price {
    display: flex;
    align-items: baseline;
}

.price-regular {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 0;
}
.sale-regular {
    margin-right: 10px;
    font-size: 17px;
    color: #9e9e9e;
    text-decoration: line-through;
    margin-bottom: 0;
}
.badge-sale {
    position: absolute;
    background: var(--orang-color);
    border-radius: 5px;
    color: var(--bg-color);
    font-size: 12px;
    font-weight: 800;
    padding: 0 10px;
    margin-top: 10px;
    margin-left: 10px;
    p {
        margin-bottom: 0;
    }
}

.button-pieno {
padding: 7px 18px !important;
   
    margin-top: 10px;
    font-size: 12px !important;
}

.box-cate {
  background-color: var(--light-orange);
  border-radius: 5px;
  padding: 5px 10px;
  max-width: fit-content;
  display: flex;

  p {
    margin-bottom: 0;
    color: var(--orang-color);
    font-weight: 800;
    font-size: 0.7rem;
    text-transform: uppercase;
    margin-right: 10px;
  }
}
.post-card {
 
  
  position: relative;
  margin-bottom: 30px !important;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px !important;

  }
  .flex-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: calc(var(--space2) / 2);
  }
  &__author {
    font-size: 0.5rem;
    margin-bottom: 0;
  }
  &__date {
			font-size: 0.5rem;
			padding: 0.1rem 0.3rem;
			border: 1px solid var(--title-color);
			color: var(--title-color);
			max-width: fit-content;
			border-radius: var(--radius);	
		}
  &__content {
    @media screen and (max-width: 768px) {
      padding: 9px;
    }
  }
  &__header {
    
    overflow: hidden;
    @media screen and (min-width: 768px) {
       padding-right: 30px;
    }
    @media screen and (max-width: 768px) {
      margin-left: calc(var(--space2) * -0.5);
      margin-right: calc(var(--space2) * -0.5);
    }
    &:empty {
      display: none;
    }
  }
  &__image {
    min-width: 100%;
    max-width: 200px;
    @media screen and (min-width: 768px) {
     aspect-ratio: 0.8 / 1;
    }
    object-fit: cover;
  }
  &__title {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 25px;
  }
  
  &__tags {
    z-index: 1;
    position: relative;
  }
  &__link {
    background-color: var(--orang-color);
    padding: 10px 18px;
    color: var(--bg-color-rgba);
    border-radius: 30px;
    font-size: 15px;
    text-decoration: none;
    text-transform: uppercase;
    @media screen and (max-width: 768px) {
      padding: 7px 12px;
    }
  }
  &__description {
    font-size: 13px;
    color: var(--grey-body-color);
  }
}

@media screen and (max-width: 768px) {
    .post-card__image {
        max-width: 100%;
    }
    .post-card__title {
        font-size: 20px;
    }
    .post-card__link {
        padding: 4px 8px !important;
        width: 100%;
        max-width: calc(100% - 10px);
    }
}
</style>
