<script setup>
import resume from "../assets/resume/My_Resume.pdf";
function downloadResume() {
  const resumeUrl = resume;
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.setAttribute("download", "resume.pdf");
  link.click();
}
</script>

<template>
  <section class="pt-18 py-20 font-inter" id="hero">
    <!-- <p
      class="border border-cyan-500 px-2 -z-10 rounded-xl mb-5 flex items-center justify-center text-xs lg:text-sm w-fit m-auto animate-scale"
    >
      Available for hire 💡
    </p> -->
    <p class="font-mono pb-3 text-cyan-500">Hi my name is</p>
    <h1 class="font-inter pb-4 text-5xl sm:text-6xl text-[#dcd5d1] font-bold">
      MacMillan Munene.
    </h1>
    <h2 class="font-inter pb-4 font-bold text-zinc-500 text-4xl sm:text-5xl">
      I build cool stuff on the web.
    </h2>
    <p class="sm:w-1/2 w-full text-lg pb-6">
      I am a software developer focused on building beautiful and interactive
      user experiences using tools such as Vue.js, React and Tailwind as well as
      RESTful APIs using Node.js.
    </p>
    <button
      @click="downloadResume"
      aria-label="This button is responsible for downloading my resume"
      class="px-5 py-3 border border-cyan-500 rounded hover:bg-cyan-500 hover:text-zinc-800 transition-all eas duration-200"
    >
      Check out my resume 🔎
    </button>
  </section>
</template>

<style scoped>
@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.animate-scale {
  animation: scale 2s infinite;
}
</style>
