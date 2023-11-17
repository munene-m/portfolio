<script setup>
import { ref } from "vue";
// import { li } from "vue-router";
import MenuIcon from "./icons/MenuIcon.vue";
import CloseIcon from "./icons/CloseIcon.vue";
import GithubIcon from "./icons/GithubIcon.vue";
import GmailIcon from "./icons/GmailIcon.vue";
import LinkedInIcon from "./icons/LinkedInIcon.vue";

let showMenu = ref(false);
function toggleNav() {
  return (showMenu.value = !showMenu.value);
}
function closeMenu() {
  showMenu.value = false;
}
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    showMenu.value = false;
  }
});
const scrollTo = (target) => {
  const element = document.getElementById(target);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
</script>

<template>
  <header>
    <nav
      class="px-3 py-4 md:flex md:justify-center z-50 md:fixed md:items-center dark:text-gray-200 font-mono top-0 left-0 right-0 w-full bg-[#181818] backdrop-blur-md backdrop-filter bg-opacity-30"
    >
      <div class="flex items-center">
        <div @click="toggleNav" class="flex ml-auto md:hidden">
          <button
            aria-label="toggleMobileMenu"
            type="button"
            class="text-gray-100 hover:text-cyan-500 focus:outline-none focus:text-gray-400"
          >
            <MenuIcon v-if="!showMenu" />
            <CloseIcon v-else />
          </button>
        </div>
      </div>

      <div>
        <ul class="hidden md:flex md:items-center">
          <li
            class="text-cyan-500 transition-all cursor-pointer ease-in duration-150 mr-8"
            @click="scrollTo('hero')"
          >
            Home
          </li>
          <li
            class="hover:text-cyan-500 transition-all cursor-pointer ease-in duration-150 mr-8"
            @click="scrollTo('about')"
          >
            About
          </li>
          <li
            class="hover:text-cyan-500 transition-all cursor-pointer ease-in duration-150 mr-8"
            @click="scrollTo('projects')"
          >
            Projects
          </li>
          <li
            class="hover:text-cyan-500 transition-all cursor-pointer ease-in duration-150 mr-8"
            @click="scrollTo('contact')"
          >
            Contact
          </li>
        </ul>
      </div>

      <div
        v-if="showMenu"
        class="w-[90%] m-auto p-3 rounded-md shadow-md bg-[#343434] backdrop-blur-lg backdrop-filter bg-opacity-90 h-fit md:hidden text-lg fixed left-0 right-0 top-14 z-50 duration-200 ease-in"
      >
        <ul>
          <li
            @click="scrollTo('hero')"
            class="text-cyan-500 transition-all ease-in duration-150"
          >
            Home
          </li>
          <li
            @click="scrollTo('about')"
            class="hover:text-cyan-500 transition-all ease-in duration-150 8"
          >
            About
          </li>
          <li
            @click="scrollTo('projects')"
            class="hover:text-cyan-500 transition-all ease-in duration-150"
          >
            Projects
          </li>
          <li
            @click="scrollTo('contact')"
            class="hover:text-cyan-500 transition-all ease-in duration-150"
          >
            Contact
          </li>
          <div class="flex items-center gap-3 mt-2">
            <a
              href="https://github.com/munene-m"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View my Github page"
              ><GithubIcon
                class="transition-all duration-300 hover:text-cyan-500"
            /></a>
            <a
              href="mailto:munenenjue18@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reach out to me on email"
              ><GmailIcon
                class="transition-all duration-300 hover:text-cyan-500"
            /></a>
            <a
              href="https://www.linkedin.com/in/macmillan-munene-b97235204/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to my linkedIn"
              ><LinkedInIcon
                class="transition-all duration-300 hover:text-cyan-500"
            /></a>
          </div>
        </ul>
      </div>
    </nav>
  </header>
</template>
