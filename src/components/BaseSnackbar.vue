<template>
  <v-snackbar
    v-model="snackbar"
    elevation="10"
  >
    {{ text }}
     <template v-slot:action="{ attrs }">
      <v-btn
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
    data: () => ({
      text: `Ciao ${name}! Grazie per il tuo messaggio`,
    }),
    computed:{
      snackbar:{
        get: function() {
          return this.$store.state.snackbar; 
        },
        set: function() {
          return this.$store.state.snackbar; 
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