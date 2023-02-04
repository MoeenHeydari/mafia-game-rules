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

</template>
  
<script>
import HeaderView from '@/components/HeaderView.vue'
import ArrowsView from '@/components/ArrowsView.vue'
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
    border-radius: 30px;
}
</style>
  