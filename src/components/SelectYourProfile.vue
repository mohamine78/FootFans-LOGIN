<template>
  <div id="content">
    <h2 class="text-center p-4"><b>Which kind of football fan are you ?</b></h2>
    <div class="container">
      <div class="row">
        <div class="card col-5 p-2 m-2">
          <div class="card-body text-center">
            <h5 class="card-title">You're an invested fan</h5>
            <p class="card-text">You have a fan club and are interested in various football events as <a href="https://www.uefa.com/uefachampionsleague/" target="_blank">Champion's League</a>.</p>
            <button @click="submitInvestedFan" class="btn btn-primary ff-btn-primary">I'm an invested fan</button>
          </div>
        </div>
        <div class="card col-5 p-2 m-2">
          <div class="card-body text-center">
            <h5 class="card-title">You're a supporter</h5>
            <p class="card-text">You just watch football for fun and you support your national team in <a href="https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/qatar2022" target="_blank">World Cup</a>.</p>
            <router-link to="/nationalteams" class="btn btn-primary ff-btn-primary">I'm a supporter</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submitInvestedFan() {
      // Logic for submitting as an invested fan
      console.log("Submitting as an invested fan...");
    },
    submitSupporter() {
      // Logic for submitting as a supporter
      console.log("Submitting as a supporter...");
    }
  }
}
</script>

<style>
/* Your CSS styles here */
</style>
