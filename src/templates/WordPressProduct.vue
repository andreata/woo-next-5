<template>
  <Layout>
      <div class="full-container">

        <div class="container">
            <div class="breadcrumbs">
                <ul>
                    <li v-for="breadcrumb in $page.product.seo.breadcrumbs" :key="breadcrumb.text">
                        <g-link :to="breadcrumb.url" v-html="breadcrumb.text"></g-link>
                    </li>
                </ul>
            </div>
            <div class="product-grid">
            
            <ClientOnly>
                <carousel
                class="carousel-layout"
                :autoplay="true"
                :autoPlayHoverPause="true"
                :autoplayTimeout="5000"
                :centerMode="true"
                :loop="true"
                :padding="200"
                :paginationEnabled="true"
                paginationColor="#090b10"
                paginationActiveColor="#c9d4fA"
                :paginationSize="18"
                :perPage="1"
                >
                <slide class="product-img-layout">
                    <g-image alt="Cover image" v-if="$page.product.image" class="post-card__image"
                    :src="$page.product.image.mediaItemUrl" />
                </slide>
            
                    <slide v-for="node in $page.product.galleryImages.nodes" :key="node.id">
                <g-image alt="Cover image" class="post-card__image"
                :src="node.mediaItemUrl" />
        
                </slide>
                </carousel>
            </ClientOnly>
                <div  class="product-info-layout">
                        <div class="box-cate">
                            <div v-for="node in $page.product.productCategories.nodes" :key="node.slug">
                                <p>{{ node.name }}</p>
                            </div> 
                        </div>
                    <h1 class="title">{{ $page.product.name }}</h1>
                    <div v-html="$page.product.shortDescription"></div>
                    
                    
                    <div v-if="$page.product.stockStatus == 'IN_STOCK'">
    

                      
                      <div class="quantity-element" v-if="$page.product.stockStatus == 'IN_STOCK' && (quantityVal)">
                        <p>Quantit??: </p>
                        <select v-model="selected">
                          <option v-for="n in quantityVal" :value="n">{{ n }}</option>
                        </select>
                      </div>

                   


                    </div>

                    <div v-if="$page.product.stockStatus == 'OUT_OF_STOCK'">
                      <p class="out-s"><span class="red-dot"></span>Non disponibile</p>
                    </div>

                    <div class="price-disposition" v-if="$page.product.salePrice">
                        <p class="price-regular">{{ $page.product.regularPrice }}</p>     
                        <p class="price-sale">{{ $page.product.salePrice }}</p>
                    </div>  

                    <div v-if="!$page.product.salePrice">
                        <p class="price-sale">{{ $page.product.regularPrice }}</p>     
                    </div>  

                  <div v-if="$page.product.stockStatus == 'IN_STOCK' && $page.product.type == 'VARIABLE'">


                        <div class="radio-variation" v-for="(node, index) in $page.product.attributes.nodes" :key="node.id" >
                            {{node.name}}

                            <label class="label-variation" v-for="variazione in node.options"  :for="variazione" >
                              <input type="radio" :id="variazione" :value="variazione" v-model="picked[index]" />
                            {{variazione}}</label>

                      

                           <!-- <select v-model="selected[index]">
                              <option v-for="n in node.options" :value="n">{{ n }}</option>
                            </select>  -->
                        </div> 

      
                 
                     

                        <div v-for="node in $page.product.variations.nodes" :key="node.id">

                         
                        
                          <div v-if="node.name.toLowerCase() == $page.product.name.toLowerCase() + ' - ' + picked[0] + ', ' + picked[1]">
                            
                            <span>Combinazione scelta: {{picked[0]}} - {{picked[1]}}</span><br>
                           <strong><span class="through">{{node.regularPrice}}</span> {{node.salePrice}}</strong>
                         
                            <div v-if="!(node.stockQuantity)">
                              <div v-if="$page.product.stockStatus == 'IN_STOCK'">
                                <a v-if="node.price"
                                class="cta-button-theme cta-button product-layout snipcart-add-item button-pieno"
                                :data-item-id="node.id"
                                :data-item-description="$page.product.shd"
                                :data-item-image="node.image.mediaItemUrl"
                                :data-item-price="node.price.replace('???', '').replace(',', '.')"
                                :data-item-name="node.name"
                                :data-item-url="node.link"
                                
                                >Aggiungi al carrello</a>
                              </div>
                            </div>

                            

                            <div v-if="(node.stockQuantity)">

                              <div v-for="(item) in quantityValVariation">
                                <div v-if="item.name.toLowerCase() == $page.product.name.toLowerCase() + ' - ' + picked[0] + ', ' + picked[1]">
                            
                            
                                    <div class="quantity-element">
                                      <p>Quantit??: </p>
                                      <select v-model="selectedVariation">
                                        <option v-for="n in item.stockQuantity" :value="n">{{ n }}</option>
                                      </select>
                                    </div>

                                    <div v-if="$page.product.stockStatus == 'IN_STOCK'">
                                      <a v-if="node.price"
                                      class="cta-button-theme cta-button product-layout snipcart-add-item button-pieno"
                                      :data-item-id="node.id"
                                      :data-item-description="$page.product.shd"
                                      :data-item-image="node.image.mediaItemUrl"
                                      :data-item-price="node.price.replace('???', '').replace(',', '.')"
                                      :data-item-name="node.name"
                                      :data-item-url="node.link"
                                      :data-item-quantity="selectedVariation"
                                      >Aggiungi al carrello</a>
                                    </div>
                                  </div>
                              </div>
                            </div>

                          </div>
                          
                        </div> 

                        

                  </div>

                  <!-- LAMORO QUI -->
                    <!-- <div v-if="$page.product.variations">

                        <div v-for="node in $page.product.nodes" :key="node.id">
                                <p>{{ node.name }}</p>
                            </div> 

                        <p>{{$page.product.nodes.attributes.nodes.name}}</p>
                    </div> -->
                  <!-- LAMORO QUI -->
              
                    <div v-if="$page.product.stockStatus == 'IN_STOCK' && $page.product.type == 'SIMPLE' && (quantityVal)">
                      <a v-if="$page.product.price"
                      class="cta-button-theme cta-button product-layout snipcart-add-item button-pieno"
                      :data-item-id="$page.product.id"
                      :data-item-description="$page.product.shd"
                      :data-item-image="$page.product.image.mediaItemUrl"
                      :data-item-price="$page.product.price"
                      :data-item-name="$page.product.name"
                      :data-item-url="$page.product.link"
                      :data-item-quantity="selected"
                      >Aggiungi al carrello</a>
                    </div>

                    <div v-if="$page.product.stockStatus == 'IN_STOCK' && $page.product.type == 'SIMPLE' && !(quantityVal)">
                      <a v-if="$page.product.price"
                      class="cta-button-theme cta-button product-layout snipcart-add-item button-pieno"
                      :data-item-id="$page.product.id"
                      :data-item-description="$page.product.shd"
                      :data-item-image="$page.product.image.mediaItemUrl"
                      :data-item-price="$page.product.price"
                      :data-item-name="$page.product.name"
                      :data-item-url="$page.product.link"
                      >Aggiungi al carrello</a>
                    </div>

                    <div v-if="$page.product.stockStatus == 'IN_STOCK' && (quantityVal)">
                      <p class="in-s"><span class="green-dot"></span>Disponibilit?? immediata culo ({{quantityVal}})</p> 
                      
                    </div>

                    <div v-if="$page.product.stockStatus == 'IN_STOCK' && !(quantityVal)">
                      <p class="in-s"><span class="green-dot"></span>Disponibilit?? immediata</p>
                    </div>

                    <div class="rassicurazioni">
                        <div>
                            <svg class="icon icon-accordion color-foreground-text" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M0 3.75156C0 3.47454 0.224196 3.24997 0.500755 3.24997H10.647C10.9235 3.24997 11.1477 3.47454 11.1477 3.75156V5.07505V5.63362V6.10938V13.6616C10.9427 14.0067 10.8813 14.1101 10.5516 14.6648L7.22339 14.6646V13.6614H10.1462V4.25316H1.00151V13.6614H2.6842V14.6646H0.500755C0.224196 14.6646 0 14.44 0 14.163V3.75156Z"></path>
                            <path d="M18.9985 8.08376L11.1477 6.10938V5.07505L19.6212 7.20603C19.8439 7.26203 20 7.46255 20 7.69253V14.1631C20 14.4401 19.7758 14.6647 19.4992 14.6647H17.3071V13.6615H18.9985V8.08376ZM11.1477 13.6616L13.3442 13.6615L13.3443 14.6647L10.5516 14.6648L11.1477 13.6616Z"></path>
                            <path d="M7.71269 14.1854C7.71269 15.6018 6.56643 16.75 5.15245 16.75C3.73847 16.75 2.59221 15.6018 2.59221 14.1854C2.59221 12.7691 3.73847 11.6209 5.15245 11.6209C6.56643 11.6209 7.71269 12.7691 7.71269 14.1854ZM5.15245 15.7468C6.01331 15.7468 6.71118 15.0478 6.71118 14.1854C6.71118 13.3231 6.01331 12.6241 5.15245 12.6241C4.29159 12.6241 3.59372 13.3231 3.59372 14.1854C3.59372 15.0478 4.29159 15.7468 5.15245 15.7468Z"></path>
                            <path d="M17.5196 14.1854C17.5196 15.6018 16.3733 16.75 14.9593 16.75C13.5454 16.75 12.3991 15.6018 12.3991 14.1854C12.3991 12.7691 13.5454 11.6209 14.9593 11.6209C16.3733 11.6209 17.5196 12.7691 17.5196 14.1854ZM14.9593 15.7468C15.8202 15.7468 16.5181 15.0478 16.5181 14.1854C16.5181 13.3231 15.8202 12.6241 14.9593 12.6241C14.0985 12.6241 13.4006 13.3231 13.4006 14.1854C13.4006 15.0478 14.0985 15.7468 14.9593 15.7468Z"></path></svg>
                            <p>Spedizione 24/48 ore. Speriamo di farcela.</p>
                        </div>

                        <div>
                            <svg class="icon icon-accordion color-foreground-text" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M7.97895 1.55555C7.75602 1.55555 7.55049 1.71237 7.49305 1.94762L7.49123 1.95509C7.42498 2.21019 7.33959 2.53757 7.21755 2.85227C7.09741 3.16208 6.92519 3.50498 6.66011 3.77111C5.94871 4.49525 4.9347 4.58069 4.15302 4.58069C3.86517 4.58069 3.57871 4.54519 3.29458 4.47515C3.24995 4.46626 3.17168 4.45029 3.08678 4.41925C3.02446 4.40156 2.97878 4.39485 2.93608 4.39485C2.85763 4.39485 2.77367 4.41506 2.69931 4.45229C2.58049 4.51177 2.49244 4.61426 2.45245 4.74393L2.08187 5.96006C1.99969 6.23376 2.14791 6.5108 2.40926 6.59694C3.06631 6.80864 3.64401 7.16273 4.12596 7.64524C5.79603 9.31728 5.79603 12.0249 4.12596 13.697L4.1207 13.7022C3.70656 14.1053 3.22471 14.4375 2.66344 14.653C2.42776 14.7449 2.29223 15.0137 2.37026 15.2777L2.3694 15.275L2.37085 15.2797L2.37026 15.2777L2.92436 17.0653L2.92291 17.061L2.92626 17.0715L2.92436 17.0653C2.97736 17.22 3.1002 17.3437 3.23664 17.3938C3.23134 17.3924 3.22591 17.3909 3.22032 17.3894L3.24853 17.3979C3.24455 17.3966 3.24059 17.3952 3.23664 17.3938C3.31908 17.4155 3.36721 17.4222 3.41048 17.4222C3.49912 17.4222 3.60995 17.3887 3.70246 17.3233C3.98945 17.1198 4.30448 16.9574 4.6125 16.8318L4.61978 16.8288C5.10547 16.639 5.61461 16.5446 6.14334 16.5446C7.11309 16.5446 8.05549 16.8874 8.79764 17.4889L8.80712 17.4966L8.81955 17.5076C8.90806 17.5864 9.00821 17.6755 9.10985 17.7768C9.10724 17.7743 9.10462 17.7719 9.10199 17.7695L9.11722 17.7841C9.11476 17.7817 9.11231 17.7792 9.10985 17.7768C9.26909 17.925 9.40178 18.0826 9.51863 18.2455L9.51488 18.2407L9.52415 18.2532C9.52231 18.2507 9.52048 18.2481 9.51863 18.2455C9.61654 18.3713 9.76885 18.4444 9.91772 18.4444V19.4999C9.42913 19.4999 8.96472 19.2651 8.67058 18.8776L8.66585 18.8714L8.66131 18.865C8.57515 18.7443 8.48502 18.6386 8.38216 18.5436L8.3744 18.5364L8.36693 18.5289C8.28943 18.4513 8.21077 18.3808 8.12058 18.3006C8.12363 18.303 8.12667 18.3055 8.12971 18.3079L8.11112 18.2921C8.11428 18.295 8.11744 18.2978 8.12058 18.3006C7.56475 17.8535 6.86093 17.6002 6.14334 17.6002C5.74527 17.6002 5.36861 17.6705 5.00975 17.8102L5.01345 17.8087L5.00616 17.8116L5.00975 17.8102C4.7622 17.9115 4.52249 18.0371 4.31551 18.1839C4.05739 18.3663 3.73435 18.4778 3.41048 18.4778C3.22966 18.4778 3.07494 18.4441 2.94062 18.4074L2.9264 18.4036L2.91241 18.3989C2.43607 18.2399 2.07057 17.8518 1.91799 17.3935L1.91453 17.3831L1.35631 15.5819C1.12631 14.8143 1.50604 13.9695 2.27996 13.6691L2.28202 13.6683C2.68845 13.5124 3.05095 13.2676 3.37829 12.9495L3.37567 12.9522L3.38096 12.9469L3.37829 12.9495C4.63437 11.6891 4.6335 9.64934 3.37567 8.39003C3.01234 8.02628 2.57987 7.76103 2.08252 7.60098L2.08001 7.60016C1.26969 7.33494 0.820566 6.47637 1.06787 5.6562L1.06832 5.65473L1.43956 4.43642L1.43993 4.43521C1.565 4.02823 1.84814 3.69722 2.22417 3.50898C2.43856 3.40166 2.68453 3.3393 2.93608 3.3393C3.11661 3.3393 3.27314 3.37268 3.40855 3.41335L3.43121 3.42015L3.45248 3.42867C3.45248 3.42867 3.45629 3.42989 3.46231 3.4314C3.47374 3.43427 3.48719 3.43707 3.51473 3.44259L3.52713 3.44507L3.5394 3.44814C3.746 3.49985 3.95026 3.52514 4.15302 3.52514C4.91759 3.52514 5.52295 3.42089 5.9046 3.03158L5.90806 3.02805C6.02355 2.91242 6.13155 2.72544 6.22996 2.47166C6.32632 2.22316 6.39772 1.95396 6.46528 1.69386L6.46427 1.69798L6.46615 1.69052L6.46528 1.69386C6.63616 1.00201 7.25456 0.5 7.97895 0.5H11.609C12.3348 0.5 12.9542 1.00401 13.1237 1.69798L13.1242 1.70013C13.1834 1.94725 13.2587 2.21702 13.359 2.46369C13.4616 2.71581 13.5762 2.90808 13.696 3.02807C14.1211 3.45365 14.7781 3.68003 15.4455 3.68003C15.5631 3.68003 15.6809 3.67176 15.7991 3.65507C16.0139 3.6203 16.225 3.56054 16.415 3.47834C16.6179 3.38568 16.8361 3.3393 17.0543 3.3393C17.2747 3.3393 17.4951 3.38664 17.6997 3.48119C18.0942 3.66348 18.4093 4.00233 18.5392 4.44215L18.9305 5.59736L18.9334 5.60717C19.0547 6.01723 19.0121 6.46746 18.7906 6.84757C18.5695 7.22709 18.1953 7.48993 17.7778 7.58282L17.7709 7.58435C17.5695 7.62636 17.3676 7.69501 17.1451 7.78185C16.7638 7.95199 16.4097 8.19235 16.1092 8.49326C15.4747 9.1285 15.1188 9.97588 15.1188 10.8775C15.1188 11.7824 15.4665 12.6274 16.1066 13.2593L16.1092 13.2619C16.4842 13.6374 16.929 13.9137 17.4287 14.0838C18.1828 14.3325 18.7843 15.188 18.5193 16.05L18.0759 17.4952L18.0752 17.4976C17.9207 17.9926 17.544 18.3705 17.0476 18.5259L17.0418 18.5277C16.9097 18.5673 16.7524 18.6017 16.5797 18.6017C16.2411 18.6017 15.898 18.4939 15.6144 18.273L15.6108 18.2702C15.3991 18.1024 15.1801 17.9708 14.9427 17.865L14.9447 17.8659L14.9408 17.8641L14.9427 17.865C14.5354 17.688 14.1132 17.6002 13.6715 17.6002C12.9507 17.6002 12.2587 17.8453 11.7065 18.2988L11.7141 18.2921L11.6994 18.3047C11.7018 18.3028 11.7041 18.3008 11.7065 18.2988L11.4477 18.5292C11.4511 18.5257 11.4547 18.5221 11.4582 18.5186L11.4356 18.5399L11.4477 18.5292C11.3396 18.6384 11.2492 18.7459 11.1669 18.8609C11.1682 18.8589 11.1695 18.857 11.1708 18.8551L11.1639 18.865L11.1669 18.8609C10.8858 19.2703 10.4109 19.4975 9.92545 19.4999L9.92546 18.4444H9.91772C10.0873 18.4444 10.2255 18.3642 10.2941 18.2632L10.3009 18.2532C10.4214 18.0843 10.5538 17.9281 10.7079 17.7738L10.7189 17.7628L11.0162 17.4983L11.0237 17.4921C11.7696 16.8756 12.7042 16.5446 13.6715 16.5446C14.2604 16.5446 14.8275 16.663 15.3684 16.8985L15.3723 16.9002C15.6902 17.0416 15.9855 17.219 16.2676 17.4422L16.2662 17.4411L16.2698 17.444L16.2676 17.4422C16.355 17.5098 16.4651 17.5461 16.5797 17.5461C16.6128 17.5461 16.6607 17.5394 16.7332 17.5179L16.7305 17.5187L16.7363 17.517L16.7332 17.5179C16.895 17.4664 17.0122 17.3494 17.0638 17.185L17.5069 15.741C17.5716 15.5306 17.412 15.1893 17.0951 15.0856L17.0895 15.0838C16.4357 14.8617 15.8506 14.4986 15.3602 14.008L15.3615 14.0093L15.3589 14.0067L15.3602 14.008C14.5161 13.1739 14.0599 12.0577 14.0599 10.8775C14.0599 9.69362 14.529 8.57933 15.3589 7.74846C15.7569 7.34998 16.2242 7.03443 16.7259 6.81248L16.7363 6.80786L16.747 6.80369C16.9934 6.70716 17.2611 6.61261 17.5499 6.55201L17.5472 6.55261L17.5541 6.55113L17.5499 6.55201C17.6881 6.52047 17.8079 6.43273 17.875 6.3174C17.9411 6.20409 17.9608 6.05889 17.9202 5.91414L17.924 5.92537L17.9178 5.90587C17.9187 5.90862 17.9195 5.91138 17.9202 5.91414L17.5282 4.75688L17.5247 4.74458C17.4871 4.61282 17.3921 4.50249 17.2544 4.43887C17.1909 4.40952 17.1226 4.39485 17.0543 4.39485C16.9859 4.39485 16.9176 4.40953 16.8541 4.43887L16.8433 4.44383C16.5614 4.56653 16.2601 4.6503 15.9626 4.69796L15.9538 4.69937C15.7847 4.72356 15.6152 4.73559 15.4455 4.73559C14.5661 4.73559 13.6138 4.4417 12.9457 3.77286C12.684 3.51084 12.5047 3.17239 12.3778 2.86025C12.2488 2.54315 12.1592 2.21564 12.0947 1.94676C12.037 1.71199 11.8317 1.55555 11.609 1.55555H7.97895Z"></path></svg>
                            <p>100% Fatto a mano. Con tanta passione.</p> 
                        </div>

                        <div>
                            <svg class="icon icon-accordion color-foreground-text" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M10 5.2393L8.5149 3.77392C6.79996 2.08174 4.01945 2.08174 2.30451 3.77392C0.589562 5.4661 0.589563 8.2097 2.30451 9.90188L10 17.4952L17.6955 9.90188C19.4104 8.2097 19.4104 5.4661 17.6955 3.77392C15.9805 2.08174 13.2 2.08174 11.4851 3.77392L10 5.2393ZM10.765 3.06343C12.8777 0.978857 16.3029 0.978856 18.4155 3.06343C20.5282 5.148 20.5282 8.52779 18.4155 10.6124L10.72 18.2057C10.3224 18.5981 9.67763 18.5981 9.27996 18.2057L1.58446 10.6124C-0.528154 8.52779 -0.528154 5.14801 1.58446 3.06343C3.69708 0.978859 7.12233 0.978858 9.23495 3.06343L10 3.81832L10.765 3.06343Z" fill-rule="evenodd"></path></svg>
                            <p>Fatto con amore. Reso sempre gratuito.</p>
                        </div>
                    </div>

            </div>
            </div>
            <div>
                <h2 class="margin-correlati">Descrizione</h2>
                <div v-html="$page.product.description"></div>
            </div>


             <div class="container-salmone">
        <div class="container">
          <h2 class="text-center mb-80">
            Perch?? Scegliere un eCommerce basato su tecnologia Jamstack
          </h2>
          <div class="grid-five-column">
            <div>
              <g-image class="img-salmone" src="~/assets/images/icon/analisi.svg" alt="" width="60" />
              <div>
                <h3 class="orange-font">Analisi</h3>
                <p class="grey-font">Attraverso il concetto di microservice ?? possibile ampliare le funzionalit?? dell'eCommerce in maniera illimitata, senza intaccare troppo le prestazioni. Possiamo raccogliere tanti dati ed andare veloci comunque!</p>
              </div>
            </div>

            <div>
              <g-image class="img-salmone" src="~/assets/images/icon/confronto.svg" alt="" width="60" />
              <div>
                <h3 class="orange-font">Prestazioni</h3>
                <p class="grey-font">I nostri eCommerce sono rapidissimi. I tempi di velocit?? di caricamento della pagine rispettano e addiritturano superano i livelli altissimi richiesti da Google.  </p>
              </div>
            </div>

            <div>
              <g-image class="img-salmone" src="~/assets/images/icon/icon-risparmio.svg" alt="" width="60" />
              <div>
                <h3 class="orange-font">Risparmio</h3>
                <p class="grey-font">Il template di base ?? gi?? pronto e sempre aggiornato. Questo significa minori costi per mettere online il tuo eCommerce. Fai una chiacchierata con noi per capire quanto puoi risparmiare.</p>
              </div>
            </div>

            <div>
              <g-image class="img-salmone" src="~/assets/images/icon/sicurezza.svg" alt="" width="60" />
              <div>
                <h3 class="orange-font">Sicurezza</h3>
                <p class="grey-font">Niente ?? pi?? sicuro di un sito statico. Puoi scegliere tra diversi livelli di sicurezza, ma anche nel caso pi?? basico le possibilit?? di attacco sono infinitamente minori rispetto ad un CMS standard.</p>
              </div>
            </div>

            <div>
              <g-image class="img-salmone" src="~/assets/images/icon/affidabili.svg" alt="" width="60" />
              <div>
                <h3 class="orange-font">Affidabilit??</h3>
                <p class="grey-font">Lavoriamo nel mondo web da pi?? di 10 anni. Jamstack ?? una tecnologia relativamente nuova, ma la sappiamo gi?? gestire al meglio. Per ogni problema, noi abbiamo la soluzione. </p>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>



            <h2 class="margin-correlati">Correlati</h2>
            <div class="upsell-grid">
                
                <PostCardProductUpsell :post="edge.node" v-for="(edge, index) in $page.product.related.edges" :key="edge.node.id" v-if="index >= 1" />
            </div>
        </div>

         </div>
    </div>
  </Layout>



