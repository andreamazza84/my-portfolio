<template>
  <v-snackbar
    v-model="snackbar"
    elevation="10"
  >
    {{ `Ciao ${username}! Grazie per il tuo messaggio` }}
     <template v-slot:action="{ attrs }">
      <v-btn
        light
        x-large
        color="green"
        text
        v-bind="attrs"
        @click="snackToggle()"
      >
        Chiudi
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
  export default {
    props:{
      name:{
        type: String,
        required: true,
      }
    },
    computed:{
      snackbar:{
        get: function() {
          return this.$store.state.snackbar; 
        },
        set: function() {
          return this.$store.state.snackbar; 
        }
      },
      username:{
        get: function(){
          return name
        },
        set: function(){
          return name
        }  
      }
    },
    methods:{
      snackToggle(){
        this.$store.dispatch('snackToggle');  
      }
    },
  }
</script>