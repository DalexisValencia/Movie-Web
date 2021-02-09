<template>
    <v-app-bar
        app
        color="#000"
        dark
    >
        <div class="d-flex align-center">
            <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="/assets/movies-log.png"
                transition="scale-transition"
                width="100"
            />
        </div>

        <v-spacer></v-spacer>

        <nav>
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
    </v-app-bar>
</template>

<script>

</script>