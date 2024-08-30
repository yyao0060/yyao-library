<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import JSON from './components/JSON.vue'
import FORM from './components/FORM.vue'
import BHeader from './components/BHeader.vue'
</script>

<template>
  <div class="main-container">
    <header>
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
