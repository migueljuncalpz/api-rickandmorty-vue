<template>
  <div class="search-engine">
    <form id="search-form">
      <input type="text" name="query" v-model="searchQuery" placeholder="character name" />
    </form>
  </div>
</template>

<script>

import { searchStore } from '@/stores/characters'

export default {
  name:"Search",
  data() {},
  setup() {
  },
  mounted() {
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

    let characters = []
    const debouncedRefresh = debounce(getCharacters,300)
    let currentPage=1
    let url = "https://rickandmortyapi.com/api/character/?"
    function getCharacters(url) {
      fetch(url)
          .then(response => response.json())
          .then(data =>{
            console.log(data.results)
            characters = data.results
          })
    }
    const characters_store = searchStore()
    const handleSearch = (characters) => {
      characters_store.setSearchResponse(characters)
    }
    let form = document.getElementById("search-form")
    form.addEventListener("input",async function(event) {
      event.preventDefault();
      const query = this.elements.query.value;
      url = "https://rickandmortyapi.com/api/character/?" + `name=${query}`+"&"
      debouncedRefresh(url)
      handleSearch(characters)
    })
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