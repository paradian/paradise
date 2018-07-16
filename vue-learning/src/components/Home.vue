<template>
  <div class="test">
    <h1>home</h1>
  <router-link to="/test"><h2>test</h2></router-link>
  <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "Home",
      data () {
          return {
            arr:[
              1,2,3,4,5,6,7
            ]
          }
      },
      mounted() {
          console.log(this.arr.slice(0,5));
          console.log(typeof this.arr)
      }
    }
</script>

<style scoped>

</style>
