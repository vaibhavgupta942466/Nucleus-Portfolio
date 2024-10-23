import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ResumeView from '@/views/ResumeView.vue'
import WorkView from '@/views/WorkView.vue'
import BlogView from '@/views/BlogView.vue'
import ContactView from '@/views/ContactView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: HomeView,
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
      // Redirect users to the home page when they attempt to access an undefined route.
      // redirect: '/',
    },
  ],
})

export default router
