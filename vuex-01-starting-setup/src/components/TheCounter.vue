<template>
  <!-- <h3>{{ counter }}</h3> -->
  <h3>{{ finalCounter }}</h3>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
  computed: {
    // counter() {
    //   return this.$store.state.counter;
    // },
    finalCounter() {
      return this.$store.getters['counter/finalCounter'];
    },
    // ...mapGetters('counter', ['finalCounter']),
  },
};
</script>