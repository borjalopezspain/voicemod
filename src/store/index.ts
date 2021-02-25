import Vue from "vue";
import Vuex from "vuex";

import test from "@/store/modules/test";

export interface StateInterface {
  test: unknown;
}

Vue.use(Vuex);

export default new Vuex.Store<StateInterface>({
  modules: {
    test,
  },
});
