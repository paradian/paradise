<template>
    <section class="container">
      {{data.name}}
    </section>
</template>

<script>
    export default {
        name: "Forth",
     data () {
          return {
           data:{name:'forth'}
          }
     },
      mounted () {
        console.log('entry')
      }
    }
</script>

<style scoped>

</style>
