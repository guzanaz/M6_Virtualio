<template>
<div>
  <Navbar/>
  <LoginSection/>
  <SobreVirtualio/>
  <GoogleMap/>
  <ContactForm/>
   <Footer/>
   </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import LoginSection from './components/LoginSection.vue'
import SobreVirtualio from './components/SobreVirtualio.vue'
import GoogleMap from './components/GoogleMap.vue'
import ContactForm from './components/ContactForm.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    LoginSection,
    SobreVirtualio,
    GoogleMap,
    ContactForm,
    Footer

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

 
}
</style>
