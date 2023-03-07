import {createStore} from "vuex";
import searchStore from './modules/searchStore'


const store = createStore({
    modules: {
        searchStore,
    },
})
export default store;