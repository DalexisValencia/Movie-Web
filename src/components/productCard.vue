<template>
  <router-link to="/details">
    <v-hover v-slot="{ hover }">
      <v-card>
        <v-img :aspect-ratio="16/24" :src="movie.Poster">
            <section class="pa-10 hover-movie" v-if="hover">
              <article class="d-flex text-center hover-movie__wrapper">
                <header class="hover-movie__wrapper-header">
                  <h1>{{movie.Title}} {{hover}}</h1>
                </header>
                <div class="d-flex hover-movie__wrapper-body">
                  <v-btn block class="pa-2 mb-5">
                    watch now
                  </v-btn>
                  <v-btn outlined blockclass="pa-2">
                    nore info
                  </v-btn>
                </div>
              </article>
            </section>
        </v-img>
      </v-card>
    </v-hover>
  </router-link>
</template>

<script>
  export default {
    name: 'ProductCard',
    props: {
      movie: {
        type: Object,
        default: null,
      }
    },
    data: () => ({
    })
  }
</script>

<style lang="scss">
  .hover-movie{
    height: 100%;
    background-color:rgba(0,0,0,0.8) !important;
    .hover-movie__wrapper{
      height: 100%;
      flex-wrap: wrap;
      justify-content: space-around;
      flex-direction: column;
      header.hover-movie__wrapper-header{
        width:100% !important;
          h1{
            color:  #fff;
            text-transform: uppercase;
          }
        }
      .hover-movie__wrapper-body{
        width:100% !important;
        flex-wrap:wrap;
        button.v-btn{
          width: 100%;
          
          border-radius: 0px;
          &:not(.v-btn--outlined){
            background-color: yellow;
            v-btn__content{
              color: blue !important;
            }
          }
          &.v-btn--outlined{
            color: #fff;
            border:1px solid white;
          }
        }
      }
    }
  }

</style>
