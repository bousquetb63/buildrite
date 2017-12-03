<template>
  <v-toolbar fixed dense scroll-off-screen dark class="grey darken-3">
    <v-toolbar-title class="mr-4">
      ORB.GG
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn
        flat
        dark
        :to="{
          name: 'home'
        }">
        Home
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-btn
        flat
        dark
        :to="{
          name: 'browse'
        }">
        Guides
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        :to="{
          name: 'login'
        }">
        Login
      </v-btn>


      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        :to="{
          name: 'register'
        }">
        Sign Up
      </v-btn>

      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat
        dark
        @click="logout">
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
    },
    logout () {
      this.$router.push({
        name: 'root'
      })
    },
    logout () {
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
</style>
