<template>
  <ul v-if="hasPhone">
    <li v-if="getContact.phone.home" v-text="getContact.phone.home"></li>
    <li v-if="getContact.phone.cellular" v-text="getContact.phone.cellular"></li>
    <li v-if="getContact.phone.pro" v-text="getContact.phone.pro"></li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'ContactPhone',

    computed: {
      ...mapGetters([ 'getContact' ]),

      hasPhone() {
        const phone = this.getContact.phone

        return phone.home || phone.cellular || phone.pro
      }
    }
  }
</script>
