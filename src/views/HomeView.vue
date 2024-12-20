<template>
  <div
    class="h-screen w-full overflow-hidden f-fill"
    :class="[
      isDarkMode ? 'animated-background-dark' : 'animated-background',
      route.path === '/home' ? 'absolute top-0 left-0' : '',
    ]"
  >
    <div
      class="flex justify-center items-center h-full flex-col lg:flex-row lg:gap-5 z-10"
    >
      <router-link
        v-for="item in filteredRoutes"
        :key="item.path"
        :to="item.path"
        class="flex flex-col items-center rounded-md"
        @mouseenter="hoveredRoute = item.meta.label"
        @mouseleave="hoveredRoute = 'Vaibhav'"
      >
        <!-- Alternating Triangular Boxes -->
        <div
          v-if="['/about', '/contact'].includes(item.path)"
          class="tracking-wider absolute top-80 slide-navigation-enter-active"
          :class="
            item.path === '/about' ? '-rotate-90 left-0 ' : 'rotate-90 right-0 '
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
        <div
          v-else
          class="w-60 h-60 flex justify-center items-center clip-hexagon"
          :class="
            isDarkMode
              ? 'animated-background-route-dark'
              : 'animated-background-route'
          "
        >
          <img
            :src="item?.meta?.icon || defaultIcon"
            :alt="item?.meta?.label || 'Default Label'"
            class="w-32 h-32 duration-500 ease-in-out hover:w-40 hover:h-40 slide-y-enter-active"
          />
        </div>
      </router-link>
    </div>

    <!-- Centered Title (Dynamic) -->
    <div
      class="absolute inset-0 h-full flex justify-center items-end opacity-30 pointer-events-none overflow-hidden"
    >
      <div
        ref="titleElement"
        class="text-[10vw] md:text-[14vw] lg:text-[18vw] font-extrabold uppercase text-gray-800 dark:text-gray-400 right-enter-active"
      >
        {{ hoveredRoute }}
      </div>
    </div>

    <!-- Footer Social Links -->
    <div
      class="absolute bottom-3 right-6 flex flex-col gap-2 z-10 right-to-left"
    >
      <a
        v-for="social in socialLinks"
        :key="social.url"
        :href="social.url"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-xl bg-gray-100 dark:bg-gray-900 animate-bounce duration-500 ease-in-out"
      >
        <div class="w-5 h-5 flex justify-center items-center">
          <img :src="social.icon" alt="Social Icon" class="w-3 h-3" />
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { socialLinks } from '@/constant'
import router from '@/router'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import { useTheme } from '@/composables/useTheme'

const route = useRoute()

// Theme management using the useTheme composable
const { isDarkMode } = useTheme()

const hoveredRoute = ref('Vaibhav') // Default title

// Reference to the title element
const titleElement = ref(null)

// Watch for changes in hoveredRoute to trigger animation
watch(hoveredRoute, () => {
  if (titleElement.value) {
    // Reset animation by removing and re-adding the class
    titleElement.value.classList.remove('right-enter-active')
    void titleElement.value.offsetWidth // Force reflow
    titleElement.value.classList.add('right-enter-active')
  }
})

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
.clip-hexagon {
  clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
}
</style>
