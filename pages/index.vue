<template>
  <section class="resume-container">
    <identity />
    <description />
    <contact />
    <skills />
    <schooling />
    <professional-xp />
    <hobbies />
  </section>
</template>

<script>
  import Identity from '~/components/Identity'
  import Description from '~/components/Description'
  import Contact from '~/components/Contact'
  import Skills from '~/components/Skills'
  import Schooling from '~/components/Schooling'
  import ProfessionalXp from '~/components/ProfessionalXp'
  import Hobbies from '~/components/Hobbies'

  export default {
    components: {
      Identity,
      Description,
      Contact,
      Skills,
      Schooling,
      ProfessionalXp,
      Hobbies
    }
  }
</script>
