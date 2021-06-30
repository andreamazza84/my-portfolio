<template>
  <v-app>
    <!-- HEADER + MAIN-->
    <router-view/>
    <!-- FOOTER-->
    <BaseFooter/>
  </v-app>
</template>

<script>
import BaseFooter from '@/components/BaseFooter'

export default {
  name: 'App',
  components: {
    BaseFooter
  },
}

</script>
<style lang="scss">
@import './scss/App.scss';
</style>
