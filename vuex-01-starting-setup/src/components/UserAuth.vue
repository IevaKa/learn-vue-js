<template>
  <button v-if="!isLoggedIn" @click="login">login</button>
  <button v-else @click="logout">logout</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    ...mapActions(['login', 'logout']),
  },
};
</script>