<template>
  <v-container :fluid="true" class="pa-0">
    <banners />
    <categories :moviesData="moviesData"/>
    <!-- <router-link to="/details">A los detalles</router-link> -->
  </v-container>
</template>

<script>
import banners from '@/components/Banners.vue';
import categories from '@/components/categories.vue';

export default {
  name: 'Home',
  components: {
    banners,
    categories
  },
  data: () => ({
    moviesData: [],
  })
}
  </script>

  <style lang="scss">

  </style>
