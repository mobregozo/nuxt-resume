<template>
  <ul id="email-container" class="contact">
    <li v-for="email in getContact.email" :key="email">
      <picto picto="at" :label="email" />
    </li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Picto from './PictoLabel'

  export default {
    name: 'ContactEmail',

    components: {
      Picto
    },

    computed: {
      ...mapGetters(['getContact'])
    }
  }
</script>
