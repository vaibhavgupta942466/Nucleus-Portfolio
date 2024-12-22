<template>
  <!-- Landing Animation Template -->
  <div
    class="container bg-[#1e1e1e] h-screen w-full flex flex-col gap-2 relative overflow-hidden animated-background-dark"
  >
    <!-- Big N in Background -->
    <div class="absolute inset-0 flex items-center">
      <!-- Big N in Background -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="14.5 8 40 40"
        preserveAspectRatio="xMinYMin meet"
        fill="none"
      >
        <path
          d="M39.8687 42.0055L18.4378 14.4H14.3999V43.592H17.6302 V18.5023 L37.333 43.9587 C38.222 43.3637 39.069 42.7108 39.8687 42.0055Z"
          fill="url(#gradient0)"
        />
        <rect
          x="33"
          y="14.4"
          width="3.2"
          height="23.2"
          fill="url(#gradient1)"
        />
        <defs>
          <linearGradient
            id="gradient0"
            x1="29.0666"
            y1="12.0667"
            x2="38.5332"
            y2="42.8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#e2e8f0" />
            <stop offset="1" stop-color="#e2e8f0" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="gradient1"
            x1="32.2667"
            y1="14.4"
            x2="32.2132"
            y2="33.5001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#e2e8f0" />
            <stop offset="1" stop-color="#e2e8f0" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div
      class="absolute w-full xl:w-5/12 flex-row bottom-0 bg-[#1e1e1e] rounded-sm pb-1"
    >
      <div
        class="p-1 text-[#e2e8f0] bg-[#000000] rounded-md text-bold uppercase"
      >
        >_ nucleus@root: ~./
      </div>
      <div
        class="text-sm xl:text-xl text-green tracking-tight typewriter opacity-40 pb-5"
      >
        <span>{{ displayedText }}</span>
      </div>
      <div class="bg-gray-200 dark:bg-gray-700">
        <div
          class="bg-green text-xs font-medium text-black text-center p-0.5 leading-none opacity-80"
          :style="{ width: `${progress}%` }"
        >
          {{ `${progress}%` }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { scriptText, typingSpeed } from '@/constant'

const displayedText = ref('') // Text being shown character by character
const progress = ref('')

onMounted(() => {
  let i = 0
  const scriptLength = scriptText.length
  const interval = setInterval(() => {
    if (i < scriptLength) {
      displayedText.value += scriptText[i]
      i++
      progress.value = parseInt((i / scriptLength) * 100)
    } else {
      clearInterval(interval) // Stop the interval once the text is fully displayed
    }
  }, typingSpeed)
})
</script>

<style scoped>
.typewriter {
  white-space: pre; /* Preserve spaces and line breaks */
  overflow: hidden;
}
</style>
