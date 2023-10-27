<template>
  <section
    id="contact"
    data-aos="zoom-in"
    data-aos-duration="600"
    class="font-inter flex flex-col items-center justify-center mt-20 mb-20"
  >
    <h2 class="pb-4 text-5xl sm:text-5xl font-bold text-center">
      Get in touch
    </h2>
    <p class="md:w-1/2 m-auto text-center text-sm md:text-base">
      I am currently looking for opportunities as a junior software engineer and
      Im always free to talk about that and any other interesting projects you
      may have.
    </p>
    <button
      aria-label="redirectToEmail"
      @click="redirectToEmail"
      class="border border-cyan-500 rounded-md py-4 px-3 mt-5 hover:bg-cyan-500 text-sm md:text-base hover:scale-105 transition-all duration-300"
    >
      Say Hello 👋
    </button>
  </section>
</template>

<script setup>
function redirectToEmail() {
  const emailAddress = "munenenjue18@gmail.com";
  const subject = "Hello Mac";

  const emailUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}`;

  window.location.href = emailUrl;
}
</script>
