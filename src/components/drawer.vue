<template>
    <v-navigation-drawer v-model="drawer" absolute temporary width="80%">
        <v-list nav dense>
            <v-list-item-group  active-class="deep-purple--text text--accent-4">
                <v-list-item>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>
        
                <v-list-item>
                    <v-list-item-title>Categories</v-list-item-title>
                </v-list-item>
        
                <v-list-item>
                    <v-list-item-title>My Favorites</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'drawer',
    props: {
        drawer: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({
    }),
};
</script>