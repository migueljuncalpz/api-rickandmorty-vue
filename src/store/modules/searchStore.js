
export default {
    namespaced: true,
    state: {
        characters:[],
        currentUrl:"https://rickandmortyapi.com/api/character/?"
    },
    getters: {
        getCharacters: state => state.characters,
        getUrl: state => state.currentUrl
    },
    actions: {
        getData({commit , state }) {
            console.log("hago caso")
            fetch(state.currentUrl).then(
                response => response.json().then(
                    json => {
                        console.log(state.characters+"antes")
                        console.log(json.results)
                        commit("SET_DATA",json.results)
                    }
                )
            )
        },
        changeUrl({ commit } , newUrl){
            commit('SET_URL' , newUrl)
        }
    },
    mutations: {
        SET_DATA(state, data) {
            console.log("entro commit")
            console.log(data)
            state.characters = data;
            console.log(state.characters)

        },
        SET_URL(state,newUrl){
            state.currentUrl=newUrl;
        }
    }
}
