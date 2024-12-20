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
  }, totalDuration + 1000) // Give some extra time for the loading state after the script finishes
})
</script>

<template>
  <template v-if="showLanding"><LandingView /> </template>
  <template v-else>
    <div
      class="container mx-auto min-h-screen"
      :class="['/', '/home'].includes(route.path) ? 'w-full' : 'w-10/12'"
    >
      <!-- Ensures the container takes at least full height of the screen -->
      <HeaderBar />
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

        <RouterView :key="$route.fullPath" class="xl:w-full h-full" />
        <!-- Ensures RouterView takes full height -->

        <!-- Transition for SidebarMenu -->
        <Transition name="right" mode="out-in">
          <template v-if="route.path !== '/home'">
            <SidebarMenu class="xl:w-1/12 h-full hidden xl:block" />
          </template>
        </Transition>
      </div>
      <FooterBar :class="route.path === '/home' ? 'hidden' : 'block'" />
    </div>
  </template>
</template>
