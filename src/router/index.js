import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Users from '../views/users/Users.vue'
import SignIn from '../views/SignIn.vue'
import store from '../store/auth.js'
Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
    meta: {
      requireAuth: true,
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth && !store.state.authenticated) next({ name:'SignIn' })
  else next()
})

export default router
