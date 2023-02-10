<template>
    <header-view></header-view>

    <!-- Icons to go to the previous and next pages -->
    <arrows-view></arrows-view>

    <!-- Based on the Json file, the cards related to the roles will be arranged -->
    <div v-for="townRole in townRoles" :key="townRole">
        <div v-if="townRole.id === $store.state.selectedId">
           
            <div class="card">
                <img :src="require(`@/assets/images/roles/${townRole.name}.png`)" />
            </div>
           
            <h2>Alignment:</h2>
            <p>{{ townRole.alignment }}</p>
            <h3>Description:</h3>
            <p>{{ townRole.description }}</p>
        </div>
    </div>
    <footer-view></footer-view>
</template>
  
<script>
import HeaderView from '@/components/HeaderView.vue'
import ArrowsView from '@/components/ArrowsView.vue'
import FooterView from '@/components/FooterView.vue'
import json from '@/json/townRoles.json'

export default {
    data(){
        return{
            townRoles: json
        }
    },
    name: 'TownCard',
    components: {
        HeaderView,
        ArrowsView,
        FooterView
    },
    props: ["id"]
} 
</script>

<style  lang='scss' scoped>

</style>
  