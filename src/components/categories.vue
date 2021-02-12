<template>
    <v-container class="px-2">
        <v-tabs class="movie-app__category-tabs" v-model="tab" center-active @click="getByCategory()">
            <v-tab v-for="(item, index) in tabsOpt" :key="index">
              {{item.name}}
            </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab" class="mt-4" v-if="!loading">
            <v-tab-item v-for="(item, index) in tabsOpt" :key="index">
                <v-row>
                    <v-col cols="6" sm="6" md="3" lg="3" xl="3" v-for="(movie, index) in moviesData" :key="index">
                        <productCard :movie="movie"/>
                    </v-col>
                </v-row>
            </v-tab-item>
        </v-tabs-items>
        <v-progress-circular
            v-if="loading"
            indeterminate
            color="purple"
        ></v-progress-circular>
    </v-container>
</template>

<script>
import { MoviesController } from '@/controllers/movies'
import productCard from '@/components/productCard.vue';

const MoviesCtrl = new MoviesController()

export default {
    name: 'Categories',
    components: {
        productCard
    },
    data: () => ({
    tab: null,
    moviesData: [],
    loading: true,
    tabsOpt: [
        {
            name: 'All',
            itt: '',
        },
        {
            name: 'New releases',
            itt: '',
        },
        {
            name: 'Most popular',
            itt: '',
        },
        {
            name: 'Recomendations',
            itt: '',
        },
    ] 
    }),
    methods: {
        async getByCategory () {
            console.warn('llamamos')
            this.loading = true
            const movies = await MoviesCtrl.getMovies()
            this.moviesData = movies.Search
            this.loading = false
        }
    },
    mounted () {
        this.getByCategory()
    }
}
</script>

<style lang="scss">
     @import '../css/vars.scss';
    .movie-app__category-tabs{
       // border:1px dashed blue;
    }
    @mixin arrows-tabs () {
      .v-slide-group__prev.v-slide-group__prev--disabled{
       display: none !important;
      }
    }
    .movie-app__category-tabs {
      .v-item-group{
        color: $primary-theme-color !important;
        caret-color: $primary-theme-color !important;
        background-color: transparent !important;
        height: 37px;
        @include arrows-tabs();
        .v-slide-group__wrapper{
            overflow: visible !important;
            .v-slide-group__content.v-tabs-bar__content{
                .v-tabs-slider-wrapper{
                    color: transparent !important;
                    &::before{
                        content: '';
                        width: 100%;
                        height: 2px;
                        background-color: $primary-theme-color;
                        position: absolute;
                        top: -5px
                    }
                    &::after{
                        content: "";
                        position: absolute;
                        top: -5px;
                        border-left: 7px solid transparent;
                        border-right: 7px solid transparent;
                        border-top: 7px solid $primary-theme-color;
                        left: 50%;
                        margin-left: -5px;
                    }
                }
                .v-tab{
                    color: #000;
                    padding:0px 20px;
                    min-width: auto;
                    width: auto;
                    text-transform: capitalize;
                    font-size: 15px;
                    font-family: 'Roboto';
                }
          }
        }
      }
    }
</style>
