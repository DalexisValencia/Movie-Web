<template>
  <v-app>
    <toolbar style="border:1px solid red"/>
    <v-main>
      <HelloWorld v-if="false"/>
      <banners />
      <v-container>      
        <v-card>
          <v-tabs
            v-model="tab"
            background-color="deep-purple accent-4"
            center-active
            dark
          >
            <v-tab v-for="(item, index) in Array(20)" :key="index">{{index}}</v-tab>
          </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item
                v-for="item in Array(20)"
                :key="item"
              >
                <v-row>
                  <v-col cols="6" sm="6" md="3" lg="3" xl="3" v-for="item in Array(20)" :key="item">
                   <productCard />
                  </v-col>
                </v-row>
              </v-tab-item>
            </v-tabs-items>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import toolbar from './components/Header/Toolbar.vue';
import HelloWorld from './components/HelloWorld';
// import Home from './views/Home.vue';
import banners from './components/Banners.vue';
import productCard from './components/productCard.vue';
export default {
  name: 'App',

  components: {
    HelloWorld,
    toolbar,
    productCard,
    banners
  },

  data: () => ({
    tab: null,
  }),
};
</script>
