<template>
<<<<<<< HEAD
<div id="App">
    <BootstrapSidebar
      :initial-show="initialShow"
      :links="links"
      :header="header"
      :fa="true"
      @sidebarChanged="onSidebarChanged"
    >
      <template v-slot:navbar>
        <b-navbar
          id="mainNavbar"
          toggleable="lg"
          type="light"
          variant="light"
          fixed="top"
        >
          <b-navbar-nav>
            <b-nav-item> Navbar </b-nav-item>
          </b-navbar-nav>
        </b-navbar>
      </template>

      <template v-slot:content>
        <b-container style="margin-top: 56px">
          <router-view />
        </b-container>
      </template>
    </BootstrapSidebar>
  </div>
=======
  <nav>
    <h3>este es un sidebar para el usuario</h3>
    <CreateVM/>
  </nav>
  
>>>>>>> parent of 9dadc28 (Bootstrap icon libary sucessfully integrated)
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
<<<<<<< HEAD
=======
nav{
    padding: 20px;
    background-color: rgb(248, 177, 177);
}
>>>>>>> parent of 9dadc28 (Bootstrap icon libary sucessfully integrated)
</style>