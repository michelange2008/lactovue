import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Eleveurs from '../views/users/Eleveurs.vue'
import Eleveur from '../views/users/Eleveur.vue'
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
      // requireAuth: true,
      // requireAdmin: true,
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/eleveurs',
    name: 'Eleveurs',
    component: Eleveurs,
    meta: {
      // requireAuth: true,
    }
  },
  {
    path: '/eleveur/:id',
    name: 'Eleveur',
    component: Eleveur
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
