<template>
  <div class="slider">
      <v-carousel 
        v-model="model" 
        height="auto"
        :show-arrows="false"
        :progress="false"
      >
        <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item"
        >
        </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
  export default {
    props:{
      items:{
        type: Array,
        required: true
      }
    },
    data () {
      return {
        model: 0,
      }
    },
  }
</script>