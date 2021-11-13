<template>
  <div class="about">
    <h1>This is an about page</h1>
    <form>
      <div class="mb-3 offset-md-4 col-md-4 offset-md-4">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <div class="mb-3 offset-md-4 col-md-4 offset-md-4 text-left">
        <div class="row">
          <div class="justify-content-center">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
        </div>
      </div>
      <div class="mb-3 form-check mb-3 offset-md-4 col-md-4 offset-md-4">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary col-md-4">Submit</button>
    </form>
  </div>
</template>
