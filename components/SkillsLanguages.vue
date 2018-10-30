<template>
  <ul>
    <li v-for="language in getSkills.languages" :key="hash(language)" v-text="`${language.lang}: ${language.level}`"></li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Utils from '~/mixins/Utils'

  export default {
    name: 'SkillsLanguages',

    mixins: [
      Utils
    ],

    computed: {
      ...mapGetters(['getSkills'])
    }
  }
</script>
