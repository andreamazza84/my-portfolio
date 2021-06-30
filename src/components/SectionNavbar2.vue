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
          class="logo"
          contain
          max-height="100%"
          src="@/assets/img/logo.png"
          @click="$router.push({name: 'Home'})"
          alt="logo"
        ></v-img>
      </v-avatar>

      <!-- <v-toolbar-title class="font-weight-black headline">
        PORTFOLIO
      </v-toolbar-title> -->
      <v-spacer></v-spacer>
        <router-link :to="{ name: 'PageThanks'}">Prova</router-link>
        <v-app-bar-nav-icon x-large @click="$router.push({name: 'Home'})"><v-icon>mdi-chevron-double-left</v-icon></v-app-bar-nav-icon>
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

<style lang="scss" scoped>
  .logo{
    cursor: pointer;
  }
</style>