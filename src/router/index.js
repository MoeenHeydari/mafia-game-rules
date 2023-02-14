import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameDescription from '../views/GameDescription.vue'
import TownRoles from '../views/TownRoles.vue'
import MafiaRoles from '../views/MafiaRoles.vue'
import NeutralRoles from '../views/NeutralRoles.vue'
import TownCard from '../views/TownCard.vue'
import MafiaCard from '../views/MafiaCard.vue'
import NeutralCard from '../views/NeutralCard.vue'


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
        path: '/roles/townRoles',
        name: 'townRoles',
        component: TownRoles
    },
    {
        path: '/roles/mafiaRoles',
        name: 'mafiaRoles',
        component: MafiaRoles
    },
    {
        path: '/roles/neutralRoles',
        name: 'neutralRoles',
        component: NeutralRoles
    },
    {
        path: '/roles/townRoles/:cardName',
        name: 'townCard',
        component: TownCard
    },
    {
        path: '/roles/mafiaRoles/:cardName',
        name: 'mafiaCard',
        component: MafiaCard
    },
    {
        path: '/roles/neutralRoles/:cardName',
        name: 'neutralCard',
        component: NeutralCard
    }
  
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
