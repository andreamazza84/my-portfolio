<template>
  <v-sheet
    id="contact"
    dark 
    tag="section" 
    tile
  >
    <div class="py-12"></div>

    <v-container class="form">
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">{{!lang ? 'Contatti' : 'Contacts'}}</h2>
      <v-responsive
        class="mx-auto mb-12"
        width="56"
      >
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-theme-provider dark>
        <BaseContact/>
      </v-theme-provider>
    </v-container>

    <div class="py-12"></div>
  </v-sheet>
</template>
<script>
import BaseContact from '@/components/BaseContact'
export default{
  components: {
    BaseContact
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