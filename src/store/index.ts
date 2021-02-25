import Vue from "vue";
import Vuex from "vuex";

import Voices from "@/store/modules/Voices";

export interface StateInterface {
  Voices: unknown;
}

Vue.use(Vuex);

export default new Vuex.Store<StateInterface>({
  modules: {
    Voices,
  },
});
