<!-- HomeView.vue -->
<script setup>
import AboutView from './AboutView.vue'
import ResumeView from './ResumeView.vue'
import WorkView from './WorkView.vue'
import BlogView from './BlogView.vue'
import ContactView from './ContactView.vue'
import ProfileCard from '@/components/ProfileCard.vue'

import { ref, onMounted, onUnmounted } from 'vue'
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
</script>

<template>
  <div v-if="isMobile">
    <AboutView />
    <ResumeView />
    <WorkView />
    <BlogView />
    <ContactView />
  </div>
  <div v-else-if="isTablet"></div>
  <div v-else>
    <ProfileCard />
  </div>
</template>
