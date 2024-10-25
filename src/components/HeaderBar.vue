<!-- src/components/HeaderBar.vue -->
<template>
  <header>
    <div
      class="flex flex-wrap items-center justify-between mx-auto px-2"
      :class="isMobile || isTablet ? 'py-4' : 'py-20'"
    >
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
          v-if="isTablet"
          type="button"
          class="inline-flex items-center w-10 h-10 justify-center text-sm rounded-lg focus:outline-none"
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
    </div>
    <!-- Navigation Menu -->
    <nav
      :class="['w-full', isMenuOpen ? 'block' : 'hidden']"
      @click="isMenuOpen = !isMenuOpen"
    >
      <ul class="flex flex-col m-2 p-2 border rounded-lg rtl:space-x-reverse">
        <li v-for="item in menuItems" :key="item.path">
          <router-link
            :to="item.path"
            class="block py-2 px-3 rounded"
            :class="route.path === item.path ? 'bg-blue' : ''"
          >
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const route = useRoute()
// State for mobile view handling
const isMobile = ref(false)
const isTablet = ref(false)
const isMenuOpen = ref(false)

// Check if device is mobile
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768 // lg breakpoint in Tailwind
}

// Initialize mobile detection
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  checkMobile()
  window.removeEventListener('resize', checkMobile)
})

// Check if device is tablet
const checkTablet = () => {
  isTablet.value = window.innerWidth < 1024 && window.innerWidth >= 768 // lg breakpoint in Tailwind
}

// Initialize tablet detection
onMounted(() => {
  checkTablet()
  window.addEventListener('resize', checkTablet)
})

onUnmounted(() => {
  checkTablet()
  window.removeEventListener('resize', checkTablet)
})

const menuItems = [
  {
    path: '/',
    label: 'Home',
    icon: '/image/home.svg',
  },
  {
    path: '/about',
    label: 'About',
    icon: '/image/profile.svg',
  },
  {
    path: '/resume',
    label: 'Resume',
    icon: '/image/resume.svg',
  },
  {
    path: '/work',
    label: 'Work',
    icon: '/image/work.svg',
  },
  {
    path: '/blog',
    label: 'Blog',
    icon: '/image/blog.svg',
  },
  {
    path: '/contact',
    label: 'Contact',
    icon: '/image/contact.svg',
  },
]
</script>
