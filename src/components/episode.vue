<template>
  <div v-for="n in getEpisodesList.length" class="card">
    <div class="front">
      <h4>{{getEpisodesList[n-1].name}}<br>#{{getEpisodesList[n-1].id}}</h4>
      <h6>{{getEpisodesList[n-1].episode}}</h6>
    </div>
    <div onclick="" class="back">
      <div v-for="character in getCharactersList[n-1]">
        <h4>{{character.name}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  data(){
    return{
      background:""
    }
  },
  computed:{
    ...mapGetters("episodeStore",["getEpisodes","getCharactersInEpisodes"]),

    getEpisodesList(){
      return this.getEpisodes;
    },
    getCharactersList(){
      return this.getCharactersInEpisodes;
    }
  },
  methods:{
    ...mapActions("episodeStore",["getDataEpisodes"]),

    getBackground(characters){
      console.log(characters.length)
      let value = Math.round(Math.random() * characters.length);
      fetch(characters[value]).then(
          response=> response.json()
      ).then(json => {
        this.background = json.image
      })
    }
},
mounted() {
  this.getDataEpisodes()
}
}
</script>

<style scoped lang="scss">

$primary: rgb(0, 0, 1);
$primary-light: hsl(222,50%,95%);
$secondary: hsl(350,80%,50%);
$red: hsl(10,80%,50%);
$orange: hsl(50,80%,50%);

*, *:before, *:after {
  box-sizing: border-box;
}

@mixin mobile ($size: 640px) {
  @media screen and (max-width: $size) {
    @content;
  }
}

.card {
  color: inherit;
  cursor: pointer;
  min-width: 300px;
  max-width: 400px;
  min-height: 500px;
  perspective: 1000px;
  margin: 1rem;
  position: relative;
}
.front,
.back {
  display: grid;
  border-radius: 6px;
  background-position: center;
  background-size: cover;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: ease-in-out 600ms;
  overflow: hidden;
}
.front {
  background-size: cover;
  background-blend-mode: overlay;
  padding: 2rem;
  font-size: 1.618rem;
  font-weight: 600;
  color: #fff;
  overflow: hidden;
  &:before {
    position: absolute;
    display: block;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, adjust-hue($primary, -20deg), $primary);
    opacity: .25;
    z-index: -1;
  }
  .card:hover & {
    transform: rotateY(180deg);
  }
  .card:nth-child(even):hover & {
    transform: rotateY(-180deg);
  }
  h4,h6{
    background-color: rgba($primary, 0.50);
    backdrop-filter: blur(2px);
    border-radius: inherit;
  }

}
.back {
  background-color: white;
  transform: rotateY(-180deg);
  padding: 0 2em;

  .card:hover & {
    transform: rotateY(0deg);
    background-color: white;
  }

  .card:nth-child(even) & {
    transform: rotateY(180deg);

  }
  .card:nth-child(even):hover & {
    transform: rotateY(0deg);
  }
}
</style>