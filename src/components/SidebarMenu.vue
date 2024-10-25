<!-- src/components/SidebarMemu.vue -->
<template>
  <div v-if="!isMobile" class="container mx-auto shadow-md rounded p-4">
    <div class="container flex flex-col">
      <router-link
        v-for="item in menuItems"
        :key="item.path"
        :to="item.path"
        class="flex flex-col items-center hover:bg-blue font-semibold p-4 mb-4 last:mb-0 rounded transition-transform hover:scale-110"
        :class="route.path === item.path ? 'bg-blue' : ''"
      >
        <div class="w-10 h-10 rounded-full flex justify-center items-center">
          <img :src="item.icon" :alt="`${item.label} Icon`" class="w-6 h-6" />
        </div>
        <p class="text-sm">{{ item.label }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMobile = ref(false)
const menuItems = [
  {
    path: '/',
    label: 'Home',
    icon: '/image/home.svg',
  },
  {
    path: '/about',
    label: 'About',
    icon: '/image/profile.svg',
  },
  {
    path: '/resume',
    label: 'Resume',
    icon: '/image/resume.svg',
  },
  {
    path: '/work',
    label: 'Work',
    icon: '/image/work.svg',
  },
  {
    path: '/blog',
    label: 'Blog',
    icon: '/image/blog.svg',
  },
  {
    path: '/contact',
    label: 'Contact',
    icon: '/image/contact.svg',
  },
]

const handleResize = () => {
  isMobile.value = window.innerWidth < 1024
}

onMounted(() => {
  handleResize() // Call on initial render
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
