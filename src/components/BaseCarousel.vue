<template>
  <div class="slider">
      <v-carousel 
        v-model="model" 
        height="auto"
        :show-arrows="false"
        :progress="false"
        :touch="{left: () => model++, right: () => model--}"
      >
        <v-carousel-item
        class="borderRadious"
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
<style lang="scss" scoped>
.borderRadious{
  border-radius: 5px !important;
}
</style>