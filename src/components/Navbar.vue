<script setup>
import { ref } from "vue";
// import { li } from "vue-router";
import MenuIcon from './icons/MenuIcon.vue'
import CloseIcon from "./icons/CloseIcon.vue";
import GithubIcon from './icons/GithubIcon.vue'
import GmailIcon from './icons/GmailIcon.vue'

let showMenu = ref(false);
function toggleNav() {
  return (showMenu.value = !showMenu.value);
}
function closeMenu(){
    showMenu.value = false
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
      behavior: 'smooth',
      block: 'start',
    });
  }
};
</script>

<template>
      <header>
    <nav
      class="px-3 py-4 mx-auto md:flex md:justify-between z-50 md:items-center dark:text-gray-200 font-mono shadow-md fixed top-0 left-0 right-0 bg-[#393939]"
    >
      <div class="flex items-center justify-between">
        <ul>
            <li to="/"
          ><img
            src='../assets/m-Icon.svg'
            class="w-12 h-10 flex justify-start"
            alt="M-icon"
        /></li>
        </ul>
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="text-gray-100 hover:text-cyan-500 focus:outline-none focus:text-gray-400"
          >
            <MenuIcon v-if="!showMenu" />
            <CloseIcon v-else />
          </button>
        </div>
      </div>

      <div > <ul class="hidden md:flex md:items-center">
        <li 
          class="text-cyan-500 transition-all ease-in duration-150 mr-8"
          @click="scrollTo('hero')"
          >Home</li
        >
        <li 
          class="hover:text-cyan-500 transition-all ease-in duration-150 mr-8"
          @click="scrollTo('about')"
          >About</li
        >
        <li
          class="hover:text-cyan-500 transition-all ease-in duration-150 mr-8"
          @click="scrollTo('projects')"
          >Projects</li
        >
        <li
          class="hover:text-cyan-500 transition-all ease-in duration-150 mr-8"
          @click="scrollTo('contact')"
          >Contact</li
        ></ul>
      </div>

      <transition name="showMenu" mode="ease-in-out">
        <div v-if="showMenu" class="mobile-menu space-y-4 h-screen md:hidden">
            <ul>
          <li @click="scrollTo('hero')"
            class="text-cyan-500 transition-all ease-in duration-150 mr-8"
            >Home</li
          >
          <li @click="scrollTo('about')"
            class="hover:text-cyan-500 transition-all ease-in duration-150 mr-8"
            >About</li
          >
          <li @click="scrollTo('projects')"
            class="hover:text-cyan-500 transition-all ease-in duration-150 mr-8"
            >Projects</li
          >
          <li @click="scrollTo('contact')"
            class="hover:text-cyan-500 transition-all ease-in duration-150 mr-8"
            >Contact</li
          >
          </ul>
          <div class="grid grid-cols-2 place-items-center">
            <a href="https://github.com/munene-m"><GithubIcon class="hover:text-cyan-500"/></a>
            <a href="mailto:munenenjue18@gmail.com"><GmailIcon class="hover:text-cyan-500"/></a>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<style scoped>
.showMenu-enter-active,
.showMenu-leave-active {
  transition: transform 0.3s ease;
}

.showMenu-enter-from,
.showMenu-leave-to {
  transform: translateX(-100%);
}

.mobile-menu {
  position: absolute;
  left: 0;
  top: 0;
  /* height: 100%; */
  width: 10rem;
  background-color: #393939;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 10;
  padding: 0 20px;
  padding-top: 8rem;
}

.mobile-menu a {
  margin-right: 8px;
}
</style>
