<template>
  <div id="app">
    <router-view/>
    <Footernav v-show="$route.meta.showFooter"/>
  </div>
</template>
<script>
  import  Footernav from "./components/FooterNav/footernav.vue"
  export default {
    mounted(){
      this.$store.dispatch("getClassify")
      this.$store.dispatch("getHome")
    },
    components:{
      Footernav
    }
  }
</script>

<style>

</style>
