import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './Actions';
import * as getters from './Getters';
import { initialState } from './InitialState';
import * as mutations from './Mutations';
import { State } from './Types';

Vue.use(Vuex);

export default new Vuex.Store<State>({
  state: initialState,
  mutations: mutations,
  actions: actions,
  modules: {},
  getters: getters
});
