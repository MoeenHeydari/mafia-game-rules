<template>
    <div v-if="showCard === false">
        <header-view></header-view>

        <!-- Icons to go to the previous and next pages -->
        <arrows-view :id="id"></arrows-view>

        <h1>Town Roles</h1>

        <!-- Creating a set of cards that are predefined in the Jason file -->
        <div class="container">
            
            <hr>
            <h2>Town (Townie)</h2>
            <div class="card" v-for="townRole in townRoles" :key="townRole" @click="createCard(townRole.id)">
                <div v-if="townRole.alignment === 'Town (Townie)'">
                    <img :src="require(`@/assets/images/roles/${townRole.name}.png`)" />
                </div>
            </div>
            
            <hr>
            <h2>Town (Investigative)</h2>
            <div class="card" v-for="townRole in townRoles" :key="townRole" @click="createCard(townRole.id)">
                <div v-if="townRole.alignment === 'Town (Investigative)'">
                    <img :src="require(`@/assets/images/roles/${townRole.name}.png`)" />
                </div>
            </div>

            <hr>
            <h2>Town (Protective)</h2>
            <div class="card" v-for="townRole in townRoles" :key="townRole" @click="createCard(townRole.id)">
                <div v-if="townRole.alignment === 'Town (Protective)'">
                    <img :src="require(`@/assets/images/roles/${townRole.name}.png`)" />
                </div>
            </div>

            <hr>
            <h2>Town (Killing)</h2>
            <div class="card" v-for="townRole in townRoles" :key="townRole" @click="createCard(townRole.id)">
                <div v-if="townRole.alignment === 'Town (Killing)'">
                    <img :src="require(`@/assets/images/roles/${townRole.name}.png`)" />
                </div>
            </div>

            <hr>
            <h2>Town (Support)</h2>
            <div class="card" v-for="townRole in townRoles" :key="townRole" @click="createCard(townRole.id)">
                <div v-if="townRole.alignment === 'Town (Support)'">
                    <img :src="require(`@/assets/images/roles/${townRole.name}.png`)" />
                </div>
            </div>

        </div>
    </div>
    
    <!-- a button for going back to list of roles -->
    <div class="container-button">
        <a class="button" v-if="showCard === true" @click="goPrevious()">  </a>
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
        },

        // Function for going back to list of roles
        goPrevious(){
            this.showCard =! this.showCard
        }
    }
}
</script>

<style scoped>
main {
    width : 970px;
    height: auto;
    margin: auto;
}

img {
    width: 90%;
    padding: 10px;
    border-radius: 30px;
}

.container {
    width: 970px;
    height: auto;
    margin: auto;
}
.card {
    width: 300px;
    height: auto;
    cursor: pointer;
    margin: auto;
    
}

h1{
    color:#54FDA3;
}

h2 {
    display: block;
}
.container-button {
    position: fixed;
    right: 30px;
    top: 100px;
}

.button {
    color: rgba(0, 0, 0, 0);
    padding: 32px 32px;
    cursor: pointer;
}
</style>