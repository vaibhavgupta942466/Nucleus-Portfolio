<!-- src/components/HeaderBar.vue -->
<template>
  <header>
    <div class="container mx-auto py-20">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <RouterLink to="/">
            <img
              src="/image/logo.png"
              alt="Nucleus Creator Logo"
              class="w-10 h-10"
            />
          </RouterLink>
          <h1
            class="text-xl md:text-2xl font-bold text-black dark:text-white ml-2"
          >
            Nucleus Creator
          </h1>
        </div>
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'
</script>
