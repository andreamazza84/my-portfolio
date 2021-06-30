<template>
  <v-main>
    <SectionNavbar/>
    <SectionHero/>
    <SectionAbout/>  
    <SectionPortfolio/>
    <SectionStats/>
    <SectionContacts/>
  </v-main>
</template>
<script>
import SectionNavbar from '@/components/SectionNavbar'
import SectionHero from '@/components/SectionHero'
import SectionAbout from '@/components/SectionAbout'
import SectionPortfolio from '@/components/SectionPortfolio'
import SectionStats from '@/components/SectionStats'
import SectionContacts from '@/components/SectionContacts'

export default {
  components: {
    SectionNavbar,
    SectionHero,
    SectionAbout,
    SectionPortfolio,
    SectionStats,
    SectionContacts,
  },
  data (){ 
    return {
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
  }
}

</script>
