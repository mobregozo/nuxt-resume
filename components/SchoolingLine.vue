<template>
  <section>
    <h3>{{data.school}} - {{data.from}} / {{data.to}}</h3>
    <p v-if="data.diploma" v-text="`Diplôme: ${data.diploma}`">Diplôme: {{data.diploma}}</p>
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
