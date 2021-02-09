<template>
    <v-responsive :aspect-ratio="16/9">
        <v-card-text v-ripple>
          This card will always be 16:9 (unless you put more stuff in it)
        </v-card-text>
      </v-responsive>
</template>

<script>
    export default {
      name: 'ProductCard',
      data: () => ({
      }),
    };
</script>
