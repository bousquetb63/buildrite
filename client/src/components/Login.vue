<template>
  <div class="imgBG">
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-4">
          <v-toolbar flat dense dark class="grey darken-3">
            <v-toolbar-title >Login</v-toolbar-title>
          </v-toolbar>
            <div class="pl-4 pr-4 pt-2 pb-2">
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field
                label="Username"
                v-model="username"
                required
              ></v-text-field>
              <v-text-field
                label="Password"
                v-model="password"
                :append-icon="e1 ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (e1 = !e1)"
                :type="e1 ? 'password' : 'text'"
                required
              ></v-text-field>
              <v-alert
                color="error"
                icon="warning"
                :value="alert"
                transition="scale-transition"
                dismissible
                v-model="alert"
              >
                <div v-html="error"></div>
              </v-alert>
              <v-btn
                class="elevation-3"
                @click="login"
                :disabled="!valid"
              >
                Login
              </v-btn>
            </v-form>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import authService from '@/services/authService'
export default {
  data () {
    return {
      e1: true,
      alert: false,
      valid: true,
      email: '',
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
        try {
          await authService.login({
            username: this.username,
            password: this.password
          })
        } catch (error) {
          this.alert = true
          this.error = error.response.data.error
        }
     }
  }
}
</script>

<style scoped>
</style>
