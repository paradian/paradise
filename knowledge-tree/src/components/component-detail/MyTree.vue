<template>
    <div class="main">
        <div  :style="treeStyle" :class="{hasChildren:this.children}" class="tree">
         <span class="fa fa-folder"></span> <span @click="clickHandle">{{message}}</span>

        </div>
        <div v-if="children" v-show="showChildren">
            <mytree v-for="(item,index) in children" :key="index" :userid="item.userid" :message="item.message" :children="item.children" :level="level+1"/>
        </div>
    </div>
</template>
<script>
import mytree from './mytree';
export default {
    name:'mytree',
    props:[
        'userid',
        'message',
        'children',
        'level'
    ],
    data(){
        return {
            showChildren:false,
        }
    },
    components:{
        mytree
    },
    methods:{
        clickHandle(){
            this.showChildren = !this.showChildren;
            console.log('userid:',this.userid,'/message:',this.message,'/ceng:',this.level)
        }
    },
    computed:{
        treeStyle(){
            var a = {};
            a.paddingLeft = (this.level*20) + 'px';
            a.background='#89fa89';
            a.zIndex=(this.level*1)+1;
            return a;
        }
    }
}
</script>
<style >
.main {
  text-align: left;
}
.hasChildren{
    color: red;
}
.hasChildren::after {
  content: "\F007";
  color: #89af87;
  font-size: 20px;
}
.hasChildren::selection {
  background-color: gold;
}
.tree{
   background-color: #5689fa;
}
</style>
