<template>
  <section id="contact-container">
    <contact-address />
    <contact-phone />
    <contact-email />
  </section>
</template>

<script>
  import ContactAddress from './ContactAddress'
  import ContactPhone from './ContactPhone'
  import ContactEmail from './ContactEmail'

  export default {
    name: 'Contact',

    components: {
      ContactAddress,
      ContactPhone,
      ContactEmail
    }
  }
</script>
