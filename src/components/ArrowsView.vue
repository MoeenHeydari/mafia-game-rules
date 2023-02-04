<template>
    <div class="arrows">
        <a href="#">
            <fa icon='chevron-circle-left'/>
        </a>
        
        <a href="#">
            <fa icon='chevron-circle-right'/>
        </a>
    </div>

</template>
  
<script>
    export default {
        name: 'ArrowsView',
        props: {

        }
    }
    
</script>

<style scoped>
.arrows {
    width: 99%;
    height: auto;;
    margin: auto;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 50px;
}

a {
    font-size: 30pt;
    color: #fff;
}
</style>
  