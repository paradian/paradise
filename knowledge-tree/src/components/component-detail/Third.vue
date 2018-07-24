<template>
  <section class="container">
    3
    <div class="hello" v-for="(item,index) in data" >
      <p class="title">
        <span @click="changeData(index)"> {{item.content}}</span>
      </p>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Third",
    data () {
      return {
        data:[
          {id:'1',pid:'0',content:'test0',children:[{id:11,content:'hello',children:[{id:'111',content:'world'}]}]},
          {id:'2',pid:'0',content:'test1'},
          {id:'3',pid:'1',content:'test2'},
          {id:'4',pid:'1',content:'test3'},
          {id:'5',pid:'2',content:'test4'},
          {id:'6',pid:'2',content:'test5'},
        ],
      }
    },
    mounted () {
      console.log('entry')
    },
    methods:{
      changeData (index) {
        console.log(index)
        console.log(this.data);
        if( this.data[index].children){
          switch (this.Grade) {
            case 0:
              this.one=this.data;
              console.log(this.one, 'hello', this.Grade);
              break;
            case 1:
              this.two=this.data;
              console.log(this.two);
              console.log(this.Grade)
              break;
            case 2:
              this.three=this.data;
              console.log(this.three);
              console.log(this.Grade)
              break;
            case 3:
              this.four=this.data;
              console.log(this.four);
              console.log(this.Grade)
              break;
            default:
              console.log(this.Grade)
          }
          this.data=this.data[index].children;
          this.Grade=this.Grade+1;
          console.log(this.Grade)
        }
        else {
          this.data=[this.data[index]]
        }
      },
    }
  }
</script>

<style scoped>

</style>
