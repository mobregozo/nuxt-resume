<template>
  <section id="identity-container">
    <h1>
      <span v-text="getIdentity.firstName"></span>
      <span v-text="getIdentity.lastName"></span>
    </h1>
    <span v-text="birthDate"></span>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Identity',

    computed: {
      ...mapGetters([ 'getIdentity' ]),

      // TODO make it a filter
      birthDate() {
        const year = +this.getIdentity.birthDate.year
        const month = +this.getIdentity.birthDate.month - 1
        const day = +this.getIdentity.birthDate.day

        return new Date(year, month, day).toLocaleDateString()
      }
    }
  }
</script>
