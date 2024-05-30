<script setup lang="ts">
import {useRouter, useRoute} from "vue-router";
const router = useRouter();
const route = useRoute();

const query = route.query
console.log('query is', query)
console.log('query.redirect is', query.redirect)
</script>

<template>

</template>

<style scoped>

</style>
