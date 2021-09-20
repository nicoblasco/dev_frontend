import {createRouter, createWebHashHistory} from 'vue-router'
import lobbyRouter from '../modules/lobby/router'

const routes = [
    {
      package: '/',
      ...lobbyRouter
    }    
]


const router = new createRouter({
    history: createWebHashHistory(),
    routes,
  })

export default router