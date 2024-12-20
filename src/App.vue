<!-- App.vue -->

<script setup>
import { RouterView, useRoute } from 'vue-router'
import LandingView from './views/LandingView.vue'
import ProfileCard from './components/ProfileCard.vue'
import SidebarMenu from './components/SidebarMenu.vue'
import HeaderBar from './components/HeaderBar.vue'
import FooterBar from './components/FooterBar.vue'

import { useMenuStore } from './stores/menuStore'

// Initialize the store
const menuStore = useMenuStore()

const route = useRoute()

import { ref, onMounted } from 'vue'
import { scriptText, typingSpeed } from '@/constant'

const showLanding = ref(true) // Initially show the landing animation

onMounted(() => {
  const totalDuration = scriptText.length * typingSpeed // Calculate total duration based on script length
  setTimeout(() => {
    showLanding.value = false
  }, totalDuration + 1000) // Give some extra time for the loading state after the script finishes
})
</script>

<template>
  <template v-if="showLanding">
    <LandingView />
  </template>
  <template v-else>
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <div
          class="container flex flex-col"
          :class="['/', '/home'].includes(route.path) ? 'w-full' : 'w-10/12'"
        >
          <!-- Transition Wrapper -->
          <HeaderBar />
          <div
            class="flex flex-col justify-center xl:flex-row xl:justify-center gap-2 h-full"
            @click="menuStore.closeMenu"
          >
            <!-- Transition for ProfileCard -->
            <Transition name="left" mode="out-in">
              <template v-if="route.path !== '/home'">
                <ProfileCard class="xl:w-1/4 h-full" />
              </template>
            </Transition>

            <!-- Transition for main content -->
            <Transition name="stack-page" mode="out-in">
              <KeepAlive>
                <Suspense>
                  <!-- Main content -->
                  <component
                    class="w-full h-full overflow-y-auto"
                    :is="Component"
                  ></component>

                  <!-- Loading state -->
                  <template #fallback> Loading... </template>
                </Suspense>
              </KeepAlive>
            </Transition>

            <!-- Transition for SidebarMenu -->
            <Transition name="right" mode="out-in">
              <template v-if="route.path !== '/home'">
                <SidebarMenu class="xl:w-1/12 h-full hidden xl:block" />
              </template>
            </Transition>
          </div>
          <FooterBar />
        </div>
      </template>
    </RouterView>
  </template>
</template>
