<!-- HomeView.vue -->
<script setup>
import ProfileCard from '../components/ProfileCard.vue'

import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  const appProfileCard = document.querySelector('.app-profile-card')

  if (appProfileCard) {
    appProfileCard.style.display = 'none'
  }
})

onUnmounted(() => {
  const appProfileCard = document.querySelector('.app-profile-card')
  if (appProfileCard) {
    appProfileCard.style.display = ''
  }
})
</script>

<template>
  <div class="container lg:w-3/5">
    <ProfileCard />
  </div>
</template>
