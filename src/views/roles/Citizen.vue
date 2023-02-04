<template>
    <town-card :id="id"></town-card>
</template>

<script>
import TownCard from '@/components/TownCard.vue'

export default {
    name: 'Citizen',
    components: {
        TownCard 
    },
    props: ["id"],
}
</script>