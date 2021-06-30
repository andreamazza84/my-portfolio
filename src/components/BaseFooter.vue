<template>
  <v-footer id="footer" class="justify-center" min-height="100" padless>
    <v-container>
      <div id="contacts" class="title font-weight-light text-center">
        <ul class="contacts-list">
          <li>
            <div 
              class="contact-button" 
              v-clipboard="contact.email" 
            >
              <v-btn
                dark
                :loading="loading"
                :disabled="loading"
                @click="loader = 'loading'"
              >
              
                <i class="far fa-envelope"></i> | andrea.mazza84@gmail.com
                <template v-slot:loader>
                  <span>Copiato!</span>
                </template>
              </v-btn>
            </div>
          </li>
          <li>
            <div 
              class="contact-button" 
              v-clipboard="contact.phone" 
            >
              <v-btn
                dark
                :loading="loading2"
                :disabled="loading2"
                @click="loader = 'loading2'"
              >
              
                <i class="fas fa-phone"></i> | +39 329 86 29 509
                <template v-slot:loader>
                  <span>Copiato!</span>
                </template>
              </v-btn>
            </div>
          </li>
          <li>
            <div class="social">
              <v-btn fab dark href="https://www.linkedin.com/in/anmazza/" target="_blank"><i class="fab fa-linkedin"></i></v-btn>  
              <v-btn fab dark href="https://github.com/andreamazza84/" target="_blank"><i class="fab fa-github"></i></v-btn>
            </div>
          </li>
          <li><v-btn class="arrow-up" fab dark @click="$vuetify.goTo('#hero')"><i class="fas fa-chevron-up"></i></v-btn></li>
        </ul>
      </div>
    </v-container>
    <div class="copy">&copy; Copyright {{ (new Date()).getFullYear() }} - Andrea Mazza</div>
  </v-footer> 
</template>
<script>
export default {
  data () { 
    return {
      loader: null,
      loading: false,
      loading2: false,
      contact:{
        email: 'andrea.mazza84@gmail.com',
        phone: '+393298629509'
      }
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]
      setTimeout(() => (this[l] = false), 3000)
      this.loader = null
    },
  },
}
</script>