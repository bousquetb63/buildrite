<template>
  <div>
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <Panel title="Register">
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field
              label="E-mail"
              v-model="email"
              hint="Please enter a valid email address"
              required
            ></v-text-field>
            <v-text-field
              label="Username"
              v-model="username"
              required
            ></v-text-field>
            <v-text-field
              label="Password"
              v-model="password"
              hint="Password must be least 8 characters"
              :counter="8"
              :append-icon="e1 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (e1 = !e1)"
              :type="e1 ? 'password' : 'text'"
              required
            ></v-text-field>
            <v-text-field
              label="Re-enter password"
              v-model="repassword"
              :counter="8"
              :append-icon="e1 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (e1 = !e1)"
              :type="e1 ? 'password' : 'text'"
              required
            ></v-text-field>
            <v-checkbox
              label="I agree to the Terms of Service and Privacy Policy"
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to register!']"
              required
            ></v-checkbox>
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
              dark
              color="green lighten-1"
              @click="register"
              :disabled="!valid"
            >
              Register
            </v-btn>
          </v-form>
        </Panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import authService from '@/services/authService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      e1: true,
      alert: false,
      valid: true,
      checkbox: false,
      email: '',
      username: '',
      password: '',
      repassword: '',
      error: null
    }
  },
  methods: {
    async register () {
        try {
          await authService.register({
            email: this.email,
            username: this.username,
            password: this.password,
            repassword: this.repassword
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
        } catch (error) {
          this.error = error.response.data.error
          this.alert = true
        }
     }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
