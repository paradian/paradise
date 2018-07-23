<template>
  <el-popover
    placement="top"
    width="160"
    v-model="visible2">
    <p>这是一段内容这是一段内容确定删除吗？</p>
    <div style="text-align: right; margin: 0">
<p class="item" @click="createFolder1">
<span class="fa fa-folder"></span>
新建文件夹
</p>
      <p class="item"><span class="fa fa-file"></span>新建文件</p>
    </div>
    <el-button slot="reference" style="border: none" @click="test"><span class="fa fa-folder"></span></el-button>
  </el-popover>
</template>

<script>
    export default {
        name: "Popover",
      data() {
        return {
          visible2: false,
        };
      },
      methods:{
          test (){
            console.log('test')
          },
        createFolder1 () {
            console.log('entry');
          this.$store.commit('addFolder',0)
        }
      }
    }
</script>

<style scoped>

</style>
