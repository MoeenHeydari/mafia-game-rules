<template>
    
    <header-view></header-view>

    <!-- Icons to go to the previous and next pages -->
    <arrows-view></arrows-view>
    <h1>Mafia Roles</h1>

    <!-- Creating a set of cards that are predefined in the Jason file -->
    <div v-for="alignment in alignments" :key="alignment">
        <hr>
        <h2>{{ alignment }}</h2>
        <div class="container-grid">
            <div class="row gap-0 justify-flex-start">
                <div class="col-6-xs col-6-sm col-6-xl">
                    <div class="card" v-for="role in roles" :key="role">
                        <div v-if="role.alignment === alignment">
                            <router-link :to="{ name: 'mafiaCard', params:{ cardName: role.name }}">
                                <img :src="require(`@/assets/images/roles/${role.name}.png`)" />
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="arrows">
        <button class="changePageButton" @click='shiftRolesPage(this.index, -1)'>
            <fa icon='chevron-circle-left'/>
        </button>
        <button class="changePageButton" @click='shiftRolesPage(this.index, +1)'>
            <fa icon='chevron-circle-right'/>
        </button>
    </div>

</template>

<script>
import HeaderView from '@/components/HeaderView.vue'
import ArrowsView from '@/components/ArrowsView.vue'

import { getRoles, getAlignments, shiftRolesPage } from '@/utils/dataHandler'
    
export default {
    data(){
        return{
            roles: getRoles('mafia'),
            alignments: getAlignments('mafia'),
            index: 1
        }
    },
    components: {
        HeaderView,
        ArrowsView,
    },
    methods:{
        shiftRolesPage
    }
} 

</script>