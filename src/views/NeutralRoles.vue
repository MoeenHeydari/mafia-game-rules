<template>
    <div v-if="showCard === false">
        <header-view></header-view>

        <!-- Icons to go to the previous and next pages -->
        <arrows-view></arrows-view>
        <h1>Neutral Roles</h1>

        <!-- Creating sets of cards that are predefined in the Jason file -->
     
        <hr>
        <h2>Neutral (Killing)</h2>
        <div class="container-grid">
            <div class="row gap-0 justify-flex-start">
                <div v-for="neutralRole in neutralRoles" :key="neutralRole" @click="createCard(neutralRole.id)">
                    <div class="card" v-if="neutralRole.alignment === 'Neutral (Killing)'">
                        <div class="col-6-xs col-6-sm col-6-xl">
                            <img :src="require(`@/assets/images/roles/${neutralRole.name}.png`)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr>
        <h2>Neutral (Chaos)</h2>
        <div class="container-grid">
            <div class="row gap-0 justify-flex-start">
                <div v-for="neutralRole in neutralRoles" :key="neutralRole" @click="createCard(neutralRole.id)">
                    <div class="card" v-if="neutralRole.alignment === 'Neutral (Chaos)'">
                        <div class="col-6-xs col-6-sm col-6-xl">
                            <img :src="require(`@/assets/images/roles/${neutralRole.name}.png`)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr>
        <h2>Neutral (Evil)</h2>
        <div class="container-grid">
            <div class="row gap-0 justify-flex-start">
                <div v-for="neutralRole in neutralRoles" :key="neutralRole" @click="createCard(neutralRole.id)">
                    <div class="card" v-if="neutralRole.alignment === 'Neutral (Evil)'">
                        <div class="col-6-xs col-6-sm col-6-xl">
                            <img :src="require(`@/assets/images/roles/${neutralRole.name}.png`)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr>
        <h2>Neutral (Benign)</h2>
        <div class="container-grid">
            <div class="row gap-0 justify-flex-start">
                <div v-for="neutralRole in neutralRoles" :key="neutralRole" @click="createCard(neutralRole.id)">
                    <div class="card" v-if="neutralRole.alignment === 'Neutral (Benign)'">
                        <div class="col-6-xs col-6-sm col-6-xl">
                            <img :src="require(`@/assets/images/roles/${neutralRole.name}.png`)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- If any of the cards clicked, only it will be shown-->
    <div v-if="showCard">
        <neutral-card :id="id"></neutral-card>
    </div>
</template>

<script>
import HeaderView from '@/components/HeaderView.vue'
import ArrowsView from '@/components/ArrowsView.vue'
import NeutralCard from '@/components/NeutralCard.vue'
import json from '../json/neutralRoles.json'
    
export default {
    data(){
        return{
            neutralRoles: json,
            showCard: false,
            id: null,
        }
    },
    
    name: 'neutralRoles',
    components: {
        HeaderView,
        ArrowsView,
        NeutralCard
    },
    methods: {

        // Function for creating a single town role card
        createCard(id) {
            this.showCard = true
            this.id = id
        }
    }
}
</script>

<style lang="scss" scoped>

</style>