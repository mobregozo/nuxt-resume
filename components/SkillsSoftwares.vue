<template>
  <ul>
    <li v-for="software in getSkills.softwares" :key="hash(software)" v-text="`${software.name}: ${software.level}`"></li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Utils from '~/mixins/Utils'

  export default {
    name: 'SkillsSoftwares',

    mixins: [
      Utils
    ],

    computed: {
      ...mapGetters(['getSkills'])
    }
  }
</script>
