import { createRouter, createWebHashHistory } from 'vue-router'

import home from './views/home.vue'
import chat from './views/chat.vue'
import carApp from './views/car-app.vue'
import reviewApp from './views/review-app.vue'
import loginSignup from './views/login-signup.vue'
import userDetails from './views/user-details.vue'
import about from './views/about.vue'
import contact from './views/contact.vue'
import lesson from './views/lesson.vue'
import media from './views/media.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/car',
    name: 'car-app',
    component: carApp
  },
  {
    path: '/review',
    name: 'review',
    component: reviewApp
  },
  {
    path: '/chat',
    name: 'chat',
    component: chat
  },
  {
    path: '/login',
    name: 'loginSignup',
    component: loginSignup
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/media',
    name: 'media',
    component: media
  },
  {
    path: '/lesson',
    name: 'lesson',
    component: lesson
  },
  {
    path: '/user/:id',
    name: 'user-details',
    component: userDetails
  }
]


export const router = createRouter({
  routes,
  history: createWebHashHistory()
  // base: process.env.BASE_URL,
})

