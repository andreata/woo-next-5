<template>
    <Layout>
        <div>
            <div class="full-container bg-home-2">
                <div class="container">
                    <h1 class="title-home desk">Vorresti che questo tema fosse la base del tuo eCommerce?</h1>
                    <p class="p-home desk">Richiedi informazioni e ottieni:</p>
                    <p class="orange-home font-bold desk">Velocità, Sicurezza, Affidabilità</p>

                    <div class="mobl">
                        <div class="home-layout-mobile">
                            <div>
                                <h1 class="title-home-mobile mobl">Vorresti che questo tema fosse la base del tuo eCommerce?</h1>
                                <p class="p-home-mobile mobl">Richiedi informazioni </p>
                            </div>
                            <g-image class="img-hero" src="~/assets/images/icon/hero-landing.svg" alt="" width="300" />


                        </div>
                        <div class="bullet-landing">
                            <g-image src="~/assets/images/icon/circle-check-solid.svg" alt="" width="50" />
                            <p>1500€/anno</p>
                        </div>
                        <div class="bullet-landing">
                            <g-image src="~/assets/images/icon/circle-check-solid.svg" alt="" width="50" />
                            <p>eCommerce Ultraveloce</p>
                        </div>
                        <div class="bullet-landing">
                            <g-image src="~/assets/images/icon/circle-check-solid.svg" alt="" width="50" />
                            <p>eCommerce Super Sicuro</p>
                        </div>
                    </div>

                    <form-landing />

                </div>
            </div>

          


            <!-- Copy e Immagine -->

            <div class="full-container copy-area">
                <div class="container">
                <div class="grid-two-column">
                    <div class="block-content-img">
                    <g-image class="img-promo" src="~/assets/images/icon/supereroe.svg" alt="" width="400" />
                    </div>
                    <div class="flex-content-copy">
                    <div>
                        <h2>WordPress + WooCommerce + Gridsome + SnipCart = navighi dalla luna!</h2>
                        <p>Se conosci WordPress sai quanto possa essere funzionale, ma sei anche consapevoli dei limiti della sua velocità. 
                        
                        </p>
                        <p class="content-2">Noi abbiamo collegato l'ottima gestione CMS di WordPress e WooCommerce, con le prestazioni di un framework Javascript basato su Vue.js per ottenere prestazioni stellari.</p>

                        <g-link to="/home-landing/" class="button-vuoto">Richiedi informazioni</g-link>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <!-- Box Salmone con 5 icone -->

            <div class="full-container container-salmone">
        <div class="container">
          <h2 class="text-center mb-80">
            Perché Scegliere un eCommerce basato su tecnologia Jamstack
          </h2>
          <div class="grid-five-column">
            <div>
              <g-image class="img-salmone" src="~/assets/images/icon/analisi.svg" alt="" width="60" />
              <div>
                <h3 class="orange-font">Analisi</h3>
                <p class="grey-font">Attraverso il concetto di microservice è possibile ampliare le funzionalità dell'eCommerce in maniera illimitata, senza intaccare troppo le prestazioni. Possiamo raccogliere tanti dati ed andare veloci comunque!</p>
              </div>
            </div>

            <div>
              <g-image class="img-salmone" src="~/assets/images/icon/confronto.svg" alt="" width="60" />
              <div>
                <h3 class="orange-font">Prestazioni</h3>
                <p class="grey-font">I nostri eCommerce sono rapidissimi. I tempi di velocità di caricamento della pagine rispettano e addiritturano superano i livelli altissimi richiesti da Google. </p>
              </div>
            </div>

            <div>
              <g-image class="img-salmone" src="~/assets/images/icon/icon-risparmio.svg" alt="" width="60" />
              <div>
                <h3 class="orange-font">Risparmio</h3>
                <p class="grey-font">Il template di base è già pronto e sempre aggiornato. Questo significa minori costi per mettere online il tuo eCommerce. Fai una chiacchierata con noi per capire quanto puoi risparmiare.</p>
              </div>
            </div>

            <div>
              <g-image class="img-salmone" src="~/assets/images/icon/sicurezza.svg" alt="" width="60" />
              <div>
                <h3 class="orange-font">Sicurezza</h3>
                <p class="grey-font">Niente è più sicuro di un sito statico. Puoi scegliere tra diversi livelli di sicurezza, ma anche nel caso più basico le possibilità di attacco sono infinitamente minori rispetto ad un CMS standard.</p>
              </div>
            </div>

            <div>
              <g-image class="img-salmone" src="~/assets/images/icon/affidabili.svg" alt="" width="60" />
              <div>
                <h3 class="orange-font">Affidabilità</h3>
                <p class="grey-font">Lavoriamo nel mondo web da più di 10 anni. Jamstack è una tecnologia relativamente nuova, ma la sappiamo già gestire al meglio. Per ogni problema, noi abbiamo la soluzione. </p>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>





            <!-- Carosello recensioni -->
            <div class="full-container">

                <div class="container recensioni">

                    <h2 class="text-center mb-80">Le recensioni dei clienti che si sono affidati al selezionatore
                    </h2>
                    <ClientOnly>
                        <carousel class="carousel" :perPageCustom="[[768, 1], [1024, 5]]" :paginationEnabled="true">
                            <slide class="carousel-cell carousel-item-recensioni">
                                <div class="salmone-bg">
                                    <div class="Stars" style="--rating: 4.5;" aria-label="Rating of this product is 2.3 out of 5."></div>
                                    <p class="orange-font">Ottimo servizio</p>
                                    <p class="grey-font">Buongiorno, trovo assolutamente positivo il servizio che
                                        Offertasuper.it fornisce
                                        ai
                                        clienti: risposte
                                        veloci</p>
                                </div>
                            </slide>

                            <slide class="carousel-cell carousel-item-recensioni">
                                <div class="salmone-bg">
                                    <div class="Stars" style="--rating: 4.5;" aria-label="Rating of this product is 2.3 out of 5."></div>
                                    <p class="orange-font">Ottimo servizio</p>
                                    <p class="grey-font">Buongiorno, trovo assolutamente positivo il servizio che
                                        Offertasuper.it fornisce
                                        ai
                                        clienti: risposte
                                        veloci</p>
                                </div>
                            </slide>

                            <slide class="carousel-cell carousel-item-recensioni">
                                <div class="salmone-bg">
                                    <div class="Stars" style="--rating: 4.5;" aria-label="Rating of this product is 2.3 out of 5."></div>
                                    <p class="orange-font">Ottimo servizio</p>
                                    <p class="grey-font">Buongiorno, trovo assolutamente positivo il servizio che
                                        Offertasuper.it fornisce
                                        ai
                                        clienti: risposte
                                        veloci</p>
                                </div>
                            </slide>

                            <slide class="carousel-cell carousel-item-recensioni">
                                <div class="salmone-bg">
                                    <div class="Stars" style="--rating: 4.5;" aria-label="Rating of this product is 2.3 out of 5."></div>
                                    <p class="orange-font">Ottimo servizio</p>
                                    <p class="grey-font">Buongiorno, trovo assolutamente positivo il servizio che
                                        Offertasuper.it fornisce
                                        ai
                                        clienti: risposte
                                        veloci</p>
                                </div>
                            </slide>

                            <slide class="carousel-cell carousel-item-recensioni">
                                <div class="salmone-bg">
                                    <div class="Stars" style="--rating: 4.5;" aria-label="Rating of this product is 2.3 out of 5."></div>
                                    <p class="orange-font">Ottimo servizio</p>
                                    <p class="grey-font">Buongiorno, trovo assolutamente positivo il servizio che
                                        Offertasuper.it fornisce
                                        ai
                                        clienti: risposte
                                        veloci</p>
                                </div>
                            </slide>

                            <slide class="carousel-cell carousel-item-recensioni">
                                <div class="salmone-bg">
                                    <div class="Stars" style="--rating: 4.5;" aria-label="Rating of this product is 2.3 out of 5."></div>
                                    <p class="orange-font">Ottimo servizio</p>
                                    <p class="grey-font">Buongiorno, trovo assolutamente positivo il servizio che
                                        Offertasuper.it fornisce
                                        ai
                                        clienti: risposte
                                        veloci</p>
                                </div>
                            </slide>
                        </carousel>
                    </ClientOnly>
                </div>
            </div>

         



        </div>
    </Layout>