</template>


<page-query>

query Product ($slug: ID!) {

  product(idType: SLUG, id: $slug)  {
    slug
    type
    id
    ... on WordPress_SimpleProduct {
        name
        id
        slug
        link
        shortDescription
        shd: shortDescription(format: RAW)
        description
        onSale
        totalSales
        regularPrice
        salePrice
        stockQuantity
        stockStatus
        price(format: RAW)
        seo {
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
            breadcrumbs {
                text
                url
            }
            schema {
                raw
            }
            opengraphImage {
                mediaItemUrl
            }
        }
    }

    productCategories {
        nodes {
            name
            slug
        }
    }
    
    image {
        mediaItemUrl
    }
    galleryImages {
        nodes {
            id
            mediaItemUrl
        }
    }
    
    related(first: 5) {
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
                id
                name
                salePrice
                regularPrice
                uri
            }
            ... on WordPress_VariableProduct {
                    uri
                }
                ... on WordPress_ExternalProduct {
                    uri
                }
                ... on WordPress_GroupProduct {
                    uri
                }
            }
        }
    }


    ... on WordPress_VariableProduct {
        name
        id
        slug
        link
        shortDescription
        shd: shortDescription(format: RAW)
        description
        onSale
        totalSales
        
        salePrice
        stockQuantity
        stockStatus
        price(format: RAW)
        variations {
          nodes {
            id
            name
            price
            salePrice
            regularPrice
            stockQuantity
            link
            description
            image {
              mediaItemUrl
            }
          }
        }
        attributes {
          nodes {
            variation
            name
            id
            options
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
            opengraphDescription
            opengraphImage {
                mediaItemUrl
            }
        }
        variations {
        
            nodes {
                id
                name
                price
                regularPrice
                salePrice
                    
                attributes {
                    nodes {
                        id
                        name
                        value
                    }
                }
            }
        }
    }
    
   
  }
}




