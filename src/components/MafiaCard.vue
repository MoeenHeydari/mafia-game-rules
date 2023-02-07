<template>
    <header-view></header-view>

    <!-- Icons to go to the previous and next pages -->
    <arrows-view></arrows-view>

    <!-- Based on the Json file, the cards related to the roles will be arranged -->
    <div v-for="mafiaRole in mafiaRoles" :key="mafiaRole">
        <div v-if="mafiaRole.id === id">
            <div class="card">
                <img :src="require(`@/assets/images/roles/${mafiaRole.name}.png`)" />
            </div>
           
            <h2>Alignment:</h2>
            <p>{{ mafiaRole.alignment }}</p>
            <h3>Description:</h3>
            <p>{{ mafiaRole.description }}</p>
        </div>
    </div>
    <footer-view></footer-view>
</template>
  
<script>
import HeaderView from '@/components/HeaderView.vue'
import ArrowsView from '@/components/ArrowsView.vue'
import FooterView from '@/components/FooterView.vue'
import json from '@/json/mafiaRoles.json'

export default {
    data(){
        return{
            mafiaRoles: json
        }
    },
    name: 'MafiaCard',
    components: {
        HeaderView,
        ArrowsView,
        FooterView,
    },
    props: ["id"]
} 
</script>

<style scoped>
</style>
  