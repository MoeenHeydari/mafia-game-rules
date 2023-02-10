<template>
    <div v-if="showCard === false" v-cloak>
        <header-view></header-view>

        <!-- Icons to go to the previous and next pages -->
        <arrows-view></arrows-view>
        <h1>Mafia Roles</h1>

        <!-- Creating sets of cards that are predefined in the Jason file -->
        
        <hr>
        <h2>Mafia (Killing)</h2>
        <div class="container-grid">
            <div class="row gap-0 justify-flex-start">
                <div v-for="mafiaRole in mafiaRoles" :key="mafiaRole" @click="createCard(mafiaRole.id)">
                    <div class="card" v-if="mafiaRole.alignment === 'Mafia (Killing)'">
                        <div class="col-6-xs col-6-sm col-6-xl">
                            <img :src="require(`@/assets/images/roles/${mafiaRole.name}.png`)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr>
        <h2>Mafia (Support)</h2>
        <div class="container-grid">
            <div class="row gap-0 justify-flex-start">
                <div v-for="mafiaRole in mafiaRoles" :key="mafiaRole" @click="createCard(mafiaRole.id)">
                    <div class="card" v-if="mafiaRole.alignment === 'Mafia (Support)'">
                        <div class="col-6-xs col-6-sm col-6-xl">
                            <img :src="require(`@/assets/images/roles/${mafiaRole.name}.png`)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr>
        <h2>Mafia (Deception)</h2>
        <div class="container-grid">
            <div class="row gap-0 justify-flex-start">
                <div v-for="mafiaRole in mafiaRoles" :key="mafiaRole" @click="createCard(mafiaRole.id)">
                    <div class="card" v-if="mafiaRole.alignment === 'Mafia (Deception)'">
                        <div class="col-6-xs col-6-sm col-6-xl">
                            <img :src="require(`@/assets/images/roles/${mafiaRole.name}.png`)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr>
        <h2>Mafia (Side Teammate)</h2>
        <div class="container-grid">
            <div class="row gap-0 justify-flex-start">
                <div v-for="mafiaRole in mafiaRoles" :key="mafiaRole" @click="createCard(mafiaRole.id)">
                    <div class="card" v-if="mafiaRole.alignment === 'Mafia (SideTeammate)'">
                        <div class="col-6-xs col-6-sm col-6-xl">
                            <img :src="require(`@/assets/images/roles/${mafiaRole.name}.png`)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- If any of the cards clicked, only it will be shown-->
    <div v-if="showCard">
        <mafia-card :id="id"></mafia-card>
    </div>
</template>

<script>
import HeaderView from '@/components/HeaderView.vue'
import ArrowsView from '@/components/ArrowsView.vue'
import MafiaCard from '@/components/MafiaCard.vue'
import json from '../json/mafiaRoles.json'
    
export default {
    data(){
        return{
            mafiaRoles: json,
            showCard: false,
            id: null,
        }
    },
    
    name: 'MafiaRoles',
    components: {
        HeaderView,
        ArrowsView,
        MafiaCard
    },
    methods: {

        // Function for creating a single town role card
        createCard(id) {
            this.showCard = true
            this.id = id
        }

    }
}
</script>

<style lang="scss" scoped>

</style>