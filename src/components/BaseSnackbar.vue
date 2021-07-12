<template>
  <v-snackbar
    v-model="snackbar"
    elevation="10"
  >
    {{ !lang ? 'Grazie per il tuo messaggio' : 'Thank you. Your message has been sent' }}
     <template v-slot:action="{ attrs }">
      <v-btn
        light
        x-large
        color="green"
        text
        v-bind="attrs"
        @click="snackToggle()"
      >
        {{!lang ? 'Chiudi' : 'Close'}}
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
  export default {
    props:{},
    
    computed:{
      snackbar:{
        get: function() {
          return this.$store.state.snackbar; 
        },
        set: function() {
          return this.$store.state.snackbar; 
        }
      },
      lang: {
        get: function(){
          return this.$store.state.switch;
        },
        set: function(){
          return this.$store.state.switch;
        }
      },
    },
    methods:{
      snackToggle(){
        this.$store.dispatch('snackToggle');  
      }
    },
  }
</script>