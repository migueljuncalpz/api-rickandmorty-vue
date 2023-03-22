<template>
  <div class="pagination">
    <button @click="prevPage()"> &lt;&lt;&lt; </button>
    <div class="page">{{this.getPage()}}</div>
    <button @click="nextPage()"> >>> </button>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  data(){
    return{
      currentPage:1
    }
  },

  computed: {
    ...mapState(["characterStore"]),

    ...mapGetters('characterStore', ['getUrl', 'getCharacters','getTotalPages']),
    ...mapGetters('episodeStore', ['getEpisodesUrl', 'getEpisodes','getEpisodesTotalPages']),

    ...mapGetters(["getStore"]),

    getUrlFromStore(){
      if(this.getStore==="episodes"){
        return this.getEpisodesUrl
      }else{
        return this.getUrl
      }
    },
    getTotalPagesFromStore(){
      if(this.getStore==="episodes"){
        return this.getEpisodesTotalPages
      }else{
        return this.getTotalPages
      }
    },
  },
  methods: {

    ...mapActions('characterStore',['getData','changeUrl']),
    ...mapActions('episodeStore',['getDataEpisodes','changeUrlEpisodes']),

    setUrlFromStore(url){
      if(this.getStore==="episodes"){
         this.changeUrlEpisodes(url)
      }else{
        this.changeUrl(url)
      }
    },
    getDataFromStore(){
      if(this.getStore==="episodes"){
        this.getDataEpisodes()
      }else{
        this.getData()
      }
    },

    getPage() {
      return new URL(this.getUrlFromStore).searchParams.get("page")
    },

    nextPage() {
      let url = new URL(this.getUrlFromStore)
      let currentPage = url.searchParams.get("page").toString()
      if (currentPage<this.getTotalPagesFromStore) {
        currentPage++;
        url.searchParams.set("page",currentPage)
        this.setUrlFromStore(url)
        this.getDataFromStore()
      }
    },

    prevPage() {
      let url = new URL(this.getUrlFromStore)
      let currentPage = url.searchParams.get("page").toString()
      if (currentPage>1) {
        currentPage--;
        url.searchParams.set("page",currentPage)
        this.setUrlFromStore(url)
        this.getDataFromStore()
      }
    },
  }
}
</script>

<style lang="scss">
.pagination{
  display: flex;
  width: 100vw;
  justify-content: center;
  padding: 1rem;
  .page{
    padding: 0.5em 0.5em 0.5em 0.5em;
  }
}
</style>