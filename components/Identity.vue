<template>
  <section class="identity-container">
    <div v-text="fullName"></div>
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
      }
    }
  }
</script>
