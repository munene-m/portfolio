<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
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
</script>

<template>
      <header>
    <nav
      class="px-3 py-4 mx-auto md:flex md:justify-between z-10 md:items-center dark:text-gray-200 font-mono shadow-md"
    >
      <div class="flex items-center justify-between">
        <RouterLink to="/"
          ><img
            src='../assets/m-Icon.svg'
            class="w-12 h-10 flex justify-start"
            alt="M-icon"
        /></RouterLink>
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

      <div class="hidden md:flex md:items-center">
        <RouterLink 
          class="text-cyan-500 transition-all ease-in duration-150 mr-8"
          to="/"
          >Home</RouterLink
        >
        <RouterLink
          class="hover:text-cyan-500 transition-all ease-in duration-150 mr-8"
          to="/about"
          >About</RouterLink
        >
        <RouterLink
          class="hover:text-cyan-500 transition-all ease-in duration-150 mr-8"
          to="/about"
          >Projects</RouterLink
        >
        <RouterLink
          class="hover:text-cyan-500 transition-all ease-in duration-150 mr-8"
          to="/about"
          >Contact</RouterLink
        >
      </div>

      <transition name="showMenu" mode="ease-in-out">
        <div v-if="showMenu" class="mobile-menu shadow-md space-y-4 md:hidden">
          <RouterLink @click="closeMenu"
            class="text-cyan-500 transition-all ease-in duration-150 mr-8"
            to="/"
            >Home</RouterLink
          >
          <RouterLink @click="closeMenu"
            class="hover:text-cyan-500 transition-all ease-in duration-150 mr-8"
            to="/about"
            >About</RouterLink
          >
          <RouterLink @click="closeMenu"
            class="hover:text-cyan-500 transition-all ease-in duration-150 mr-8"
            to="/about"
            >Projects</RouterLink
          >
          <RouterLink @click="closeMenu"
            class="hover:text-cyan-500 transition-all ease-in duration-150 mr-8"
            to="/about"
            >Contact</RouterLink
          >
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
  height: 100%;
  width: 10rem;
  background-color: #252525;
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
