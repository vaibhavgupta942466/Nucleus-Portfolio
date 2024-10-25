import { createRouter, createWebHistory } from 'vue-router'
import { ref } from 'vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ResumeView from '@/views/ResumeView.vue'
import WorkView from '@/views/WorkView.vue'
import BlogView from '@/views/BlogView.vue'
import ContactView from '@/views/ContactView.vue'
import NotFoundView from '../views/NotFoundView.vue'

// Create a reactive mobile state
const isMobile = ref(false)

// Function to check if device is mobile
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768 // Adjust breakpoint as needed
}

// Initialize mobile detection
if (typeof window !== 'undefined') {
  // Initial check
  checkMobile()

  // Add resize listener
  window.addEventListener('resize', checkMobile)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: HomeView,
      meta: { allowMobile: true },
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      // component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView,
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
      meta: { allowMobile: true },
      // Redirect users to the home page when they attempt to access an undefined route.
      // redirect: '/',
    },
  ],
})

// Router navigation guard
router.beforeEach((to, from, next) => {
  // Check current device state
  const currentlyMobile = isMobile.value

  // Handle mobile navigation
  if (currentlyMobile) {
    // If on mobile and trying to access a non-home route
    if (to.path !== '/' && !to.query.mobileRedirect) {
      // Store the original route data
      next({
        path: '/',
        query: {
          mobileRedirect: true,
          intendedRoute: to.path,
          intendedParams: JSON.stringify(to.params),
          intendedQuery: JSON.stringify(to.query),
        },
      })
    } else {
      next()
    }
  } else {
    // If on desktop and was previously redirected
    if (to.query.mobileRedirect) {
      // Restore the original route
      const originalPath = to.query.intendedRoute || '/'
      const originalParams = JSON.parse(to.query.intendedParams || '{}')
      const originalQuery = JSON.parse(to.query.intendedQuery || '{}')

      next({
        path: originalPath,
        params: originalParams,
        query: originalQuery,
      })
    } else {
      next()
    }
  }
})

// Clean up function to remove event listener
const cleanupRouter = () => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', checkMobile)
  }
}

export { router, cleanupRouter }
