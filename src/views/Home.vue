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
    @mixin arrows-tabs () {
      .v-slide-group__prev.v-slide-group__prev--disabled{
       display: none !important;
      }
    }
    .v-tabs.category-tabs {
      .v-item-group{
        background-color: transparent !important;
          @include arrows-tabs();
        .v-slide-group__wrapper{
          .v-slide-group__content.v-tabs-bar__content{
            .v-tab{
              color: #000;
              padding:0px 10px;
              min-width: auto;
              width: auto;
              text-transform: capitalize;
              font-size: 13px;
              &.v-tab--active{
                
              }
            }
          }
        }
      }
    }
  </style>
