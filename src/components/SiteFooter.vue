<template>
  <footer>
    
    <div class="full-container rassi-conte">
      <div class="container">
        <div class="container-rassicurazioni-footer">
          <div>
            <g-image class="img-rassicurazioni" src="~/assets/images/icon/icofooter1.svg" alt="" width="150" />
            <p class="title-rassicurazioni">Realizzato da esperti.</p>
            <p>La tecnologia su cui è basato l'eCommerce è JAMstack. Dove JAM sta per JavaScript, API e Markup. Tre elementi che mixati permettono di avere siti gestibili e ultra-veloci.</p>
          </div>
          <div>
            <g-image class="img-rassicurazioni" src="~/assets/images/icon/icofooter2.svg" alt="" width="150" />
            <p class="title-rassicurazioni">Hai 30 giorni per cambiare idea.</p>
            <p>Non sei soddisfatto della piattaforma? Pensi che il sito non sia veloce? Hai 30 giorni di tempo per ripensarci. Ma siamo assolutamente sicuri che non lo farai.</p>
          </div>
          <div>
            <g-image class="img-rassicurazioni" src="~/assets/images/icon/icofooter3.svg" alt="" width="150" />
            <p class="title-rassicurazioni">Vuoi la vera verità?</p>
            <p>Non siamo terrestri, ma una specie alinea che sta cercando di guadagnare denaro su questo pianeta per divertirci un po'... Prima di distruggerlo.</p>
          </div>
          <div>
            <g-image class="img-rassicurazioni" src="~/assets/images/icon/icofooter4.svg" alt="" width="150" />
            <p class="title-rassicurazioni">Rilssati. Il tuo sito è al sicuro.</p>
            <p>La tecnologia jamstack rende il sito sicuro come Fort Knox. Questo non è solo un buon copy, ma la verità. Il front-end del sito è statico, quindi quasi impenetrabile.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="full-container salmonella-color">
      <div class="container">
        <div class="grid-footer">
          <div>
            <g-image src="~/assets/images/icon/lume-di-luna.svg" alt="" width="600" />
            <p>Andrea Tasselli - Partita IVA n. 01870970470</p>
            <p><a href="#">Privacy Policy </a> | <a href="#">Cookie Policy </a></p>
          </div>

          <div>
            <p>Link Utili</p>
            <p><g-link to="/home-landing">Richiedi Informazioni</g-link></p>
            <p><g-link to="/offertasuper_wordpress/categoria-prodotto/shop">Demo Shop</g-link></p>
            <p><g-link to="/offertasuper_wordpress/category/blog/">Blog</g-link></p>
          </div>

          <div>
            <p>Link Utili</p>
            <p><g-link to="/home-landing">Richiedi Informazioni</g-link></p>
            <p><g-link to="/offertasuper_wordpress/categoria-prodotto/shop">Demo Shop</g-link></p>
            <p><g-link to="/offertasuper_wordpress/category/blog/">Blog</g-link></p>
          </div>

          <div>
            <p>Link Utili</p>
            <p><g-link to="/home-landing">Richiedi Informazioni</g-link></p>
            <p><g-link to="/offertasuper_wordpress/categoria-prodotto/shop">Demo Shop</g-link></p>
            <p><g-link to="/offertasuper_wordpress/category/blog/">Blog</g-link></p>
          </div>

          <div>
            <p>Legali</p>
            <p><a href="#">Privacy Policy </a></p>
            <p><a href="#">Note Legali </a></p>
            <p><a href="#">Termini e Condizioni </a></p>
          </div>
        </div>

        <div class="footer-blox">

          <p class="grey-font">lumediluna.it © Copyright 2022. Tutti i diritti riservati. </p>
        </div>

      </div>
    </div>

  </footer>
</template>


<style lang="scss" scoped>
.rassi-conte {
  background: var(--rassi);
    padding: 20px 0;
}
.container-rassicurazioni-footer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr ;
  grid-column-gap: 40px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  p {
    text-align: center;
  }
  .img-rassicurazioni {
    margin: auto;
    display: block;
  }
  .title-rassicurazioni {
    font-weight: 800;
    margin-bottom: 10px;
    font-size: 13.5px;
  }
}
.grid-footer {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
  grid-column-gap: 40px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>