<template>
  <el-popover
    placement="bottom"
    width="160"
    v-model="visible2">
    <div style="text-align: right; margin: 0">
<p class="item" @click="createFolder1">
<span class="fa fa-folder"></span>
新建文件夹
</p>
      <p class="item"><span class="fa fa-file"></span></p>
    </div>
    <el-button slot="reference" style="border: none" @click="test"><span class="fa fa-folder"></span></el-button>
  </el-popover>
</template>

<script>
    export default {
        name: "Popover",
      props:{
          value:{},
        type:{
          type:String,
          default:''
        }

      },
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
          this.$emit('addFolder','got')

        }

      }
    }
</script>

<style scoped>

</style>