</page-query>

<script>

import VueDisqus from 'vue-disqus'
import PostCardProductUpsell from '~/components/PostCardProductUpsell.vue'
import { GraphQLClient } from 'graphql-request';

export default {
  
  data() {
    return {
      selected: 1,
      selectedVariation: 1,
      selected: [{
        1: '',
        2: '',
      }],
      picked: [], 
      isActive: false,
      quantityVal: '',
      VariationQty: '',
      nameVariation: [],
      quantityValVariation: '',
     
      
     
    }
  },
  components: {
      GraphQLClient,
      PostCardProductUpsell,
     
      
      VueDisqus,
    Carousel: () =>
      import("vue-carousel")
        .then((m) => m.Carousel)
        .catch(),
    Slide: () =>
      import("vue-carousel")
        .then((m) => m.Slide)
        .catch(),
  },
  methods: {
    upper(e) {
        e.target.value = e.target.value.toUpperCase()
    },
    getImageUrl(url) {
      // circumvents webpack issue with calling require in html
      const imageFolderContext = require.context("@/assets/ghosts/big", false);
      return imageFolderContext("./" + url);
    },
  },
  async mounted() {
    const slug = this.$page.product.slug; 
    const client = new GraphQLClient('https://andreat143.sg-host.com/graphql');
    const quantityValueObj = await client.request('{ product(idType: SLUG, id:"'+slug+'") { ... on SimpleProduct {stockQuantity} ... on VariableProduct {variations {nodes {stockQuantity name}}} type } }');

    for (let value of Object.values(quantityValueObj)) {
      const typeprod = value['type'];
      if (typeprod == 'VARIABLE') {

        const quantityValVariation = value['variations']['nodes']; 
        this.quantityValVariation = value['variations']['nodes']; 
        /* this.quantityValVariation = value['stockQuantity']; */
          
        /* quantityVal.forEach(function(quantityVal) {
          const VariationQty = quantityVal['stockQuantity'];
          const nameVariation = quantityVal['name'];
          this.nameVariation = quantityVal['name']; 
          this.VariationQty = quantityVal['stockQuantity']; 
        }); */

      } else if (typeprod == 'SIMPLE') {
        this.quantityVal = value['stockQuantity'];
      }
      
    }
    
  },
 

}




