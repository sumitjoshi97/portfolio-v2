import { lazy } from 'react'

export default [
  {
    component: lazy(() => import('../views/ProjectDevConnect')),
    path: '/project/devConnect'
  },
  {
    component: lazy(() => import('../views/ProjectEmaily')),
    path: '/project/emaily'
  },
  {
    component: lazy(() => import('../views/ProjectCart')),
    path: '/project/cart'
  },
  {
    component: lazy(() => import('../views/ProjectSmartbrain')),
    path: '/project/smartbrain'
  },
  {
    component: lazy(() => import('../views/ProjectBurger')),
    path: '/project/burger'
  },
  {
    component: lazy(() => import('../views/Home')),
    path: '/',
    exact: true
  }
]
