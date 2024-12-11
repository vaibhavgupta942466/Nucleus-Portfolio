<!-- App.vue -->

<script setup>
import { RouterView } from 'vue-router'
import ProfileCard from './components/ProfileCard.vue'
import SidebarMenu from './components/SidebarMenu.vue'
import HeaderBar from './components/HeaderBar.vue'
import FooterBar from './components/FooterBar.vue'

import { useMenuStore } from './stores/menuStore'

// Initialize the store
const menuStore = useMenuStore()
</script>

<template>
  <div class="container mx-auto min-h-screen">
    <!-- Ensures the container takes at least full height of the screen -->
    <HeaderBar />
    <div
      class="flex flex-col justify-center xl:flex-row xl:justify-center h-full"
      @click="menuStore.closeMenu"
    >
      <ProfileCard class="xl:w-1/4 p-2 h-full" />
      <!-- Ensures ProfileCard takes full height -->
      <RouterView class="xl:w-full xl:mx-2 p-2 overflow-y-auto h-full" />
      <!-- Ensures RouterView takes full height -->
      <SidebarMenu class="xl:w-1/12 p-2 h-full" />
      <!-- Ensures SidebarMenu takes full height -->
    </div>
    <FooterBar />
  </div>
</template>
