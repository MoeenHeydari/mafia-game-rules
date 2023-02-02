<template>
    <div class="header">

        <a href="/">
            <fa icon="home"/>
        </a>

        <img class="logo" id="logo" src="../assets/images/logo.png">
        
        <a @click="$router.go(-1)">
            <fa icon="undo-alt"/>
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
    margin-top: 100px;
    cursor: pointer;
}
</style>
  