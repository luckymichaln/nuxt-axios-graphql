import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { POPULAR_ARTISTS_QUERY } from '~/graphql/gql_queries'

Vue.use(Vuex)

const initialState = () => ({
  popularArtists: null
})

const state = () => initialState()

const actions = {
  async GET_DATA({commit}) {
    try {
      const result = await axios({
        url: process.env.baseUrl,
        method: 'get',
        params: {
          query: POPULAR_ARTISTS_QUERY
        }
      })

      commit('SET_POPULAR_ARTISTS', result.data.data)
    } catch(err) {
      console.error(err, 'err')
    }
  }
}

const mutations = {
  SET_POPULAR_ARTISTS(state, data) {
    state.popularArtists = data
  },

  RESET_STATE(state) {
    Object.assign(state, initialState())
  }
}

const getters = {
  popularArtists: state => {
    if (!state.popularArtists) { return null }

    const { popular_artists } = state.popularArtists

    return popular_artists.artists
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}