<template>
  <section id="hobbies-container" class="resume-section">
    <h2>Intérêts</h2>
    <ul>
      <li v-for="hobby in getHobbies" :key="hash(hobby)" v-text="hobby"></li>
    </ul>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Utils from '~/mixins/Utils'

  export default {
    name: 'Hobbies',

    mixins: [
      Utils
    ],

    computed: {
      ...mapGetters(['getHobbies'])
    }
  }
</script>
