<!-- src/components/HeaderBar.vue -->
<template>
  <header>
    <div class="flex flex-wrap items-center justify-between mx-auto py-20 px-2">
      <RouterLink
        to="/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="/image/logo.png"
          alt="Nucleus Creator Logo"
          class="w-10 h-10"
        />
        <span class="self-center text-2xl font-semibold whitespace-nowrap"
          >Nucleus Creator</span
        >
      </RouterLink>
      <div class="flex items-center md:order-2">
        <ThemeToggle />
        <!-- Mobile Menu Button -->
        <button
          type="button"
          class="inline-flex items-center w-10 h-10 justify-center text-sm rounded-lg focus:outline-none"
          :class="[isMobile ? 'block' : 'hidden']"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span class="sr-only">Toggle menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <!-- Navigation Menu -->
      <nav :class="['w-full', isMenuOpen ? 'block' : 'hidden']">
        <ul
          class="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse"
        >
          <li>
            <RouterLink to="/" class="block py-2 px-3 rounded hover:bg-gray-100"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/about"
              class="block py-2 px-3 rounded hover:bg-gray-100"
              >About</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/resume"
              class="block py-2 px-3 rounded hover:bg-gray-100"
              >Resume</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/work"
              class="block py-2 px-3 rounded hover:bg-gray-100"
              >Work</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/blog"
              class="block py-2 px-3 rounded hover:bg-gray-100"
              >Blog</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/contact"
              class="block py-2 px-3 rounded hover:bg-gray-100"
              >Contact</RouterLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'
import { ref, onMounted } from 'vue'

// State for mobile view handling
const isMobile = ref(false)

// Check if device is mobile
const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024 && window.innerWidth > 767 // lg breakpoint in Tailwind
}

// Initialize mobile detection
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

const isMenuOpen = ref(false)
</script>
