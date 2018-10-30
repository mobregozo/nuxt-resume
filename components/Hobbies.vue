<template>
  <section id="hobbies-container">
    <ul>
      <li v-for="hobby in getHobbies" :key="hobby" v-text="hash(hobby)"></li>
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
