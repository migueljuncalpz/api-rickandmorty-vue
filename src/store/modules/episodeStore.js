
export default {
    namespaced: true,
    state: {
        foundEpisodes:0,
        episodes:[],
        currentEpisodesUrl:"https://rickandmortyapi.com/api/episode/?page=1",
        totalPages:0
    },
    getters: {
        getEpisodesCount:state=>state.foundEpisodes,
        getEpisodes: state => state.episodes,
        getEpisodesUrl: state => state.currentEpisodesUrl,
        getTotalPages: state => state.totalPages
    },
    actions: {
        getData({commit , state }) {
            fetch(state.currentUrl).then(
                response => response.json().then(
                    json => {
                        commit("SET_EPISODES_FOUND",json.info.count)
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
            state.episodes = data;
        },
        SET_URL(state,newUrl){
            state.currentEpsiodesUrl=newUrl;
        },
        SET_TOTAL_PAGES(state,pages){
            state.totalPages=pages
        },
        SET_CHARACTERS_FOUND(state,numEpisodes){
            state.foundEpisodes=numEpisodes
        }
    }
}
