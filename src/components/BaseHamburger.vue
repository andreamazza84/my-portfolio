<template>
  <div class="drawer text-center">
    <v-dialog
      v-model="drawer"
      attach="#app"
      :close-on-content-click="true"
      fullscreen
      hide-overlay
      dark      
      transition="fade-transition"
      color="transparent"
    >
      <v-card
        width="100%"
        height="100%"
        rounded="0"
        color="transparent"
      >
        <v-list
          width="100%"
          height="100%"
          color="#000000cc"
          class="justify-center pt-15"
        >
          <v-btn
            absolute
            top
            right
            fab 
            @click="menuToggle()" 
            class="fa-times-btn"
          >
            <i class="fas fa-times"></i>
          </v-btn>
          <v-list-item
            class="list-item"
            v-for="item in items"
            :key="item.title"
            link
            @click="$vuetify.goTo(item.slug), menuToggle()"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </div> 
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
          { title: 'Portfolio', icon: 'mdi-forum', slug: '#portfolio' },
          { title: 'Contatti', icon: 'mdi-forum', slug: '#contact' },
        ],
      }
    },
  }
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500&display=swap');
.v-dialog__content{
  font-family: 'Roboto Slab', serif !important;
}
.v-list-item{
  font-size: 2rem;
  width: max-content;
  min-width: max-content;
  padding: inherit 1rem;
  margin: auto;
  text-align: center;
  .v-list-item__title{
    font-size: 2rem;
  }
  i{
    text-align: right;
  }
}
.fa-times-btn{
  top: 1rem !important;
  right: 1rem !important; 
  font-size: 1.5rem !important;
}
</style>