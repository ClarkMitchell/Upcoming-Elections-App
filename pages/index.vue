<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">Upcoming Elections</div>
            <span class="grey--text">Near you</span>
          </div>
          <v-text-field
            label="Address"
            placeholder="20 Jay St, Brooklyn, NY 11201"
            box
          ></v-text-field>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat>Submit</v-btn>
          <v-btn icon @click="show = !show">
            <v-icon>{{
              show ? 'keyboard_arrow_down' : 'keyboard_arrow_up'
            }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {}
}
</script>
