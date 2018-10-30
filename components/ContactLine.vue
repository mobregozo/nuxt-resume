<template>
  <a :href="href">
    <picto-label :picto="picto" :label="value" />
  </a>
</template>

<script>
  import PictoLabel from './PictoLabel'

  export default {
    name: 'ContactPhoneLine',

    props: {
      value: {
        type: String,
        required: true
      },

      type: {
        type: String,
        required: true,
        validator: val => [ 'email', 'phone', 'mobile' ].indexOf(val) !== -1
      }
    },

    components: {
      PictoLabel
    },

    computed: {
      href: function() {
        const prefix = ('email' === this.type) ? 'mailto' : 'tel'

        return `${prefix}:${this.value}`
      },

      picto: function() {
        switch (this.type) {
          case 'email': {
            return 'at'
          }

          case 'phone': {
            return 'phone'
          }

          case 'mobile': {
            return 'mobile-alt'
          }
        }
      }
    }
  }
</script>
