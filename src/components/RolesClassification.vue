<template>
    <div class="container">

        <div  v-for="classification in classifications" :key="classification" >
            <router-link :to="classification.href">
                <div class="classification">
                    <img :src="require(`@/assets/images/classification/${classification.name}.webp`)" />
                </div>
                <p :style="(`color:${classification.color}`)">
                    {{classification.name + 'Roles'}}
                </p>
            </router-link>
        </div>
    </div>

</template>
  
<script>
import json from '../json/classifications.json'

    export default {
        data(){
            return{
                classifications: json,  
            }
        },
        name: 'RolesClassification',
        props: {

        }
    }
</script>

<style lang="scss" scoped>

</style>
  