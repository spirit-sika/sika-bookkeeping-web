<script setup lang="ts">

</script>

<template>
  <section class="app-main">
    <transition
        name="fade-transform"
        mode="out-in"
    >
      <div>
        <router-view />
      </div>
    </transition>
  </section>
</template>

<style scoped>

</style>
