<template>
  <div class="dialog" v-show="showMask">
    <div class="dialog-container" style="top:256px">
<ul class="list" v-if="type =='editorFolder'">
  <li class="item"><span class="name">leo</span><span class="fa fa-qq"></span> <span class="fa fa-wechat"></span></li>
  <li class="item"><span class="name">leo</span><span class="fa fa-qq"></span> <span class="fa fa-wechat"></span></li>
  <li class="item"><span class="name">leo</span><span class="fa fa-qq"></span> <span class="fa fa-wechat"></span></li>
  <li class="item"><span class="name">leo</span><span class="fa fa-qq"></span> <span class="fa fa-wechat"></span></li>
</ul>
      <ul class="list" v-if="type == 'talkCase'">
        <li class="item"><span class="fa fa-folder"></span><span>新建文件夹</span></li>
        <li class="item"><span class="fa fa-file"></span><span>新建文件</span></li>
        <li class="item"><span class="fa fa-edit"></span> <span>重命名</span></li>
        <li class="item"><span class="fa fa-cut"></span><span>删除</span></li>
        <li class="item"><span class="fa fa-upload"></span><span>上传</span></li>
      </ul>
      <div class="close-btn" @click="closeMask"><i class="fa fa-close"></i></div>
    </div>

  </div>
</template>
<script>
  export default {
    name:'Dialogue',
    props: {
      value: {},
      // 类型包括 defalut 默认， danger 危险， confirm 确认，
      type:{
        type: String,
        default: 'default'
      },
appearPosition:{
        type:String,
  default:''
}
    },
    data(){
      return{
        showMask: false,
        changePosition:0,
      }
    },
    methods:{
      closeMask(){
        this.showMask = false;
      },
      closeBtn(){
        this.$emit('cancel');
        this.closeMask();
      },
      dangerBtn(){
        this.$emit('danger');
        this.closeMask();
      },
      confirmBtn(){
        this.$emit('confirm');
        this.closeMask();
      },

  },
    mounted(){
      this.showMask = this.value;
      console.log(this.appearPosition);

    },
    watch:{
      value(newVal, oldVal){
        this.showMask = newVal;
      },
      showMask(val) {
        this.$emit('input', val);
      },
      appearPosition (newval,oldval){
        console.log('entry')
        return  {
          top:this.newval,
          background:'#87fa89'
        }
      }
    },
    computed:{
changePosition (){
  console.log('entry')
var a={};
  a.top=this.appearPosition();
  a.background='#87af89';
return a
}
    }
  }
</script>
<style scoped>
  .dialog {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.6);
    z-index: 9999;
  }
  .dialog .dialog-container {
    width: 60vw;
    height: 30vh  ;
    background: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 8px;
    position: relative;
  }
  .dialog .dialog-container .btns > div {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    padding: 0 14px;
    color: #ffffff;
    background: #f1f1f1;
    border-radius: 8px;
    margin-right: 12px;
    cursor: pointer;
  }
  .dialog .dialog-container .close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
  }
ul {
  margin: 0;
  padding: 30px;
}
</style>
