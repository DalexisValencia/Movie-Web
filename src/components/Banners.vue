<template>
    <v-carousel class="movie-carousel">
        <v-carousel-item v-for="(banner, i) in banners" class="movie-app__banner-item" :key="i" :src="$vuetify.breakpoint.xsOnly || $vuetify.breakpoint.smOnly ? banner.mobile : banner.desktop" cover>
          <v-container class="fill-height">
            <v-row class="fill-height movie-app__row-banner">
              <div class="banner-title" v-html="banner.title"></div>
            </v-row>
          </v-container>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
    export default {
      data: () => ({
        model: 0,
        banners: [
          {
            title: '<span>Programa tu fin de semana con <b>Movies</b> <br>escoge tus peliculas favorítas</span>',
            desktop: '/assets/banners/banner-desktop.png',
            mobile: '/assets/banners/banner-mobile.png'
          },
          {
            title: '<span>Programa tu fin de semana con <b>Movies</b> <br>escoge tus peliculas favorítas</span>',
            desktop: '/assets/banners/banner-desktop.png',
            mobile: '/assets/banners/banner-mobile.png'
          },
        ],
      }),
    }
</script>

<style lang="scss">
  @import '../css/vars.scss';
  @import '../css/common.scss';

  @mixin center-navigation-arrows {
    .v-window__prev,
    .v-window__next{
      display: none;
    }
  }

  @mixin carousel-controls-nav {
    button.v-carousel__controls__item{
      &:hover:not(.v-btn--active){
        color: $tertiary-theme-color !important;
        &:before{
          background-color: $tertiary-theme-color !important;
        }
      }
      &.v-btn--active{
        &:before{
          background-color: transparent !important;
        }
        background-color: transparent;
        border:2px solid  $tertiary-theme-color !important;
        color: $tertiary-theme-color !important;
      }
      &.v-btn.v-btn--icon{
        color: white;
        i.v-icon{
          opacity: 1 !important;
        }
      }
    }
  }
  @mixin carousel-controls {
    .v-carousel__controls{
      background-color: transparent;
      justify-content: flex-end;
      .v-item-group{
        display: flex;
        justify-content: flex-end;
        @include carousel-controls-nav;
      }
    }
  }
  .movie-app__banner-item{
    // background-color: darken($tertiary-theme-color, 30) !important
    .v-image.v-responsive.v-carousel__item{
      .v-image__image.v-image__image--cover{
        box-shadow: inset 0 0 0 1000px rgba(0,0,0,.4) !important;
      }
    }
  }
  .movie-app__row-banner{
    padding:0px 80px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .banner-title{
      // width: 60%;
      font-size: 2rem;
      span {
        color: $primary-theme-color;
        background-color: $secondary-theme-color;
      }
    }
  }
  .movie-carousel{
    .v-window__container{
      background-color: rgba(0,0,0,0.5);
      @include center-navigation-arrows;
    }
    @include carousel-controls;
  }

  @media (max-width: 599px) {
    .movie-app__row-banner{
      padding:0px 20px !important;
      justify-content: flex-end;
      padding-bottom: 40px !important;
      .banner-title{
        width: 100% !important;
        font-size: 1.8rem
      }
    }
    .v-carousel__controls{
      .v-item-group{
        justify-content: center !important;
      }
    }
  }
</style>

