<template>
  <div class="white elevation-4 animated fadeIn">
    <v-toolbar flat dense dark class="grey darken-3">
      <v-toolbar-title >{{title}}</v-toolbar-title>
    </v-toolbar>
    <div class="pl-4 pr-4 pt-2 pb-2">
      <slot>
        You got nothing here....
      </slot>
    </div>
  </div>

</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
</style>
