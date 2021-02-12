<template>
    <v-container class="my-10 px-10 movie-app__details-container" >
        <v-row v-if="movieData && this.$route.params.imdbID" class="px-10 movie-app__row-details">
            <v-col cols="12" sm="5" md="4" lg="3" xl="3">
                <v-img :src="movieData.Poster" max-height="550" contain></v-img>
            </v-col>
            <v-col cols="12" sm="7" md="8" lg="9" xl="9" class="pr-0 movie-app__v-col-detail-wrapper">
                <section class="py-10 movie-app__section-details">
                    <article>
                        <h2 class="pb-5 movie-app__plot-title">{{movieData.Title}}</h2>
                        <div class="movie-app__plot-details">
                            {{movieData.Plot}}
                        </div>
                    </article>
                </section>
            </v-col>
            <v-col cols="12" class="text-right pr-0 movie-app__action-details">
                <v-btn class="movie-app__add-favorites-icon" :elevation="0">
                    <span class="movie-app__star-icon"></span>
                    Agregar a favoritos
                </v-btn>
            </v-col>
        </v-row>
        <v-row class="py-10"  v-else>
            <v-col cols="12" sm="8" offset-sm="2" class="text-center" >
                <h2>Lo sentimos, la página a la que intenta acceder no esta disponible.<br>
                Regrese dando <router-link to="/" class="go-back">click aqui</router-link></h2>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { MoviesController } from '@/controllers/movies'
const MovieCtrl = new MoviesController()

export default {
    name: 'MovieDetail',
    props: {
    movie: {
        type: Object,
        default: null,
    }
    },
    data: () => ({
        loading: false,
        movieData: {}
    }),
    methods: {
        async getMovie () {
            this.loading = true
            const movie = await MovieCtrl.getMovieById(this.$route.params.imdbID)
            this.movieData = movie
            this.loading = false
        },
    },
    mounted () {
        if(this.$route.params.imdbID) {
            this.getMovie()
            return 
        }
        console.info('variable de error')
    }
}
</script>

<style lang="scss">
    @import '../css/vars.scss';
    .go-back{
        color: $primary-theme-color !important;
    }
    .movie-app__details-container{
        .movie-app__section-details{
            .movie-app__plot-title{
                text-transform: uppercase;
                font-size: 28px !important;
                color: $primary-theme-color;
            }
            .movie-app__plot-details{
                color: $primary-theme-color;
            }
        }
    }
    .movie-app__add-favorites-icon{
        border-radius: 0px !important;
        height: 40px !important;
        background-color: #4D6666 !important;
        padding: 0 13px !important;
        .v-btn__content{
            font-style: normal;
            font-weight: bold;
            font-size: 15px;
            line-height: 22px;
            color: #fff !important;
            text-transform: initial;
            .movie-app__star-icon{
                display: inline-block;
                background-image: url('/assets/star-icon.png');
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
                width: 18px;
                height: 18px;
                margin-right: 7px;
            }
        }
    }
    @media (max-width: 959px) {
        .movie-app__details-container{
            .movie-app__section-details{
                padding-top: 30px !important;
                .movie-app__plot-title{
                    font-size: 3vw !important;
                }
                .movie-app__plot-details{
                    font-size: 1.8vw !important;
                }
            }
        }
    }

    @media (max-width: 599px) {
        .movie-app__row-details{
            &.px-10{
                padding: 0px !important;
            }
            .movie-app__v-col-detail-wrapper{
                margin-top: 35px;
            }
        }
        .movie-app__details-container{
            .movie-app__section-details{
                &.py-10{
                    padding-top: 0px !important;
                } 
                .movie-app__plot-title{
                    font-size: 6vw !important;
                    text-align: center;
                }
                .movie-app__plot-details{
                    text-align: center;
                    font-size: 3.2vw !important;
                }
            }
            .movie-app__action-details{
                text-align: center !important;
                .v-btn__content{
                    font-size: 3vw;
                }
            }
        }
    }
</style>