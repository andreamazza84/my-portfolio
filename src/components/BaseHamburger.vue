<template>
  <v-card
    class="mx-auto"
    height="100vh"
    width="100vw"
  >
    <v-navigation-drawer
      v-model="drawer"
      absolute
      dark
      color="#222222AA"
      
      width="100%"
      temporary
      right
    >
      <v-list>
        <v-list-item
          v-for="([icon, text], i) in items"
          :key="i"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    props: {
      drawer: {
        type: Boolean,
        required: true
      },
    },
    data: () => ({
      items: [
        ['mdi-email', 'Inbox'],
        ['mdi-account-supervisor-circle', 'Supervisors'],
        ['mdi-clock-start', 'Clock-in'],
      ],
    }),
  }
</script>