<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="flex flex-col py-2 px-4 gap-2">
    <NavBar />
    <RouterView />
  </div>
</template>
