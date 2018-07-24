<template>
<section class="container">
  1
  <div class="hello" v-for="(item,index) in data" >
    <p class="title">
     <span class="fa fa-folder-o" v-if="item.hasChildren"></span>
      <span class="fa fa-file" v-if="!item.hasChildren"></span><span @click="changeData(index)"> {{item.content}}</span>
    </p>
    <p class="icon"><span class="fa fa-info-circle"></span><span class="fa fa-user"></span><span class="fa fa-share-alt-square"></span></p>
  </div>
  </section>
</template>

<script>
    export default {
        name: "First",
      data () {
          return {
            data:[
              {id:'1',hasChildren:true,content:'人格权纠纷',children:[{id:11,content:'hello',children:[{id:'111',content:'world'}]}]},
              {id:'2',hasChildren:false,content:'婚姻家庭纠纷'},
              {id:'3',hasChildren:true,content:'物权纠纷'},
              {id:'4',hasChildren:false,content:'合同不当得利纠纷'},
              {id:'5',hasChildren:true,content:'知识产权与竞争纠纷'},
              {id:'6',hasChildren:true,content:'劳动争议人事争议'},
            ],
          }
      },
      mounted () {
          console.log('entry')
        console.log(JSON.stringify({code:1,name:'leo'}))
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
  p {
    display: inline-block;
  }
p.icon span {
  color: #1488ff;
}
</style>
