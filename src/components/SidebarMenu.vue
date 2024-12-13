<!-- src/components/SidebarMemu.vue -->
<template>
  <div class="container flex flex-col mx-auto shadow-md rounded-xl p-2">
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
      class="flex flex-col items-center hover:bg-blue font-semibold m-2 p-1 first:mt-0 last:mb-0 rounded-md transition-transform hover:scale-110"
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
</template>

<script setup>
import router from '@/router'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
