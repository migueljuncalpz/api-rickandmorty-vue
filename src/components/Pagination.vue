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
    ...mapState(["searchStore"]),

    ...mapGetters('searchStore', ['getUrl', 'getCharacters','getTotalPages']),

  },
  methods: {
    ...mapActions('searchStore',['getData','changeUrl']),

    getPage() {
      return new URL(this.getUrl).searchParams.get("page")
    },

    nextPage() {
      let url = new URL(this.getUrl)
      let currentPage = url.searchParams.get("page").toString()
      if (currentPage<this.getTotalPages) {
        currentPage++;
        url.searchParams.set("page",currentPage)
        this.changeUrl(url.toString())
        this.getData()
      }
    },

    prevPage() {
      let url = new URL(this.getUrl)
      let currentPage = url.searchParams.get("page").toString()
      if (currentPage>1) {
        currentPage--;
        url.searchParams.set("page",currentPage)
        this.changeUrl(url.toString())
        this.getData()
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
    padding: 1rem;
    border-style: solid;
    border-radius: 20px;
  }
}
</style>