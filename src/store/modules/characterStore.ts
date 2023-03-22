export interface CharacterStore{
    foundCharacters:number,
    characters:[],
    currentUrl:string,
    totalPages:number,
}
export default {
    namespaced: true,
    state:():CharacterStore=>({
        foundCharacters:0,
        characters:[],
        currentUrl:"https://rickandmortyapi.com/api/character/?page=1",
        totalPages:0
    }),
    getters: {
        getCharactersCount:state=>state.foundCharacters,
        getCharacters: state => state.characters,
        getUrl: state => state.currentUrl,
        getTotalPages: state => state.totalPages
    },
    actions: {
        getData({commit , state }) {
            fetch(state.currentUrl).then(
                response => response.json().then(
                    json => {
                        commit("SET_CHARACTERS_FOUND",json.info.count)
                        commit("SET_TOTAL_PAGES",json.info.pages)
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
            state.characters = data;

        },
        SET_URL(state,newUrl){
            state.currentUrl=newUrl;
        },
        SET_TOTAL_PAGES(state,pages){
            state.totalPages=pages
        },
        SET_CHARACTERS_FOUND(state,numCharacters){
            state.foundCharacters=numCharacters
        }
    }
}
