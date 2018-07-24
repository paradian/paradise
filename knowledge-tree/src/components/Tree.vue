<template>
    <div class="main">
      <NavBar></NavBar>
        <p class="tabbar">
            <span class="tab" @click="ShowCase" :class="{'active':Switch===1}">案件档案</span>
            <span class="tab" @click="ShowSystem" :class="{'active':Switch===2}">系统知识</span>
             <span class="tab" @click="ShowMine" :class="{'active':Switch===3}">我的知识</span>
        </p>
<CaseFile v-show="Switch===1" ></CaseFile>
<SystemKnowledge v-show="Switch===2"></SystemKnowledge>
<MyKnowledge v-show="Switch===3"></MyKnowledge>

    </div>
</template>
<script>
import CaseFile from './CaseFile';
import MyKnowledge from './MyKnowledge';
import SystemKnowledge from './SystemKnowledge';
import NavBar from './component-detail/navBar'

export default {
    name:'Tree',
    components:{
        'CaseFile':CaseFile,
        'MyKnowledge':MyKnowledge,
        'SystemKnowledge':SystemKnowledge,
      'NavBar':NavBar
    },
    data () {
        return {
            Switch:1,
        }
    },

    methods:{
        ShowCase(){
            console.log('test')
            this.Switch=1;
        },
        ShowSystem() {
            console.log('test2');
            this.Switch=2;
        },
        ShowMine() {
            console.log('test1');
            this.Switch=3;
        },

    }

}
</script>
<style scoped>
  .tabbar  {
    display: flex;
    justify-content: space-around;
  }
span {
    width: 90px;
    height: 30px;
    display: inline-block;
    font-size: 1rem;
}
.active {
    /*background-color: #89af89;*/
    color: #3eb3f0
}
</style>
