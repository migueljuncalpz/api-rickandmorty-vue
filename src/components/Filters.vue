<template>
  <div class="filters">
    <fieldset>
      <legend>CHOOSE GENDER</legend>
      <input type="radio" name="gender" id="noneGender" v-on:change="setGenderFilter" v-model="gender" value="">
      <label for="noneGender">NONE</label>
      <input type="radio" name="gender" id="male" v-on:change="setGenderFilter" v-model="gender" value="male">
      <label for="male">MALE</label>
      <input type="radio" name="gender" id="female" v-on:change="setGenderFilter" v-model="gender" value="female">
      <label for="female">FEMALE</label>
      <input type="radio" name="gender" id="unknownGender" v-on:change="setGenderFilter" v-model="gender" value="unknown">
      <label for="unknownGender">UNKNOWN</label>
    </fieldset>
    <fieldset>
      <legend>CHOOSE STATUS</legend>
      <input type="radio" name="status" id="none" v-on:change="setStatusFilter" v-model="status" value="">
      <label for="none">NONE</label>
      <input type="radio" name="status" id="alive" v-on:change="setStatusFilter" v-model="status" value="alive">
      <label for="alive">ALIVE</label>
      <input type="radio" name="status" id="dead" v-on:change="setStatusFilter" v-model="status" value="dead">
      <label for="dead">DEAD</label>
      <input type="radio" name="status" id="unknown" v-on:change="setStatusFilter" v-model="status" value="unknown">
      <label for="unknown">UNKNOWN</label>
    </fieldset>
  </div>
</template>
<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  data(){
    return{
      gender:"",
      status:""
    }
  },

  computed: {
    ...mapState(["characterStore"]),

    ...mapGetters('characterStore', ['getUrl', 'getCharacters','getTotalPages']),

  },
  methods: {
    ...mapActions('characterStore',['getData','changeUrl']),

    setGenderFilter(){
      let url = new URL(this.getUrl)
      url.searchParams.set("gender",this.gender)
      this.changeUrl(url)
      this.getData()
    },
    setStatusFilter(){
      let url = new URL(this.getUrl)
      url.searchParams.set("status",this.status)
      this.changeUrl(url)
      this.getData()
    }
  }
}
</script>

<style lang="scss">
.filters{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  fieldset{
    display: flex;
    justify-content: space-around;
    width: 80%;
    border-left-style: none;
    border-right-style: none;
    margin: 1em 1em 1em 1em;
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

}
</style>