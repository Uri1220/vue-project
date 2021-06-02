import Vue from 'vue'
import VueRouter from 'vue-router'
 import AuthGuard from './auth-guard'
import Login from '../components/Auth/Login'
import Home from '../views/Home.vue'
import Register from '../components/Auth/Register.vue'
import LinoleumMain from '../components/Linoleum/LinoleumMain.vue'
import LaminatMain from '../components/Laminat/LaminatMain.vue'
import Sinteros from '../components/Linoleum/Sinteros.vue'
import Juteks from '../components/Linoleum/Juteks.vue'
import TopLinoleum from '../components/Linoleum/TopLinoleum.vue'
import Kronostar from '../components/Laminat/Kronostar.vue'
import Egger from '../components/Laminat/Egger.vue'
import Checkout from '../components/Checkout'
import Delivery from '../views/Delivery'
import Payment from '../views/Payment'
import Contact from '../views/Contact'
import Sale from '../views/Sale'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
        beforeEnter: AuthGuard
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/linoleum/',
      name: 'LinoleumMain',
      component:LinoleumMain
    },
    {
      path: '/laminat/',
      name: 'LaminatMain',
      component:LaminatMain
    },
    {
      path: '/linoleum/sinteros/',
      name: 'Sinteros',
      component:Sinteros
    },
    {
      path: '/linoleum/juteks/',
      name: 'Juteks',
      component:Juteks
    },
    {
      path: '/linoleum/ivc/',
      name: 'TopLinoleum',
      component:TopLinoleum
    },
    {
      path: '/laminat/kronostar/',
      name: 'Kronostar',
      component:Kronostar
    },
    {
      path: '/laminat/egger/',
      name: 'Egger',
      component:Egger
    },
    {
      path: '/delivery',
      name: 'Delivery',
      component:Delivery
    },
    {
      path: '/payment',
      name: 'Payment',
      component:Payment
    },
    {
      path: '/contact',
      name: 'contact',
      component:Contact
    },
    {
      path: '/sale',
      name: 'Sale',
      component:Sale
    }
   
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
