<template>
    <div class="header">

        <a @click="$router.go(-1)">
            <fa icon="arrow-alt-circle-left"/>
        </a>
        
        <a class="logo" href="/">
            <img id="logo" src="../assets/images/logo.png">
        </a>

    </div>

</template>
  
<script>
    export default {
        name: 'HeaderView',
        props: {

        }
    }
    
</script>

<style scoped>
.header {
    width: 95%;
    height: auto;
    margin: auto;
    display: flex;
    justify-content: space-between;
}

a {
    font-size: 30pt;
    color: #fff;
    margin-top: 50px;
    cursor: pointer;
}

.logo {
    margin: 0 auto;
}
</style>
  