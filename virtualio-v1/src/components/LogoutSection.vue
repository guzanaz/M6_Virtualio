<template>
  <div class="container my-5">
    <div class="row min-vh-0 d-flex justify-content-center g-0">
      <div class="col-lg-8 col-xxl-5 py-3 position-relative">
        <div class="card overflow-hidden z-index-1">
          <div class="card-body p-0">
            <div class="row g-0 h-100">
              <div class="col-md-5 text-center bg-secondary bg-gradient">
                <div class="position-relative p-4 pt-md-5 pb-md-4 light">
                  <!--/.bg-holder-->
                  <div class="z-index-1 position-relative">
                    <a
                      class="
                        text-light
                        mb-4
                        font-sans-serif
                        fs-4
                        d-inline-block
                        fw-bolder
                      "
                      href="#"
                      >Virtualio</a
                    >
                    <p class="opacity-75 text-white">
                      Benvingut/benvinguda! Aquí podràs crear i manipular
                      màquines virtuals per acompanyar-te en el teu procés
                      d'aprenentatge, tant si ets alumne/a de SMX, DAW o ASIX.
                    </p>
                  </div>
                </div>
                <div class="position-relative px-4 light">
                  <div class="p-3 bd-example container border border-light rounded">
                    <div class="form-check form-switch mb-3 text-light">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckDefault"
                        >Sóc estudiant de SMX</label
                      >
                    </div>
                    <div class="form-check form-switch text-light">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckDefault"
                        >Sóc estudiant de ASIX</label
                      >
                    </div>
                  </div>
                </div>
                <div class="mt-3 mb-4 mt-md-4 mb-md-5 light">
                  <p
                    class="
                      mb-0
                      mt-4 mt-md-5
                      fs--1
                      fw-semi-bold
                      text-white
                      opacity-75
                    "
                  >
                    <strong> No tens un compte? </strong>
                    <br />
                    <a class="text-decoration-underline text-white" href="#!"
                      >Contacta’ns!</a
                    >
                  </p>
                </div>
              </div>
              <div class="col-md-7 d-flex flex-center">
                <div class="p-4 p-md-5 flex-grow-1">
                  <div class="text-center">
                    <img
                      src="https://wiki.ead.pucv.cl/images/d/d9/Stopped.svg"
                      class="d-block mx-auto mb-4"
                      alt="offline"
                      width="170"
                    />
                    <h3>Ens veiem!</h3>
                    <p>
                      Gràcies per utilitzar Virtualio.<br />
                      Has tancat la teua sessió correctament
                    </p>
                    <a class="btn btn-primary btn-sm mt-3"
                      ><span
                        class="fas fa-chevron-left me-1"
                        data-fa-transform="shrink-4 down-1"
                      ></span
                      >Return to Login</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogoutSection",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
