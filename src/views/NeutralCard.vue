<template>
    <header-view></header-view>

    <!-- Icons to go to the previous and next pages -->
    <arrows-view></arrows-view>

    <!-- Based on the Json file, the cards related to the roles will be arranged -->
    
        <div v-if="neutralCard.name">
            <div class="card-single">
                <img :src="require(`@/assets/images/roles/${neutralCard.name}.png`)" />
            </div>
           
            <h2>Alignment:</h2>
            <p>{{ neutralCard.alignment }}</p>
            <h3>Description:</h3>
            <p>{{ neutralCard.description }}</p>
        </div>
    
    <footer-view></footer-view>
</template>
  
<script>
import HeaderView from '@/components/HeaderView.vue'
import ArrowsView from '@/components/ArrowsView.vue'
import FooterView from '@/components/FooterView.vue'
import neutralRolesJson from '@/json/neutralRoles.json'

export default {
    name: 'NeutralCard',
    components: {
        HeaderView,
        ArrowsView,
        FooterView,
    },
    data(){
        return{
            neutralCard: {}
        }
    },
   
    mounted() {
        const neutralCardName = this.$route.params.cardName;
        const neutralCard = neutralRolesJson.filter((role)=> role.name === neutralCardName)[0];
        this.neutralCard = neutralCard;
    }
} 
</script>

<style scoped>
</style>
  