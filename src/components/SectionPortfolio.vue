<template>
  <section id="portfolio">
    <div class="py-12"></div>

    <v-container class="text-center">
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
        <p class="subtitle">Alcuni dei lavori sviluppati durante il Corso 
          <a href="https://www.credential.net/embed/f4a7bd32-021a-4d45-a2f7-5bbc22e787b3" target="_blank">Boolean Careers</a>
        2020/21</p>
        <!--  <iframe
            src="https://www.credential.net/embed/f4a7bd32-021a-4d45-a2f7-5bbc22e787b3"
            width="800"
            height="600"
            frameborder="0"
            allowfullscreen>
        </iframe> -->
      </v-responsive>

      <v-row>
        <v-col
          v-for="({ src, src_h, text, title, ex_url }, i) in articles"
          :key="i"
          cols="12"
          md="4"
        >
      
        <BaseCarousel :items="src"/>

          <h3
            class="font-weight-black mt-6 text-uppercase"
            v-text="title"
          >
          </h3>

          <!-- <div
            class="title font-weight-light mb-5"
            v-text="text"
          ></div>
          -->
          <v-btn
            fab
            class="mb-4 font-weight-black"
            :color="colors.$f_clear"
            text
            :href="ex_url"
            target="_blank"
          >
            <i class="fas fa-external-link-alt"></i>
          </v-btn>
          
        </v-col>
      </v-row>

      <v-row>
        <v-col class="mt-100">
          <v-btn
            class="align-self-end justify-center"
            fab
            outlined
            :color="colors.$f_clear"
            @click="$vuetify.goTo('#contact')"
          >
            <v-icon>mdi-chevron-double-down</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <div class="py-12"></div>
  
  </section> 
</template>
<script>
import BaseCarousel from '@/components/BaseCarousel'
export default {
  components:{
    BaseCarousel
  },
  data(){
    return{
      articles: [
        {
          src: [
            './img-boolean/Boolflix.png',
            './img-boolean/Boolflix-h.png'
          ],
          title: 'Boolflix',
          ex_url:'https://andreamazza84.github.io/boolflix/',
          //text: 'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
        },
        {
          src: [
            './img-boolean/boolzapp.png',
            './img-boolean/boolzapp-h.png',
          ],
          title: 'Boolzapp',
          ex_url:'https://andreamazza84.github.io/vue-boolzapp/',
          //text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
        },
        {
          src: [
            './img-boolean/hubspot.png',
            './img-boolean/hubspot-h.png',
          ],
          title: 'HubSpot',
          ex_url:'https://andreamazza84.github.io/htmlcss-hubspot/',
          //text: 'Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.',
        },
        {
          src: [ 
          './img-boolean/spotify.png',
          './img-boolean/spotify-h.png',
          ],
          title: 'Spotify',
          ex_url:'https://andreamazza84.github.io/html-css-spotifyweb/',
          //text: 'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
        },
        {
          src: [
            './img-boolean/helbiz.png',
            './img-boolean/helbiz-h.png',
          ],
          title: 'Helbiz',
          ex_url:'https://andreamazza84.github.io/html-css-helbiz/',
          //text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
        },
        {
          src: [ 
          './img-boolean/digitalOcean.png',
          './img-boolean/digitalOcean-h.png',
          ],
          title: 'DigitalOcean',
          ex_url:'https://andreamazza84.github.io/html-css-digitalocean/',
          //text: 'Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.',
        },
      ],
      icons: [
        'fab fa-html5',
        'fab fa-css3-alt',
        'fab fa-vuejs',
        'fab fa-js-square',
        'fab fa-sass',
        'fab fa-wordpress',
        'fab fa-laravel',
        'fab fa-php'
      ],
      colors: {
        $b_primary: '#c4d2ddee',
        $b_complementary: '#ddcfc4ee',
        $b_triadic_1: '#d2ddc4ee',
        $b_triadic_2: '#ddc4d2ee',
        $b_mild: '#2B3C4A',
        $b_dark: '#1e1e1e',
        $b_footer: '#000',

        //Text
        $f_clear: '#fdfdfd',
        $f_dark: '#1e1e1e',
        $f_mild: '#2B3C4A',
        $f_semidark: '#333',
      }
    }
  }
}

</script>