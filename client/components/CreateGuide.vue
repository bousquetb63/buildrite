<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Create a Guide!">
        <v-form v-model="valid">
          <v-text-field
            label="Title"
            v-model="guideInfo.title"
            required
          ></v-text-field>
          <v-select
            v-bind:items="champions"
            v-model="guideInfo.champion"
            label="Champion"
            autocomplete
          ></v-select>
          <v-text-field
                name="beginnersGuide"
                v-model="guideInfo.guide"
                label="Beginners Guide"
                hint="Explain the basics about the champion."
                textarea
          ></v-text-field>
          <v-btn
            color="success"
            dark
            @click="create"
          >Create Guide</v-btn>
        </v-form>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import GuidesService from '@/services/guidesService'
export default {
  data () {
    return {
      valid: false,
      champions: [
          'General','Ashka','Bakko', 'Blossom', 'Croak',
          'Ezmo', 'Freya', 'Iva', 'Jade',
          'Jumong', 'Lucie', 'Oldur', 'Pearl',
          'Pestilus', 'Poloma', 'Raigon', 'Rook',
          'Ruh Kaan', 'Shifu', 'Sirius', 'Taya', 'Varesh'
      ],
      guideInfo: {
        title: null,
        author: null,
        champion: null,
        guide: null,
      },
      alert: false,
      wAlert: false,
      sAlert: false,
      error: null,
      wError: null,
      sError: null
    }
  },
  components: {
    Panel
  },
  methods: {
    async create () {
      try {
        GuidesService.post(this.guideInfo)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
