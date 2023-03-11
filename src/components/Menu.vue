<template>
  <div class="menu">
    <input type="radio" id="characters" value="characters" v-model="store" @change="this.changeStoreValue">
    <label for="characters">CHARACTERS</label>
    <input type="radio" id="episodes" value="episodes" v-model="store" @change="this.changeStoreValue">
    <label for="episodes">EPISODES</label>
  </div>
</template>
<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  data(){
    return {
      store:"characters"
    }
  },
  computed: {
    ...mapState(["searchStore"]),

    ...mapGetters('searchStore', ['getUrl', 'getCharacters', 'getTotalPages']),

  },
  methods: {
    ...mapActions(['changeStore']),

    changeStoreValue(){
      this.changeStore(this.store)
    }
  },
}
</script>
<style lang="scss">
.menu{
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 1em 1em 1em 1em;
  label {
    display: inline-block;
  }
  input[type="radio"] {
    display:none;
  }
  input[type="radio"]:checked + label {
    font-weight: bold;
  }
  legend{
    font-style: italic;
  }
}
</style>
