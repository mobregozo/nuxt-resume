<template>
  <section>
    <p v-text="data.company"></p>
    <p>
      <span v-text="`From ${data.from}`"></span> <!-- TODO use filter -->
      <span v-if="data.to" v-text="`to ${data.to}`"></span>
      <span v-else="" v-text="`to today`"></span>
    </p>
    <ul>
      <li v-for="project in data.projects" :key="project">
        <professional-xp-line-project :data="project" />
      </li>
    </ul>
  </section>
</template>

<script>
  import ProfessionalXpLineProject from './ProfessionalXpLineProject'

  export default {
    name: 'ProfessionalXpLine',

    components: {
      ProfessionalXpLineProject
    },

    props: {
      data: {
        type: Object,
        required: true
      }
    }
  }
</script>
