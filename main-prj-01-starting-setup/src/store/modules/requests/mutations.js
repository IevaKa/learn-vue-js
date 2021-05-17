export default {
  addRequest(state, payload) {
    // console.log('payload', payload);
    state.requests.push(payload);
  },

  setRequests(state, payload) {
    state.requests = payload;
  }
};
