<template>
  <section id="schooling-container">
    <ul>
      <li v-for="school in getSchooling" :key="school">
        <schooling-line :data="school" />
      </li>
    </ul>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SchoolingLine from './SchoolingLine'

  export default {
    name: 'Schooling',

    components: {
      SchoolingLine
    },

    computed: {
      ...mapGetters(['getSchooling'])
    }
  }
</script>