</template>

<page-query>



</page-query>

<script>
import { Pager } from 'gridsome'
import FormLanding from '~/components/FormLanding.vue'

export default {
  components: {
    Pager,
    FormLanding,
   
      Carousel: () =>
        import('vue-carousel')
          .then(m => m.Carousel)
          .catch(),
      Slide: () =>
        import('vue-carousel')
          .then(m => m.Slide)
          .catch(),
    },
  
 
   metaInfo () {
    return {
      title: 'Offerta Super | Selezioniamo le migliori offerte per te',
      meta: [ 
      {
          description: 'Offerta Super è un selezionatore online, in grado di selezionare le migliori offerte per te',
        key: 'Offerta Super',
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Offerta Super',
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Offerta Super',
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'Offerta Super',
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Offerta Super',
      },
      {
        key: 'og:image',
        name: 'og:image',
        content: '',
      },
    ],
    }
  }
}

</script>

<style lang="scss" soped>
.Stars {
    --percent: calc(var(--rating) / 5 * 100%);
    display: inline-block;
    font-size: var(--star-size);
    font-family: Times;
    line-height: 1
}

.Stars::before {
    content: "★★★★★";
    letter-spacing: 3px;
    background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: #ffcc00
}

@media screen and (min-width: 1850px) {
    .bg-cielo .VueCarousel-wrapper {
        margin-left: calc((100% - 1440px) / 2);
    }
}

