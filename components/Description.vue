<template>
  <section id="description-container">
    <p v-text="getDescription"></p>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Description',

    computed: {
      ...mapGetters([ 'getDescription' ])
    }
  }
</script>
