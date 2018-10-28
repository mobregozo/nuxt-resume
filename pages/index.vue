<template>
  <section>
    <identity />
    <description />
    <contact />
  </section>
</template>

<script>
  import Identity from '~/components/Identity'
  import Description from '~/components/Description'
  import Contact from '~/components/Contact'

  export default {
    components: {
      Identity,
      Description,
      Contact
    }
  }
</script>
