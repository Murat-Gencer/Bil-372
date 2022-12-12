import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserPage from '../views/UserPage.vue'
import KayitPage from '../views/KayitPage.vue'
import EnterUser from '../views/EnterUser.vue'
import BuyCar from '../views/BuyCar.vue'
import TakeReservation from '../views/TakeReservation.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/userpage',
    name: 'UserPage',
    component: UserPage,    
  }, 
  {
    path: '/kayitpage',
    name: 'KayitPage',
    component: KayitPage,
  }, 
  {
    path: '/usarpage/enteruser',
      name: 'EnterUser',
      component: EnterUser,    
  },
  {
    path: '/usarpage/buycar',
    name: 'BuyCar',
    component: BuyCar,    
    },
    {
        path: '/usarpage/enteruser/takereservation',
        name: 'TakeReservation',
        component: TakeReservation,
    } 
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router