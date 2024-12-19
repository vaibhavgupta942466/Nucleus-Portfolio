// src/composables/useTheme.js
import { ref, computed, onMounted } from 'vue'

const theme = ref('light') // Default to light mode

export function useTheme() {
  // Initialize theme from local storage if available
  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      theme.value = savedTheme
      applyTheme(savedTheme)
    } else {
      // Default to user's system preference
      const deviceTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'
      theme.value = deviceTheme
      applyTheme(deviceTheme)
    }
  })

  const isDarkMode = computed(() => theme.value === 'dark')

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    applyTheme(theme.value)
    localStorage.setItem('theme', theme.value) // Save theme preference
  }

  function applyTheme(themeValue) {
    document.documentElement.setAttribute('data-theme', themeValue)
    if (themeValue === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return { theme, isDarkMode, toggleTheme }
}
