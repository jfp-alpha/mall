import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from 'views/Home/Home'
import Category from 'views/Category/Category'
import Shopcart from 'views/Shopcart/Shopcart'
import Profile from 'views/Profile/Profile'
import Detail from 'views/detail/Detail'

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/shopcart',
    component:Shopcart
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
