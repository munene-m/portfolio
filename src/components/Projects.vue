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
  <section class="pb-24 font-inter text-base" id="projects">
    <h2 class="font-inter text-cyan-500 text-2xl pb-10">
      Projects I have completed
    </h2>

    <!-- <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-28"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-duration="500"
      data-aos-easing="linear"
    >
      <div class="py-4 md:p-0 bg-inherit rounded-md order-last lg:order-first">
        <h2 class="font-bold text-xl text-cyan-500">E-commerce website</h2>

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
              <BulbIcon class="text-cyan-500" /> Vue.js
            </li>
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
            aria-label="View this project on github"
            href="https://github.com/munene-m/e-commerce"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-cyan-500 text-sm transition-all duration-200"
            ><GithubIcon />View on Github</a
          >
          <a
            aria-label="View the live version of this project"
            href="https://e-commerce-munene-m.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-cyan-500 text-sm transition-all duration-200"
            ><LinkIcon />View Live</a
          >
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
    </div> -->

    <div
      class="grid grid-cols-1 md:top-0 mb-28 relative lg:grid-cols-2 gap-4"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-duration="600"
      data-aos-easing="linear"
    >
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
        <h2 class="font-bold text-xl text-end text-cyan-500">Kipaji app</h2>

        <p
          class="bg-inherit py-4 text-up w-full text-end md:w-5/6 md:ml-auto md:p-0 md:pb-4"
        >
          A social platform for fans to be involved in the operations, decision
          and growth of local sports club. This is a dApp(Decentralized
          application) built on top of the Stellar blockchain and consumes APIs
          from the
          <a href="https://benkiko.io" target="_blank" rel="noopener noreferrer"
            ><u class="text-cyan-500 cursor-pointer">Benkiko ecosystem</u></a
          >
          . I worked on transforming the figma UI/UX designs to a functional
          website.
        </p>
        <div class="grid md:gap-0">
          <ul
            class="font-mono sm:pt-6 md:text-inherit pt-8 flex flex-wrap items-center justify-end gap-4"
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
            aria-label="View the live version of this project"
            href="https://kipaji.app"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-cyan-500 text-sm transition-all duration-200"
            ><LinkIcon />View Live</a
          >
        </div>
      </div>
    </div>

    <div
      class="grid grid-cols-1 relative lg:grid-cols-2 gap-4 mb-28"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-duration="700"
      data-aos-easing="linear"
    >
      <div class="py-4 md:p-0 bg-inherit rounded-md order-last lg:order-first">
        <span
          class="text-zinc-900 px-2 text-sm rounded-2xl bg-cyan-100 border-2 border-cyan-100 mb-2"
          >Featured project</span
        >
        <h2 class="font-bold text-xl pb-2 text-cyan-500">
          Sport predictions website
        </h2>

        <p class="bg-inherit py-4 w-full md:w-5/6 md:p-0 md:pb-4">
          I collaborated with
          <a
            aria-label="See Collins' portfolio"
            href="https://collins-odongo.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
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
            aria-label="View this project on Github"
            href="https://github.com/munene-m/Predictions-server"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-cyan-500 text-sm transition-all duration-200"
            ><GithubIcon />View on Github</a
          >
          <a
            aria-label="View the live version of this project"
            href="https://sportypredict.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-cyan-500 text-sm transition-all duration-200"
            ><LinkIcon />View Live</a
          >
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

    <div
      class="grid grid-cols-1 md:top-0 mb-28 relative lg:grid-cols-2 gap-4"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-duration="800"
      data-aos-easing="linear"
    >
      <div class="relative group">
        <img
          class="w-full h-full md:mr-auto rounded md:self-center cursor-pointer ease-linear hover:-translate-x-4 hover:translate-y-4 transition-all duration-200"
          src="../assets/mobile-eat.png"
          alt="Screenshot of Mobil-Eat web app"
        />
        <div
          class="absolute -z-10 rounded inset-0 border-4 border-cyan-500 transform transition-all duration-300 group-hover:bg-cyan-500"
          style="height: 100%"
        ></div>
      </div>

      <div class="py-4 md:p-0 bg-inherit rounded-md">
        <h2 class="font-bold text-xl text-end text-cyan-500">Mobile Eats</h2>

        <p
          class="bg-inherit py-4 text-up w-full md:w-5/6 text-end md:ml-auto md:p-0 md:pb-4"
        >
          A comprehensive food delivery platform designed to provide users with
          a convenient and enjoyable way to order food from their favorite local
          restaurants and vendors. Customers can explore a wide variety of
          dining options, place orders online, and have their chosen dishes
          delivered straight to their doorstep. It is built as a Progressive Web
          Application(PWA) and users can install it on any device.
        </p>
        <div class="grid md:gap-0">
          <ul
            class="font-mono sm:pt-6 md:text-inherit pt-8 flex flex-wrap items-center justify-end gap-4"
          >
            <li class="flex items-center">
              <BulbIcon class="text-cyan-500" /> Vue.js
            </li>
            <li class="flex items-center">
              <BulbIcon class="text-cyan-500" /> Tailwind CSS
            </li>
            <li class="flex items-center">
              <BulbIcon class="text-cyan-500" /> Typescript
            </li>
            <li class="flex items-center">
              <BulbIcon class="text-cyan-500" /> Mongo DB
            </li>
            <li class="flex items-center">
              <BulbIcon class="text-cyan-500" /> Firebase cloud messaging
            </li>
            <li class="flex items-center">
              <BulbIcon class="text-cyan-500" /> Google Maps API
            </li>
          </ul>
        </div>

        <div class="flex justify-end pt-10">
          <a
            aria-label="View the live version of this project"
            href="https://www.mobile-eat.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-cyan-500 text-sm transition-all duration-200"
            ><LinkIcon />View Live</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
