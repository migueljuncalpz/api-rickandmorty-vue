<template>
  <div id="search" class="search-engine" >
      <input type="text" name="query" placeholder="character name"/>
  </div>
</template>

<script>

import {mapState, mapGetters, mapActions} from "vuex";
export default {
  name:"Search",

  computed: {
    ...mapState(["characterStore"]),

    ...mapGetters('characterStore', ['getUrl', 'getCharacters']),

  },
  methods: {
    ...mapActions('characterStore',['getData','changeUrl']),

  },
  mounted() {
    let getUrl= ()=>{return this.getUrl}
    let updateUrl = (newUrl)=>{this.changeUrl(newUrl)}
    let updateData= ()=>{this.getData()}
    let getCharacters= ()=>{return this.getCharacters}

    let debouncedDataSearch = debounce(updateData,300)

    function debounce(func, delay) {
      let timerId;
      return function (...args) {
        if (timerId) {
          clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
          func.apply(this, args);
          timerId = null;
        }, delay);
      };
    }

    let form = document.getElementById("search")
    form.addEventListener("input",async function(event) {
      event.preventDefault();
      const query = this.querySelector("input").value;
      let url=new URL(getUrl())
      url.searchParams.set("name",query)
      url.searchParams.set("page","1")
      updateUrl(url)
      debouncedDataSearch();
    })
    updateData()
  },
};

</script>
<style lang="scss">
.search-engine{
  display: flex;
  width: 100vw;
  padding-top: 2rem;
  padding-bottom:2rem ;
  justify-content: center;
  transition: transform 0.2s;
  input{
    width: 60%;
    height: 2em;
    margin: 0 auto;
    transition: transform 0.2s;
    border-style:none;
    border-bottom-style: solid;
    font-size: calc(1vw + 1vh);
    text-transform:uppercase;
    &:hover{
      transform: scale(1.2);
    }
    &:focus{
      outline-width: 0;
    }
  }
}
</style>