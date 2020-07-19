import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,

  }
]

const createRouter = () => new Router({
  routes: constantRoutes
})

const router = createRouter()

router.beforeEach((to, from, next) => {
  const haveToken = Cookies.get('token')
  console.log(to, from, haveToken)
  next()
  if (to.path === '/login') {
    next()
  } else {
    if (haveToken) {
      next()
    } else {
      next('/login')
    }
  }

})

export default router