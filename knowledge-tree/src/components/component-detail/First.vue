<template>
<section class="container">
  {{data.name}}
</section>
</template>

<script>
    export default {
        name: "First",
      data () {
          return {
            data:{name:'first'}
          }
      },
      mounted () {
          console.log('entry')
      }
    }
</script>

<style scoped>

</style>
