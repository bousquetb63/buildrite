<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Create a Guide!">
        <v-form v-model="valid">
          <p>{{ author }}</p>
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
                name="aboutYou"
                v-model="guideInfo.aboutYou"
                label="Introduction"
                hint="Introduce Yourself!"
                textarea
          ></v-text-field>
          <v-text-field
                name="beginnersGuide"
                v-model="guideInfo.guide"
                label="Beginners Guide"
                hint="Explain the basics about the champion."
                textarea
          ></v-text-field>
          <v-text-field
                name="advancedGuide"
                v-model="guideInfo.advancedGuide"
                label="Advanced Guide"
                hint="Give more advanced tips for someone looking to improve."
                textarea
          ></v-text-field>
          <v-text-field
                name="orbControl"
                v-model="guideInfo.orbControl"
                label="Orb Control"
                hint="Talk about ways to control the orb."
                textarea
          ></v-text-field>
          <v-text-field
                name="playstyle"
                v-model="guideInfo.playstyle"
                label="Playstyle"
                hint="Talk about the champions playstyle!"
                textarea
          ></v-text-field>
          <v-slider
            label="Difficulty"
            v-bind:min="1"
            v-bind:max="100"
            thumb-label
            v-model="guideInfo.difficulty"
          ></v-slider>
          <!-- Strengths -->
          <v-layout row>
            <v-flex xs10>
              <v-text-field
                v-model="strength"
                label="Strength"
              ></v-text-field>
            </v-flex>
            <v-flex xs2>
              <v-btn
                round
                color="success"
                dark
                v-on:click="addStrength"
              >Add</v-btn>
            </v-flex>
          </v-layout>
          <v-alert
            color="error"
            icon="warning"
            :value="alert"
            transition="scale-transition"
            dismissible
            v-model="sAlert"
          >
            <div v-html="sError"></div>
          </v-alert>
          <v-list>
            <v-list-tile
              avatar v-for="strength in guideInfo.strengths"
              v-bind:key="guideInfo.strengths.findIndex(k => k == strength)"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ strength }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn
                  icon
                  ripple
                  @click="deleteStrength(strength)"
                >
                  <v-icon
                    color="red lighten-1"
                  >delete</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
          <!-- Weakness -->
          <v-layout row>
            <v-flex xs10>
              <v-text-field
                v-model="weakness"
                label="Weakness"
              ></v-text-field>
            </v-flex>
            <v-flex xs2>
              <v-btn
                round
                color="success"
                dark
                v-on:click="addWeakness"
              >Add</v-btn>
            </v-flex>
          </v-layout>
          <v-alert
            color="error"
            icon="warning"
            :value="alert"
            transition="scale-transition"
            dismissible
            v-model="wAlert"
          >
            <div v-html="wError"></div>
          </v-alert>
          <v-list>
            <v-list-tile
              avatar v-for="weakness in guideInfo.weaknesses"
              v-bind:key="guideInfo.weaknesses.findIndex(k => k == weakness)"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ weakness }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn
                  icon
                  ripple
                  @click="deleteWeakness(weakness)"
                >
                  <v-icon
                    color="red lighten-1"
                  >delete</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
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
        aboutYou: null,
        guide: null,
        advancedGuide: null,
        orbControl: null,
        difficulty: null,
        strengths: [],
        weaknesses: [],
        playstyle: null,
      },
      strength: null,
      weakness: null,
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
    addStrength () {
      if (this.guideInfo.strengths.includes(this.strength)) {
        this.sAlert = true
        this.sError = 'You already listed that strength!'
      } else if (this.strength != null && this.strength != '') {
        this.guideInfo.strengths.push(this.strength)
        this.strength = null
      } else {
        this.sError = 'Please enter a strength!'
        this.sAlert = true
      }
    },
    addWeakness () {
       if (this.guideInfo.weaknesses.includes(this.weakness)) {
       this.wAlert = true
       this.wError = 'You already listed that weakness!'
     } else if (this.weakness != null && this.weakness != '') {
        this.guideInfo.weaknesses.push(this.weakness)
        this.weakness = null
      } else {
        this.wError = 'Please enter a weakness!'
        this.wAlert = true
      }
    },
    deleteStrength (index) {
      var indexNum = this.guideInfo.strengths.findIndex(k => k == index)
      this.guideInfo.strengths.splice(indexNum, indexNum+1)
    },
    deleteWeakness (index) {
      var indexNum = this.guideInfo.weaknesses.findIndex(k => k == index)
      this.guideInfo.weaknesses.splice(indexNum, indexNum+1)
    },
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
