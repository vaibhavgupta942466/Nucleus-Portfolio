<template>
  <div class="grid animated-background h-screen w-full overflow-hidden">
    <div class="flex justify-center items-center gap-10 h-full flex-wrap z-10">
      <router-link
        v-for="item in filteredRoutes"
        :key="item.path"
        :to="item.path"
        class="flex flex-col items-center rounded-md"
        @mouseenter="hoveredRoute = item.meta.label"
        @mouseleave="hoveredRoute = 'Vaibhav'"
      >
        <!-- Alternating Triangular Boxes -->
        <div v-if="['/about', '/contact'].includes(item.path)">
          <div
            :class="
              item.path === '/about'
                ? '-rotate-90 tracking-wider absolute left-0 top-80'
                : 'rotate-90 tracking-wider absolute right-0 top-80'
            "
          >
            <router-link
              :to="item.path"
              class="block animated-background-route rounded-xl px-2 rounded font-bold"
            >
              {{ item.meta.label }}
            </router-link>
          </div>
        </div>
        <div
          v-else
          :class="[
            'w-60 h-60 flex justify-center items-center animated-background-route clip-hexagon',
          ]"
        >
          <img
            :src="item?.meta?.icon || defaultIcon"
            :alt="item?.meta?.label || 'Default Label'"
            class="w-32 h-32 transition-all duration-1000 ease-in-out hover:w-40 hover:h-40"
          />
        </div>
      </router-link>
    </div>

    <!-- Centered Title (Dynamic) -->
    <div
      class="absolute bottom-12 left-0 w-full flex justify-center opacity-30 pointer-events-none"
    >
      <h1
        ref="titleElement"
        class="text-[18vw] font-extrabold uppercase text-gray-800 whitespace-nowrap tracking-widest slide-text"
      >
        {{ hoveredRoute }}
      </h1>
    </div>

    <!-- Footer Social Links -->
    <div class="absolute bottom-4 right-4 flex flex-col gap-2 z-10">
      <a
        v-for="social in socialLinks"
        :key="social.url"
        :href="social.url"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-xl animate-bounce bg-white dark:bg-gray-900 transition-all duration-500 ease-in-out"
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
import { ref, watch } from 'vue'

const hoveredRoute = ref('Vaibhav') // Default title

// Reference to the title element
const titleElement = ref(null)

// Watch for changes in hoveredRoute to trigger animation
watch(hoveredRoute, () => {
  if (titleElement.value) {
    // Reset animation by removing and re-adding the class
    titleElement.value.classList.remove('slide-text')
    void titleElement.value.offsetWidth // Force reflow
    titleElement.value.classList.add('slide-text')
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
/* Class to apply animation */
.slide-text {
  animation: slideIn 1s ease-in-out; /* Adjust duration and timing */
}

/* Keyframes for slide-in animation */
@keyframes slideIn {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.clip-hexagon {
  clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
}

/* Background Color Animation */
@keyframes backgroundColorChange {
  0% {
    background-color: #e4f2d8; /* Color 1 */
  }
  8.33% {
    background-color: #dcf5c8; /* Color 2 */
  }
  16.67% {
    background-color: #a3aa9d; /* Color 3 */
  }
  25% {
    background-color: #8ba576; /* Color 4 */
  }
  33.33% {
    background-color: #edd8f2; /* Color 5 */
  }
  41.67% {
    background-color: #d3afdb; /* Color 6 */
  }
  50% {
    background-color: #e0d8f2; /* Color 7 */
  }
  58.33% {
    background-color: #998bb1; /* Color 8 */
  }
  66.67% {
    background-color: #f0f2d8; /* Color 9 */
  }
  75% {
    background-color: #a8a883; /* Color 10 */
  }
  83.33% {
    background-color: #e5d8f2; /* Color 11 */
  }
  91.67% {
    background-color: #8a769b; /* Color 12 */
  }
  100% {
    background-color: #e4f2d8; /* Back to Color 1 */
  }
}

.animated-background-route {
  animation: backgroundColorChange 60s infinite ease-in-out;
}

.animated-background {
  animation: backgroundColorChange 60s infinite ease-in-out;

  /* Pixel Effect (uses gradients for retro-style pixelation) */
  background-size: 5px 5px; /* Adjust pixel size with space between */
  background-image: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.1) 25%,
    transparent 25%,
    transparent 50%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.1) 75%,
    transparent 75%,
    transparent
  );
  image-rendering: pixelated; /* Pixel effect */

  /* Border simulation for each "pixel" */
  background-repeat: repeat;
}
</style>
