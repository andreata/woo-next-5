<template>
  <div class="sticky-side">
    <p class="title-sidebar">Categorie</p>

      <div v-for="{ node } in $static.productCategories.edges" :key="node.slug">
        <g-link class="color-cat" :to="node.uri">{{ node.name }} </g-link>
      </div>

    <p class="title-sidebar title-sidebar-due">Tag</p>
      <div v-for="{ node } in $static.productTags.edges" :key="node.slug">
        <g-link class="color-cat" :to="node.uri">{{ node.name }} </g-link>
      </div>


  </div>
</template>


<static-query>


query getCat {
   productCategories(first: 100)  {
    edges {
      node {
        name
        slug
        uri
      }
    }
  }

  productTags(first: 100)  {
    edges {
      node {
        name
        slug
        uri
      }
    }
  }
}

</static-query>

<script>


export default {
  components: {

   

  }
}
</script>

<style scoped>
.title-sidebar-due {
  margin-top: 40px;
}
.sticky-side {
    position: sticky;
    top: 60px;
}
.title-sidebar {
  color: var(--orang-color);
  font-size: 18px;
  font-weight: 800;
}

.color-cat {
  color: var(--body-color);
  font-weight: 700;
  text-decoration: none;
  margin-top: 5px;
  display: block;
}


</style>