<template>
  <v-app>
    <!-- NAVBAR-->
    <BaseNavbar/>
    <v-main>
      <section id="hero">
        <v-row no-gutters>
          <v-img
            :height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            src="@/assets/img/jumbo.jpg"
          >
            <v-theme-provider dark>
              <v-container fill-height>
                <v-row
                  align="center"
                  class="white--text mx-auto"
                  justify="center"
                >
                  <v-col
                    class="white--text text-center"
                    cols="12"
                    tag="h1"
                  >
                    <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                      class="font-weight-light"
                    >
                    ANDREA MAZZA  
                    </span>

                    <br>

                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                      class="font-weight-black"
                    >
                      Web Devoloper
                    </span>

                  </v-col>

                  <v-btn
                    class="align-self-end"
                    fab
                    outlined
                    @click="$vuetify.goTo('#about-me')"
                  >
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn>
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-img>
        </v-row>
      </section>

      <section id="about-me">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">SU DI ME</h2>

          <v-responsive
            class="mx-auto mb-8"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-responsive
            class="mx-auto title font-weight-light mb-8"
            max-width="1140"
          >
            <div class="biografy">
            <p class="brackets-extrems">Sviluppatore Web con competenze in <br> HTML, SASS, JavaScript, jQuery, Vue, Vuetify, PHP, MySQL e Laravel.</p>

            <div class="brackets-wrap">
              <p class="brackets">{</p>
              <p class="brackets-long-text">Il mio percorso professionale è iniziato all'interno di ARPA EMR, con il proseguimento del lavoro di tesi
              specialistica per lo sviluppo di un programma per la valutazione dell'impatto ambientale dei sistemi di produzione
              dell'energia elettrica e cogenerativi alimentati a combustibili rinnovabili. Dopo quest'esperienza ho spostato il mio
              interesse dalla meccanica all'energetica. In questa veste ho lavorato per 6 anni presso l'INFN-CNAF occupandomi 
              principalmente del cooling del centro di calcolo TIER 1 come tecnologo, ruolo trasversale che abbraccia sia la 
              ricerca e sviluppo sia l'implementazione sul campo.</p>
              <p class="brackets-long-text">Ho investito in formazione concludendo un Master in Gestione
              dell'Energia per Edifici e Infrastrutture, seguendo corsi di programmazione di BMS presso Schneider Electric e abilitandomi come PES-PAV/PEI.
              Ho lavorato ancora nel settore, prima per TESI Engineering a Trento e, più recentemente, per AWS a Milano.
              Quest'ultima esperienza mi ha consentito di avvicinarmi maggiormente al mondo digitale e di cogliere l'opportunità
              per un cambio di rotta verso lo sviluppo web.</p> 
              <p class="brackets">}</p>
            </div>
            <p class="brackets-extrems">Boolean Careers sullo sviluppo Front-end e Back-end di siti web.</p>
            </div>
          </v-responsive>

          <v-avatar
            class="code-icon elevation-12 mb-12 mx-5"
            size="90"
          >
            <i class="fab fa-html5"></i>
          </v-avatar>

          <v-avatar
            class="code-icon elevation-12 mb-12 mx-5"
            size="90"
          >
            <i class="fab fa-css3-alt"></i>
          </v-avatar>

          <v-avatar
            class="code-icon elevation-12 mb-12 mx-5"
            size="90"
          >
            <i class="fab fa-vuejs"></i>
          </v-avatar>

          <v-avatar
            class="code-icon elevation-12 mb-12 mx-5"
            size="90"
          >
            <i class="fab fa-js-square"></i>
          </v-avatar>


          <v-avatar
            class="code-icon elevation-12 mb-12 mx-5"
            size="90"
          >
            <i class="fab fa-sass"></i>
          </v-avatar>
          
          <v-avatar
            class="code-icon elevation-12 mb-12 mx-5"
            size="90"
          >
            <i class="fab fa-wordpress"></i>
          </v-avatar>

          <v-avatar
            class="code-icon elevation-12 mb-12 mx-5"
            size="90"
          >
            <i class="fab fa-laravel"></i>
          </v-avatar>

          <v-avatar
            class="code-icon elevation-12 mb-12 mx-5"
            size="90"
          >
            <i class="fab fa-php"></i>
          </v-avatar>
          <div></div>

          <v-row>
            <v-col class="mt-100">
              <v-btn
                class="align-self-end"
                fab
                outlined
                @click="$vuetify.goTo('#portfolio')"
              >
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

        <div class="py-12"></div>
      </section>

      <section id="portfolio">
        <div class="py-12"></div>

        <v-container>
          <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Portfolio</h2>
          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          
          </v-responsive>
          <v-responsive
            class="mx-auto title font-weight-light mb-8 align-center"
            max-width="1140"
          >
            <p>Alcuni dei lavori sviluppati durante il Corso Boolean Careers 2020/21</p>
          </v-responsive>

          <v-row>
            <v-col
              v-for="({ src, src_h, text, title }, i) in articles"
              :key="i"
              cols="12"
              md="4"
            >
              <v-img
                :src="(i === counter)? src_h : src"
                class="project mb-4"
                max-width="489"
                max-height="275"
                v-on:mouseover="hover(i)"
                v-on:mouseleave="blur()" 
                aspect-ratio="1.7778"
                cover
              >
              </v-img>

              <h3
                class="font-weight-black mb-4 text-uppercase"
                v-text="title"
              ></h3>

              <!-- <div
                class="title font-weight-light mb-5"
                v-text="text"
              ></div>

              <v-btn
                class="ml-n4 font-weight-black"
                text
              >
                Continue Reading
              </v-btn>
              -->
            </v-col>
          </v-row>

          <v-row>
            <v-col class="mt-100">
              <v-btn
                class="align-self-end"
                fab
                outlined
                @click="$vuetify.goTo('#contact')"
              >
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

        <div class="py-12"></div>
      
      </section>

      <section id="stats">
        <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 700 : 600"
          src="@/assets/img/nebbia.jpg"
        >
        <!--
          <v-container fill-height>
            <v-row class="mx-auto">
              <v-col
                v-for="[value, title] of stats"
                :key="title"
                cols="12"
                md="3"
              >
                <div class="text-center">
                  <div
                    class="display-3 font-weight-black mb-4"
                    v-text="value"
                  ></div>

                  <div
                    class="title font-weight-regular text-uppercase"
                    v-text="title"
                  ></div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        -->
        </v-parallax>
      </section>

      <v-sheet id="contact" dark tag="section" tile>
        <div class="py-12"></div>

        <v-container>
          <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Contatti</h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-theme-provider light>
            <BaseContact/>
          </v-theme-provider>
        </v-container>

        <div class="py-12"></div>
      </v-sheet>

    </v-main>

    <v-footer
      id="footer"
      class="justify-center"
      min-height="100"
    >
      <div id="contacts" class="title font-weight-light text-center">
        <ul class="contacts-list">
          <li><i class="far fa-envelope"></i>andrea.mazza84@gmail.com</li>
          <li><i class="fas fa-phone"></i>+39 329 86 29 509 </li>
          <li>&copy; Copyright {{ (new Date()).getFullYear() }} - Andrea Mazza</li>
        </ul>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import BaseNavbar from '@/components/BaseNavbar'
