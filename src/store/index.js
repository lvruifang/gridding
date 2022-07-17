import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        menu: {
            id:"",
            label:"",
        }
    },
    mutations: {
        changeMenu(state, data) {
            state.menu = data
            
        }
    }
})
export default store
