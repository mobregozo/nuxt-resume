<template>
  <ul>
    <li v-for="software in getSkills.softwares" :key="software.name" v-text="`${software.name}: ${software.level}`"></li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'SkillsSoftwares',

    computed: {
      ...mapGetters(['getSkills'])
    }
  }
</script>
