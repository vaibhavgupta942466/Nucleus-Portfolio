<!-- App.vue -->

<script setup>
import { RouterView } from 'vue-router'
import ProfileCard from './components/ProfileCard.vue'
import SidebarMenu from './components/SidebarMenu.vue'
import HeaderBar from './components/HeaderBar.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<template>
  <div class="container mx-auto">
    <HeaderBar />
    <div class="flex flex-col lg:flex-row justify-center lg:justify-between">
      <div
        class="lg:w-1/4 p-2 app-profile-card"
        :style="{ transform: 'translateY(-100px)' }"
      >
        <ProfileCard />
      </div>
      <div class="lg:w-3/4 p-2 overflow-y-auto">
        <RouterView />
      </div>
      <div class="lg:w-1/16 p-2">
        <SidebarMenu />
      </div>
    </div>
    <FooterBar />
  </div>
</template>
