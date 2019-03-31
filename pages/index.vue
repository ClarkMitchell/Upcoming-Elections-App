<template>
  <div>
    <search class="mb-4"></search>
    <li v-for="election in elections" :key="election.id">
      <election class="mb-4" :election="election"></election>
    </li>
  </div>
</template>

<script>
import search from '@/components/search'
import election from '@/components/election'

export default {
  components: { search, election },
  data() {
    return {
      elections: []
    }
  },
  mounted() {
    this.$root.$on('submit', data => {
      this.elections = data
    })
  }
}
</script>

<style>
ul,
li {
  list-style-type: none;
}
</style>
