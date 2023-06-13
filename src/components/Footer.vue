<script setup>
import GithubIcon from './icons/GithubIcon.vue';
import GmailIcon from './icons/GmailIcon.vue';
</script>

<template>
  <footer class="flex justify-center flex-col rounded-t-md items-center py-2 bg-[#252525] text-sm md:text-base">
    <p class="flex items-center text-center">Built by Munene.</p>
    <div class="grid grid-cols-2 gap-2 pt-1 place-items-center">
      <a href="https://github.com/munene-m"
        ><GithubIcon class="transition-all duration-300 hover:text-cyan-500"
      /></a>
      <a href="mailto:munenenjue18@gmail.com"
        ><GmailIcon class="transition-all duration-300 hover:text-cyan-500"
      /></a>
    </div>
  </footer>
</template>
