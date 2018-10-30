<template>
  <section>
    <h3>
      {{data.company}}
      -
      <span class="lowercase">
        {{data.from}} à <span v-if="data.to" v-text="data.to"></span><span v-else="" class="lowercase">aujourd'hui</span>
      </span>
    </h3>
    <h4 v-if="hasProjects" v-text="projectTitle"></h4>
    <ul v-if="hasProjects">
      <li v-for="project in data.projects" :key="hash(project)">
        <professional-xp-line-project :data="project" />
      </li>
    </ul>
  </section>
</template>

<script>
  import ProfessionalXpLineProject from './ProfessionalXpLineProject'
  import Utils from '~/mixins/Utils'

  export default {
    name: 'ProfessionalXpLine',

    components: {
      ProfessionalXpLineProject
    },

    mixins: [
      Utils
    ],

    props: {
      data: {
        type: Object,
        required: true
      }
    },

    computed: {
      hasProjects: function() {
        return Array.isArray(this.data.projects) && this.data.projects.length > 0
      },

      projectTitle: function() {
        return this.data.projects.length > 1 ? 'Projets' : 'Projet'
      }
    }
  }
</script>
