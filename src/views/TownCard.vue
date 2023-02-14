<template>
    <header-view></header-view>

    <!-- Icons to go to the previous and next pages -->
    <arrows-view></arrows-view>

    <!-- Based on the Json file, the cards related to the roles will be arranged -->
    
        <div v-if="townCard.name">
            <div class="card-single">
                <img :src="require(`@/assets/images/roles/${townCard.name}.png`)" />
            </div>
           
            <h2>Alignment:</h2>
            <p>{{ townCard.alignment }}</p>
            <h3>Description:</h3>
            <p>{{ townCard.description }}</p>
        </div>
    
    <footer-view></footer-view>
</template>
  
<script>
import HeaderView from '@/components/HeaderView.vue'
import ArrowsView from '@/components/ArrowsView.vue'
import FooterView from '@/components/FooterView.vue'
import townRolesJson from '@/json/townRoles.json'

export default {
    name: 'TownCard',
    components: {
        HeaderView,
        ArrowsView,
        FooterView,
    },
    data(){
        return{
            townCard: {},
        }
    },
   
    mounted() {
        const townCardName = this.$route.params.cardName;
        const townCard = townRolesJson.filter((role)=> role.name === townCardName)[0];
        this.townCard = townCard;
    }
} 
</script>

<style scoped>
</style>
  