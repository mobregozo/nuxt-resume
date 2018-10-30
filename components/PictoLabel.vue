<template>
  <span :class="[ 'fa', `fa-${picto}` ]" v-text="label"></span>
</template>

<script>
  export default {
    name: 'Picto',

    props: {
      picto: {
        type: String,
        required: true
      },

      label: {
        type: String,
        required: true
      }
    }
  }
</script>
