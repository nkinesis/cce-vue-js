import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/_HomeView.vue'
import A_ListExample from '../views/A_ListExample.vue'
import B_VModel from '../views/B_VModel.vue'
import C_ComputedProp from '../views/C_ComputedProp.vue'
import D_StyleBindings from '../views/D_StyleBindings.vue'
import E_FallthroughAttr from '../views/E_FallthroughAttr.vue'
import F_Refs from '../views/F_Refs.vue'
import G_Watchers from '../views/G_Watchers.vue'
import H_ProvideInject1 from '../views/H_ProvideInject1.vue'
import I_ProvideInject2 from '../views/I_ProvideInject2.vue'
import J_Composable from '../views/J_Composable.vue'
import K_Async from '../views/K_Async.vue'
import L_CustomDirectives from '../views/L_CustomDirectives.vue'
import M_KeepAlive from '../views/M_KeepAlive.vue'
import N_StateMgmt from '../views/N_StateMgmt.vue'
import O_Transition from '../views/O_Transition.vue'
import R_XSS from '../views/R_XSS.vue'
import S_JsonServer from '../views/S_JsonServer.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/list',
    name: 'list',
    component: A_ListExample 
  },
  {
    path: '/vmodel',
    name: 'vmodel',
    component: B_VModel
  },
  {
    path: '/computed-prop',
    name: 'computed-prop',
    component: C_ComputedProp
  },
  {
    path: '/style-bindings',
    name: 'style-bindings',
    component: D_StyleBindings
  },
  {
    path: '/fallthrough-attr',
    name: 'fallthrough-attr',
    component: E_FallthroughAttr
  },
  {
    path: '/refs',
    name: 'refs',
    component: F_Refs
  },
  {
    path: '/watchers',
    name: 'watchers',
    component: G_Watchers
  },
  {
    path: '/provide-inject1',
    name: 'provide-inject1',
    component: H_ProvideInject1
  },
  {
    path: '/provide-inject2',
    name: 'provide-inject2',
    component: I_ProvideInject2
  },
  {
    path: '/composable',
    name: 'composable',
    component: J_Composable
  },
  {
    path: '/async',
    name: 'async',
    component: K_Async
  },
  {
    path: '/custom-directives',
    name: 'custom-directives',
    component: L_CustomDirectives
  },
  {
    path: '/keep-alive',
    name: 'keep-alive',
    component: M_KeepAlive
  },
  {
    path: '/state-mgmt',
    name: 'state-mgmt',
    component: N_StateMgmt
  },
  {
    path: '/transition',
    name: 'transition',
    component: O_Transition
  },
  {
    path: '/dynamic-routes/:id',
    name: 'dynamic-routes',
    component: () => import('@/views/P_DynamicRoutes')
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: () => import('@/views/Q_NotFound') 
  },
  {
    path: '/xss/:query',
    name: 'xss',
    component: R_XSS
  },
  {
    path: '/json-server/:query',
    name: 'json-server',
    component: S_JsonServer
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
