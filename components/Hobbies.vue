<template>
  <section id="hobbies-container">
    <ul>
      <li v-for="hobby in getHobbies" :key="hobby" v-text="hobby"></li>
    </ul>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Hobbies',

    computed: {
      ...mapGetters(['getHobbies'])
    }
  }
</script>
