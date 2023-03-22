<template>
  <HeaderVue></HeaderVue>
  <Menu></Menu>
  <Search v-if="'characters'===this.getStore"></Search>
  <Filters v-if="'characters'===this.getStore"></Filters>
  <GalleryContainer>
    <template v-if="'characters'===this.getStore" v-slot:container-header>{{this.getCharactersCount}} Characters Found</template>
    <template v-else-if="'episodes'===this.getStore" v-slot:container-header>{{this.getEpisodesCount}} Episodes Found</template>
  </GalleryContainer>
  <Pagination v-if="(getCharactersCount!==0 && 'characters'===this.getStore) || this.getEpisodesCount!==0 && 'episodes'===this.getStore "></Pagination>
</template>

<script>
import GalleryContainer   from '@/components/GalleryContainer.vue'
import HeaderVue from "@/components/Header.vue";
import Search from "@/components/Search.vue";
import Pagination from "@/components/Pagination.vue";
import Filters from "@/components/Filters.vue";
import {mapGetters, mapState} from "vuex";
import Menu from "@/components/Menu.vue";
export default{
  data:()=>({}),
  components:{
    Search,
    HeaderVue,
    GalleryContainer,
    Pagination,
    Filters,
    Menu
  },
  computed: {
    ...mapState(["characterStore"]),
    ...mapGetters('characterStore', ['getCharactersCount']),
    ...mapGetters('episodeStore', ['getEpisodesCount']),
    ...mapGetters(["getStore"])
  },
}
</script>


<style lang="scss">
html, body {
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-attachment: fixed;
  background-size: cover;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}
#app{
  margin:0;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
}
.container{
  margin: 2rem 2rem;
}
</style>
