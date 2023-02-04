<template>
    <div v-if="showCard === false">
        <header-view></header-view>

        <!-- Icons to go to the previous and next pages -->
        <arrows-view></arrows-view>
        <h1>Mafia Roles</h1>

        <!-- Creating a set of cards that are predefined in the Jason file -->
        <div class="container">
            <div class="card" v-for="mafiaRole in mafiaRoles" :key="mafiaRole" @click="createCard(mafiaRole.id)">   
                <img :src="require(`@/assets/images/roles/${mafiaRole.name}.png`)" />
            </div>
        </div>
    </div>

    <!-- a button for going back to list of roles -->
    <div class="container-button">
        <a class="button" v-if="showCard === true" @click="goPrevious()">  </a>
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
    float: left;
}

h1{
    color:#F61A1A
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