<template>
  <section id="content" style="background-color: rgb(219, 228, 231);">
    <a href="/" class="d-flex px-3">
      <img src="../assets/image/logo.png" width="70" height="70" />
    </a>
    <h2 class="text-center pb-4"><b>Select your fan team</b></h2>

    <form @submit.prevent="submitForm">
      <input type="hidden" name="csrfmiddlewaretoken" :value="csrfToken" />
      <div class="container px-2 py-4">
        <div class="row">
          <div v-for="team in teams" :key="team.id" class="col-md-3">
            <div class="custom-shadow bg-light p-2 m-2">
              <input
                class="form-check-input"
                type="checkbox"
                :id="team.name"
                :value="team.id"
                v-model="selectedTeams"
              />
              <div class="d-flex align-items-center justify-content-evenly">
                <img
                  class="border"
                  :src="team.flag"
                  :style="{ width: currentTeam === team.id ? '150px' : '120px', height: currentTeam === team.id ? '100px' : '80px' }"
                  @mouseover="currentTeam = team.id"
                  @mouseleave="currentTeam = null"
                />
              </div>

              <div class="row p-2">
                <span class="text-center"><b>{{ team.name }}</b></span>
              </div>
            </div>
          </div>
        </div>
        <div class="row pt-4">
          <div class="d-flex align-items-end flex-column bd-highlight mb-3">
            <button class="btn btn-primary ff-btn-primary btn-lg mt-auto p-2 bd-highligh" type="submit" :disabled="!selectedTeams.length">Confirm</button>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      csrfToken: "oY7ckHWoCP3PLqK5ffXx3WuUESIS0g0yIrrC0zxEloFz1hJ8aIftP5W4FRw2hGdc",
      teams: [
        { id: 108, name: "Argentina team", flag: "https://flags.fmcdn.net/data/flags/small/ar.png" },
        { id: 111, name: "Australia team", flag: "https://flags.fmcdn.net/data/flags/small/au.png" },
        { id: 118, name: "Belgium team", flag: "https://flags.fmcdn.net/data/flags/small/be.png" },
        { id: 128, name: "Brazil team", flag: "https://flags.fmcdn.net/data/flags/small/br.png" },
        { id: 134, name: "Cameroon team", flag: "https://flags.fmcdn.net/data/flags/small/cm.png" },
        { id: 135, name: "Canada team", flag: "https://flags.fmcdn.net/data/flags/small/ca.png" },
        { id: 144, name: "Costa Rica team", flag: "https://flags.fmcdn.net/data/flags/small/cr.png" },
        { id: 146, name: "Croatia team", flag: "https://flags.fmcdn.net/data/flags/small/hr.png" },
        { id: 149, name: "Denmark team", flag: "https://flags.fmcdn.net/data/flags/small/dk.png" },
        { id: 154, name: "Ecuador team", flag: "https://flags.fmcdn.net/data/flags/small/ec.png" },
        { id: 297, name: "England team", flag: "https://flags.fmcdn.net/data/flags/small/gb-eng.png" },
        { id: 298, name: "France team", flag: "https://flags.fmcdn.net/data/flags/small/fr.png" },
        { id: 300, name: "Germany team", flag: "https://flags.fmcdn.net/data/flags/small/de.png" },
        { id: 165, name: "Ghana team", flag: "https://flags.fmcdn.net/data/flags/small/gh.png" },
        { id: 189, name: "Iran team", flag: "https://flags.fmcdn.net/data/flags/small/ir.png" },
        { id: 194, name: "Japan team", flag: "https://flags.fmcdn.net/data/flags/small/jp.png" },
        { id: 219, name: "Mexico team", flag: "https://flags.fmcdn.net/data/flags/small/mx.png" },
        { id: 216, name: "Morocco team", flag: "https://flags.fmcdn.net/data/flags/small/ma.png" },
        { id: 241, name: "Netherlands team", flag: "https://flags.fmcdn.net/data/flags/small/nl.png" },
        { id: 244, name: "Poland team", flag: "https://flags.fmcdn.net/data/flags/small/pl.png" },
        { id: 246, name: "Portugal team", flag: "https://flags.fmcdn.net/data/flags/small/pt.png" },
        { id: 247, name: "Qatar team", flag: "https://flags.fmcdn.net/data/flags/small/qa.png" },
        { id: 107, name: "Saudi Arabia team", flag: "https://flags.fmcdn.net/data/flags/small/sa.png" },
        { id: 261, name: "Senegal team", flag: "https://flags.fmcdn.net/data/flags/small/sn.png" },
        { id: 262, name: "Serbia team", flag: "https://flags.fmcdn.net/data/flags/small/rs.png" },
        { id: 143, name: "South Korea team", flag: "https://flags.fmcdn.net/data/flags/small/kr.png" },
        { id: 299, name: "Spain team", flag: "https://flags.fmcdn.net/data/flags/small/es.png" },
        { id: 273, name: "Switzerland team", flag: "https://flags.fmcdn.net/data/flags/small/ch.png" },
        { id: 285, name: "Tunisia team", flag: "https://flags.fmcdn.net/data/flags/small/tn.png" },
        { id: 158, name: "United States of America team", flag: "https://flags.fmcdn.net/data/flags/small/us.png" },
        { id: 289, name: "Uruguay team", flag: "https://flags.fmcdn.net/data/flags/small/uy.png" },
        { id: 296, name: "Wales team", flag: "https://flags.fmcdn.net/data/flags/small/gb-wls.png" },
        // Ajoutez les autres équipes ici...
      ],
      selectedTeams: [],
      currentTeam: null
    };
  },
  methods: {
    submitForm() {
      // Logique de soumission du formulaire
    }
  }
};
</script>

<style>
.custom-shadow {
    box-shadow: 0 0 8px purple !important;
}

</style>
