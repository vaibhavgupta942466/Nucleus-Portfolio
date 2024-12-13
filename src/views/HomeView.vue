<template>
  <div class="grid h-screen w-full bg-[#202920]">
    <!-- Flex container to position the links at left-center and right-center -->
    <div class="flex items-center justify-between absolute w-full h-full">
      <!-- Left Center: About Link -->
      <div class="-rotate-90 tracking-wider absolute left-0">
        <router-link to="/about" class="block rounded"> About </router-link>
      </div>

      <!-- Right Center: Contact Link -->
      <div class="rotate-90 tracking-wider absolute right-0">
        <router-link to="/contact" class="block rounded"> Contact </router-link>
      </div>
    </div>

    <!-- Page Navigation -->
    <div class="flex justify-center items-end h-full flex-wrap">
      <router-link
        v-for="(item, index) in router.getRoutes().filter(route => {
          return (
            // have meta.menu set to true
            route?.meta?.menu === true &&
            // are not the root route
            ['/resume', '/work', '/blog'].includes(route.path) &&
            // optionally: exclude dynamic routes
            !route.path.includes('/:')
          )
        })"
        :key="item.path"
        :to="item.path"
        class="flex flex-col items-center rounded-md transition-transform hover:scale-110"
      >
        <!-- Alternating Triangular Boxes -->
        <div
          :class="[
            'w-80 h-80 flex justify-center items-center bg-gray-100 dark:bg-gray-900 p-4',
            index % 2 === 0 ? 'clip-triangle-up' : 'clip-triangle-down',
          ]"
        >
          <img
            :src="item?.meta?.icon"
            :alt="`${item?.meta?.label} Icon`"
            class="w-40 h-40"
          />
        </div>
      </router-link>
    </div>

    <!-- Centered NucleusCreator Text with 9xl font size -->
    <div class="flex justify-center items-end h-full">
      <h1 class="text-9xl font-extrabold text-white">NucleusCreator</h1>
    </div>

    <!-- Footer -->
    <div class="flex flex-col justify-end items-end gap-2 h-full">
      <a
        v-for="social in socialLinks"
        :key="social.url"
        :href="social.url"
        target="_blank"
        rel="noopener noreferrer"
        class="border rounded-xl"
      >
        <div class="w-5 h-5 rounded-xl flex justify-center items-center">
          <img :src="social.icon" alt="Social Icon" class="w-3 h-3" />
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { socialLinks } from '@/constant'
import router from '@/router'
</script>

<style scoped>
/* Upward-pointing triangle */
.clip-triangle-up {
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
}

/* Downward-pointing triangle */
.clip-triangle-down {
  clip-path: polygon(50% 100%, 100% 0%, 0% 0%);
}
</style>
