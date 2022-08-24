<template>
<Layout :sidebar="true" class="side">
  <div>
    <div class="post-title">
      <h1 class="post-title__text" v-html="$page.page.title"/>
    </div>

    <div class="breadcrumbs">
      <ul>
          <li v-for="breadcrumb in $page.page.seo.breadcrumbs" :key="breadcrumb.text" >
              <g-link :to="breadcrumb.url">{{ breadcrumb.text }}</g-link>
          </li>
        </ul>
    </div>

    <div class="post content-box">
      <div class="post__header">
        <img
              v-if="$page.page.featuredImage"
              :src="$page.page.featuredImage.node.mediaItemUrl"
              :width="$page.page.featuredImage.node.mediaDetails.width"
              :alt="$page.page.featuredImage.altText"
            />
      </div>

      <div v-html="$page.page.content"/>

      <template v-if="$page.page.categories.length">
          <h4>Posted in</h4>
          <ul class="list categories">
            <li v-for="category in $page.page.categories" :key="category.id" >
              <g-link :to="category.link">{{ category.name }}</g-link>
            </li>
          </ul>
        </template>
        <template v-if="$page.page.tags.edges.length">
          <h4>Tags</h4>
          <ul class="list tags">
            <li v-for="edge in $page.page.tags.edges" :key="edge.node" >
              <g-link :to="edge.node.link">{{ edge.node.name }}</g-link>
            </li>
          </ul>
        </template> 
        
      <div class="post__footer">
        <PostTags :post="$post" /> 
      </div>
    </div>

    <script type="application/ld+json" class="yoast-schema-graph">{{$page.page.seo.schema.raw}}</script>

    </div>
  </Layout>
</template>

<page-query>

query Page ($slug: String) {
  page: postBy(slug: $slug) {
    title
    slug
    link
    featuredImage {
      node {
        altText
        link
        sourceUrl
        mediaDetails {
            width
          }
      }
    }
    excerpt
    date
    author {
      node {
        name
      }
    }
    content
    categories {
      nodes {
        name
        id
        link
      }
    }
    tags {      
      edges {
        node {
          databaseId
          id
          link
          name
        }
      }
    }
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
    }
    
  }
}

</page-query>

<script>
import SiteSidebar from '~/components/SiteSidebar.vue'

export default {
  components: {
    SiteSidebar,
  },
  metaInfo () {
    return {
      title: this.$page.page.seo.title,
      meta: [
        {
          description: this.$page.page.seo.metaDesc,
          key: this.$page.page.seo.metaKeywords,
        }
    ],
    }
  }
  
}


</script>

<style lang="scss">

.post-title {
    padding: calc(var(--space) / 2) 0 0 0;
    max-width: var(--content-width);
    margin: 0 auto;
}

.post {
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;
    img {
      width: 100%;
    }
    &:empty {
      display: none;
    }
  }
  &__content {
    h2:first-child {
      margin-top: 0;
    }
    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }
    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.post-comments {
  padding: calc(var(--space) / 2);
  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
@media screen and (max-width: 768px) {
  .post-title {
    margin-top: var(--space);
  }
  .post-title, .breadcrumbs {
      padding: 0 var(--space);
  }
}
</style>



