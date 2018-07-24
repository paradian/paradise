<template>
    <div class="main">
        <h3>this is a system-knowledge page ,just for my test</h3>
      <div class="search"> <input type="text" @input="Select" v-model="searchValue" placeholder="&#xF002; 输入案件信息"><select name="" id=""  v-model="showType" @click="selectType">
        <option value="0">默认</option>
        <option value="1">倒序</option>
      </select><button class="fa fa-search"></button>
        <!--<el-row class="block-col-2">-->
          <!--<el-col :span="12">-->
            <!--<el-dropdown trigger="click">-->
      <!--<span class="el-dropdown-link">-->
        <!--默认<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
      <!--</span>-->
              <!--<el-dropdown-menu slot="dropdown">-->
                <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
                <!--<el-dropdown-item>狮子头</el-dropdown-item>-->
                <!--<el-dropdown-item>螺蛳粉</el-dropdown-item>-->
                <!--<el-dropdown-item>双皮奶</el-dropdown-item>-->
                <!--<el-dropdown-item>蚵仔煎</el-dropdown-item>-->
              <!--</el-dropdown-menu>-->
            <!--</el-dropdown>-->
          <!--</el-col>-->
        <!--</el-row>-->

      </div>
<!--<div class="test" v-for="item in data1">{{item.content}}</div>-->
      <div class="lastFolder" @click="backLast">...</div>
      <div class="hello" v-for="(item,index) in data" >
        <p class="title">
         <span class="fa fa-folder-o"></span> <span @click="changeData(index)"> {{item.content}}</span><Pop-over type="chat"></Pop-over>
        </p>
      </div>
<Pop-over></Pop-over>

      <div class="editor" v-if="EditorSwitch" >
        <ul class="list">
          <li class="item"><span class="fa fa-folder"></span><span @click="newFolder">新建文件夹</span></li>
          <li class="item"><span class="fa fa-folder"></span><span @click="newFolder">新建文件夹</span></li>
          <li class="item"><span class="fa fa-folder"></span><span @click="newFolder">新建文件夹</span></li>
          <li class="item"><span class="fa fa-folder"></span><span @click="newFolder">新建文件夹</span></li>
          <li class="item"><span class="fa fa-folder"></span><span @click="newFolder">新建文件夹</span></li>
        </ul>
      </div>
<!--<Dialog-bar v-model="sendVal" type="danger" title="请输入文件名" content="" v-on:cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()" dangerText="删除"></Dialog-bar>-->
      <Dialogue-bar v-model="sendVal" type="talkCase" class="Dialogue" ></Dialogue-bar>
      <div class="first" @click="second=!second,third=false">第一级目录</div>
      <div class="second" v-show="second" @click="third=!third">第二级目录</div>
      <div class="third" v-show="third">第三级目录</div>
    </div>
</template>
<script>
  import Dialog from './component-detail/Dialog'
  import Dialogue from  './component-detail/Dialogue'
  import  Popover from  './component-detail/Popover'
export default {
    name:'SystemKnowledge',
  data () {
      return {
        searchValue:'',
        second:false,
        third:false,
        EditorSwitch:false,
        sendVal:false,
        showType:0,
        one:[],
        two:[],
        three:[],
        four:[],
        Grade:0,
        appearPosition:'',
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
    components:{
      'Dialog-bar':Dialog,
      'Dialogue-bar':Dialogue,
      'Pop-over':Popover
    },
  methods: {
    Select() {
      console.log('input');
      console.log(this.$refs);
      // this.$refs.Popover.createFolder1();
    },
    selectType(){
      console.log(this.showType)
    },
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
    openMask(){
      this.sendVal = true;
      console.log(event.target.offsetTop)
      this.appearPosition=event.target.offsetTop;

    },
    clickCancel(){
      console.log('点击了取消');
    },
    clickDanger(){
      console.log('这里是danger回调')
    },
    clickConfirm(){
      console.log('点击了confirm');
    },
    Editor () {
      console.log(event.target.offsetTop)
      this.EditorSwitch=!this.EditorSwitch;
    },
    newFolder () {

    },
    backLast (){
      console.log('entry')
      console.log(this.Grade)
      console.log(this.data)
      switch (this.Grade) {
        case 2:
          this.data=this.three;
          break;
        case 1:
          this.data=this.two;
          break;
        case 0:
          this.data=this.one;
          console.log(this.one);
          break;
        default:
          this.data=this.one;
          break;
      }
    },
    createFolder (item) {
      console.log(item);
      console.log(this.data);
      // console.log(this.data[index].children);
      if(item.children){
        console.log('entry the function')
        // console.log(this.data[index].children)
        item.children.push([{content:'test folder'}])
        // var testarr=this.data[index].children
        // var test={content:'test folder'}
        // testarr.push(test)
        console.log(this.data);
      }
      else {
        // this.data[index]
      }

    },
    createFolder1(e){
      console.log('method',e)
    }
  },
  computed: {
      // data1 () {
      //   return this.data.filter(d=>d.pid.includes('2'))
  // }
  //   changePosition (){
  //     return {
  //     background:'#87afde',
  //       top:this.appearPosition
  //     }
  //   }
  },
  mounted() {
    this.$refs.addFolder.$on('addFolder',e=>{
      console.log('$on',e)
    })
  },
  updated (){
      console.log('dose this work')
      if(this.$store.state.createFolder==1){
        console.log('get it')
      }
  }
}
</script>
<style scoped>

</style>
