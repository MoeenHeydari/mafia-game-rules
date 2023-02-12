<template>
    <header-view></header-view>

    <!-- Icons to go to the previous and next pages -->
    <arrows-view></arrows-view>

    <!-- Based on the Json file, the cards related to the roles will be arranged -->
    
        <div v-if="mafiaCard.name">
            <div class="card-single">
                <img :src="require(`@/assets/images/roles/${mafiaCard.name}.png`)" />
            </div>
           
            <h2>Alignment:</h2>
            <p>{{ mafiaCard.alignment }}</p>
            <h3>Description:</h3>
            <p>{{ mafiaCard.description }}</p>
        </div>
    
    <footer-view></footer-view>
</template>
  
<script>
import HeaderView from '@/components/HeaderView.vue'
import ArrowsView from '@/components/ArrowsView.vue'
import FooterView from '@/components/FooterView.vue'
import mafiaRolesJson from '@/json/mafiaRoles.json'

export default {
    name: 'MafiaCard',
    components: {
        HeaderView,
        ArrowsView,
        FooterView,
    },
    data(){
        return{
            mafiaCard: {},
        }
    },
   
    mounted() {
        const mafiaCardName = this.$route.params.cardName;
        const mafiaCard = mafiaRolesJson.filter((role)=> role.name === mafiaCardName)[0];
        this.mafiaCard = mafiaCard;
    }
} 
</script>

<style scoped>
</style>
  