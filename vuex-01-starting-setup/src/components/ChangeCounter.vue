<template>
  <button @click="increment">Add 1</button>
  <!-- <button @click="addTen">Add 10</button> -->
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // },
    // addTen() {
    //   //   this.$store.commit('increase', { value: 10 });
    //   this.$store.commit({
    //     type: 'increase',
    //     value: 10,
    //   });
    // },
    ...mapActions('counter', ['increment']),
  },
};
</script>