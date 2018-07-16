<template>
    <div class="main">
        <h1>this is a case-file page ,just for my test</h1>
        <input type="text" @input="Select">
        <p class="test" @click="ChangeSwitch()">Switch</p>
        <div class="joke" v-show="Switch">you sucker ,how dare you do such things</div>
        <p class="test" @click="Show=!Show">Switch</p>
        <div class="joke" v-show="Show">it was more a decade </div> 
    </div>
</template>
<script>
export default {
    name:'CaseFile',
    data() {
        return{
            Switch:false,
            Show:false
        }
    },
    methods: {
        ChangeSwitch() {
            this.Switch=!this.Switch;
        },
        Select() {
            console.log('input');
        }
    }
}
</script>