</script>

<style lang="scss">
input[type="radio"] {
  margin-left: 0;
}
input[type="radio"]:checked:before {
        content: "";
    display: block;
    position: relative;
    top: 0px;
    left: -1px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: var(--orang-color);
    border: none;
}


  .radio-variation {
    margin-bottom: 7px;
  }

  .hidden {
    opacity: 0;
    width:0;
    margin: 0;
  }
  .label-variation {
    margin: 4px;
    padding: 2px 5px;
    font-size: 15px;
    text-transform: uppercase;
    border: 1.5px solid var(--grey-body-color);
    &:hover {
      cursor: pointer;
      cursor: hand;
    }
  }
.through {
  text-decoration: line-through;
}
.quantity-element {
  display: flex;
  margin-top: 10px;
  p {
    margin-bottom: 0;
    margin-right: 5px;
  }
}

.out-s {
  display: flex;
  align-items: center;
  margin-bottom: 0;
}
.red-dot {
  margin-right: 5px;
  border-radius: 50%;
  background: red;
  width: 7px;
  height: 7px;
  display: block;
}

.in-s {
  display: flex;
  align-items: center;
  margin-bottom: 0;
}
.green-dot {
  margin-right: 5px;
  border-radius: 50%;
  background: greenyellow;
  width: 7px;
  height: 7px;
  display: block;
}

