<template>
  <v-toolbar fixed dark class="grey darken-3">
    <v-toolbar-title class="mr-4">
      ORB.GG
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark to="/ ">
        Home
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-btn flat dark to="browse">
        Guides
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark to="login"
        v-if="!$store.state.isUserLoggedIn">
          Login
      </v-btn>

      <v-btn flat dark to="register"
        v-if="!$store.state.isUserLoggedIn">
          Sign Up
      </v-btn>
      <v-btn flat dark @click="logout"
        v-if="$store.state.isUserLoggedIn">
          Log Out
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
</style>
