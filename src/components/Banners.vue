<template>
    <v-carousel class="movie-carousel">
        <v-carousel-item v-for="(color, i) in colors" :key="color">
            <v-row
            class="fill-height"
            align="center"
            justify="center"
            >
            <div class="display-3">
                Slide {{ i + 1 }}
            </div>
            </v-row>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
    export default {
      data: () => ({
        model: 0,
        colors: [
          'primary',
          'secondary'
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
  .movie-carousel{
    .v-window__container{
      background-color: rgba(0,0,0,0.5);
      @include center-navigation-arrows;
    }
    @include carousel-controls;
  }

  @media (max-width: 599px) {
    .v-carousel__controls{
      .v-item-group{
        justify-content: center !important;
      }
    }
  }
</style>

