import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameDescription from '../views/GameDescription.vue'
import TownRoles from '../views/TownRoles.vue'
import MafiaRoles from '../views/MafiaRoles.vue'
import NeutralRoles from '../views/NeutralRoles.vue'
import Citizen from '../views/roles/Citizen.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/gameDescription',
        name: 'gameDescription',
        component: GameDescription
    },
    {
        path: '/townRoles',
        name: 'townRoles',
        component: TownRoles
    },
    {
        path: '/mafiaRoles',
        name: 'mafiaRoles',
        component: MafiaRoles
    },
    {
        path: '/neutralRoles',
        name: 'neutralRoles',
        component: NeutralRoles
    },
    {
        path: '/townRoles/Citizen',
        name: 'citizen',
        component: Citizen
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
