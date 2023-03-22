<script>
import {mapGetters, mapState} from "vuex";

export default{
  name:'CardVue',
  computed: {
    ...mapState(["characterStore"]),

    ...mapGetters('characterStore', ['getUrl', 'getCharacters']),

    getCharactersList(){
      return this.getCharacters
    }
  },
}
</script>
<template>
  <div v-for="character in getCharactersList" class="card">
    <div class="front" v-bind:style="{ 'background-image': 'url(' + character.image + ')' }">
      <h4>{{character.name}}<br>#{{character.id}}</h4>
      <h6>{{character.status}}</h6>
    </div>
    <div onclick="" class="back">
      <div>
        <img class="character-image" v-bind:src="character.image" v-bind:alt="character.name+' image'">
        <table class="character-table">
          <tr>
            <td><strong>Specie</strong></td>
            <td>{{character.species}}</td>
          </tr>
          <tr>
            <td><strong>Gender</strong></td>
            <td>{{character.gender}}</td>
          </tr>
          <tr>
            <td><strong>Location</strong></td>
            <td>{{character.location.name}}</td>
          </tr>
          <tr>
            <td><strong>Episodes</strong></td>
            <td>{{character.episode.length}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

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
  background: #fff;
  transform: rotateY(-180deg);
  padding: 0 2em;
  color: #fff;

  .character-image{
    width: 90%;
  }

  .button {
    background: linear-gradient(135deg, adjust-hue($primary, -20deg), $primary);
    font-weight: bold;

    &:before {
      box-shadow: 0 0 10px 10px rgba($primary, 0.25);
      background-color: rgba($primary, 0.25);
    }
  }

  .card:hover & {
    transform: rotateY(0deg);
  }

  .card:nth-child(even) & {
    transform: rotateY(180deg);

    .button {
      background: linear-gradient(135deg, adjust-hue($secondary, -20deg), $secondary);

      &:before {
        box-shadow: 0 0 10px 10px rgba($secondary, 0.25);
        background-color: rgba($secondary, 0.25);
      }
    }
  }

  .character-table{
    text-align: center;
    border-style: solid;
    width: 100%;
    color: $primary;
    td{
      border: solid;
      border-collapse: collapse;
    }
  }
  .card:nth-child(even):hover & {
    transform: rotateY(0deg);
  }
}
</style>