<template>
  <ul>
    <li v-for="language in getSkills.languages" :key="language.lang" v-text="`${language.lang}: ${language.level}`"></li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'SkillsLanguages',

    computed: {
      ...mapGetters(['getSkills'])
    }
  }
</script>
