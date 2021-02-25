import Vue from "vue";
import Vuex from "vuex";

import voices from "@/store/modules/Voices";

export interface StateInterface {
  voices: unknown;
}

Vue.use(Vuex);

export default new Vuex.Store<StateInterface>({
  modules: {
    voices,
  },
});
