<template>
  <div id="Header">
    <v-app-bar 
      id="navbar" 
      app 
      height="80" 
      elevate-on-scroll   
    >

      <v-avatar
        class="mr-3"
        color="grey lighten-5"
        size="70"
      >
        <v-img
          class="logo"
          contain
          max-height="100%"
          src="@/assets/img/logo.png"
          @click="$vuetify.goTo('#hero')"
          alt="logo"
        ></v-img>
      </v-avatar>

      <!-- <v-toolbar-title class="font-weight-black headline">
        PORTFOLIO
      </v-toolbar-title> -->
      <v-spacer></v-spacer>
        <!-- <router-link :to="{ name: 'PageThanks'}">Prova</router-link> -->
        <v-app-bar-nav-icon x-large @click="$vuetify.goTo('#hero')"><v-icon>mdi-chevron-double-up</v-icon></v-app-bar-nav-icon>
        <v-btn x-large plain class="d-none d-sm-inline-flex" @click="$vuetify.goTo('#about-me')">{{!lang ? 'SU-DI-ME' : 'ABOUT'}}</v-btn>
        <v-btn x-large plain class="d-none d-sm-inline-flex" @click="$vuetify.goTo('#portfolio')">portfolio</v-btn>
        <v-btn x-large plain class="d-none d-sm-inline-flex" @click="$vuetify.goTo('#contact')">{{!lang ? 'CONTATTI' : 'CONTACTS'}}</v-btn>
        <BaseSwitch/>
        <v-app-bar-nav-icon x-large class="d-flex d-sm-none" @click="menuToggle()"></v-app-bar-nav-icon>
    </v-app-bar>
    <baseHamburger/> 
  </div>
</template>

<script>
import BaseHamburger from '@/components/BaseHamburger.vue'
import BaseSwitch from '@/components/BaseSwitch.vue'
  export default {
    components:{
      BaseHamburger,
      BaseSwitch
    },
    data: () => ({
      drawer: false,
      group: null,
    }),
    computed:{
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
      menuToggle: function(){
        const result = this.$store.dispatch('menuToggle');
      },
    },
  }
</script>

<style lang="scss" scoped>
  .logo{
    cursor: pointer;
  }
   div.v-input__control{
    align-items: center;
  }
</style>