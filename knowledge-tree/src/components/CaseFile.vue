<template>
    <div class="main">
        <h1>this is a case-file page ,just for my test</h1>
       <div class="search"> <input type="text" @input="Select" v-model="searchValue" placeholder="输入案件信息"><button class="fa fa-search"></button>
       <span class="fa fa-admin"></span>
       </div>
        <p class="test" @click="ChangeSwitch()">
          <span class="fa fa-folder-open"></span>
          Switch
          <span class="fa fa-user"></span>
        </p>
        <!--<div class="joke" v-show="Switch">hello  world</div>-->
        <p class="test" @click="Show=!Show">Switch</p>
        <!--<div class="joke" v-show="Show">it was more a decade </div>-->
      <div id="container">
       <p class="first" @click="SwitchHandle">{{data.name}}</p>
        <!--<p id="test" v-if="data.child.length!=0">{{data.child.name}}</p>-->
        <div class="test" v-for="item in data.child" @click="ShowMore(item.grandchild,item.id)" v-show="ShowChild">
          {{item.name}}
        <p class="grandchild" v-for="i in grandchild" v-show="item.id==true">{{i.name}}</p>
        </div>

      </div>
    </div>
</template>
<script>

export default {
    name:'CaseFile',
    data() {
        return{
            searchValue:'',
            Switch:false,
            Show:false,
          ShowChild:false,
          ShowDetail:false,
          grandchild:{},
          controller:'',
          data:{
            name:'hello',
            content:'father',
            child:[{name:'leo',content:'hello world',id:'1',grandchild:[{name:'rick',content:'this is a test'},{name:'rick',content:'this is a test'}]},
              {name:'leoric',content:'hello paradian',id:'2',grandchild:[{name:'ricky',content:'this is a test too'}]}, {name:'leory',content:'hello paradise',id:'3'}],
          }
        }
    },

    methods: {
      SwitchHandle() {
        this.ShowChild=!this.ShowChild,
          this.ShowDetail=false,
          this.controller=''
      },
        ChangeSwitch() {
            this.Switch=!this.Switch;
        },
        Select() {
            console.log('input');
        },
      ShowMore(value,id) {
          console.log(value);
          this.ShowDetail=!this.ShowDetail;
this.grandchild=value;
      },

    },
    computed: {
        newarr(){
            var testarr= this.tests.filter(test=>test.name.includes(this.searchValue));
          console.log(typeof(testarr[1].content))
            console.log(typeof(testarr[1].content)==="string")
          console.log(testarr[1].content)

            return testarr;
        }
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
    font-size: 20px;
  }
</style>
