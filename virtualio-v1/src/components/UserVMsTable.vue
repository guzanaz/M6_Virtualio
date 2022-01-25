<template>
  <section>
    <h4>Aquí va una tabla con las vm de un usuario</h4>
    <table>
      <caption>
        Máquinas virtuales
      </caption>
      <tr>
        <td>0.</td>
        <th scope="col"></th>
        <!-- Compliant -->
        <th scope="col"></th>
        <!-- Compliant -->
        <th scope="col"></th>
        <!-- Non-Compliant -->
      </tr>
      <tr>
        <td>1.</td>
        <th scope="col"></th>
        <!-- Compliant -->
        <th scope="col"></th>
        <!-- Compliant -->
        <th scope="col"></th>
      </tr>
      <tr>
        <td>2.</td>
        <th scope="col"></th>
        <!-- Compliant -->
        <th scope="col"></th>
        <!-- Compliant -->
        <th scope="col"></th>
      </tr>
    </table>
  </section>
</template>

<script>
export default {};
</script>

<style scooped>
section {
  padding: 20px;
  background: rgb(167, 255, 167);
}
</style>