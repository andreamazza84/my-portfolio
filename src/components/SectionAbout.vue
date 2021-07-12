<template>
  <section id="about-me">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">{{!lang ? 'SU DI ME' : 'ABOUT ME'}}</h2>
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
        <p class="brackets-extrems" v-if="!lang">Sviluppatore Web con competenze in <br> HTML, SASS, JavaScript, jQuery, Vue, Vuetify, PHP, MySQL e Laravel.</p>  
        <p class="brackets-extrems" v-else>Web Developer using <br> HTML, SASS, JavaScript, jQuery, Vue, Vuetify, PHP, MySQL and Laravel.</p>
        <div class="brackets-wrap" v-if="!lang">
          <p class="brackets">{</p>
          <p class="brackets-long-text">Il mio percorso professionale è iniziato all'interno di ARPA EMR, con il proseguimento del lavoro di tesi
          specialistica per lo sviluppo di un programma per la valutazione dell'impatto ambientale dei sistemi di produzione
          dell'energia elettrica e cogenerativi alimentati a combustibili rinnovabili. Dopo quest'esperienza ho spostato il mio
          interesse dalla meccanica all'energetica. In questa veste ho lavorato per 6 anni presso l'INFN-CNAF occupandomi 
          principalmente del cooling del centro di calcolo TIER 1 come tecnologo, ruolo trasversale che abbraccia sia la 
          ricerca e sviluppo sia l'implementazione sul campo.</p>
          <p class="brackets-long-text">Ho investito in formazione concludendo un Master in Gestione
          dell'Energia per Edifici e Infrastrutture presso il Politecnico di Milano, seguendo corsi di programmazione di BMS presso Schneider Electric e abilitandomi come PES-PAV/PEI.
          Ho lavorato ancora nel settore, prima per TESI Engineering a Trento e più recentemente per AWS a Milano.
          Quest'ultima esperienza mi ha consentito di avvicinarmi maggiormente al mondo digitale e di cogliere l'opportunità
          per un cambio di rotta verso lo sviluppo web.</p> 
          <p class="brackets">}</p>
        </div>
        <div class="brackets-wrap" v-else>
          <p class="brackets">{</p>
          <p class="brackets-long-text">I started my working experience in ARPA (Italian Agency for Environment) where I concluded a project started during
          University, about the development of a software for the assessment of environmental impact of biomass fueled energy plants. Afterwards I moved to INFN 
          (the Italian Institute of Nuclear Physics) where as Technologist I become more specialized in energy efficiency and data centers facilities, mostly 
          about the cooling strategies.</p>
          <p class="brackets-long-text">In order to have an all-around formation in energy aspects I carried out a 
          <ul>
            <li>Master in Energy Management at Politecnico di Milano</li>
            <li>Training Courses on Building Management Systems at Schneider Electric</li>
          </ul>
          Afterwards I worked in collaboration with TESI Engineering in Trento and more recently for AWS in Milan.
          This last experience gave me the opportunity to get more in touch with the web technologies and thus to change my career path. In order to 
          deepen those thematics I ended up with the Boolean Carrers Full Stack Web Developer Course.</p> 
          <p class="brackets">}</p>
        </div>
        <p class="brackets-extrems" v-if="!lang">Boolean Careers on Front-end and Back-end web development.</p>
        <p class="brackets-extrems" v-else>Boolean Careers sullo sviluppo web Front-end e Back-end.</p>
        </div>
      </v-responsive>

      <v-avatar v-for="(icon, index) in icons" :key="index"
        class="code-icon elevation-12 mb-12 mx-5"
        size="90"
      >
        <i :class="icon"></i>
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
</template>
<script>
export default {
  data(){
    return{
      icons: [
        'fab fa-html5',
        'fab fa-css3-alt',
        'fab fa-vuejs',
        'fab fa-js-square',
        'fab fa-sass',
        'fab fa-wordpress',
        //'fab fa-laravel',
        //'fab fa-php'
      ],
    }
  },
  computed:{
    lang: {
      get: function(){
        return this.$store.state.switch;
      },
      set: function(){
        return this.$store.state.switch;
      }
    }
  }
}
</script>