<template>
  <LoginForm />
  <router-view />
</template>

<script>
import LoginForm from "./components/LoginForm.vue";

export default {
  name: "LoginForm",
  components: {
    LoginForm,
  },
};
</script>

<style>
</style>
