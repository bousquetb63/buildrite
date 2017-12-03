<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Guides">
        <div
          v-for="guide in guides"
          :key="guide._id">
          {{guide.title}} |
          {{guide.author}} |
          {{guide.difficulty}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import guidesService from '@/services/guidesService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      guides: null
    }
  },
  async mounted () {
    console.log('waiting for guides')
    this.guides = (await guidesService.index()).data
  }
}
</script>

<style scoped>
</style>
