import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Users from '../views/users/Users.vue'
import Login from '../views/Login.vue'
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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      requireAuth: true,
      requireAdmin: true,
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
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
  // Si la route requiert une authentifcation et que l'utilisateur n'est pas authentifié
  // on renvoit à la connexion
  if(to.meta.requireAuth && !store.state.authenticated) next({ name:'Login' })
  // Si la route requiert que l'user soit isAdmin et que ce n'est pas le cas
  // on revoie à la page d'accueil
  else {
    if (to.meta.requireAdmin && !store.state.user.isAdmin) next({name: 'Accueil'})
    else next()
  } next()
})

export default router
