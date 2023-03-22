<script>
import CardVue from "./CharacterCard.vue"
import {mapGetters, mapState} from "vuex";
import Episode from "@/components/episode.vue";
export default{
  name:'GalleryItem',

  components:{
    Episode,
    CardVue,
  },
  computed: {
    ...mapState(["characterStore"]),
    ...mapGetters('characterStore', ['getCharactersCount']),
    ...mapGetters( ['getStore']),

  },
}
</script>

<template>
  <div class="content">
    <h1 class="heading"><slot name="container-header"></slot></h1>
    <CardVue v-if="'characters'===this.getStore"></CardVue>
    <Episode v-else-if="'episodes'===this.getStore"></Episode>
  </div>
</template>

<style scoped lang="scss">
$primary: rgb(0, 2, 7);
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
html {
  font-size: 18px;
  line-height: 1.5;
  font-weight: 300;
  color: #333;
  font-family: "Nunito Sans", sans-serif;
}
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: $primary-light;
  background-attachment: fixed;
}
.content {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 80vw;
}
.heading {
  width: 100%;
  font-weight: 900;
  font-size: 1.618rem;
  text-transform: uppercase;
  letter-spacing: .1ch;
  line-height: 1;
  padding-bottom: .5em;
  position: relative;

  &:after {
    display: block;
    content: '';
    position: absolute;
    width: 60px;
    height: 4px;
    background: linear-gradient(135deg, adjust-hue($primary, -20deg), $primary);
    bottom: 0;
  }
}
.description {
  width: 100%;
  font-size: larger;
}
</style>