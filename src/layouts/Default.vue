<template>
  <div class="layout">

  <!--   <vue-cookie-accept-decline :ref="'myPanel1'" :elementId="'myPanel1'" :debug="false" :position="'bottom-left'"
      :type="'floating'" :disableDecline="false" :transitionName="'slideFromBottom'" :showPostponeButton="false"
      @status="cookieStatus" @clicked-accept="cookieClickedAccept" @clicked-decline="cookieClickedDecline">

      <div slot="postponeContent">
        &times;
      </div>

      <div slot="message">
        Utilizziamo i Cookie per migliorare la tua esperienza di navigazione. Leggi la <a href="#"
          target="_blank">Cookie Policy</a>
      </div>

      <div slot="declineContent">
        Nega
      </div>

      <div slot="acceptContent">
        Ok, acconsento!
      </div>
    </vue-cookie-accept-decline> -->

    <header class="header">
      <div class="header-box">
        <div class="logo order-2">
          <g-image src="~/assets/images/icon/lume-di-luna.svg" alt="" width="200" />
          <g-link class="logo-link" to="/">link</g-link>
        </div>

        <div class="header-element order-1">
          <NavBar />
          <ToggleTheme /> 
          <!-- <g-image class="contatti-header" src="~/assets/images/icon/contatti.svg" alt="" width="200" /> -->
        </div>

        <g-image class="contatti-header-mob order-3" src="~/assets/images/icon/domande.svg" alt="" width="200" />
      </div>

      <div class="header-box header-index">

        <SearchWordPress /> 

       <div class="flex-top">
          <a  class="snipcart-checkout button-vuoto">
            <svg class="icon icon-cart-empty icon-cart" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
              <path d="m15.75 11.8h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33l-.78-11.61zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1 -9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z" fill="currentColor" fill-rule="evenodd"></path>
            </svg>&nbsp;
            <span class="snipcart-items-count"></span>
            <span class="snipcart-total-price">{{this.totalPrice | formatMoney }}</span>
          </a>
          <a class="snipcart-customer-signin button-vuoto">Login</a>
          
        </div>

        
      </div>
    </header>

  

    <div class="content" v-if="!sidebar && !sidebarblog && !sidebarproduct">
      <slot />
    </div>

    <div class="content content-side" v-if="sidebar">
      <div class="full-container">
        <div class="container container-sidebar">
          <slot />
          <div class="sidebar" v-if="sidebar">
            <site-sidebar />
          </div>
        </div>
      </div>
    </div>


    <div class="content content-side" v-if="sidebarblog">
      <div class="full-container">
        <div class="container container-sidebar">
          <slot />
          <div class="sidebar" v-if="sidebarblog">
            <site-sidebar-post />
          </div>
        </div>
      </div>
    </div>

    <div class="content content-side" v-if="sidebarproduct">
      <div class="full-container">
        <div class="container container-sidebar">
          <slot />
          <div class="sidebar" v-if="sidebarproduct">
            <site-sidebar-product />
          </div>
        </div>
      </div>
    </div>





    <div class="footer">
      <site-footer />
    </div>

  </div>
</template>

<script>
  import SiteFooter from '~/components/SiteFooter.vue'
  import ToggleTheme from '~/components/ToggleTheme.vue'
  import SiteSidebar from '~/components/SiteSidebar.vue'
  import SiteSidebarPost from '~/components/SiteSidebarPost.vue'
  import SiteSidebarProduct from '~/components/SiteSidebarProduct.vue'
  import SearchWordPress from '~/components/SearchWordPress.vue'
  import NavBar from '~/components/NavBar.vue'

  export default {
    components: {
      SiteFooter,
      ToggleTheme,
      SiteSidebar,
      SiteSidebarPost,
      SiteSidebarProduct,
      NavBar,
      SearchWordPress
    },
  props: ['sidebar', 'sidebarblog', 'sidebarproduct'],
    methods: {
    cookieStatus(status) {
      this.status = status;
    },
    cookieClickedAccept() {
      this.status = 'accept';
      
    },
    cookieClickedDecline() {
      this.status = 'decline';
    }
  },
  computed: {
    statusText() {
      return this.status || 'No cookie set';
    }
  },
    data: function() {
      return {
        totalPrice: 0
      };
    },
    methods: {
        getTotalPrice: function() {
          return Snipcart.store.getState().cart.total;
        }
    },
    mounted: function() {
          this.totalPrice = this.getTotalPrice();
    }
  }
</script>

<style lang="scss">

.flex-top {
  display: flex;
  align-items: center;
  a {
    padding: 0px 8px;
    margin-left: 10px;
    font-size: 14px;
        display: flex;
   border: none;
    align-items: center;
  }
}
@media screen and (max-width: 768px) {
  .header-index {
    z-index: 1 !important;
  }
  .contatti-header {
    display: none;
  }
  .order-3 {
    order: 3;
    margin-left: 28px;
  }
  .order-2 {
    order: 2;
  }
  .order-1 {
    order: 1;
  }
    .header .menu-icon {
      padding-left: 0 !important;
    }
  
}

@media screen and (min-width: 768px) {
  .contatti-header-mob {
    display: none;
  }

}

.icon-cart {
  width: 30px;
}

.content-side {
  .container {
      grid-template-columns: 3fr 1fr !important;
      display: grid;
      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr !important;
      }
    }
}
.logo {
  position: relative;

  .logo-link {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.0;
      overflow: hidden;
      text-indent: -9999px;
      z-index: 11;
  }
}

.header-box {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
  z-index: 3;
  top: 0;
  grid-column: 2;
}

.header__right {
    display: flex;
    align-items: center;
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}
.sidebar {
  margin-top: 116px;
}

header {
    border-bottom: 1px solid var(--border-color);
    flex-wrap: nowrap;
    position: -webkit-sticky;
    position: sticky;
    transition: background-color .3s,border-color,.3s;
}

.footer {
 
  padding: calc(var(--space) / 2);
 
  font-size: .8em;
  > span {
    margin: 0 .35em;
  }
  a {
    color: currentColor;
  }
}
</style>