@media screen and (max-width: 1850px) {
    .bg-cielo .VueCarousel-wrapper {
        margin-left: calc(14.2%);
    }
}


.orange-home {

    font-size: 28px;
    text-align: center;
    color: var(--strong-orange);
}


.title-home {
    text-align: center;
}

.grid-five-column {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 40px;
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
}

.grid-two-column {
    display: grid;
    grid-template-columns: 45% 55%;
}

.block-content-img {
    margin: auto;
    display: block;
}

.flex-content-copy {
    display: flex;
    align-content: center;
}

.container-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;

    @media screen and (min-width: 768px) {
        margin-top: 40px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .item-box {
        padding: 3px;
    }
}

.carousel-cell {
    width: 100%;
}



@media screen and (max-width: 768px) {
    .bullet-landing {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        p {
            margin-bottom: 0;
            margin-left: 10px;
            font-size: 19px;
            font-weight: 800;
            color: var(--orang-color);
        }
    }
   .recensioni {
       margin-top: 30px;
   }

   .loghi-area {
       margin-top: 30px;
   }

   .container {
       position: relative;
       overflow: hidden;
   }

   .copy-area {
       margin-top: 0;
   }

   .bg-cielo {
       padding-top: 0;

       h2 {
           margin-bottom: 0;
       }

       .carousel {
           margin-top: 30px;
       }

       .carousel-item-home {
           margin: 0 5px;
       }
   }

   .container-salmone {
       padding-top: 30px;
       padding-bottom: 30px;
       margin-top: 30px;

       .mb-80 {
           margin-bottom: 30px;
           margin-top: 10px;
           text-align: left;
       }

       .grid-five-column {
           grid-template-columns: 1fr;

           &>div {
               display: grid;
               grid-template-columns: 1fr 3fr;

               h3 {
                   margin-top: 0;
                   margin-bottom: 10px;
               }
           }
       }
   }

   .grid-two-column {
       display: grid;
       grid-template-columns: 1fr;
       grid-auto-flow: dense;

       .block-content-img {
           order: 1;
       }

       .flex-content-copy {
           h2 {
               font-size: 22px;
           }

           text-align: center;
           margin-bottom: 20px;
       }
   }

   .img-hero {
       height: 300px;
       position: absolute;
       right: -124px;
       overflow: hidden;

   }

   .home-layout-mobile {
       display: grid;
       grid-template-columns: 2fr 1fr;

       .title-home-mobile {
           margin-top: 80px;
           font-size: 30px;
           color: var(--title-color);
       }

       .p-home-mobile {
           color: var(--grey-body-color);
           font-size: 24px;
       }
   }

   .flex-homeland {
       display: grid;
       grid-template-columns: 1fr 3fr;
       align-items: center;

       .h2-promo {

           font-size: 20px;
           text-align: left;
           font-weight: 800;
       }

       .h3-promo {
           font-size: 17px;
           text-align: left;
           font-weight: 800;
       }
   }

   .container-box .item-box {
       margin-bottom: 30px;
       box-shadow: 0px 10px 20px rgba(116, 116, 116, 0.16);

       .promo {
           position: relative;
           margin-top: -20px;
       }
   }
    .img-hero {
        height: 300px;
        position: absolute;
        right: -124px;
        overflow: hidden;

    }
    .home-layout-mobile {
        display: grid;
        grid-template-columns: 2fr 1fr;

        .title-home-mobile {
            margin-top: 80px;
            font-size: 25px;
            color: var(--title-color);
        }

        .p-home-mobile {
            color: var(--grey-body-color);
            font-size: 20px;
        line-height: 1.2;
        }
    }
  
    .container-box {
        flex-wrap: wrap;
    }

    .carousel-cell {
        width: 100%;
    }
}

.light {
    font-weight: 100;
}

@media screen and (max-width: 768px) and (min-width: 320px) {
    .bg-cielo .VueCarousel-inner {
        flex-basis: 230px !important;
    }
}

 
</style>