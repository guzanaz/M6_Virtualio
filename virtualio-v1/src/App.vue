<template>
  <Navbar/>
  <LoginSection />
</template>

<script>
import Navbar from './components/Navbar.vue'
import LoginSection from './components/LoginSection.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    LoginSection
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>
