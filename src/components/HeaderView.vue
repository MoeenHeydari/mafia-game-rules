<template>
    <div class="header">

        <a @click="$router.go(-1)">
            <fa icon="arrow-alt-circle-left"/>
        </a>
        
        <a class="header-logo" href="/">
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
