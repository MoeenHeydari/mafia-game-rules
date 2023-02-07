<template>
    <header-view></header-view>

    <!-- Icons to go to the previous and next pages -->
    <arrows-view></arrows-view>

    <!-- Based on the Json file, the cards related to the roles will be arranged -->
    <div v-for="neutralRole in neutralRoles" :key="neutralRole">
        <div v-if="neutralRole.id === id">
            <div class="card">
                <img :src="require(`@/assets/images/roles/${neutralRole.name}.png`)" />
            </div>
           
            <h2>Alignment:</h2>
            <p>{{ neutralRole.alignment }}</p>
            <h3>Description:</h3>
            <p>{{ neutralRole.description }}</p>
        </div>
    </div>
    <footer-view></footer-view>

</template>
  
<script>
import HeaderView from '@/components/HeaderView.vue'
import ArrowsView from '@/components/ArrowsView.vue'
import FooterView from '@/components/FooterView.vue'
import json from '@/json/neutralRoles.json'

export default {
    data(){
        return{
            neutralRoles: json
        }
    },
    name: 'NeutralCard',
    components: {
        HeaderView,
        ArrowsView,
        FooterView
    },
    props: ["id"]
} 
</script>

<style scoped>
</style>
  