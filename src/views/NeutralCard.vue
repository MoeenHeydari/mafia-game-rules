<template>
    <header-view></header-view>

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
            <button class="changePageButton" @click='changePage(-1)'>
                <fa icon='chevron-circle-left'/>
            </button>
            <button class="changePageButton" @click='changePage(+1)'>
                <fa icon='chevron-circle-right'/>
            </button>
        </div>

    <footer-view></footer-view>
</template>
  
<script>
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'

import { getCards, getRoles } from '@/utils/dataHandler'

export default {
    name: 'NeutralCard',
    components: {
        HeaderView,
        FooterView
    },
    data(){
        return{
            card: getCards(this.$route.params.cardName, 'neutral').card,
            id: getCards(this.$route.params.cardName, 'neutral').roleId
        }
    },
    methods: {
        changePage(x) {
            const newId = this.id + x;
            const newRole = getRoles('neutral').find(role => role.id === newId).name
            window.location = newRole
        } 
    }
} 
</script>

<style scoped>
</style>
  