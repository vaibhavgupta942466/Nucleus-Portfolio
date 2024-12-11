import { createRouter, createWebHistory } from 'vue-router'
import { ref } from 'vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ResumeView from '@/views/ResumeView.vue'
import WorkView from '@/views/WorkView.vue'
import BlogView from '@/views/BlogView.vue'
import ContactView from '@/views/ContactView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import MobileLandingView from '@/views/MobileLandingView.vue' // Assuming a dedicated mobile landing view

// Reactive state for device type
const isMobile = ref(false)

// Function to detect device type
const checkDeviceType = () => {
  isMobile.value = window.innerWidth < 768 // Adjust breakpoint as needed
}

// Add event listener for responsive updates
window.addEventListener('resize', checkDeviceType)
checkDeviceType() // Initialize the check on load

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mobile-landing',
      component: MobileLandingView,
      meta: {
        allowMobile: true,
        label: 'Mobile Landing',
        icon: '/image/mobile.svg',
        menu: false,
        mobileOnly: true,
      },
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {
        allowMobile: false,
        label: 'Home',
        icon: '/image/home.svg',
        menu: true,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { label: 'About', icon: '/image/profile.svg', menu: true },
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView,
      meta: { label: 'Resume', icon: '/image/resume.svg', menu: true },
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView,
      meta: { label: 'Work', icon: '/image/work.svg', menu: true },
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
      meta: { label: 'Blog', icon: '/image/blog.svg', menu: true },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: { label: 'Contact', icon: '/image/contact.svg', menu: true },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
      meta: { allowMobile: true },
      redirect: '/home', // Redirect undefined routes to '/home'
    },
  ],
})

// Global Navigation Guard
router.beforeEach((to, from, next) => {
  // Check if the route is restricted to mobile or desktop
  if (to.meta.mobileOnly && !isMobile.value) {
    next('/home') // Redirect to desktop route for non-mobile devices
  } else if (!to.meta.allowMobile && isMobile.value) {
    next('/') // Redirect to mobile landing for mobile devices
  } else {
    next() // Allow navigation
  }
})

export default router
