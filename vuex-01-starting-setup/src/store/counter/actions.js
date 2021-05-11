export default {
  increment(context) {
    setTimeout(() => {
      context.commit('increment');
    }, 1000);
  }
};
