<template>
  <section>
    <p v-text="data.school"></p>
    <p v-if="data.diploma" v-text="data.diploma"></p>
    <p v-text="`From ${data.from} to ${data.to}`"></p> <!-- TODO use filter -->
  </section>
</template>

<script>
  export default {
    name: 'SchoolingLine',

    props: {
      data: {
        type: Object,
        required: true
      }
    }
  }
</script>
