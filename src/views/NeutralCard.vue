<template>
    <header-view></header-view>

    <!-- Icons to go to the previous and next pages -->
    <arrows-view></arrows-view>

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
    
    <footer-view></footer-view>
</template>
  
<script>
import HeaderView from '@/components/HeaderView.vue'
import ArrowsView from '@/components/ArrowsView.vue'
import FooterView from '@/components/FooterView.vue'

import { getCards } from '@/utils/dataHandler'

export default {
    name: 'NeutralCard',
    components: {
        HeaderView,
        ArrowsView,
        FooterView,
    },
    data(){
        return{
            card: getCards(this.$route.params.cardName, 'neutral')   
        }
    }
} 
</script>

<style scoped>
</style>
  