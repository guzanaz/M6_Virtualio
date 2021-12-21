<template>
  <section>
    <h2>Navbar visible cuando el usuario está logeado</h2>
    <nav class="navbar sticky-top navbar-expand-md navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="https://wiki.ead.pucv.cl/images/b/b2/Virtualio_logo.svg"
            alt=""
            width="162"
            height="43.31"
          />
        </a>
        <button
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav text-center">
            <li class="nav-item">
              <a class="nav-link" href="#contacte">Contacte</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: "UserNavbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section{
    padding:10vh;
    background-color: rgb(64, 146, 64);
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
