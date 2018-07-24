<template>
    <div class="main">
       <div class="search"> <input type="text" @input="Select()" v-model="searchValue" placeholder="&#xf002; 输入案件信息"><button class="fa fa-search"></button>
       <span class="fa fa-admin"></span>
       </div>
      <div class="classify">
        <span class="fa fa-angle-left" @click="moveLeft"></span>
        <span class="classes-0" @click="firstType" :class="{'active':this.selected==1}">民事</span>
        <span class="classes-1" @click="secondType" :class="{'active':this.selected==2}">刑事</span>
        <span class="classes-2" @click="thirdType" :class="{'active':this.selected==3}">执行</span>
        <span class="classes-3" @click="forthType" :class="{'active':this.selected==4}">行政</span>
        <span class="fa fa-angle-right" @click="moveRight"></span>
      </div>
      <div id="container">
        <First v-show="this.selected==1"></First>
        <Second v-show="this.selected==2"></Second>
        <Third v-show="this.selected==3"></Third>
        <Forth v-show="this.selected==4"></Forth>
        </div>
      <!--<VueTree v-for="(item,index) in treeArray" :key="index" :userid="item.id" :message="item.message" :children="item.children" :ceng="1"></VueTree>-->
    </div>
</template>
<script>
import MyTree from './component-detail/MyTree'
import  First from  './component-detail/First'
import Second from  './component-detail/Seond'
import Third from  './component-detail/Third'
import Forth from  './component-detail/Forth'
export default {
    name:'CaseFile',
    data() {
        return{
            searchValue:'',
          ShowChild:false,
          ShowDetail:false,
          controller:'',
         selected:1,
          data:{
              name:'test'
          }
        }
    },
components:{
      'MyTree':MyTree,
  'First':First,
  'Second':Second,
  'Third':Third,
  'Forth':Forth
},
    methods: {
      SwitchHandle() {
        this.ShowChild=!this.ShowChild,
          this.ShowDetail=false,
          this.controller=''
      },

        Select() {
            console.log('input');
        },
      firstType() {
this.selected=1;
this.data={name:'test'}
      },
      secondType() {
        this.selected=2;
        this.data={name:'second'}
      },
      thirdType() {
        this.selected=3;
        this.data={name:'third'}
      },
      forthType() {
        this.selected=4;
        this.data={name:'forth'}
      },
      moveLeft (){
console.log('move left');

this.selected=this.selected-1;
if(this.selected==0){
  this.selected=4;

}
      },
      moveRight (){
        console.log('move right');

        this.selected=this.selected+1;
        if(this.selected==5){
          this.selected=1;
        }
      }
    },
    computed: {
        // newarr(){
        //     var testarr= this.tests.filter(test=>test.name.includes(this.searchValue));
        //   console.log(typeof(testarr[1].content))
        //     console.log(typeof(testarr[1].content)==="string")
        //   console.log(testarr[1].content)
        //
        //     return testarr;
        // }
    },
  mounted(){
      console.log(this.data);
      this.grandchild=this.data.child;
      console.log(this.grandchild);
  },
}
</script>
<style scoped>
  span {
    font-size: 15px;
    display: inline-block;
  }
  .active {
    color: #1488ff;
  }
  button.fa{
    position: absolute;
    left: 130px;
  }
  .classify {
    display: flex;
    border: 1px solid #1488ff;
    border-radius: 5px;
    margin: 5px;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
  }
</style>
