<template>
    <div class="header">
      <span class="fa fa-angle-left"></span>
      <span class="text">知识树</span>
      <span class="fa fa-bars"></span>
    </div>
</template>

<script>
    export default {
        name: "navBar"
    }
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-around;
    background-color: #89aff8;
    margin: auto;
  }
span {
  width: 100px;
  height: 60px;
  font-size: 20px;
}
</style>
