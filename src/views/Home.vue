<template>
  <v-main>
    <SectionHero/>
    <SectionAbout/>  
    <SectionPortfolio/>
    <SectionStats/>
    <SectionContacts/>
  </v-main>
</template>
<script>

import SectionHero from '@/components/SectionHero'
import SectionAbout from '@/components/SectionAbout'
import SectionPortfolio from '@/components/SectionPortfolio'
import SectionStats from '@/components/SectionStats'
import SectionContacts from '@/components/SectionContacts'

export default {
  components: {
    SectionHero,
    SectionAbout,
    SectionPortfolio,
    SectionStats,
    SectionContacts,
  },
  data (){ 
    return {
    counter: -1,
    src_img: '',
    loader: null,
    loading: false,
    loading2: false,
    contact:{
      email: 'andrea.mazza84@gmail.com',
      phone: '+393298629509'
    },
    colors: {
      $b_primary: '#c4d2ddee',
      $b_complementary: '#ddcfc4ee',
      $b_triadic_1: '#d2ddc4ee',
      $b_triadic_2: '#ddc4d2ee',
      $b_mild: '#2B3C4A',
      $b_dark: '#1e1e1e',
      $b_footer: '#000',

      //Text
      $f_clear: '#fdfdfd',
      $f_dark: '#1e1e1e',
      $f_mild: '#2B3C4A',
      $f_semidark: '#333',
    }
  }
},
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]
      setTimeout(() => (this[l] = false), 3000)
      this.loader = null
    },
  },
  methods:{
    hover: function(i){
      this.counter = i;
      console.log(i);
    },
    blur: function(){
      this.counter = -1;
    },
  }
}

</script>
