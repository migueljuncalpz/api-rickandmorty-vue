import {InjectionKey} from "vue";

inteface EpisodeStore {
    foundEpisodes: Int
}
export default {
    namespaced: true,
    state: {
        foundEpisodes:0,
        episodes:[],
        charactersInEpisode:[],
        currentEpisodesUrl:"https://rickandmortyapi.com/api/episode/?page=1",
        totalPages:0
    },
    getters: {
        getEpisodesCount:state=>state.foundEpisodes,
        getEpisodes: state => state.episodes,
        getEpisodesUrl: state => state.currentEpisodesUrl,
        getCharactersInEpisodes: state => state.charactersInEpisode,
        getEpisodesTotalPages: state => state.totalPages
    },
    actions: {
        getDataEpisodes({commit , state }) {
            fetch(state.currentEpisodesUrl).then(
                response => response.json().then(
                    json => {
                        commit("SET_EPISODES_FOUND",json.info.count)
                        commit("SET_TOTAL_PAGES",json.info.pages)
                        commit("SET_DATA",json.results)
                    }
                )
            )
        },

        changeUrlEpisodes({ commit } , newUrl){
            commit('SET_URL' , newUrl)
        }
    },
    mutations: {
        SET_DATA(state, data) {
            state.episodes = data;
        },
        SET_URL(state,newUrl){
            state.currentEpisodesUrl=newUrl;
        },
        SET_TOTAL_PAGES(state,pages){
            state.totalPages=pages
        },
        SET_EPISODES_FOUND(state,numEpisodes){
            state.foundEpisodes=numEpisodes
        },
        SET_CHARACTERS_IN_EPISODES(state,characters){
            state.charactersInEpisode=characters
        }
    }
}
