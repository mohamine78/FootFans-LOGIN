<template>
  <div class="background-image"></div>
  <div class="content container-fluid">
    <div class="card col-lg-10 offset-lg-1">
      <div class="row g-0">
        <div class="col-sm-4">
          <div class="card-header pb-0">
            <ul class="nav nav-tabs justify-content-center border-0 m-0">
              <li class="nav-item">
                <router-link to="/login" class="nav-link">login</router-link> 
    <router-view /></li>
              <li class="nav-item">
                <router-link to="/register" class="nav-link">Register</router-link>   
              </li>
            </ul>
          </div>
          <div class="card-body">
            <form method="post" class="form px-1 py-2">
              <input
                type="hidden"
                name="csrfmiddlewaretoken"
                value="OeU77JfPlKGfDt6cBXMb4NLNs0i5jBCBnZJRaazdKkByRoS5zJWflvWOwQMMXiXE"
              />

              <div class="mb-3">
                <label for="username" class="form-label"
                  >Adresse électronique</label
                >
                <input
                  type="email"
                  class="form-control"
                  name="username"
                  id="username"
                  placeholder="Enter your email address"
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Mot de passe</label>
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <a href="/accounts/password/reset/" class="link-primary"
                >Mot de passe ou nom d’utilisateur oublié&nbsp;?</a
              >

              <div class="mb-3">
                <button
                  class="btn btn-primary ff-btn-primary col-lg-6 offset-lg-3 mt-2"
                  type="submit"
                >
                  Connexion
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-sm-8">
          <img
            class="img-fluid rounded h-100 d-none d-sm-block"
            src="../assets/image/backg.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.background-image {
  position: absolute;
  left: 0;
  top: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                      url('../assets/image/bg-auth.png');  
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  -webkit-filter: blur(2px);
  -moz-filter: blur(2px);
  -o-filter: blur(2px);
  -ms-filter: blur(2px);
  filter: blur(2px);
  z-index: -1;
}

.content {
  position: absolute;
  top: 20%;
  z-index: 0;
}
</style>
