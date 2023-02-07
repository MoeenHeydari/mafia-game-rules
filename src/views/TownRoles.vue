<template>
    <div v-if="showCard === false">
        <header-view></header-view>

        <!-- Icons to go to the previous and next pages -->
        <arrows-view :id="id"></arrows-view>

        <h1>Town Roles</h1>

        <!-- Creating sets of cards that are predefined in the Jason file -->
        
            
        <hr>
        <h2>Town (Townie)</h2>
        <div class="container-grid">
            <div class="row gap-0 justify-flex-start">
                <div v-for="townRole in townRoles" :key="townRole" @click="createCard(townRole.id)">
                    <div class="col-6-xs col-6-sm col-2-xl">
                        <div class="card" v-if="townRole.alignment === 'Town (Townie)'">
                            <img :src="require(`@/assets/images/roles/${townRole.name}.png`)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr>
        <h2>Town (Investigative)</h2>
        <div class="container-grid">
            <div class="row gap-0 justify-flex-start">
                <div v-for="townRole in townRoles" :key="townRole" @click="createCard(townRole.id)">
                    <div class="col-6-xs col-6-sm col-2-xl">
                        <div class="card" v-if="townRole.alignment === 'Town (Investigative)'">
                            <img :src="require(`@/assets/images/roles/${townRole.name}.png`)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr>
        <h2>Town (Killing)</h2>
        <div class="container-grid">
            <div class="row gap-0 justify-flex-start">
                <div  v-for="townRole in townRoles" :key="townRole" @click="createCard(townRole.id)">
                    <div class="col-6-xs col-6-sm col-2-xl">
                        <div class="card" v-if="townRole.alignment === 'Town (Killing)'">
                            <img :src="require(`@/assets/images/roles/${townRole.name}.png`)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr>
        <h2>Town (Protective)</h2>
        <div class="container-grid">
            <div class="row gap-0 justify-flex-start">
                <div v-for="townRole in townRoles" :key="townRole" @click="createCard(townRole.id)">
                    <div class="col-6-xs col-6-sm col-2-xl">
                        <div class="card" v-if="townRole.alignment === 'Town (Protective)'"> 
                            <img :src="require(`@/assets/images/roles/${townRole.name}.png`)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr>
        <h2>Town (Support)</h2>
        <div class="container-grid">
            <div class="row gap-0 justify-flex-start">
                <div v-for="townRole in townRoles" :key="townRole" @click="createCard(townRole.id)">
                    <div class="col-6-xs col-6-sm col-2-xl">
                        <div class="card" v-if="townRole.alignment === 'Town (Support)'">
                            <img :src="require(`@/assets/images/roles/${townRole.name}.png`)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- If any of the cards clicked, only it will be shown-->
    <div v-if="showCard">
        <town-card :id="id"></town-card>
    </div>
</template>

<script>
import HeaderView from '@/components/HeaderView.vue'
import ArrowsView from '@/components/ArrowsView.vue'
import TownCard from '@/components/TownCard.vue'
import json from '../json/townRoles.json'
    
export default {
    data(){
        return{
            townRoles: json,
            showCard: false,
            id: null,
        }
    },
    
    name: 'TownRoles',
    components: {
        HeaderView,
        ArrowsView,
        TownCard
    },
    methods: {
        
        // Function for creating a single town role card
        createCard(id) {
            this.showCard =! this.showCard
            this.id = id
        }
    }
}
</script>

<style lang="scss" scoped>


</style>