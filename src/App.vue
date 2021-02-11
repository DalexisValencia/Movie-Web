<template>
  <v-app>
    <toolbar/>
    <v-main>
      <router-view class="view one"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import toolbar from './components/Toolbar.vue';

export default {
  name: 'App',

  components: {
    toolbar
  },

  data: () => ({
  }),
};
</script>
