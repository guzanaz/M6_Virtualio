<template>
  <section id="CreateVM">
    <button>Crear MV</button>
      <Modal/> <!-- debe estar config para que se  muestre sólo sí se crea una mv-->
  </section>
</template>

<script>
import Modal from "../components/Modal.vue";
export default {
name:"CreateVM",
  components:{
    Modal,
  },
};
</script>

<style scoped>
section{
  background-color: rgb(245, 216, 216);
}
</style>>

