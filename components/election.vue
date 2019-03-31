<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ election.description }}</div>
            <span class="grey--text">{{
              new Date(election.date).toDateString()
            }}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon
              >{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
            </v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            <a :href="election['polling-place-url']">Polling Place</a>
            <br />
            <a :href="election.website">Election Website</a>
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    election: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      show: false
    }
  }
}
</script>
