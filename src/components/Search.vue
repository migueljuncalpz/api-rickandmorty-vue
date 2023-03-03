<template>
  <div class="search-engine">
    <form id="search-form">
      <input type="text" v-model="searchQuery" placeholder="character name" />
    </form>
  </div>
</template>

<script>
export default {
  name:"Search",
  data() {
    return {
      searchQuery: '',
    };
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

    const debouncedRefresh = debounce(getCharacters,300)

    let currentPage=1
    let url = "https://rickandmortyapi.com/api/character/?"

    let form = document.getElementById("search-form")
    form.addEventListener("input",async function(event) {
      event.preventDefault();
      const query = this.elements.query.value;
      url = "https://rickandmortyapi.com/api/character/?" + `name=${query}`+"&"
      debouncedRefresh(url)
    })
  },
  methods: {
    async search() {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${this.searchQuery}`);
      const data = await response.json();
      console.log(data); // Muestra los resultados en la consola
    },
  },
};
</script>
<style lang="scss">
.search-engine{
  display: inline-flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 8rem;
  padding-right: 8rem;
  width: 100vw;
  align-items: center;
  transition: transform 0.2s;

  input{
    width: 100%;
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