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
      <div class="hello" v-for="(item,index) in data" >
        <p class="title">
          <span class="fa fa-folder-o" v-if="item.hasChildren"></span>
          <span class="fa fa-file" v-if="!item.hasChildren"></span><span @click="changeData(item)"> {{item.content}}</span>
        </p>
        <p class="icon"><Pop-over type="editor"></Pop-over></p>
      </div>
    </div>
    <Pop-over @addFolder="createFolder1" @click.native="createFolder(item)" :ref="item" type="editor"></Pop-over>
    <!--<VueTree v-for="(item,index) in treeArray" :key="index" :userid="item.id" :message="item.message" :children="item.children" :ceng="1"></VueTree>-->
  </div>
</template>
<script>
  import MyTree from './component-detail/MyTree'
 import Popover from  './component-detail/Popover'
  export default {
    name:'CaseFile',
    data() {
      return{
        searchValue:'',
        ShowChild:false,
        ShowDetail:false,
        controller:'',
        selected:1,
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
    components:{
      'MyTree':MyTree,
     'Pop-over':Popover
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

      },
      secondType() {
        this.selected=2;

      },
      thirdType() {
        this.selected=3;

      },
      forthType() {
        this.selected=4;
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
      },
      changeData(item){
        if(item.children){
          this.data=item.children
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
