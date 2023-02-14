<template>
    
    <header-view></header-view>

    <!-- Icons to go to the previous and next pages -->
    <arrows-view></arrows-view>
    <h1>Town Roles</h1>

    <!-- Creating a set of cards that are predefined in the Jason file -->
    <div v-for="alignment in alignments" :key="alignment">
        <hr>
        <h2>{{ alignment }}</h2>
        <div class="container-grid">
            <div class="row gap-0 justify-flex-start">
                <div class="col-6-xs col-6-sm col-6-xl">
                    <div class="card" v-for="townRole in townRoles" :key="townRole">  
                        <div v-if="townRole.alignment === alignment">
                            <router-link :to="{ name: 'townCard', params:{ cardName: townRole.name }}">
                                <img :src="require(`@/assets/images/roles/${townRole.name}.png`)" />
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
import townRolesJson from '../json/townRoles.json'

export default {
    data(){
        return{
            townRoles: townRolesJson,
            alignments: []
        }
    },

    name: 'TownRoles',
    components: {
        HeaderView,
        ArrowsView,
    },
    
    mounted() {
        // The function to create the list of alignments
        const newAlignment = []
        for (var i = 0 ; i <townRolesJson.length ; i++ ) {
            const exists = newAlignment.includes(townRolesJson[i].alignment);
            // To remove repeated alignments
            if (!exists) {
                newAlignment.push(townRolesJson[i].alignment);
            }        
        }
        this.alignments = newAlignment
    }
} 

</script>

<style scoped>

</style>