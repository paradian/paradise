<template>
  <el-popover
    placement="bottom"
    width="160"
    v-model="visible2">
    <div style="text-align: right; margin: 0" v-if="type=='editor'">
<Popover type="folder"></Popover>
      <p class="item" @click="createChildrenFolder">
        新建子级文件夹 <span class="fa fa-folder-o"></span>
      </p>
      <p class="item" @click="createFile">
        新建文件<span class="fa fa-file"></span>
      </p>
      <p class="item" @click="createChildrenFile">
        新建子级文件 <span class="fa fa-folder-o"></span>
      </p>
      <p class="item" @click="rename">
        重命名   <span class="fa fa-edit"></span>
      </p>
      <p class="item" @click="deleteThis">删除<span class="fa fa-trash-o"></span></p>
      <p class="item" @click="uploadFile">上传<span class="fa fa-upload"></span></p>
    </div>
    <div style="text-align: right; margin: 0" v-if="type=='chat'">
      <p class="item">
        <span class="name">leo</span> <span class="fa fa-qq"></span><span class="fa fa-wechat"></span>
      </p>
      <p class="item"><span class="fa fa-file"></span></p>
    </div>
    <div style="text-align: right; margin: 0" v-if="type=='folder'" ref="addFolder" @addFolder="add">
      <p class="title">请输入文件夹名</p>
      <p class="item">
        <input type="text" v-model="newName">
      </p>
      <el-button type="text" @click="visible2=false">取消</el-button><el-button type="primary" @click="createFolder">确定</el-button>
      <p class="item"><span class="fa fa-file"></span></p>
    </div>
    <el-button slot="reference" style="border: none" >
      <span class="fa fa-edit" v-if="type=='editor'"></span>
      <span class="fa fa-user" v-if="type=='chat'"></span>
      <p class="pop" v-if="type=='folder'">
      新建文件夹
      <span class="fa fa-folder-o"></span>
    </p>
    </el-button>
  </el-popover>
</template>

<script>
  import Popover from './Popover'
    export default {
        name: "Popover",
      props:{
          value:{},
        type:{
          type:String,
          default:''
        }
      },
      components:{
          'Pop-over':Popover
      },
      data() {
        return {
          visible2: false,
          newName:''
        };
      },
      methods:{
        createFolder () {
            console.log('entry');
          this.$store.commit('addFolder',this.newName)
          this.visible2=false;
        },
        add (){

        },
        createChildrenFolder () {
          console.log('entry');
          this.$store.commit('addFolder',0)
          this.$emit('addFolder','got')
        },
        createFile () {
          console.log('entry');
          this.$store.commit('addFolder',0)
          this.$emit('addFolder','got')
        },
        createChildrenFile () {
          console.log('entry');
          this.$store.commit('addFolder',0)
          this.$emit('addFolder','got')
        },
        rename () {
          console.log('entry');
          this.$store.commit('addFolder',0)
          this.$emit('addFolder','got')
        },
        deleteThis () {
          console.log('entry');
          this.$store.commit('addFolder',0)
          this.$emit('addFolder','got')
        },
        uploadFile () {
          console.log('entry');
          this.$store.commit('addFolder',0)
          this.$emit('addFolder','got')
        },
      },
      mounted (){
        this.$refs.addFolder.$on('addFolder',e => {
          console.log(e)
        })
      },
    }
</script>

<style scoped>
  .el-button {
    padding: 10px;
  }
.el-button  span{
  font-size: 20px;
  padding: 5px;
}
</style>
