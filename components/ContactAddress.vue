<template>
  <p v-text="address"></p>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'ContactAddress',

    computed: {
      ...mapGetters([ 'getContact' ]),

      address() {
        const address = this.getContact.address

        return `${address.street} - ${address.zipCode} ${address.city} - ${address.country}`
      }
    }
  }
</script>
