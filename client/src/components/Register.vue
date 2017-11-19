<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Registration</v-toolbar-title>
        </v-toolbar>
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-text-field
            label="Username"
            v-model="username"
            :counter="10"
            required
          ></v-text-field>
          <v-text-field
            label="E-mail"
            v-model="email"
            hint="Please enter a valid email address"
            required
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
            hint="Password must be least 8 characters"
            :append-icon="e1 ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (e1 = !e1)"
            :type="e1 ? 'password' : 'text'"
            required
          ></v-text-field>
          <v-checkbox
            label="I agree to the Terms of Service and Privacy Policy"
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to sign up!']"
            required
          ></v-checkbox>
          <div class="error" v-html="error"></div>
          <v-btn
            @click="register"
            :disabled="!valid"
          >
            Register
          </v-btn>
        </v-form>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import authService from '@/services/authService'
export default {
  data () {
    return {
      e1: false,
      valid: true,
      checkbox: false,
      email: '',
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
        try {
          await authService.register({
            email: this.email,
            username: this.username,
            password: this.password
          })
        } catch (error) {
          this.error = error.response.data.error
        }
     }
  }
}
</script>

<style scoped>
  .error {
    color:red;
  }
</style>
