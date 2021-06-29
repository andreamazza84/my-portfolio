<template>
  
    <v-menu
      v-model="drawer"
      absolute
      attach="#app"
      :close-on-content-click="true"
      min-width="100%"
    >
      <v-card
        color="#222222dd"
        rounded="0"
        height="100vh"
        width="100%"
      >
        <v-list>
          <v-list-item class="align-self-right" @click="menuToggle()" width="100%">
            <v-list-item-icon>
              <i class="fas fa-times"></i>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Chiudi</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            @click="$vuetify.goTo(item.slug)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
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
          { title: 'Home', icon: 'mdi-view-dashboard', slug: '#hero'},
          { title: 'About', icon: 'mdi-forum', slug: '#about-me' },
        ],
      }
    },
  }
</script>
<style lang="scss" scoped>
  .close-menu{
    position: absolute;
    right: 30px;
    top: 30px;
    //z-index: 6;
  }
</style>