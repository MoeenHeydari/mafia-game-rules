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

</template>
  
<script>
import HeaderView from '@/components/HeaderView.vue'
import ArrowsView from '@/components/ArrowsView.vue'
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
        ArrowsView
    },
    props: ["id"]
} 
</script>

<style scoped>
.card {
    width: 400px;
    height: auto;
    margin: auto;
}

h2, h3 {
    text-align: center;
    color: rgb(148, 38, 38);
}

p {
    text-align: center;
    width: 60%;
    margin: auto;
}

img {
    max-width: 80%;
    cursor: pointer;
}
</style>
  