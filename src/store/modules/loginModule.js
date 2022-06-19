import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginModule = {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, newUser) {
      state.user = newUser;
    },
  },
  actions: {
    async signInWithEmailandPassword({ commit }, credentials) {},
  },
};
