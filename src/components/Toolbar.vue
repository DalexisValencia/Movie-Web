<template>
    <section>
        <drawer :drawer="drawerActive"/>
        <v-app-bar app class="movie-app-bar">
            <v-container class="d-flex justify-space-between align-center" transition="scale-transition">
                <div class="d-flex align-center">
                    <v-img
                        alt="Movie Logo"
                        class="shrink"
                        contain
                        src="/assets/movies-log.png"
                        transition="scale-transition"
                        width="110"
                    />
                </div>
    
                <nav class="right-main-nav d-none d-md-flex">
                    <ul class="d-flex">
                        <li>
                            <router-link to="/">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/">Categories</router-link>
                        </li>
                        <li>
                            <router-link to="/">My Favorites</router-link>
                        </li>
                    </ul>
                </nav>
    
                <div class="movie-app__burger-menu d-none d-sm-flex d-md-none" @click="drawerActive = !drawerActive"></div>
            </v-container>
            
        </v-app-bar>
    </section>
</template>

<script>
    import drawer from '@/components/drawer.vue';
    export default {
        name: 'toolbar',
        components: {
            drawer
        },
        data: () => ({
            drawerActive: false
        }),
    };
</script>

<style lang="scss">
    @import '../css/vars.scss';
    @import '../css/common.scss';

    @include no-shadow('header.movie-app-bar.v-app-bar');
    header.movie-app-bar.v-app-bar{
        background-color: $primary-theme-color !important;
        height: 73px !important;
        .v-toolbar__content{
            height: 100% !important;
        }
    }
    .right-main-nav{
        ul{
            list-style: none !important;
            li{
                padding:0px 18px;
                a{
                    font-size: $font-size-theme-desktop;
                    text-decoration: none;
                    color: $secondary-theme-color;
                    font-weight: bold;
                    transition: 0.5s all;
                    &:hover{
                        color: $tertiary-theme-color !important;
                    }
                }
            }
        }
    }
    .movie-app__burger-menu{
        width: 35px;
        height: 35px;
        background-image: url('/assets/burger-menu.png');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }
</style>
