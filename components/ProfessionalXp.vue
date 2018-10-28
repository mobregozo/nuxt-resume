<template>
  <section class="professional-xp-container">
    <ul>
      <li v-for="xp in getProfessionalXp" :key="xp">
        <professional-xp-line :data="xp" />
      </li>
    </ul>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ProfessionalXpLine from './ProfessionalXpLine'

  export default {
    name: 'ProfessionalXp',

    components: {
      ProfessionalXpLine
    },

    computed: {
      ...mapGetters(['getProfessionalXp'])
    }
  }
</script>
