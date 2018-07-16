<template>
    <div class="main">
        <p class="tabbar">
            <span class="tab" @click="ShowCase">1</span>
            <span class="tab" @click="ShowMine">2</span>
            <span class="tab" @click="ShowSystem">3</span>
        </p>
<CaseFile v-show="Switch===1"></CaseFile>   
<MyKnowledge v-show="Switch===2"></MyKnowledge>
<SystemKnowledge v-show="Switch===3"></SystemKnowledge>
    </div>
</template>
<script>
import CaseFile from './CaseFile';
import MyKnowledge from './MyKnowledge';
import SystemKnowledge from './SystemKnowledge';

export default {
    name:'Tree',
    components:{
        'CaseFile':CaseFile,
        'MyKnowledge':MyKnowledge,
        'SystemKnowledge':SystemKnowledge
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
        ShowMine() {
            console.log('test1');
            this.Switch=2;
        },
        
        ShowSystem() {
            console.log('test2');
            this.Switch=3;
        },
    }
    
}
</script>
