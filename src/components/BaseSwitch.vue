<template>
  <v-switch
    v-model="switch1"
    :messages="switch1 ? 'English' : 'Italiano'"
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
    //     switch1: true,
    //   }
    // },
    computed:{
      switch1: {
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