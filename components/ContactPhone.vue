<template>
  <ul id="phone-container" class="contact">
    <li v-if="getContact.phone.home">
      <contact-line type="phone" :value="getContact.phone.home" />
    </li>
    <li v-if="getContact.phone.mobile">
      <a :href="`tel:${getContact.phone.mobile}`">
        <contact-line type="mobile" :value="getContact.phone.mobile" />
      </a>
    </li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ContactLine from './ContactLine'

  export default {
    name: 'ContactPhone',

    components: {
      ContactLine
    },

    computed: {
      ...mapGetters([ 'getContact' ])
    }
  }
</script>
