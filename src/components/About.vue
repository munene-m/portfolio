<script setup>
import BulbIcon from "./icons/BulbIcon.vue";
const tools = [
  {
    id: 6,
    name: "Javascript (ES6+)",
  },
  {
    id: 1,
    name: "Vue.js",
  },

  {
    id: 4,
    name: "Node.js",
  },
  {
    id: 5,
    name: "Express js",
  },
  {
    id: 3,
    name: "Tailwind CSS",
  },
  {
    id: 2,
    name: "Nuxt js",
  },
];
</script>

<template>
  <section class="py-28 font-inter" id="about" data-aos="flip-left" data-aos-easing="linear" data-aos-duration="700">
    <h2 class="text-cyan-500 text-2xl pb-10">About me</h2>

    <article
      class="grid sm:grid-cols-2 grid-cols-1 gap-10 justify-items-center place-items-center"
    >
      <img
        class="md:mr-auto rounded"
        src="../assets/codingGuy.gif"
        alt="Animated coding GIF"
      />

      <div>
        <p>
          I am a <span class="text-cyan-500">MEVN-stack </span>developer based
          in Nairobi, Kenya. My interest in web development began in 2021 when I
          first learnt HTML and CSS in my second year of pursuing my Bachelor's
          degree in Business and IT. Since then I have been creating projects
          and learning best practices and improving my skills. Here are a couple
          of technologies I have been working with:
        </p>
        <div class="grid grid-cols-2 gap-4 md:gap-0">
          <ul class="font-mono pt-4" v-for="tool in tools" :key="tool.id">
            <li class="flex items-center">
              <BulbIcon class="text-cyan-500" /> {{ tool.name }}
            </li>
          </ul>
        </div>
      </div>
    </article>
  </section>
</template>
