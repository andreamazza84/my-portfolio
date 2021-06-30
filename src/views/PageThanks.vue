<template>
  <v-main>
    <SectionNavbar2/>
    <section id="thanks">
      <v-row no-gutters>
        <v-img
          :height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
          src="@/assets/img/pesaro.jpg"
        >
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row
                align="center"
                class="black--text mx-auto"
                justify="center"
              >
                <v-col
                  class="black--text text-center"
                  cols="12"
                  tag="h1"
                >
                  <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                    class="font-weight-light"
                  >
                  Torna alla pagina principale  
                  </span>

                  <br>

                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                    class="font-weight-light"
                  >
                    Il tuo messaggio è stato inviato
                  </span>

                </v-col>

                <v-btn
                  class="align-self-end"
                  fab
                  outlined
                  color="#1e1e1e"
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