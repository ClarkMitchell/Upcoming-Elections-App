<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div class="mb-4">
            <div class="headline">Upcoming Elections</div>
            <span class="grey--text">Near you</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-form ref="form">
            <v-text-field
              v-model="address"
              label="Address"
              placeholder="20 Jay St, Brooklyn, NY 11201"
              prepend-inner-icon="place"
              clearable
              required
              box
            ></v-text-field>

            <v-btn color="success" @click="fetchElections">
              Submit
            </v-btn>
          </v-form>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import parse from '@/utils/parser'
import { getStateId, getCityId } from '@/utils/ocd-division'
import mockData from '../mockData.json'

// Needs form validation to require city and state
export default {
  data() {
    return {
      address: ''
    }
  },
  methods: {
    async mockApiReturn(query) {
      const data = await mockData
      return data
    },
    async fetchElections() {
      const addressObj = parse(this.address)
      const stateString = getStateId(addressObj)
      const cityString = getCityId(addressObj)
      const query = stateString + ',' + cityString
      // const elections = await this.$axios.$get(query)
      // At this point I realized CORS was enabled (╯°□°)╯︵ ┻━┻
      const elections = await this.mockApiReturn(query)
      this.$root.$emit('submit', elections)
    }
  }
}
</script>
