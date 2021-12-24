import { createStore } from 'vuex'
import { isLoggedIn, logOut } from "./../shared/utils/auth";

export default createStore({
  state: {
    isLoggedIn: false,
    user: {}
  },
  mutations: {
    setUser(state, payload){
        state.user = payload;
        localStorage.setItem("user", JSON.stringify(payload));
    },
    setLoggedIn(state, payload){
        state.isLoggedIn = payload;
    }
  },
  actions: {
    loadStoredState(context) {
        context.commit("setLoggedIn", isLoggedIn());
    },
    async loadUser({ commit, dispatch }) {
        //commit("setLoggedIn", true);
        if (isLoggedIn()) {
            try {
                const user = (await axios.get("/api/user")).data;
                commit("setUser", user);
                commit("setLoggedIn", true);
            } catch (error) {
                dispatch("logout");
            }
        }
    },
    logout({ commit }) {
        commit("setUser", {});
        commit("setLoggedIn", false);
        logOut();
    }
  },
  modules: {
  }
})
