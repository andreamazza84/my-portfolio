<template>
  <div id="Header">
    <v-app-bar 
      id="navbar" 
      app 
      height="100" 
      elevate-on-scroll
    >

      <v-avatar
        class="mr-3"
        color="grey lighten-5"
        size="70"
      >
        <v-img
          contain
          max-height="100%"
          src="@/assets/img/logo.png"
        ></v-img>
      </v-avatar>

      <!-- <v-toolbar-title class="font-weight-black headline">
        PORTFOLIO
      </v-toolbar-title> -->
      <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click="$vuetify.goTo('#hero')"><v-icon>mdi-chevron-double-up</v-icon></v-app-bar-nav-icon>
        <v-btn plain class="d-none d-sm-inline-flex" @click="$vuetify.goTo('#about-me')">about</v-btn>
        <v-btn plain class="d-none d-sm-inline-flex" @click="$vuetify.goTo('#portfolio')">portfolio</v-btn>
        <v-btn plain class="d-none d-sm-inline-flex" @click="$vuetify.goTo('#contact')">contatti</v-btn>
        <v-app-bar-nav-icon class="d-flex d-sm-none" @click="menuToggle()"></v-app-bar-nav-icon>
    </v-app-bar>
    <baseHamburger/> 
  </div>
</template>

<script>
import BaseHamburger from '@/components/BaseHamburger.vue'
  export default {
    components:{
      BaseHamburger
    },
    methods:{
      menuToggle: function(){
        const result = this.$store.dispatch('menuToggle');
      },
    },
    data: () => ({
      drawer: false,
      group: null,
    }),
  }
</script>

