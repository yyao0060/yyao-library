<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import BHeader from './components/BHeader.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showHeader = computed(() => route.name !== 'CountBookAPI' && route.name !== 'GetAllBooksAPI')
</script>

<template>
  <div class="main-container">
    <header v-if="showHeader">
      <BHeader />
    </header>

    <main class="main-box">
      <!-- <JSON /> -->
      <!-- <FORM /> -->
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped></style>
