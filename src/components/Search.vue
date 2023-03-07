<template>
  <div class="search-engine">
    <form id="search-form">
      <input type="text" name="query" placeholder="character name" />
    </form>
  </div>
</template>

<script>

import {mapState, mapGetters, mapActions} from "vuex";
export default {
  name:"Search",
  data() {},

  computed: {
    ...mapState(["searchStore"]),

    ...mapGetters('searchStore', ['getUrl', 'getCharacters']),

  },
  methods: {
    ...mapActions('searchStore',['getData','changeUrl']),

  },
  mounted() {
    let url = this.getUrl
    let updateUrl = (newUrl)=>{this.changeUrl(newUrl)}
    let updateData= ()=>{this.getData()}
    let getCharacters= ()=>{return this.getCharacters}



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

    let form = document.getElementById("search-form")
    form.addEventListener("input",async function(event) {
      event.preventDefault();
      const query = this.elements.query.value;
      url = "https://rickandmortyapi.com/api/character/?" + `name=${query}`+"&"
      updateUrl(url)
      updateData();
      console.log(getCharacters())
    })
    updateData()
    console.log(getCharacters())

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
  text-align: center;
  input{
    margin: 0 auto;
    transition: transform 0.2s;
    border-style:none;
    :hover{
      transform: scale(1.2);
    }
    :focus{
      border-color: #333333;
      border-style: none;
    }
  }
}
</style>