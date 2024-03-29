import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Research from '@/components/Research.vue'
import Blogs from '@/components/Blogs.vue'
import Blog from '@/components/Blog.vue'
import Login from '@/components/Login.vue'
import PasswordForgotten from '@/components/PasswordForgotten.vue'
import PasswordReset from '@/components/PasswordReset.vue'
import Register from '@/components/Register.vue'
import Service from '@/components/Service.vue'
import NotFound from '@/components/NotFound.vue'

// import * as $ from '@js/bootstrap.min.js'

// import { $ } from '../jquery-3.1.1';
// import { $ } from "../../public/js/jquery.min.js"
// import * as $ from '../../public/js/jquery.min.js';

// import * as $ from 'jquery'
// import * as $ from 'jquery'
// const jQuery = $

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
      component: About
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contact
    },
    {
      path: '/research/:type',
      name: 'Research',
      component: Research
    },
    // {
    //   path: '/research/insight',
    //   name: 'ResearchInsight',
    //   component: Research
    // },
    // {
    //   path: '/research/studies',
    //   name: 'ResearchStudy',
    //   component: Research
    // },
    {
      path: '/blogs/:tag',
      name: 'BlogTag',
      component: Blogs
    },
    {
      path: '/blog/:id',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/service/:id',
      name: 'Service',
      component: Service
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/forgot/password',
      name: 'PasswordForgotten',
      component: PasswordForgotten
    },
    {
      path: '/reset/password',
      name: 'PasswordReset',
      component: PasswordReset
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
    { 
      path: '/:pathMatch(.*)', 
      name: 'not-found', 
      component: NotFound
    }
  ]
})

export default router
