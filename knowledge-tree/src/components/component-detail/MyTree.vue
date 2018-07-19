<template>
    <div>
        <div @click="clickHandle" :style="treeStyle" :class="{hasChildren:this.children}" class="tree">{{message}}</div>
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
            return a;
        }
    }
}
</script>
<style>
.hasChildren{
    color: red;
}
.tree{
   background-color: #5689fa;
}
</style>
