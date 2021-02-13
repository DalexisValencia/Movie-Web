<template>
  <v-app>
    <toolbar/>
    <v-main :class="{
      'in-details': this.$route.path.indexOf('/details') != -1
    }">
      <router-view class="view one"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import toolbar from '@/components/Toolbar.vue';

export default {
  name: 'App',

  components: {
    toolbar
  },

  data: () => ({
  }),
};
</script>
