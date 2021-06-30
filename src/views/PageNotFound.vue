<template>
  <v-main>
    <SectionNavbar2/>
    <section id="thanks">
      <v-row no-gutters>
        <v-img
          :height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
          src="@/assets/img/porto_rosso.jpg"
        >
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row
                align="center"
                class="white--text mx-auto"
                justify="center"
              >
                <v-col
                  class="white--text text-center"
                  cols="12"
                  tag="h1"
                >
                  <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                    class="font-weight-light"
                  >
                  Error 404  
                  </span>

                  <br>

                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                    class="font-weight-light"
                  >
                  La pagina che stai cercando non esiste
                  </span>

                </v-col>

                <v-btn
                  class="align-self-end"
                  fab
                  outlined
                  @click="$router.push({name: 'Home'})"
                >
                  <v-icon dark>mdi-chevron-double-left</v-icon>
                </v-btn>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>
      </v-row>
    </section>
  </v-main>  
</template>
<script>
import SectionNavbar2 from '@/components/SectionNavbar2'
import SectionHero from '@/components/SectionHero'
export default {
  components: {
    SectionHero,
    SectionNavbar2
  }
}
</script>