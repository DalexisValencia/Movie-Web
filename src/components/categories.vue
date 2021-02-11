<template>
    <v-container>
        <v-tabs class="category-tabs" v-model="tab" center-active @click="getByCategory()">
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

</style>
