<template>
  <div class="container flex flex-col justify-between items-center gap-2">
    <!-- Custom Navigation Created For Home Page at the center of page -->
    <div
      class="flex w-full flex-col gap-2 xl:flex-row justify-center items-center"
    >
      <router-link
        v-for="item in filteredRoutes"
        :key="item.path"
        :to="item.path"
        class="flex flex-col items-center rounded-md"
        @mouseenter="hoveredRoute = item.meta.label"
        @mouseleave="hoveredRoute = 'Vaibhav'"
      >
        <!-- Conditional Rendering for About and Contact Routes -->
        <div
          v-if="['/about', '/contact'].includes(item.path)"
          class="slide-navigation-button"
          :class="
            item.path === '/about'
              ? '-rotate-90 absolute left-0 top-1/3'
              : 'rotate-90 absolute right-0 top-1/3'
          "
        >
          <div
            class="rounded-xl px-2 font-bold"
            :class="
              isDarkMode
                ? 'animated-background-route-dark'
                : 'animated-background-route'
            "
          >
            {{ item.meta.label }}
          </div>
        </div>

        <!-- Conditional Rendering for Resume, Work, and Blog Routes -->
        <div
          v-else
          class="flex justify-center items-center clip-hexagon w-32 h-32 md:w-40 md:h-40 xl:w-60 xl:h-60"
          :class="
            isDarkMode
              ? 'animated-background-route-dark'
              : 'animated-background-route'
          "
        >
          <img
            :src="item?.meta?.icon || defaultIcon"
            :alt="item?.meta?.label || 'Default Label'"
            class="duration-1000 ease-in-out hover:w-40 hover:h-40 slide-y-enter-active w-16 h-16 md:w-20 md:h-20 xl:w-32 xl:h-32"
          />
        </div>
      </router-link>
    </div>

    <!-- Title Animation just after custom navigation -->
    <div
      class="flex w-full justify-center item-center opacity-30 overflow-hidden pointer-events-none"
    >
      <transition name="right-to-left" mode="out-in">
        <div
          v-if="hoveredRoute"
          :key="hoveredRoute"
          class="text-[10vw] md:text-[14vw] xl:text-[18vw] font-extrabold uppercase text-gray-800 dark:text-gray-400 right-to-left-enter-active"
        >
          {{ hoveredRoute }}
        </div>
      </transition>
    </div>

    <!-- Social Links at the Bottom Right-->
    <div v-if="route.path" key="social-links" class="absolute bottom-4 right-4">
      <div class="flex flex-col gap-2 item-center right-enter-active">
        <a
          v-for="social in socialLinks"
          :key="social.url"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-xl bg-gray-100 dark:bg-gray-900 animate-bounce duration-1000 ease-in-out"
        >
          <div class="w-5 h-5 flex justify-center items-center">
            <img :src="social.icon" alt="Social Icon" class="w-3 h-3" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { socialLinks } from '@/constant'
import router from '@/router'
import { ref } from 'vue'
import { useTheme } from '@/composables/useTheme'
import { useRoute } from 'vue-router'

const route = useRoute()

// Theme management using the useTheme composable
const { isDarkMode } = useTheme()

const hoveredRoute = ref('Vaibhav') // Default title

// Default icon if none is provided
const defaultIcon = '/path/to/default/icon.png'

// Filter routes in the script for better maintainability
const filteredRoutes = router.getRoutes().filter(route => {
  return (
    route?.meta?.menu === true &&
    ['/about', '/resume', '/work', '/blog', '/contact'].includes(route.path) &&
    !route.path.includes('/:')
  )
})
</script>

<style scoped>
.slide-navigation-button {
  animation: slideNavigationButton 0.5s ease-in-out;
}

/* Slide Navigation Animation */
@keyframes slideNavigationButton {
  0% {
    transform: translateY(-500%);
    opacity: 0;
  }
  100% {
    transform: translateY(0), rotate(90deg);
    opacity: 1;
  }
}

.clip-hexagon {
  clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
}
</style>
