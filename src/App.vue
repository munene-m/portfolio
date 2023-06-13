<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import { onMounted } from 'vue';
import AOS from "aos";
onMounted(() => {
  AOS.init();
});
</script>

<template>

  <Navbar/>
  <RouterView />
</template>

