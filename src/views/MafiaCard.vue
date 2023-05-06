<template>
    <header-view></header-view>

    <button class="changePageButton" @click='goUpperPage(card[0].classification)'>
        <fa icon='arrow-alt-circle-left'/>
    </button>

    <!-- Based on the Json file, the cards related to the roles will be arranged -->
        <div v-if="this.card[0].name">
            <div class="card-single">
                <img :src="require(`@/assets/images/roles/${this.card[0].name}.png`)" />
            </div>
           
            <h2>Alignment:</h2>
            <p>{{ this.card[0].alignment }}</p>
            <h3>Description:</h3>
            <p>{{ this.card[0].description }}</p>
        </div>
        
        <div class="arrows">
            <button class="changePageButton" @click='changeCardPage(-1)'>
                <fa icon='chevron-circle-left'/>
            </button>
            <button class="changePageButton" @click='changeCardPage(+1)'>
                <fa icon='chevron-circle-right'/>
            </button>
        </div>

    <footer-view></footer-view>
</template>
  
<script>
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'

import { getCards, getRoles, goUpperPage } from '@/utils/dataHandler'

export default {
    name: 'MafiaCard',
    components: {
        HeaderView,
        FooterView
    },
    data(){
        return{
            card: getCards(this.$route.params.cardName, 'mafia').card,
            id: getCards(this.$route.params.cardName, 'mafia').roleId
        }
    },
    methods: {
        changeCardPage(x) {
            const newId = this.id + x;
            const newRole = getRoles('mafia').find(role => role.id === newId).name
            window.location = newRole
        },
        goUpperPage
    }
} 
</script>

<style scoped>
</style>
  