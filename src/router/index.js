import vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'
import Friends from '../views/Friends/index.vue'
import Cart from '../views/Cart/index.vue'
import Search from '../views/Search/index.vue'

vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'home',
      active: 0
    }
  },
  {
    path: '/friends',
    component: Friends,
    meta: {
      title: 'friends',
      active: 1
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      title: 'cart',
      active: 2
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      title: 'search',
      active: 3
    }
  }
]

const router = new VueRouter({
  routes
})
export default router
