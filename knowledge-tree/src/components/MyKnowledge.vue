<template>
    <div class="main">
        <h1>this is a my-knowledge page ,just for my test</h1>
      <input type="file">

<VueTree v-for="(item,index) in treeArray" :key="index" :userid="item.id" :message="item.message" :children="item.children" :ceng="1"></VueTree>
      <!--<Tree-->
        <!--class="item"-->
        <!--v-for="(data, index) in children"-->
        <!--:key="index"-->
        <!--:data="data.children">-->
      <!--</Tree>-->

    </div>
</template>
<script>
  import Tree from './component-detail/Tree'
  import  VueTree from  './component-detail/MyTree'
export default {
    name:'MyKnowledge',
  data() {
      return {
        treeArray:[
          {
            id:1,
            message:'1',
            children:[
              {
                id:11,
                message:'1-1',
                children:[
                  {
                    id:111,
                    message:'1-1-1'
                  }
                ]
              },
              {
                id:12,
                message:'1-2',
                children:[
                  {
                    id:121,
                    message:'1-2-1'
                  },
                  {
                    id:122,
                    message:'1-2-2',
                    children:[
                      {
                        id:1221,
                        message:'1-2-2-1'
                      }
                    ]
                  }
                ]
              },
              {
                id:13,
                message:'1-3'
              }
            ]
          },
          {
            id:2,
            message:'2',
            children:[
              {
                id:21,
                message:'2-1'
              },
              {
                id:22,
                message:'2-2',
                children:[
                  {
                    id:221,
                    message:'2-2-1'
                  },
                ]
              },
              {
                id:23,
                message:'2-2'
              },
              {
                id:24,
                message:'2-3'
              },
            ]
          },
          {
            id:3,
            message:'3',
            children:[
              {
                id:31,
                message:'3-1'
              },
              {
                id:32,
                message:'3-2'
              },
              {
                id:33,
                message:'3-3'
              },
              {
                id:34,
                message:'3-4'
              }
            ]
          },
          {
            id:4,
            message:'4',
            children:[
              {
                id:41,
                message:'4-1'
              },
              {
                id:42,
                message:'4-2'
              },
              {
                id:43,
                message:'4-3'
              },
              {
                id:44,
                message:'4-4'
              }
            ]
          }
        ]
  }

  },
  components:{
      'Tree':Tree,
    'VueTree':VueTree
  }

  ,
}
</script>
