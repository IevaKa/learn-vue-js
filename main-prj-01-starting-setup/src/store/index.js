import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index';
import requestsModule from './modules/requests/index';

const store = createStore({
  state() {
    return {
      userId: 'c3'
    };
  },
  modules: {
    coaches: coachesModule,
    requests: requestsModule
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;
