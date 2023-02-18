<template>
    
    <header-view></header-view>

    <!-- Icons to go to the previous and next pages -->
    <arrows-view></arrows-view>
    <h1>Neutral Roles</h1>

    <!-- Creating a set of cards that are predefined in the Jason file -->
    <div v-for="alignment in alignments" :key="alignment">
        <hr>
        <h2>{{ alignment }}</h2>
        <div class="container-grid">
            <div class="row gap-0 justify-flex-start">
                <div class="col-6-xs col-6-sm col-6-xl">
                    <div class="card" v-for="neutralRole in neutralRoles" :key="neutralRole">
                        <div v-if="neutralRole.alignment === alignment">
                            <router-link :to="{ name: 'neutralCard', params:{ cardName: neutralRole.name }}">
                                <img :src="require(`@/assets/images/roles/${neutralRole.name}.png`)" />
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
import neutralRolesJson from '../json/neutralRoles.json'

export default {
    data(){
        return{
            neutralRoles: neutralRolesJson,
            alignments: []
        }
    },

    name: 'NeutralRoles',
    components: {
        HeaderView,
        ArrowsView,
    },

    mounted() {
        // The function to create the list of alignments
        const newAlignment = []
        for (var i = 0 ; i < neutralRolesJson.length ; i++ ) {
            const exists = newAlignment.includes(neutralRolesJson[i].alignment);
            // To remove repeated alignments
            if (!exists) {
                newAlignment.push(neutralRolesJson[i].alignment);
            }        
        }
        this.alignments = newAlignment
    }
} 

</script>

<style scoped>

</style>