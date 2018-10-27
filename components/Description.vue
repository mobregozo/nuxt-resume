<template>
  <section class="description-container">
    <div v-text="getDescription"></div>
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
