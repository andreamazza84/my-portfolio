<template>
  <div>
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

      <v-toolbar-title class="font-weight-black headline">
        PORTFOLIO
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-btn plain @click="$vuetify.goTo('#about-me')">about</v-btn>
        <v-btn plain @click="$vuetify.goTo('#portfolio')">portfolio</v-btn>
        <v-btn plain @click="$vuetify.goTo('#contact')">contatti</v-btn>
      <v-btn
        fab
        plain
        @click="$vuetify.goTo('#hero')"
      >
        <v-icon>mdi-chevron-double-up</v-icon>
      </v-btn>
      <!-- Script required-->
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- Script required-->
    </v-app-bar>
    <baseHamburger :drawer="drawer"/> 
  </div>
</template>

<script>
import BaseHamburger from '@/components/BaseHamburger.vue'
  export default {
    components:{
      BaseHamburger
    },
    data: () => ({
      drawer: false,
      group: null,
    }),
  }
</script>