<template>
  <v-toolbar fixed dark class="grey darken-3">
    <v-toolbar-title class="mr-4">
      ORB.GG
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark to="root">
        Home
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-btn flat dark>
        Guides
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark to="login">
          Login
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-btn flat dark to="register">
          Sign Up
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>
