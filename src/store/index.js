import {createStore} from "vuex";
import searchStore from './modules/characterStore'
import episodeStore from "@/store/modules/episodeStore";


const store = createStore({
    state:{
      store:"characters"
    },
    getters:{
        getStore:state=>state.store,
    },
    actions: {
        changeStore({ commit,state} , store){
            commit('SET_STORE' , store)
            console.log(state.store)
        }
    },
    mutations:{
        SET_STORE(state, store) {
            state.store = store;
        }
    },
    modules: {
        searchStore,
        episodeStore
    },
})
export default store;