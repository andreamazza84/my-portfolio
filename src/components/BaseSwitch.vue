<template>
  <v-switch
    v-model="lang"
    :messages="lang ? 'English' : 'Italiano'"
    @click="switchToggle()"
    inset
    color="#2B3C4A"
    id="switch"
  >
  </v-switch>
</template>

<script>
  export default {
    // data () {
    //   return {
    //     lang: true,
    //   }
    // },
    computed:{
      lang: {
        get: function(){
          return this.$store.state.switch;
        },
        set: function(){
          return this.$store.state.switch;
        }
      }
    },
    methods: {
      switchToggle(){
        return this.$store.dispatch('switchToggle');
      }
    },
  }
</script>

<style lang="scss" scoped>
  #switch{
    margin-left: 15px;
    margin-right: 15px;
  }
</style>