<template>
  <HeaderVue></HeaderVue>
  <Search></Search>
  <GalleryContainer></GalleryContainer>
  <Pagination></Pagination>
</template>

<script>
import GalleryContainer   from '@/components/GalleryContainer.vue'
import HeaderVue from "@/components/Header.vue";
import Search from "@/components/Search.vue";
import Pagination from "@/components/Pagination.vue";
export default{
  data:()=>({}),
  components:{
    Search,
    HeaderVue,
    GalleryContainer,
    Pagination
  }
}
</script>


<style lang="scss">
html, body {
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-attachment: fixed;
  background-size: cover;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}
#app{
  margin:0;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
}
.container{
  margin: 2rem 2rem;
}
</style>
