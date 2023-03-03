<script>
export default{
  name: 'HeaderVue',
  data:()=>({
  }),
}
</script>

<template>
  <div class="header-container">
    <img class="header-img" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="imagen de  RICK Y MORTY">
  </div>
</template>

<style scoped lang="scss">
.header-container{
  width: 100vw;
  padding: 2vmin 3vmin;
  font-size: 4vmin;
  font-family: 'Montserrat', Arial;
  display: inline-flex;
  align-content: space-between;
  height: 15vh;

  .header-img{
    width: 100%;
    height: 10vh;
    transition: transform 0.5s;
  }

  :hover{
    transform: scale(1.2);
  }

}


</style>