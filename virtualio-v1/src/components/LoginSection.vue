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
                  <div
                    class="p-3 bd-example container border border-light rounded"
                  >
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
                  <div class="row flex-between-center">
                    <div class="col-auto">
                      <h3>Inicia la teva sessió</h3>
                    </div>
                  </div>
                  <form action="">
                    <div class="mb-3">
                      <label
                        class="d-flex align-items-start form-label"
                        for="card-email"
                        >E-mail</label
                      >
                      <input
                        class="form-control"
                        id="card-email"
                        type="email"
                      />
                    </div>
                    <div class="mb-3">
                      <div class="d-flex justify-content-between">
                        <label class="form-label" for="card-password"
                          >Contrasenya</label
                        >
                      </div>
                      <input
                        class="form-control"
                        id="card-password"
                        type="password"
                      />
                    </div>
                    <div class="row flex-between-center">
                      <div class="col-auto">
                        <div class="form-check mb-0">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="card-checkbox"
                            checked="checked"
                          /><label
                            class="form-check-label mb-0"
                            for="card-checkbox"
                            >Recorda’m</label
                          >
                        </div>
                      </div>
                      <div class="col-auto">
                        <a
                          class="fs--1"
                          href="../../../pages/authentication/card/forgot-password.html"
                          >Has oblidat la teva contrasenya?</a
                        >
                      </div>
                    </div>
                    <div class="mb-3">
                      <button
                        class="btn btn-primary d-block w-100 mt-3"
                        type="submit"
                        name="submit"
                      >
                        Log in
                      </button>
                    </div>
                  </form>
                  <div class="position-relative mt-4">
                    <hr class="bg-300" />
                    <div class="divider-content-center">o amb</div>
                  </div>
                  <div class="mb-3">
                    <button type="button" class="btn d-block w-100 mt-3 btn-outline-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-google"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                        ></path>
                      </svg>
                      Gmail Log In
                    </button>
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
  name: "LoginSection",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
