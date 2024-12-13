<!-- src/components/ProfileCard.vue -->
<template>
  <div
    class="container flex flex-col items-center shadow-md rounded-xl w-full p-2 gap-3"
  >
    <!-- Profile Image -->
    <div class="w-25 h-25 rounded-xl overflow-hidden p-2">
      <img
        src="/image/profile-3.png"
        alt="Profile Image"
        class="w-full h-full object-cover rounded-xl shadow-lg"
      />
    </div>

    <!-- Name and Job Title -->
    <div class="text-center space-y-2">
      <h1
        class="text-2xl font-extrabold tracking-tight"
        style="font-family: Georgia, 'Times New Roman', Times, serif"
      >
        Vaibhav Gupta
      </h1>
      <h2 class="text-md font-semibold py-1 px-5 border rounded-lg shadow-lg">
        Software Developer
      </h2>
    </div>

    <!-- Social Media Links -->
    <div class="flex items-center space-x-2">
      <a
        v-for="social in socialLinks"
        :key="social.url"
        :href="social.url"
        target="_blank"
        rel="noopener noreferrer"
        class="transition-transform hover:scale-110 border rounded-xl"
      >
        <div
          class="w-10 h-10 rounded-xl flex justify-center items-center hover:bg-blue"
        >
          <img :src="social.icon" alt="Social Icon" class="w-6 h-6" />
        </div>
      </a>
    </div>

    <!-- Contact Info -->
    <div class="w-full max-w-md border rounded-xl p-2">
      <ul role="list" class="divide-y">
        <li
          v-for="item in contactInfo"
          :key="item.title"
          class="flex py-2 items-center"
        >
          <div class="w-8 h-8 flex justify-center items-center">
            <img :src="item.icon" :alt="`${item.title} Icon`" class="w-6 h-6" />
          </div>
          <div class="ml-3 flex-1 min-w-0">
            <p class="text-sm font-medium">{{ item.title }}</p>
            <p class="text-sm truncate">
              <a
                :href="item.link"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-blue"
              >
                {{ item.value }}
              </a>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex items-center justify-center">
      <button
        type="submit"
        :class="[
          'rounded bg-blue px-6 py-2 text-sm font-semibold shadow-sm transition-transform hover:scale-110',
          ['/home', '/'].includes(route.path) ? 'block' : 'hidden',
        ]"
      >
        Download Resume
      </button>
    </div>
  </div>
</template>

<script setup>
import { socialLinks, contactInfo } from '@/constant'

import { useRoute } from 'vue-router'
const route = useRoute()
</script>
