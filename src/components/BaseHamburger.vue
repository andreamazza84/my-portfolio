<template>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      width="100%"
      height="100%"
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-icon class="close-menu"
        fab
        @click="menuToggle()"
      >
      X
      </v-icon>
    </v-navigation-drawer>
</template>

<script>
  export default {
    computed:{
      drawer: { 
        get: function(){
          let drawer = false;
          return drawer = this.$store.state.drawer;
        },
        set: function(){
          let drawer = false;
          return drawer = this.$store.state.drawer;
        },
      },
    },
    methods:{
      menuToggle: function(){
        const result = this.$store.dispatch('menuToggle');
      },

    },
    data (){
      return{
        items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
        ],
      }
    },
  }
</script>
<style lang="scss" scoped>
  .close-menu{
    position: absolute;
    left: 30px;
    top: 30px;
    //z-index: 6;
  }
</style>