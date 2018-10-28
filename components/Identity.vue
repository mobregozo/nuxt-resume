<template>
  <section class="identity-container">
    <div v-text="fullName"></div>
    <div v-text="birthDate"></div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Identity',

    computed: {
      ...mapGetters([ 'getIdentity' ]),

      fullName() {
        return `${this.getIdentity.firstName} ${this.getIdentity.lastName}`
      },

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
