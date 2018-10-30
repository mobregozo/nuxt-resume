<template>
  <ul id="email-container" class="contact">
    <li v-for="email in getContact.email" :key="hash(email)">
      <picto picto="at" :label="email" />
    </li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Picto from './PictoLabel'
  import Utils from '~/mixins/Utils'

  export default {
    name: 'ContactEmail',

    components: {
      Picto
    },

    mixins: [
      Utils
    ],

    computed: {
      ...mapGetters(['getContact'])
    }
  }
</script>
