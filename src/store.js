import Vue from 'vue';
import Vuex from 'vuex';



export default new Vuex.Store({
    state: {
        selectedId: null
    },

    mutations: {
        NEW_ID(state , newId){
            state.selectedId = newId;
        }
    },

    actions: {
        passIdAction({commit}, newId){
            commit('NEW_ID', newId);
        }
    }
})