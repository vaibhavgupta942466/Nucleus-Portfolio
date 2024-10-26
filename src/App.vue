<!-- App.vue -->

<script setup>
import { useRoute, RouterView } from 'vue-router'
import ProfileCard from './components/ProfileCard.vue'
import SidebarMenu from './components/SidebarMenu.vue'
import HeaderBar from './components/HeaderBar.vue'
import FooterBar from './components/FooterBar.vue'

import { ref, onMounted, onUnmounted } from 'vue'
import { useMenuStore } from './stores/menuStore'
// Initialize the store
const menuStore = useMenuStore()
// State for mobile view handling
const isMobile = ref(false)
const isTablet = ref(false)

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

const route = useRoute()
</script>

<template>
  <div class="container mx-auto">
    <HeaderBar />
    <div
      class="flex flex-col justify-center lg:flex-row lg:justify-center"
      @click="menuStore.closeMenu"
    >
      <template v-if="isMobile || isTablet">
        <div class="lg:w-1/4 p-2">
          <ProfileCard />
        </div>
        <div
          class="lg:w-3/4 p-2 overflow-y-auto"
          :class="
            route.path === '/' || route.path === '/home'
              ? 'container max-w-md'
              : ''
          "
        >
          <RouterView />
        </div>
        <div class="lg:w-1/16 p-2">
          <SidebarMenu />
        </div>
      </template>
      <template v-else>
        <div
          class="lg:w-1/4 p-2"
          :style="{ transform: 'translateY(-100px)' }"
          :class="
            route.path === '/' || route.path === '/home' ? 'hidden' : 'block'
          "
        >
          <ProfileCard />
        </div>
        <div
          class="lg:w-3/4 p-2 overflow-y-auto"
          :class="
            route.path === '/' || route.path === '/home'
              ? 'container max-w-xl'
              : ''
          "
        >
          <RouterView />
        </div>
        <div class="lg:w-1/16 p-2">
          <SidebarMenu />
        </div>
      </template>
    </div>
    <FooterBar
      :class="
        (route.path === '/' || route.path === '/home') && !isMobile
          ? 'hidden'
          : 'block'
      "
    />
  </div>
</template>