.price-disposition {
  display: flex;
  align-items: baseline;
  .price-regular {
    margin-right: 10px;
  }
}

.rassicurazioni {
    > div {
        display: flex;
        align-items: center;
        margin-top: 10px;
        p {
            margin-bottom: 0;
            margin-left: 10px;
            font-size: 13.5px;
            font-weight: 600;
        }
    }
}

.container-salmone {
    padding: 40px;
    @media screen and (max-width: 768px) {
      padding: 15px;
    }
}

.title {
    margin-top: 5px;
}

.margin-correlati {
margin-top: 60px;
}
.upsell-grid {
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
.breadcrumbs {
    margin-top: 20px;
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
    &:not(:first-child) {
    margin-right: 10px;
    }
  }
}
.product-layout.cta-button {
    font-size: 18px !important;
    margin-left: 0;
}
.carousel-layout {
  height: auto;
  width: 100%;
}
.product-layout.cta-button {
  font-size: 24px;
 
}
.product-layout.paragraph {
  margin: 29px 0 2px 30px;
  width: 343px;
}

.price-regular {

font-size: 25px;
text-decoration: line-through;
margin-bottom: 0;
 @media screen and (max-width: 768px) {
      font-size: 13px;
    }
}
.price-sale {
   font-size: 35px;
font-weight: 700;
margin-bottom: 0;
}
.product-grid {
  grid-template-columns: 50% 50%;
  display: grid;
  grid-column-gap: 20px;
  
  margin-bottom: 50px;

}
.grid-five-column {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  @media screen and (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (max-width: 768px) {
  .VueCarousel-dot-container {
    margin-top: 0 !important;
    .VueCarousel-dot {
      margin-top: 10px !important;
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
  .product-grid {
    grid-template-columns: 100%;
    align-items: center;
    justify-items: center;
    margin: 2% auto;
    width: 100%;
  }
  .product-info-layout {
      width: 100%;
  }
  .carousel-layout {
    height: auto;
    width: 100%;
  }
  .product-layout.paragraph {
    margin: 16px 0 2px 20px;
    width: 70%;
  }
  .product-img-layout {
    height: auto;
    width: 100%;
  }
  .product-img {
    height: auto;
    width: 100%;
  }
  .VueCarousel-wrapper {
      overflow: hidden !important;
  }
  .upsell-grid {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 10px;
    }
  
}
</style>



