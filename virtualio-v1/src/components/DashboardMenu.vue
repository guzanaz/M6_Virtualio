<template>
  <nav>
    <h3>este es un sidebar para el usuario</h3>
    <CreateVM/>
  </nav>
  
</template>

<script>
import CreateVM from "../components/CreateVM";
export default {
    name:"DashboardMenu",
    components:{
        CreateVM
    },

};
</script>

<style scooped>
nav{
    padding: 20px;
    background-color: rgb(248, 177, 177);
}
</style>