import { createRouter, createWebHashHistory } from 'vue-router'
import A_HomeView from '../views/A_HomeView.vue'
import A_VModel from '../views/A_VModel.vue'
import B_Computed_Prop from '../views/B_Computed_Prop.vue'
import C_Watchers from '../views/C_Watchers.vue'
import D_Style_Bindings from '../views/D_Style_Bindings.vue'
import E_Fallthrough_Attr from '../views/E_Fallthrough_Attr.vue'
import F_Refs from '../views/F_Refs.vue'
import G_Provide_Inject1 from '../views/G_Provide_Inject1'
import G_Provide_Inject2 from '../views/G_Provide_Inject2'
import H_Async from '../views/H_Async'
import I_Composable from '../views/I_Composable'
import J_Custom_Directives from '../views/J_Custom_Directives'
import K_Transition from '../views/K_Transition'
import L_KeepAlive from '../views/L_KeepAlive'
import M_State_Mgmt from '../views/M_State_Mgmt'
import P_XSS_Example from '../views/P_XSS_Example'
import Q_Json_Server from '../views/Q_Json_Server'

const routes = [
  {
    path: '/',
    name: 'home',
    component: A_HomeView
  },
  {
    path: '/exampleA',
    name: 'exampleA',
    component: A_VModel
  },
  {
    path: '/exampleB',
    name: 'exampleB',
    component: B_Computed_Prop
  },
  {
    path: '/exampleC',
    name: 'exampleC',
    component: C_Watchers
  },
  {
    path: '/exampleD',
    name: 'exampleD',
    component: D_Style_Bindings
  },
  {
    path: '/exampleE',
    name: 'exampleE',
    component: E_Fallthrough_Attr
  },
  {
    path: '/exampleF',
    name: 'exampleF',
    component: F_Refs
  },
  {
    path: '/exampleG1',
    name: 'exampleG1',
    component: G_Provide_Inject1
  },
  {
    path: '/exampleG2',
    name: 'exampleG2',
    component: G_Provide_Inject2
  },
  {
    path: '/exampleH',
    name: 'exampleH',
    component: H_Async
  },
  {
    path: '/exampleI',
    name: 'exampleI',
    component: I_Composable
  },
  {
    path: '/exampleJ',
    name: 'exampleJ',
    component: J_Custom_Directives
  },
  {
    path: '/exampleK',
    name: 'exampleK',
    component: K_Transition
  },
  {
    path: '/exampleL',
    name: 'exampleL',
    component: L_KeepAlive
  },
  {
    path: '/exampleM',
    name: 'exampleM',
    component: M_State_Mgmt
  },
  {
    path: '/exampleN/:id',
    name: 'exampleN',
    component: () => import('@/views/N_Dynamic_Routes')
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: () => import('@/views/O_NotFound') 
  },
  {
    path: '/exampleP',
    name: 'exampleP',
    component: P_XSS_Example
  },
  {
    path: '/exampleP/:query',
    name: 'exampleP',
    component: P_XSS_Example
  },
  {
    path: '/exampleQ',
    name: 'exampleQ',
    component: Q_Json_Server
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
