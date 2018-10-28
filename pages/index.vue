<template>
  <section>
    <identity />
    <description />
    <contact />
    <skills />
  </section>
</template>

<script>
  import Identity from '~/components/Identity'
  import Description from '~/components/Description'
  import Contact from '~/components/Contact'
  import Skills from '~/components/Skills'

  export default {
    components: {
      Identity,
      Description,
      Contact,
      Skills
    }
  }
</script>
