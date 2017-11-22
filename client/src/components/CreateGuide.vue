<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Create a Guide!">
        <v-form v-model="valid">
          <v-text-field
            label="Title"
            v-model="title"
            required
          ></v-text-field>
          <v-select
            v-bind:items="champions"
            v-model="champion"
            label="Champion"
            autocomplete
          ></v-select>
          <v-text-field
                name="aboutYou"
                v-model="aboutYou"
                label="Introduction"
                hint="Introduce Yourself!"
                textarea
          ></v-text-field>
          <v-text-field
                name="beginnersGuide"
                v-model="guide"
                label="Beginners Guide"
                hint="Explain the basics about the champion."
                textarea
          ></v-text-field>
          <v-text-field
                name="advancedGuide"
                v-model="advancedGuide"
                label="Advanced Guide"
                hint="Give more advanced tips for someone looking to improve."
                textarea
          ></v-text-field>
          <v-text-field
                name="orbControl"
                v-model="orbControl"
                label="Orb Control"
                hint="Talk about ways to control the orb."
                textarea
          ></v-text-field>
        </v-form>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      valid: false,
      champions: [
          'Ashka','Bakko', 'Blossom', 'Croak',
          'Ezmo', 'Freya', 'Iva', 'Jade',
          'Jumong', 'Lucie', 'Oldur', 'Pearl',
          'Pestilus', 'Poloma', 'Raigon', 'Rook',
          'Ruh Kaan', 'Shifu', 'Sirius', 'Taya', 'Varesh'
      ],
      title: null,
      author: null,
      champion: null,
      aboutYou: null,
      guide: null,
      advancedGuide: null,
      orbControl: null,
      difficulty: null,
      strengths: [],
      weaknesses: [],
      playstyle: null

    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
