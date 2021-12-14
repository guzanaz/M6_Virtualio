<template>
  <div class="hello">
    <h1>Aquí se crean máquinas virtuales</h1>
  <CreateVM/>  
  </div>
</template>

<script>
import CreateVM from "../components/CreateVM";

export default {
  name: "Dashboard",
  components:{
    CreateVM
  },  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
