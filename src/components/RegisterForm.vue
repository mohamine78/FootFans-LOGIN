<template>
  <div>
    <div class="background-image"></div>
    <div class="content container-fluid">
      <div class="card col-lg-10 offset-lg-1">
        <div class="row g-0">
          <div class="col-sm-4">
            <div class="card-header pb-0">
              <ul class="nav nav-tabs justify-content-center border-0 m-0">
                <li class="nav-item">
                  <router-link to="/login" class="nav-link">login</router-link> 
                </li>
                <li class="nav-item">
                  <router-link to="/register" class="nav-link">Register</router-link> 
                </li>
              </ul>
            </div>
            <div class="card-body">
              <form method="post" class="form px-1 py-2">
                <input type="hidden" name="csrfmiddlewaretoken" value="c4aX1eltQoJ6FSxGqSa26C2SEAcclI3Jp0NhnLrXFQYQY3M2BOPpdQFCxuLH8fii">
                <div class="row gx-1 pt-2">
                  <div class="col-2">
                    <div class="mb-3">
                      <label class="form-label visually-hidden" for="id_gender">Gender</label>
                      <select name="gender" class="form-select" title="" id="id_gender">
                        <option value="M">Mr.</option>
                        <option value="F">Mrs.</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-5">
                    <div class="mb-3">
                      <label class="form-label visually-hidden" for="id_first_name">First name</label>
                      <input type="text" name="first_name" maxlength="150" class="form-control" placeholder="First name" title="" required id="id_first_name">
                    </div>
                  </div>
                  <div class="col-5">
                    <div class="mb-3">
                      <label class="form-label visually-hidden" for="id_last_name">Last name</label>
                      <input type="text" name="last_name" maxlength="150" class="form-control" placeholder="Last name" title="" required id="id_last_name">
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label visually-hidden" for="id_email">Adresse électronique</label>
                  <input type="email" name="email" maxlength="254" class="form-control" placeholder="Adresse électronique" title="" id="id_email">
                </div>
                <div class="mb-3">
                  <label class="form-label visually-hidden" for="id_password">Password</label>
                  <input type="password" name="password" maxlength="128" class="form-control" placeholder="Password" title="" required id="id_password">
                </div>
                <div class="mb-3">
                  <label class="form-label visually-hidden" for="id_birthday">Birthday</label>
                  <input type="text" name="birthday" class="form-control" placeholder="Birthday" title="" required id="id_birthday">
                </div>
                <div class="mb-3">
                  <label class="form-label visually-hidden" for="id_language">Language</label>
                  <select name="language" class="form-select" title="Select your language" id="id_language">
                    <option value="en-us">English</option>
                    <option value="fr">Français</option>
                    <option value="es">Español</option>
                    <option value="pt">Português europeu</option>
                    <option value="de">Deutsch</option>
                    <option value="it">Italiano</option>
                    <option value="ar">العربية</option>
                    <option value="zh-hans">中国语文</option>
                    <option value="tr">Türkçe</option>
                  </select>
                  <small class="form-text text-muted">Select your language</small>
                </div>
                <div class="form-check mb-4">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
                  <label class="form-check-label" for="flexCheckIndeterminate" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    I agree to the <a href="/fr/tos/" target="_blank">Terms and Conditions and the privacy policy</a> <b style="color:red;">*</b>
                  </label>
                </div>
                <div class="mb-3">
                   <router-link to="/selectprofile" class="btn btn-primary ff-btn-primary col-lg-6 offset-lg-3" disabled="true" id="registerButton">Register</router-link>
                </div>
              </form>
            </div>
          </div>
          <div class="col-sm-8">
            <img class="img-fluid rounded h-100 d-none d-sm-block" src="../assets/image/backg.jpg" alt="Background Image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  mounted() {
    // Sélectionnez la case à cocher et le bouton d'inscription
    const agreeCheckbox = document.getElementById('flexCheckIndeterminate');
    const registerButton = document.getElementById('registerButton');

    // Écoutez les événements de clic sur la case à cocher
    agreeCheckbox.addEventListener('click', function() {
      // Activez ou désactivez le bouton d'inscription en fonction de l'état de la case à cocher
      registerButton.disabled = !agreeCheckbox.checked;
    });
  }
}
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
