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
                    <div class="card" v-for="mafiaRole in mafiaRoles" :key="mafiaRole">
                        <div v-if="mafiaRole.alignment === alignment">
                            <router-link :to="{ name: 'mafiaCard', params:{ cardName: mafiaRole.name }}">
                                <img :src="require(`@/assets/images/roles/${mafiaRole.name}.png`)" />
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import HeaderView from '@/components/HeaderView.vue'
import ArrowsView from '@/components/ArrowsView.vue'
import mafiaRolesJson from '../json/mafiaRoles.json'
    
export default {
    data(){
        return{
            mafiaRoles: mafiaRolesJson,
            alignments: []
        }
    },

    name: 'MafiaRoles',
    components: {
        HeaderView,
        ArrowsView,
    },

    mounted() {
        // The function to create the list of alignments
        const newAlignment = []
        for (var i = 0 ; i <mafiaRolesJson.length ; i++ ) {
            const exists = newAlignment.includes(mafiaRolesJson[i].alignment);
            // To remove repeated alignments
            if (!exists) {
                newAlignment.push(mafiaRolesJson[i].alignment);
            }        
        }
        this.alignments = newAlignment
    }
} 

</script>