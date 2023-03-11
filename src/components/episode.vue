<template>
  {{this.getData}}
  {{ this.getEpisodes}}
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
computed:{
  ...mapGetters("episodeStore",["getEpisodes"]),
  getEpisodesList(){
    return this.getEpisodes;
  },
},
methods:{
  ...mapActions("episodeStore",["getData"])

},
mounted() {
  this.getData()
}
}
</script>