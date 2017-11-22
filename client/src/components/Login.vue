<template>
  <div class="imgBG">
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <Panel title="Login">
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
              dark
              color="green lighten-1"
              @click="login"
              :disabled="!valid"
            >
              Login
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
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
        try {
          const response = await authService.login({
            username: this.username,
            password: this.password
          })
          console.log("got login")
          console.log(response.data)
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
body {
    overflow:hidden;
}
</style>
