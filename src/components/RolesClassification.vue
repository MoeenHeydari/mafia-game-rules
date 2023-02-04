<template>
    <div class="container">

        <div  v-for="classification in classifications" :key="classification" >
            <router-link :to="classification.href">
                <div class="classification">
                    <img :src="require(`@/assets/images/classification/${classification.name}.webp`)" />
                </div>
                <p :style="(`color:${classification.color}`)">
                    {{classification.name}}Roles
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

<style scoped>
.container {
    display: flex;
    justify-content: center;
}

.classification {
    width: 150px;
    height: 150px;
    background-color: #d4d4d4;
    border-radius: 50%;
    margin: 20px;
    display: flex;
    box-shadow: 0px 5px #747474;
    cursor: pointer;
}

img {
    max-width: 70%;
    margin: auto;
}

p {
    display: inline;
    padding: 28px;
    font-size: 18pt;
}

</style>
  