<!-- src/components/SidebarMemu.vue -->
<template>
  <div v-if="!isMobile" class="container mx-auto shadow-md rounded p-4">
    <div class="container flex flex-col">
      <router-link
        v-for="item in router.getRoutes().filter(route => {
          return (
            // have meta.menu set to true
            route?.meta?.menu === true &&
            // are not the root route
            route.path !== '/' &&
            // optionally: exclude dynamic routes
            !route.path.includes('/:')
          )
        })"
        :key="item.path"
        :to="item.path"
        class="flex flex-col items-center hover:bg-blue font-semibold p-4 last:mb-0 rounded transition-transform hover:scale-110"
        :class="
          route.path === item.path || route.path === item?.aliasOf?.path
            ? 'bg-blue'
            : ''
        "
      >
        <div class="w-10 h-10 rounded-full flex justify-center items-center">
          <img
            :src="item?.meta?.icon"
            :alt="`${item?.meta?.label} Icon`"
            class="w-6 h-6"
          />
        </div>
        <p class="text-sm">{{ item?.meta?.label }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { router } from '@/router'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMobile = ref(false)

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
