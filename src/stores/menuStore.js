// src/stores/menu.js
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    isMenuOpen: false,
  }),

  getters: {
    getMenuState: state => state.isMenuOpen,
  },

  actions: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },

    setMenuOpen(value) {
      this.isMenuOpen = value
    },

    closeMenu() {
      this.isMenuOpen = false
    },

    openMenu() {
      this.isMenuOpen = true
    },
  },

  // Optional: persist state across page reloads
  persist: true,
})
