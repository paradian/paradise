<template>
  <div class="hello">
    <Navbar></Navbar>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul >
      <li v-for="(item,index) in newarr" :key="index">
        <router-link :to="{name:'Test',params:{id:item.index}}" tag='a'><span>{{item}}</span></router-link>
      </li>

    </ul>
    <router-view></router-view>
    <Carousel></Carousel>
  </div>
</template>

<script>
  import First from  '@/components/Testcomponents/First'
  import Second from  '@/components/Testcomponents/Second'
  import Third from  '@/components/Testcomponents/Third'
  import Forth from  '@/components/Testcomponents/Forth'
  import Navbar from '@/components/Navbar'
  import Carousel from '@/components/Carousel'
export default {
  name: 'HelloWorld',
  components:{
'First':First,
    'Second':Second,
    'Third':Third,
    'Forth':Forth,
    'Navbar':Navbar,
    'Carousel':Carousel
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      newarr:[1,2,3,4,5],
    //   this.$i18n.locale = 'en'
    // window.localStorage.setItem('language', 'en')

  }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
