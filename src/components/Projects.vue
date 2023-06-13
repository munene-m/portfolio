<script setup>
import BulbIcon from "./icons/BulbIcon.vue";
import LinkIcon from "./icons/LinkIcon.vue";
import GithubIcon from "./icons/GithubIcon.vue";

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
  <section class="pb-24 font-inter text-base" id="projects" >
    <h2 class="font-inter text-cyan-500 text-2xl pb-10">
      Projects I have completed
    </h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-28" data-aos="fade-right" data-aos-duration="500" data-aos-easing="linear">
      <div class="py-4 md:p-0 bg-inherit rounded-md order-last lg:order-first">
        <h2 class="font-bold text-xl text-cyan-500 md:text-inherit">
          E-commerce website
        </h2>

        <p class="bg-inherit py-4 w-full md:w-5/6 md:p-0 md:pb-4">
          A full stack e-commerce project that has authentication and allows
          users to add items to cart, edit cart items and browse categories. It
          also has a an admin panel that enables the admin to manage products in
          the store.
        </p>

        <div class="grid md:gap-0">
          <ul
            class="font-mono sm:pt-6 md:text-inherit pt-8 flex flex-wrap items-center justify-start gap-4"
          >
            <li class="flex items-center">
              <BulbIcon class="text-cyan-500" /> Node.js
            </li>
            <li class="flex items-center">
              <BulbIcon class="text-cyan-500" /> Mongo DB
            </li>
            <li class="flex items-center">
              <BulbIcon class="text-cyan-500" /> Express js
            </li>
          </ul>
        </div>

        <div class="flex justify-start gap-5 pt-10">
          <a
            href="https://github.com/munene-m/e-commerce"
            class="hover:text-cyan-500 transition-all duration-200"
            ><GithubIcon
          /></a>
          <a
            href="https://e-commerce-munene-m.vercel.app/"
            class="hover:text-cyan-500 transition-all duration-200"
            ><LinkIcon
          /></a>
        </div>
      </div>
      <div class="relative group order-first lg:order-last">
        <img
          class="w-full h-full md:mr-auto rounded md:self-center cursor-pointer ease-linear hover:-translate-x-4 hover:translate-y-4 transition-all duration-200"
          src="../assets/ecommerce-image.png"
          alt="Screenshot of e-commerce website website"
        />
        <div
          class="absolute -z-10 rounded inset-0 border-4 border-cyan-500 transform transition-all duration-300 group-hover:bg-cyan-500"
          style="height: 100%"
        ></div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:top-0 mb-28 relative lg:grid-cols-2 gap-4" data-aos="fade-left" data-aos-duration="500" data-aos-easing="linear">
      <div class="relative group">
        <img
          class="w-full h-full md:mr-auto rounded md:self-center cursor-pointer ease-linear hover:-translate-x-4 hover:translate-y-4 transition-all duration-200"
          src="../assets/kipaji-image.png"
          alt="Screenshot of sporty predict website"
        />
        <div
          class="absolute -z-10 rounded inset-0 border-4 border-cyan-500 transform transition-all duration-300 group-hover:bg-cyan-500"
          style="height: 100%"
        ></div>
      </div>

      <div class="py-4 md:p-0 bg-inherit rounded-md">
        <h2 class="font-bold text-xl text-end text-cyan-500 md:text-inherit">
          Kipaji app
        </h2>

        <p
          class="bg-inherit py-4 text-right w-full md:w-5/6 md:ml-auto md:p-0 md:pb-4"
        >
          A social platform for fans to be involved in the operations, decision
          and growth of local sports club. This is a dApp(Decentralized
          application) built on top of the Stellar platform and consumes APIs
          from the
          <a href="https://benkiko.io"
            ><u class="text-cyan-500 cursor-pointer">Benkiko ecosystem</u></a
          >
          . I worked on transforming the figma UI/UX designs to a functional
          website.
        </p>
        <div class="grid md:gap-0">
          <ul
            class="font-mono sm:pt-6 sm:text-black md:text-inherit pt-8 flex flex-wrap items-center justify-end gap-4"
          >
            <li class="flex items-center">
              <BulbIcon class="text-cyan-500" /> Vue.js
            </li>
            <li class="flex items-center">
              <BulbIcon class="text-cyan-500" /> Tailwind CSS
            </li>
          </ul>
        </div>

        <div class="flex justify-end pt-10">
          <a
            href="https://kipaji.app"
            class="hover:text-cyan-500 transition-all duration-200"
            ><LinkIcon
          /></a>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 relative lg:grid-cols-2 gap-4 mb-28" data-aos="fade-right" data-aos-duration="500" data-aos-easing="linear">
      <div class="py-4 md:p-0 bg-inherit rounded-md order-last lg:order-first">
        <span
          class="text-zinc-900 px-2 text-sm rounded-2xl bg-cyan-100 border-2 border-cyan-100 mb-2"
          >Featured project</span
        >
        <h2 class="font-bold text-xl pb-2 text-cyan-500 md:text-inherit">
          Sport predictions website
        </h2>

        <p class="bg-inherit py-4 w-full md:w-5/6 md:p-0 md:pb-4">
          I collaborated with
          <a
            href="https://collins-odongo.netlify.app/"
            class="text-cyan-500 cursor-pointer"
          >
            <u>Collins</u>
          </a>
          who built the client-side and I created the RESTful APIs used in this
          project to handle authentication, regular CRUD operations involving
          adding, updating and deleting sport predictions as well as managing
          various categories of users on the platform.
        </p>

        <div class="grid md:gap-0">
          <ul
            class="font-mono sm:pt-6 sm:text-black md:text-inherit pt-8 flex flex-wrap items-center justify-start gap-4"
          >
            <li class="flex items-center">
              <BulbIcon class="text-cyan-500" /> Node.js
            </li>
            <li class="flex items-center">
              <BulbIcon class="text-cyan-500" /> Mongo DB
            </li>
            <li class="flex items-center">
              <BulbIcon class="text-cyan-500" /> Express js
            </li>
          </ul>
        </div>

        <div class="flex justify-start gap-5 pt-10">
          <a
            href="https://github.com/munene-m/Predictions-server"
            class="hover:text-cyan-500 transition-all duration-200"
            ><GithubIcon
          /></a>
          <a
            href="https://predictionsite.vercel.app/"
            class="hover:text-cyan-500 transition-all duration-200"
            ><LinkIcon
          /></a>
        </div>
      </div>
      <div class="relative group order-first lg:order-last">
        <img
          class="w-full h-full md:mr-auto rounded md:self-center cursor-pointer ease-linear hover:-translate-x-4 hover:translate-y-4 transition-all duration-200"
          src="../assets/predictions-site-image.png"
          alt="Screenshot of sporty predict website"
        />
        <div
          class="absolute -z-10 rounded inset-0 border-4 border-cyan-500 transform transition-all duration-300 group-hover:bg-cyan-500"
          style="height: 100%"
        ></div>
      </div>
    </div>
  </section>
</template>
