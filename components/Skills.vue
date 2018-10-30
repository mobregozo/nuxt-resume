<template>
  <section id="skills-container" class="resume-section">
    <h2>Compétences</h2>
    <skills-languages v-if="hasLanguages" />
    <skills-softwares v-if="hasSoftwares" />
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SkillsLanguages from './SkillsLanguages'
  import SkillsSoftwares from './SkillsSoftwares'

  export default {
    name: 'Skills',

    components: {
      SkillsLanguages,
      SkillsSoftwares
    },

    methods: {
      display: value => value && Array.isArray(value) && value.length > 0
    },

    computed: {
      ...mapGetters([ 'getSkills' ]),

      hasLanguages() {
        return this.display(this.getSkills.languages)
      },

      hasSoftwares() {
        return this.display(this.getSkills.softwares)
      }
    }
  }
</script>
