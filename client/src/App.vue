<template>
  <div id="app">
    <v-app>
      <main>
        <page-header />
        <v-container fluid class="spaceBelow">
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>
.spaceBelow {
  margin-top: 90px;
}
#app {
  color: grey darken-1;
  background: url(./assets/img/background.png) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
