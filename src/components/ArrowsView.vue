<template>
    <div class="arrows">
        <button class="changePageButton" @click='changePage(-1)'>
            <fa icon='chevron-circle-left'/>
        </button>
        <button class="changePageButton" @click='changePage(+1)'>
            <fa icon='chevron-circle-right'/>
        </button>
    </div>
</template>
  
<script>
    export default {
        name: 'ArrowsView',
        props: ['id'],
        methods:{
            changePage(x) {
                const newId = this.id + x;
                this.$emit('change-page', newId)
            }            
        }
    }
</script>

<style scoped>
</style>