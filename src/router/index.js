import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameDescription from '../views/GameDescription.vue'
import TownRoles from '../views/TownRoles.vue'
import MafiaRoles from '../views/MafiaRoles.vue'
import NeutralRoles from '../views/NeutralRoles.vue'
import Citizen from '../views/roles/Citizen.vue'
import Invulnerable from '../views/roles/Invulnerable.vue'
import Traitor from '../views/roles/Traitor.vue'
import Student from '../views/roles/Student.vue'
import Detective from '../views/roles/Detective.vue'
import Lookout from '../views/roles/Lookout.vue'
import Tracker from '../views/roles/Tracker.vue'
import Autopsist from '../views/roles/Autopsist.vue'
import Mason from '../views/roles/Mason.vue'
import Sniper from '../views/roles/Sniper.vue'
import Veteran from '../views/roles/Veteran.vue'
import Jailor from '../views/roles/Jailor.vue'
import Gunsmith from '../views/roles/Gunsmith.vue'
import VampireHunter from '../views/roles/VampireHunter.vue'
import Doctor from '../views/roles/Doctor.vue'
import Hero from '../views/roles/Hero.vue'
import Bodyguard from '../views/roles/Bodyguard.vue'
import Crusader from '../views/roles/Crusader.vue'
import Trapper from '../views/roles/Trapper.vue'
import Reflector from '../views/roles/Reflector.vue'
import Priest from '../views/roles/Priest.vue'
import Escort from '../views/roles/Escort.vue'
import Mayor from '../views/roles/Mayor.vue'
import Retributionist from '../views/roles/Retributionist.vue'
import Judge from '../views/roles/Judge.vue'
import Conjurer from '../views/roles/Conjurer.vue'
import Godfather from '../views/roles/Godfather.vue'
import Mafia from '../views/roles/Mafia.vue'
import Assassin from '../views/roles/Assassin.vue'
import Bomber from '../views/roles/Bomber.vue'
import Saboteur from '../views/roles/Saboteur.vue'
import Consort from '../views/roles/Consort.vue'
import Consigliere from '../views/roles/Consigliere.vue'
import Spy from '../views/roles/Spy.vue'
import Framer from '../views/roles/Framer.vue'
import Janitor from '../views/roles/Janitor.vue'
import Mistress from '../views/roles/Mistress.vue'
import Silencer from '../views/roles/Silencer.vue'
import Terrorist from '../views/roles/Terrorist.vue'
import Lawyer from '../views/roles/Lawyer.vue'
import SerialKiller from '../views/roles/SerialKiller.vue'
import Poisoner from '../views/roles/Poisoner.vue'
import Ted from '../views/roles/Ted.vue'
import Tommy from '../views/roles/Tommy.vue'
import MassMurderer from '../views/roles/MassMurderer.vue'
import Cowboy from '../views/roles/Cowboy.vue'
import Cannibal from '../views/roles/Cannibal.vue'
import Werewolf from '../views/roles/Werewolf.vue'
import Juggernaut from '../views/roles/Juggernaut.vue'
import Arsonist from '../views/roles/Arsonist.vue'
import Plaguebearer from '../views/roles/Plaguebearer.vue'
import Vampire from '../views/roles/Vampire.vue'
import Rouge from '../views/roles/Rouge.vue'
import Jester from '../views/roles/Jester.vue'
import Executioner from '../views/roles/Executioner.vue'
import SinisterShadow from '../views/roles/SinisterShadow.vue'
import Pirate from '../views/roles/Pirate.vue'
import Survivor from '../views/roles/Survivor.vue'
import GuardianAngel from '../views/roles/GuardianAngel.vue'
import Drunk from '../views/roles/Drunk.vue'


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
        path: '/roles/townRoles/Citizen',
        name: 'citizen',
        component: Citizen
    },
    {
        path: '/roles/townRoles/Invulnerable',
        name: 'invulnerable',
        component: Invulnerable
    },
    {
        path: '/roles/townRoles/Traitor',
        name: 'traitor',
        component: Traitor
    },
    {
        path: '/roles/townRoles/Student',
        name: 'student',
        component: Student
    },
    {
        path: '/roles/townRoles/Detective',
        name: 'detective',
        component: Detective
    },
    {
        path: '/roles/townRoles/Lookout',
        name: 'lookout',
        component: Lookout
    },
    {
        path: '/roles/townRoles/Tracker',
        name: 'tracker',
        component: Tracker
    },
    {
        path: '/roles/townRoles/Autopsist',
        name: 'autopsist',
        component: Autopsist
    },
    {
        path: '/roles/townRoles/Mason',
        name: 'mason',
        component: Mason
    },
    {
        path: '/roles/townRoles/Sniper',
        name: 'sniper',
        component: Sniper
    },
    {
        path: '/roles/townRoles/Veteran',
        name: 'veteran',
        component: Veteran
    },
    {
        path: '/roles/townRoles/Jailor',
        name: 'jailor',
        component: Jailor
    },
    {
        path: '/roles/townRoles/Gunsmith',
        name: 'gunsmith',
        component: Gunsmith
    },
    {
        path: '/roles/townRoles/VampireHunter',
        name: 'vampireHunter',
        component: VampireHunter
    },
    {
        path: '/roles/townRoles/Doctor',
        name: 'doctor',
        component: Doctor
    },
    {
        path: '/roles/townRoles/Hero',
        name: 'hero',
        component: Hero
    },
    {
        path: '/roles/townRoles/Bodyguard',
        name: 'bodyguard',
        component: Bodyguard
    },
    {
        path: '/roles/townRoles/Crusader',
        name: 'crusader',
        component: Crusader
    },
    {
        path: '/roles/townRoles/Trapper',
        name: 'trapper',
        component: Trapper
    },
    {
        path: '/roles/townRoles/Reflector',
        name: 'reflector',
        component: Reflector
    },
    {
        path: '/roles/townRoles/Priest',
        name: 'priest',
        component: Priest
    },
    {
        path: '/roles/townRoles/Escort',
        name: 'escort',
        component: Escort
    },
    {
        path: '/roles/townRoles/Mayor',
        name: 'mayor',
        component: Mayor
    },
    {
        path: '/roles/townRoles/Retributionist',
        name: 'retributionist',
        component: Retributionist
    },
    {
        path: '/roles/townRoles/Judge',
        name: 'judge',
        component: Judge
    },
    {
        path: '/roles/townRoles/Conjurer',
        name: 'conjurer',
        component: Conjurer
    },
    {
        path: '/roles/mafiaRoles/Godfather',
        name: 'godfather',
        component: Godfather
    },
    {
        path: '/roles/mafiaRoles/Mafia',
        name: 'mafia',
        component: Mafia
    },
    {
        path: '/roles/mafiaRoles/Assassin',
        name: 'assassin',
        component: Assassin
    },
    {
        path: '/roles/mafiaRoles/Bomber',
        name: 'bomber',
        component: Bomber
    },
    {
        path: '/roles/mafiaRoles/Saboteur',
        name: 'saboteur',
        component: Saboteur
    },
    {
        path: '/roles/mafiaRoles/Consort',
        name: 'consort',
        component: Consort
    },
    {
        path: '/roles/mafiaRoles/Consigliere',
        name: 'consigliere',
        component: Consigliere
    },
    {
        path: '/roles/mafiaRoles/Spy',
        name: 'spy',
        component: Spy
    },
    {
        path: '/roles/mafiaRoles/Framer',
        name: 'framer',
        component: Framer
    },
    {
        path: '/roles/mafiaRoles/Janitor',
        name: 'janitor',
        component: Janitor
    },
    {
        path: '/roles/mafiaRoles/Mistress',
        name: 'mistress',
        component: Mistress
    },
    {
        path: '/roles/mafiaRoles/Silencer',
        name: 'silencer',
        component: Silencer
    },
    {
        path: '/roles/mafiaRoles/Terrorist',
        name: 'terrorist',
        component: Terrorist
    },
    {
        path: '/roles/mafiaRoles/Lawyer',
        name: 'lawyer',
        component: Lawyer
    },
    {
        path: '/roles/neutralRoles/SerialKiller',
        name: 'serialKiller',
        component: SerialKiller
    },
    {
        path: '/roles/neutralRoles/Poisoner',
        name: 'poisoner',
        component: Poisoner
    },
    {
        path: '/roles/neutralRoles/Ted',
        name: 'ted',
        component: Ted
    },
    {
        path: '/roles/neutralRoles/Tommy',
        name: 'tommy',
        component: Tommy
    },
    {
        path: '/roles/neutralRoles/MassMurderer',
        name: 'massMurderer',
        component: MassMurderer
    },
    {
        path: '/roles/neutralRoles/Cowboy',
        name: 'cowboy',
        component: Cowboy
    },
    {
        path: '/roles/neutralRoles/Cannibal',
        name: 'cannibal',
        component: Cannibal
    },
    {
        path: '/roles/neutralRoles/Werewolf',
        name: 'werewolf',
        component: Werewolf
    },
    {
        path: '/roles/neutralRoles/Juggernaut',
        name: 'juggernaut',
        component: Juggernaut
    },
    {
        path: '/roles/neutralRoles/Arsonist',
        name: 'arsonist',
        component: Arsonist
    },
    {
        path: '/roles/neutralRoles/Plaguebearer',
        name: 'plaguebearer',
        component: Plaguebearer
    },
    {
        path: '/roles/neutralRoles/Vampire',
        name: 'vampire',
        component: Vampire
    },
    {
        path: '/roles/neutralRoles/Rouge',
        name: 'rouge',
        component: Rouge
    },
    {
        path: '/roles/neutralRoles/Jester',
        name: 'jester',
        component: Jester
    },
    {
        path: '/roles/neutralRoles/Executioner',
        name: 'executioner',
        component: Executioner
    },
    {
        path: '/roles/neutralRoles/SinisterShadow',
        name: 'sinisterShadow',
        component: SinisterShadow
    },
    {
        path: '/roles/neutralRoles/Pirate',
        name: 'pirate',
        component: Pirate
    },
    {
        path: '/roles/neutralRoles/Survivor',
        name: 'survivor',
        component: Survivor
    },
    {
        path: '/roles/neutralRoles/GuardianAngel',
        name: 'guardianAngel',
        component: GuardianAngel
    },
    {
        path: '/roles/neutralRoles/Drunk',
        name: 'drunk',
        component: Drunk
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
