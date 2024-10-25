<!-- App.vue -->

<script setup>
import { useRoute, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import ProfileCard from './components/ProfileCard.vue'
import SidebarMenu from './components/SidebarMenu.vue'
import HeaderBar from './components/HeaderBar.vue'
import FooterBar from './components/FooterBar.vue'

// State for mobile view handling
const isMobile = ref(false)

// Check if device is mobile
const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024 // lg breakpoint in Tailwind
}

// Initialize mobile detection
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

const route = useRoute()
</script>

<template>
  <div class="container mx-auto">
    <HeaderBar />
    <div class="flex flex-col justify-center lg:flex-row lg:justify-center">
      <template v-if="isMobile">
        <div class="lg:w-1/4 p-2">
          <ProfileCard />
        </div>
        <div class="lg:w-3/4 p-2 overflow-y-auto">
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
    <FooterBar />
  </div>
</template>
