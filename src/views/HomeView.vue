<template>

    <div>
        <img src="../assets/images/logo.png">
        <h1>Mafia Game</h1>

        <router-link to="/gameDescription">Game Description</router-link>
        <roles-classification></roles-classification>
    </div>
    
</template>

<script>
import RolesClassification from '@/components/RolesClassification.vue'

export default {
    name: 'HomeView',
    components: {
        RolesClassification
    }
}
</script>

<style>

body {
    background-color: #000;
}

a {
    color: #ffffff;
    text-decoration: none;
}

h1{
    color:#ffffff
}

[v-cloak] {
    display: none;
}
</style>