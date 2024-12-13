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
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div
    class="container mx-auto min-h-screen"
    :class="['/', '/home'].includes(route.path) ? 'w-full' : 'w-10/12'"
  >
    <!-- Ensures the container takes at least full height of the screen -->
    <HeaderBar :class="route.path === '/home' ? 'sticky top-0 z-10' : ''" />
    <div
      class="flex flex-col justify-center xl:flex-row xl:justify-center h-full gap-2"
      @click="menuStore.closeMenu"
    >
      <ProfileCard
        class="xl:w-1/4 h-full"
        :class="route.path === '/home' ? 'hidden' : 'block'"
      />
      <!-- Ensures ProfileCard takes full height -->
      <RouterView
        class="xl:w-full overflow-y-auto h-full"
        :class="route.path === '/home' ? 'fixed top-0 left-0' : ''"
      />
      <!-- Ensures RouterView takes full height -->
      <SidebarMenu
        class="xl:w-1/12 h-full hidden sticky top-0"
        :class="route.path === '/home' ? 'hidden' : 'xl:block'"
      />
      <!-- Ensures SidebarMenu takes full height -->
    </div>
    <FooterBar :class="route.path === '/home' ? 'hidden' : 'block'" />
  </div>
</template>
