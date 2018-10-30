<template>
  <ul id="email-container" class="contact" v-if="hasEmail">
    <li v-if="getContact.email.personal" v-text="getContact.email.personal"></li>
    <li v-if="getContact.email.pro" v-text="getContact.email.pro"></li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'ContactEmail',

    computed: {
      ...mapGetters(['getContact']),

      hasEmail() {
        const email = this.getContact.email

        return email.personal || email.pro
      }
    }
  }
</script>
