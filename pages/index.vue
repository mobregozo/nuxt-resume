<template>
  <section>
    <identity />
    <description />
    <contact />
    <skills />
    <schooling />
    <hobbies />
  </section>
</template>

<script>
  import Identity from '~/components/Identity'
  import Description from '~/components/Description'
  import Contact from '~/components/Contact'
  import Skills from '~/components/Skills'
  import Schooling from '~/components/Schooling'
  import Hobbies from '~/components/Hobbies'

  export default {
    components: {
      Identity,
      Description,
      Contact,
      Skills,
      Schooling,
      Hobbies
    }
  }
</script>
