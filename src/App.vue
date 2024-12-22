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
      class="container mx-auto min-h-screen"
      :class="
        ['/', '/home'].includes(route.path)
          ? 'w-full'
          : 'animate-header-resize-in w-10/12'
      "
    >
      <Transition name="slide-y" mode="out-in">
        <HeaderBar :key="route.path === '/home'" />
      </Transition>

      <div
        class="flex flex-col justify-center xl:flex-row xl:justify-center h-full gap-2"
        @click="menuStore.closeMenu"
      >
        <!-- Transition for ProfileCard -->
        <Transition name="left" mode="out-in">
          <template v-if="route.path !== '/home'">
            <ProfileCard class="xl:w-1/4 h-full" />
          </template>
        </Transition>

        <RouterView class="xl:w-full overflow-y-auto h-full" />

        <!-- Transition for SidebarMenu -->
        <Transition name="right" mode="out-in">
          <template v-if="route.path !== '/home'">
            <SidebarMenu class="xl:w-1/12 h-full hidden xl:block" />
          </template>
        </Transition>
      </div>

      <template v-if="route.path !== '/home'">
        <FooterBar />
      </template>
    </div>
  </div>
</template>
