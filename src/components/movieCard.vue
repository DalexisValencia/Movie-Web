<template>
    <v-hover v-slot="{ hover }">
      <v-card class="movie-app__product-card">
        <v-img :aspect-ratio="16/24" :src="movie.Poster">
            <section class="pa-10 hover-movie" v-if="hover">
              <article class="d-flex text-center hover-movie__wrapper">
                <header class="hover-movie__wrapper-header">
                  <h1>{{movie.Title}}</h1>
                </header>
                <div class="d-flex hover-movie__wrapper-body">
                  <v-btn block class="pa-2 mb-3" @click="goToDetails()">
                    watch now
                  </v-btn>
                  <v-btn outlined blockclass="pa-2" @click="goToDetails()">
                    more info
                  </v-btn>
                </div>
              </article>
            </section>
        </v-img>
      </v-card>
    </v-hover>
</template>

<script>
  export default {
    name: 'movieCard',
    props: {
      movie: {
        type: Object,
        default: null,
      }
    },
    data: () => ({
    }),
    methods: {
      goToDetails () {
        this.$router.push(`/details/${this.movie.imdbID}`)
      },
    },
  }
</script>

<style lang="scss">
  @import '../css/vars.scss';
  @import '../css/common.scss';
  .movie-app__product-card-anchor{
    text-decoration: none !important;
  }
  .movie-app__product-card{
      border-radius: 0px !important;
  }
  @include no-shadow('.movie-app__product-card'); // se quita la sombra por defecto del elemento v-card
  .hover-movie{
    height: 100%;
    background-color: rgba($primary-theme-color, 0.8) !important;
    .hover-movie__wrapper{
      height: 100%;
      flex-wrap: wrap;
      justify-content: space-around;
      flex-direction: column;
      header.hover-movie__wrapper-header{
        width: 100% !important;
          h1{
            color: $secondary-theme-color;
            text-transform: uppercase;
            font-size: 1rem;
          }
        }
      .hover-movie__wrapper-body{
        width:100% !important;
        flex-wrap:wrap;
        button.v-btn{
          width: 100%;
          border-radius: 0px;
          &:not(.v-btn--outlined){
            background-color: $tertiary-theme-color;
            &:hover{
              background-color: darken($tertiary-theme-color, 10);
            }
            .v-btn__content{
              color: $primary-theme-color !important;
              font-size: 0.6rem;
            }
          }
          &.v-btn--outlined{
            color: $secondary-theme-color;
            border:1px solid $secondary-theme-color;
            .v-btn__content{
              color: $secondary-theme-color !important;
              font-size: 0.6rem;
            }
          }
        }
      }
    }
  }

  @media (max-width: 599px){
    .hover-movie{
      &.pa-10{
        padding: 20px !important;
      }
      .hover-movie__wrapper{
        header.hover-movie__wrapper-header{
          h1{
            font-size: 2.8vw !important;
            height: 61px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
        .hover-movie__wrapper-body{
          button.v-btn{
            padding: 5px !important;
            height: 28px;
            font-size: 0.7vw !important;
            &.mb-3{
              margin-bottom: 5px !important;
            }
          }
        }
      }
    }
  }
</style>
