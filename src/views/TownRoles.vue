<template>
    <div v-cloak>
        <header-view></header-view>

        <!-- Icons to go to the previous and next pages -->
        <arrows-view></arrows-view>
        <h1>Town Roles</h1>

        <!-- Creating sets of cards that are predefined in the Jason file -->         
        <hr>
        <h2>Town (Townie)</h2>
        <div class="container-grid">
            <div class="row gap-0 justify-flex-start">
                <div v-for="townRole in townRoles" :key="townRole" @click="passId(townRole.id); goToNewPage(townRole.href);">
                    <div class="col-6-xs col-6-sm col-2-xl">
                        <div class="card" v-if="townRole.alignment === 'Town (Townie)'">
                            <img :src="require(`@/assets/images/roles/${townRole.name}.png`)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr>
        <h2>Town (Investigative)</h2>
        <div class="container-grid">
            <div class="row gap-0 justify-flex-start">
                <div v-for="townRole in townRoles" :key="townRole">
                    <div class="col-6-xs col-6-sm col-2-xl">
                        <div class="card" v-if="townRole.alignment === 'Town (Investigative)'">
                            <img :src="require(`@/assets/images/roles/${townRole.name}.png`)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr>
        <h2>Town (Killing)</h2>
        <div class="container-grid">
            <div class="row gap-0 justify-flex-start">
                <div  v-for="townRole in townRoles" :key="townRole" @click="passId(townRole.id)">
                    <div class="col-6-xs col-3-sm col-1-xl">
                        <div class="card" v-if="townRole.alignment === 'Town (Killing)'">
                            <img :src="require(`@/assets/images/roles/${townRole.name}.png`)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr>
        <h2>Town (Protective)</h2>
        <div class="container-grid">
            <div class="row gap-0 justify-flex-start">
                <div v-for="townRole in townRoles" :key="townRole" @click="createCard(townRole.id)">
                    <div class="col-6-xs col-3-sm col-1-xl">
                        <div class="card" v-if="townRole.alignment === 'Town (Protective)'"> 
                            <img :src="require(`@/assets/images/roles/${townRole.name}.png`)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr>
        <h2>Town (Support)</h2>
        <div class="container-grid">
            <div class="row gap-0 justify-flex-start">
                <div v-for="townRole in townRoles" :key="townRole" @click="createCard(townRole.id)">
                    <div class="col-6-xs col-3-sm col-1-xl">
                        <div class="card" v-if="townRole.alignment === 'Town (Support)'">
                            <img :src="require(`@/assets/images/roles/${townRole.name}.png`)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderView from '@/components/HeaderView.vue'
import ArrowsView from '@/components/ArrowsView.vue'
import TownCard from '@/components/TownCard.vue'
import json from '../json/townRoles.json'
    
export default {
    data(){
        return{
            townRoles: json,
        }
    },
    
    name: 'TownRoles',
    components: {
        HeaderView,
        ArrowsView,
        TownCard
    },
    methods: {
    
        passId(id) {
            this.$store.dispatch('passIdAction', id)
        },

        goToNewPage(href) {       
            window.location = href
        }

    }
}
</script>

<style lang="scss" scoped>


</style>