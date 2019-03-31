<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">
          Card Title
        </v-card-title>
        <v-card-text>
          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Box"
              placeholder="Placeholder"
              box
            ></v-text-field>
          </v-flex>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" flat>
            Continue
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
