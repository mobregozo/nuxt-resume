<template>
  <section id="schooling-container" class="resume-section">
    <h2>Formation</h2>
    <ul>
      <li v-for="school in getSchooling" :key="hash(school)">
        <schooling-line :data="school" />
      </li>
    </ul>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SchoolingLine from './SchoolingLine'
  import Utils from '~/mixins/Utils'

  export default {
    name: 'Schooling',

    components: {
      SchoolingLine
    },

    mixins: [
      Utils
    ],

    computed: {
      ...mapGetters(['getSchooling'])
    }
  }
</script>
