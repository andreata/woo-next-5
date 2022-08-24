<template>
 <div class="container-search">

   <svg class="search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g class="search-path" fill="none" stroke="#000"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg>

    <input
      id="search"
      v-model="searchTerm"
      class="input input-search"
      type="text"
      placeholder="Cerca...">

     
    <div class="result-search">
        <g-link
        v-for="result in searchResults"
        :key="result.id"
        :to="result.uri"
        class="navbar-item">
        {{ result.title }}
        {{ result.name }}
        </g-link>
    </div>
 </div>
</template>

<static-query>

query   {


products(first: 200) {
      edges {
        node {
          id
          name
          link
          slug
          onSale
          image {
            mediaItemUrl
          }
          ... on WordPress_SimpleProduct {
                uri
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

  
 posts(first: 200) {
    edges {
      node {
        id
        title
        date
        link
        excerpt
        uri
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            slug
            mimeType
            mediaItemUrl
            altText
            mediaDetails {
              width
            }
          }
        }
      }
    }
  }

}

</static-query>

<script>

import Flexsearch from "flexsearch"

export default {
 
  components: {
    Flexsearch
  },
  data: () => ({
      index: null,
      searchTerm: '',
      
  }),
  beforeMount() {
    this.index = new Flexsearch({
      tokenize: "forward",
      doc: {
        id: "id",
        field: [
          "title",
          "name",
          "slug"
        ]
      }
    });
    this.index.add(this.$static.posts.edges.map(e => e.node));
    this.index.add(this.$static.products.edges.map(e => e.node));
  },
  computed: {
    searchResults() {
      if (this.index === null || this.searchTerm.length < 3) return [];
      return this.index.search({
        query: this.searchTerm,
        limit: 10
      });
    }
  },
}

</script>

<style lang="scss" scoped>

#search {
  border: none;
  font-family: 'Lexend';
    font-size: 15px;
    padding-left: 35px;
    @media screen and (max-width: 768px) {
      max-width: 120px;
    }
}
.search-icon {
      max-width: 17px;
    position: absolute;
    top: 7px;
    left: 10px;
}
.container-search {
  position: relative;
    margin-top: auto;
    margin-bottom: auto;
    .input-search {
        padding: .34rem .8rem;
        background-color: var(--bg-color);
        border-radius: var(--radius);
        border:1px solid var(--border-color);
        color: var(--body-color);
        @media screen and (max-width: 768px) {
            min-width: 97%;
            margin: auto;
            display: block;
        }
    }
    .result-search {
        position: absolute;
        max-width: 300px;
        display: flex;
        flex-wrap: wrap;
        a {
            background: var(--bg-color);
            display: block;
            padding: calc(var(--space) / 4) ;
            font-size: 0.7rem;
            min-width: 100%;
        }
    }
}
</style>
