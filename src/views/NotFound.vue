<template>
    <div class="center">
        <fa class='icon' icon='frown'/>
        <h1>404 Error</h1>
        
        <h2>The following path was not found:
            <br>
            <h4>{{ this.$route.params.catchAll }}</h4>
        </h2>
    </div>
    <router-link to="/">
        <h6>Go back</h6>
    </router-link>
    <footer-view></footer-view>
</template>

<script>
import FooterView from '@/components/FooterView.vue';

export default {
    components: FooterView,
    props: ['params']
}
</script>

<style scoped>
.center {
    margin: 200px auto;
}

.icon {
    font-size: 200px;
    color: white;
}
</style>