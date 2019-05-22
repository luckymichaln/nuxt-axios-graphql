import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  data: null
}

const actions = {
  async GET_DATA({commit}) {
    try {
      const result = axios.get('')
    } catch(err) {
      console.error(err, 'err')
    }
  }
}