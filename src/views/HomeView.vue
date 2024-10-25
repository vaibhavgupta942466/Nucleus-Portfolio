<!-- HomeView.vue -->
<script setup>
import AboutView from './AboutView.vue'
import ResumeView from './ResumeView.vue'
import WorkView from './WorkView.vue'
import BlogView from './BlogView.vue'
import ContactView from './ContactView.vue'
import ProfileCard from '@/components/ProfileCard.vue'

import { ref, onMounted } from 'vue'
// State for mobile view handling
const isMobile = ref(false)
const isTablet = ref(false)

// Check if device is mobile
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768 // lg breakpoint in Tailwind
}

// Check if device is mobile
const checkTablet = () => {
  isTablet.value = window.innerWidth < 1024 && window.innerWidth >= 768 // lg breakpoint in Tailwind
}

// Initialize mobile detection
onMounted(() => {
  checkMobile()
  checkTablet()
  window.addEventListener('resize', checkMobile, checkTablet)
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
