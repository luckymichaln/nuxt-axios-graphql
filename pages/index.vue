<template>
  <section class="container artists">
    <button @click="handleClick">Get Artsy</button>
    <div v-for="(artist, index) in this.popularArtists" :key="index">
      <h1>{{artist.name}}</h1>
      <p>{{artist.bio}}</p>
      <img :src="artist.imageUrl" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from '~/components/Logo.vue'

export default {
  computed: {
    ...mapGetters('artists', ['popularArtists'])
  },

  methods: {
    async handleClick() {
      await this.$store.dispatch('artists/GET_DATA')
      console.log(this.popularArtists)
    }
  },

  components: {
    Logo
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.artists {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100vw;

  button {
    width: 100%;
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
