<template>
  <v-app>
    <!-- NAVBAR-->
    <BaseNavbar/>
    <!-- MAIN-->
    <router-view id="main"/>
    <!-- FOOTER-->
    <BaseFooter/>
  </v-app>
</template>

<script>
import BaseNavbar from '@/components/BaseNavbar'
import BaseFooter from '@/components/BaseFooter'

export default {
  name: 'App',
  components: {
    BaseNavbar,
    BaseFooter
  },
}

</script>
<style lang="scss">
@import './scss/App.scss';
</style>
