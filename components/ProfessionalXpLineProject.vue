<template>
  <section>
    <p v-if="data.job" v-text="data.job"></p>
    <p v-if="data.team" v-text="data.team"></p>
    <p v-text="data.description"></p>
  </section>
</template>

<script>
  export default {
    name: 'ProfessionalXpLineProject',

    props: {
      data: {
        type: Object,
        required: true
      }
    }
  }
</script>
