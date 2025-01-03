<!-- App.vue -->

<script setup>
import { RouterView, useRoute } from 'vue-router'
import LandingView from './views/LandingView.vue'
import ProfileCard from './components/ProfileCard.vue'
import SidebarMenu from './components/SidebarMenu.vue'
import HeaderBar from './components/HeaderBar.vue'
import FooterBar from './components/FooterBar.vue'

import { useMenuStore } from './stores/menuStore'

// Initialize the store
const menuStore = useMenuStore()

const route = useRoute()

import { ref, onMounted } from 'vue'
import { scriptText, typingSpeed } from '@/constant'

const showLanding = ref(true) // Initially show the landing animation

// Theme management using the useTheme composable
import { useTheme } from '@/composables/useTheme'
const { isDarkMode } = useTheme()

onMounted(() => {
  const totalDuration = scriptText.length * typingSpeed // Calculate total duration based on script length
  setTimeout(() => {
    showLanding.value = false
  }, totalDuration + 500) // Give some extra time for the loading state after the script finishes
})
</script>

<template>
  <div v-show="showLanding">
    <LandingView />
  </div>
  <div v-show="!showLanding">
    <div
      class="container mx-auto relative min-h-screen"
      :class="
        ['/', '/home'].includes(route.path)
          ? `${route.path === '/home' ? (isDarkMode ? 'animated-background-dark' : 'animated-background') : ''}`
          : 'w-10/12 animate-header-resize-in'
      "
    >
      <Transition name="slide-y" mode="out-in">
        <HeaderBar :key="route.path === '/home'" />
      </Transition>

      <div
        class="container flex flex-col justify-center item-center gap-1 xl:flex-row xl:gap-2 xl:justify-center xl:items-start"
        @click="menuStore.closeMenu"
      >
        <!-- Transition for ProfileCard -->
        <template v-if="route.path !== '/home'">
          <ProfileCard class="xl:w-1/4" />
        </template>

        <RouterView class="xl:w-full overflow-y-auto" />

        <!-- Transition for SidebarMenu -->
        <template v-if="route.path !== '/home'">
          <SidebarMenu class="xl:w-1/12" />
        </template>
      </div>

      <template v-if="route.path !== '/home'">
        <FooterBar />
      </template>
    </div>
  </div>
</template>
