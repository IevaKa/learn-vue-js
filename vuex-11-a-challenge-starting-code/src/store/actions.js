export default {
  login(context) {
    context.commit('login');
  },
  logout(context) {
    context.commit('logout');
  },
  addProductToCart(context, payload) {
    context.commit('addProductToCart', payload);
  },
  removeProductFromCart(context, prodId) {
    context.commit('removeProductFromCart', prodId);
  }
};
