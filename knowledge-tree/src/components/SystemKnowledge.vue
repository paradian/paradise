<template>
    <div class="main">
        <h1>this is a system-knowledge page ,just for my test</h1>
      <div class="search"> <input type="text" @input="Select" v-model="searchValue" placeholder="输入案件信息"><button class="fa fa-search"></button>
        <span class="fa fa-admin"></span>
      </div>
<div class="test" v-for="item in data1">{{item.content}}</div>
      <div class="hello" v-for="item in data">
        {{item.content}}

      </div>
      <div class="first" @click="second=!second,third=false">第一级目录</div>
      <div class="second" v-show="second" @click="third=!third">第二级目录</div>
      <div class="third" v-show="third">第三级目录</div>
    </div>
</template>
<script>
export default {
    name:'SystemKnowledge',
  data () {
      return {
        searchValue:'',
        second:false,
        third:false,
        data:[
          {id:'1',pid:'0',content:'test0',children:[{id:11,text:'hello',children:[{id:'111',text:'world'}]}]},
          {id:'2',pid:'0',content:'test1'},
          {id:'3',pid:'1',content:'test2'},
          {id:'4',pid:'1',content:'test3'},
          {id:'5',pid:'2',content:'test4'},
          {id:'6',pid:'2',content:'test5'},
        ],

      }
  },

  methods: {
    Select() {
      console.log('input');
    },
  },
  computed: {
      data1 () {
        return this.data.filter(d=>d.pid.includes('2'))
  }},
  mounted() {

      console.log(this.data1)
  }
}
</script>
