import vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'
import Friends from '../views/Friends/index.vue'
import Cart from '../views/Cart/index.vue'
import Search from '../views/Search/index.vue'
import NewsList from '../views/Home/news/NewsList/index.vue'
import NewsInfo from '../views/Home/news/NewsInfo/index.vue'
import PhotoList from '../views/Home/photos/PhotoList/PhotoList.vue'
import PhotoInfo from '../views/Home/photos/PhotoInfo/PhotoInfo.vue'

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
  },
  {
    path: '/home/newslist',
    component: NewsList,
    meta: {
      title: '新闻列表'
    }
  },
  {
    path: '/home/newsinfo/:id',
    component: NewsInfo,
    props: true,
    meta: {
      title: '新闻详情'
    }
  },
  {
    path: '/home/photolist',
    component: PhotoList,
    meta: {
      title: '图片列表'
    }
  },
  {
    path: '/home/photoinfo/:id',
    component: PhotoInfo,
    props: true,
    meta: {
      title: '图片详情'
    }
  }
]

const router = new VueRouter({
  routes
})
export default router
