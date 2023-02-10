<template>

    <div v-cloak>
        <img class="logo" src="../assets/images/logo.png">
        <h1>Mafia Game</h1>

        <router-link to="/gameDescription">
            <h6>Game Description</h6>
        </router-link>
        <roles-classification></roles-classification>
        <footer-view></footer-view>
    </div>
    
</template>

<script>
import RolesClassification from '@/components/RolesClassification.vue'
import FooterView from '@/components/FooterView.vue'

export default {
    name: 'HomeView',
    components: {
        RolesClassification,
        FooterView,
    }
}
</script>

<style lang="scss">

@import '../assets/scss/index.scss';
.logo {
    margin-top: 100px;
    max-width: 250px;
}
</style>