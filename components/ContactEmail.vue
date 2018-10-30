<template>
  <ul id="email-container" class="contact">
    <li v-for="email in getContact.email" :key="hash(email)">
      <contact-line type="email" :value="email" />
    </li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ContactLine from './ContactLine'
  import Utils from '~/mixins/Utils'

  export default {
    name: 'ContactEmail',

    components: {
      ContactLine
    },

    mixins: [
      Utils
    ],

    computed: {
      ...mapGetters(['getContact'])
    }
  }
</script>
