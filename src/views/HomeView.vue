<template>
  <!-- Landing Animation Template -->
  <template v-if="showLanding">
    <div class="h-screen w-full bg-black flex items-center justify-center">
      <div
        class="text-md md:text-md text-green tracking-tight opacity-40 typewriter"
      >
        <span>{{ displayedText }}</span>
      </div>
      <div
        role="status"
        class="absolute top-40 z-1000 animate-pulse duration-500 ease-in-out"
      >
        <svg
          aria-hidden="true"
          class="w-40 h-40 text-gray-200 animate-spin dark:text-gray-600 fill-blue"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </template>

  <template v-else>
    <div class="h-screen w-full overflow-hidden animated-background">
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
            class="tracking-wider absolute top-80 block animated-background-route rounded-xl px-2 rounded font-bold"
            :class="
              item.path === '/about'
                ? '-rotate-90 left-0 '
                : 'rotate-90 right-0 '
            "
          >
            {{ item.meta.label }}
          </div>
          <div
            v-else
            class="w-60 h-60 flex justify-center items-center animated-background-route clip-hexagon"
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
        class="absolute inset-x-0 bottom-12 flex justify-center items-center opacity-30 pointer-events-none"
      >
        <div
          ref="titleElement"
          class="pl-2 md:pl-4 xl:pl-8 text-center text-[10vw] md:text-[14vw] lg:text-[18vw] font-extrabold uppercase text-gray-800 tracking-widest slide-text"
        >
          {{ hoveredRoute }}
        </div>
      </div>

      <!-- Footer Social Links -->
      <div class="absolute bottom-3 right-6 flex flex-col gap-2 z-10">
        <a
          v-for="social in socialLinks"
          :key="social.url"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-xl bg-white dark:bg-gray-900 transition-all animate-bounce duration-500 ease-in-out"
        >
          <div class="w-5 h-5 flex justify-center items-center">
            <img :src="social.icon" alt="Social Icon" class="w-3 h-3" />
          </div>
        </a>
      </div>
    </div>
  </template>
</template>

<script setup>
import { socialLinks } from '@/constant'
import router from '@/router'
import { ref, watch, onMounted } from 'vue'

const showLanding = ref(true) // Initially show the landing animation
const scriptText = `
C:\\Users\\nucleus> .code
C:\\Users\\nucleus> npx nucleus-creator-portfolio
C:\\Users\\nucleus> cd nucleus-creator-portfolio
C:\\Users\\nucleus\\nucleus-creator-portfolio> npm install
C:\\Users\\nucleus\\nucleus-creator-portfolio> npm run dev
`

const displayedText = ref('') // Text being shown character by character

onMounted(() => {
  let i = 0
  const typingSpeed = 25 // Adjust typing speed in milliseconds
  const totalDuration = scriptText.length * typingSpeed // Calculate total duration based on script length
  const interval = setInterval(() => {
    if (i < scriptText.length) {
      displayedText.value += scriptText[i]
      i++
    } else {
      clearInterval(interval) // Stop the interval once the text is fully displayed
    }
  }, typingSpeed)

  // Switch to the main page after the full script is typed
  setTimeout(() => {
    showLanding.value = false
  }, totalDuration + 500) // Give some extra time for the loading state after the script finishes
})
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
.typewriter {
  font-family: Georgia, 'Times New Roman', Times, serif;
  white-space: pre; /* Preserve spaces and line breaks */
  overflow: hidden;
}

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
