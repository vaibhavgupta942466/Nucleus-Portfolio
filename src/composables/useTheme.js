// src/composables/useTheme.js
import { ref, computed, onMounted } from 'vue'

const theme = ref('light') // Default to light mode

export function useTheme() {
  // Initialize theme from local storage if available
  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      theme.value = savedTheme
      document.documentElement.setAttribute('data-theme', savedTheme)
    } else {
      // Default to user's system preference
      const deviceTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'
      theme.value = deviceTheme
      document.documentElement.setAttribute('data-theme', deviceTheme)
    }
  })

  const isDarkMode = computed(() => theme.value === 'dark')

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme.value)
    localStorage.setItem('theme', theme.value) // Save theme preference
  }

  return { theme, isDarkMode, toggleTheme }
}
