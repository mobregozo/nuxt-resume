<template>
  <section id="professional-xp-container" class="resume-section">
    <h2>Expérience professionnelle</h2>
    <ul>
      <li v-for="xp in getProfessionalXp" :key="hash(xp)">
        <professional-xp-line :data="xp" />
      </li>
    </ul>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ProfessionalXpLine from './ProfessionalXpLine'
  import Utils from '~/mixins/Utils'

  export default {
    name: 'ProfessionalXp',

    components: {
      ProfessionalXpLine
    },

    mixins: [
      Utils
    ],

    computed: {
      ...mapGetters(['getProfessionalXp'])
    }
  }
</script>
