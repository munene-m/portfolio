<script setup>
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import Projects from "../components/Projects.vue";
import Contact from '../components/Contact.vue'
import Footer from "../components/Footer.vue";

// const currentYear = new Date().getFullYear()

</script>

<template>
  <main class="lg:mx-32 sm:mx-12 mx-8">
    <Hero />
    <About />
    <Projects/>
    <Contact/>
<Footer />

  </main>
</template>
