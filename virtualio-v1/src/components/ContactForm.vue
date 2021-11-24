<template>
  <section id="contacte" class="pt-5">
    <div class="container">
      <div class="row min-vh-0 d-flex justify-content-center g-0">
        <div class="pt-5 col-lg-9 col-xxl-5 position-relative text-center">
          <h1 class="fs-3 fs-sm-4 mb-3">Contacta’ns!</h1>
          <p>
            Si tens algun dubte o problema, si us plau escriu-nos! 
            <br>T’ajudarem tan aviat com sigue possible.
          </p>
        </div>
      </div>
      <div class="row min-vh-0 d-flex g-0">
        <form class="row g-3 justify-content-center">
          <div class="col-md-4">
            <label
              for="inputEmail4"
              class="d-flex align-items-start form-label"
            ></label>
            <input
              type="text"
              class="form-control"
              placeholder="Nom"
              aria-label="Nom"
            />
          </div>
          <div class="col-md-4">
            <label
              for="inputEmail4"
              class="d-flex align-items-start form-label"
            ></label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Correu"
            />
          </div>
          <div class="col-md-8">
            <label class="visually-hidden" for="inlineFormSelectPref"
              >Preference</label
            >
            <select class="form-select" id="inlineFormSelectPref">
              <option selected>Asumpte</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-md-8 mb-3">
            <label
              for="exampleFormControlTextarea1"
              class="d-flex align-items-start form-label"
            ></label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Missatge"
            ></textarea>
          </div>
          <div class="col-12 d-flex justify-content-center">
            <button type="submit" class="btn btn-primary">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>