import BaseContact from '@/components/BaseContact'
export default {
  name: 'App',
  components: {
    BaseNavbar,
    BaseContact,
  },
  data (){ 
    return {
    counter: -1,
    src_img: '',
    articles: [
      
          {
            src: '/img-boolean/Boolflix.png',
            src_h: '/img-boolean/Boolflix-h.png',
            title: 'Boolflix',
            //text: 'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
          },
          {
            src: '/img-boolean/boolzapp.png',
            src_h: '/img-boolean/boolzapp-h.png',
            title: 'Boolzapp',
            //text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
          },
          {
            src: '/img-boolean/hubspot.png',
            src_h: '/img-boolean/hubspot-h.png',
            title: 'HubSpot',
            //text: 'Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.',
          },
          {
            src: '/img-boolean/spotify.png',
            src_h: '/img-boolean/spotify-h.png',
            title: 'Spotify',
            //text: 'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
          },
          {
            src: '/img-boolean/helbiz.png',
            src_h: '/img-boolean/helbiz-h.png',
            title: 'Helbiz',
            //text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
          },
          {
            src: '/img-boolean/digitalOcean.png',
            src_h: '/img-boolean/digitalOcean-h.png',
            title: 'DigitalOcean',
            //text: 'Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.',
          },
        ],
        features: [
          {
            icon: 'mdi-account-group-outline',
            title: 'Vibrant Community',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
          },
          {
            icon: 'mdi-update',
            title: 'Frequent Updates',
            text: 'Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit.',
          },
          {
            icon: 'mdi-shield-outline',
            title: 'Long-term Support',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
          },
        ],
        stats: [
          ['24k', 'Github Stars'],
          ['330+', 'Releases'],
          ['1m', 'Downloads/mo'],
          ['5m', 'Total Downloads'],
        ],
        colors: {
          background:{
            primary: '#c4d2ddee',
            complementary: '#ddcfc4ee',
            triadic: '#d2ddc4ee',
            dark: '#171718'
          },
          font:{
            clear: '#fdfdfd',
            dark: '#171718'
          }
        }
      }
    },
    methods:{
      hover: function(i){
        this.counter = i;
        console.log(i);
      },
      blur: function(){
        this.counter = -1;
      }
    }
  }

</script>
<style lang="scss">
@import 'scss/App.scss'; 

//Background 
$b-primary: '#ff0000';//'#c4d2ddee';
$b-complementary: '#ddcfc4ee';
$b-triadic-1: '#d2ddc4ee';
$b-triadic-2: '#ddc4d2ee';
$b-semidark: '#333';
$b-dark: '#171718';
$b-footer: '#000';

//Text
$f-clear: '#fdfdfd';
$f-dark: '#171718';
$f-semidark: '#333';
</style>
