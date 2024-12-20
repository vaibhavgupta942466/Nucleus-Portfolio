<!-- src/components/HeaderBar.vue -->
<template>
  <header>
    <div
      class="flex flex-wrap items-center justify-between mx-auto p-2"
      :class="
        route.path === '/home' ? 'sticky top-0 z-10 slide-y-enter-active' : ''
      "
    >
      <RouterLink
        to="/home"
        class="flex items-center space-x-1 rtl:space-x-reverse"
      >
        <img
          src="/image/logo.svg"
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
          class="hidden space-x-1 inline-flex items-center w-10 h-10 justify-center text-sm rounded-lg focus:outline-none"
          @click="menuStore.toggleMenu"
          :class="route.path === '/home' ? '' : 'md:block xl:hidden'"
        >
          <span class="sr-only">Toggle menu</span>
          <svg
            v-if="!isMenuOpen"
            class="w-7 h-7"
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

          <!-- Cross Icon -->
          <svg
            v-if="isMenuOpen"
            class="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2 12l10-10M12 12L2 2"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- Navigation Menu -->
    <nav
      :class="['w-full hidden xl:hidden', isMenuOpen ? 'md:block' : 'hidden']"
    >
      <ul class="flex flex-col m-2 p-2 border rounded-lg rtl:space-x-reverse">
        <li
          @click="menuStore.closeMenu"
          v-for="item in router.getRoutes().filter(route => {
            return (
              // have meta.menu set to true
              route?.meta?.menu === true &&
              // are not the root route
              route.path !== '/' &&
              // optionally: exclude dynamic routes
              !route.path.includes('/:')
            )
          })"
          :key="item.path"
        >
          <router-link
            :to="item.path"
            class="block py-2 px-3 rounded"
            :class="
              route.path === item.path || route.path === item?.aliasOf?.path
                ? 'bg-blue'
                : ''
            "
          >
            {{ item?.meta?.label }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import router from '@/router'
import { useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'

const route = useRoute()

// script setup syntax automatically exposes everything to the template
import { useMenuStore } from '@/stores/menuStore' // adjust path as needed
import { storeToRefs } from 'pinia' // for destructuring reactive state

// Initialize the store
const menuStore = useMenuStore()

// If you need to destructure store properties while keeping reactivity
const { isMenuOpen } = storeToRefs(menuStore)
</script>
