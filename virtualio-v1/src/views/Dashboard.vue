<template>
  <div class="hello">
    <h1>Aquí se crean máquinas virtuales</h1>
  <UserNavbar/>
  <DashboardMenu/>  
  <UserVMsTable/>
  </div>
</template>

<script>
import UserNavbar from "../layout/UserNavbar.vue";
import DashboardMenu from '../components/DashboardMenu.vue';
import UserVMsTable from "../components/UserVMsTable.vue"

export default {
  name: "Dashboard",
  components:{
    UserNavbar,
    DashboardMenu,
    UserVMsTable,

  },  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
