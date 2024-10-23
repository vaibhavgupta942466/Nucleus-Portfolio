<!-- src/components/ThemeToggle.vue -->
<template>
  <button
    class="transition-transform items-center hover:scale-110 rounded"
    @click="toggleTheme"
  >
    <div class="w-10 h-10 rounded-full mb-1 flex justify-center items-center">
      <img
        :src="isDarkMode ? '/image/sun.svg' : '/image/moon.svg'"
        :alt="isDarkMode ? 'Moon Icon' : 'Sun Icon'"
        class="w-7 h-7"
      />
    </div>
  </button>
</template>

<script setup>
import { useTheme } from '../composables/useTheme'

const { isDarkMode, toggleTheme } = useTheme()
</script>
