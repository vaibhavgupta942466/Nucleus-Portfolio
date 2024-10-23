<!-- HomeView.vue -->
<script setup>
import ProfileCard from '../components/ProfileCard.vue'

import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  const appProfileCard = document.querySelector('.app-profile-card')

  if (appProfileCard) {
    appProfileCard.style.opacity = 0
  }
})

onUnmounted(() => {
  const appProfileCard = document.querySelector('.app-profile-card')
  if (appProfileCard) {
    appProfileCard.style.opacity = 1
  }
})
</script>

<template>
  <div class="container lg:w-3/4">
    <ProfileCard />
  </div>
</template>
