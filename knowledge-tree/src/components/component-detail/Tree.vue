<template>
    <div class="main">
      <li>
        <div
          :class="{bold: isFolder}"
          @click="toggle"
          @dblclick="changeType">
          {{ data.name }}
          <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
        </div>
        <ul v-show="open" v-if="isFolder">
          <Tree
            class="item"
            v-for="(data, index) in children"
            :key="index"
            :data="data.childern">
          </Tree>
          <li class="add" @click="addChild">+</li>
        </ul>
      </li>

    </div>
</template>

<script>
  import Tree from './Tree'
    export default {
        name: "Tree",
      props: {
        data: Object
      },
      components: {
          'Tree':Tree
      },
      data() {
          return {
            data :{
              name: 'My Tree',
              children: [
                { name: 'hello' },
                { name: 'wat' },
                {
                  name: 'child folder',
                  children: [
                    {
                      name: 'child folder',
                      children: [
                        { name: 'hello' },
                        { name: 'wat' }
                      ]
                    },
                    { name: 'hello' },
                    { name: 'wat' },
                    {
                      name: 'child folder',
                      children: [
                        { name: 'hello' },
                        { name: 'wat' }
                      ]
                    }
                  ]
                }
              ]
            },
            open:false,
          }
      },
      computed: {
        isFolder: function () {
          return this.data.children &&
            this.data.children.length
        }
      },
      methods: {
        toggle: function () {
          if (this.isFolder) {
            this.open = !this.open
          }
        },
        changeType: function () {
          if (!this.isFolder) {
            Vue.set(this.data, 'children', [])
            this.addChild()
            this.open = true
          }
        },
        addChild: function () {
          this.data.children.push({
            name: 'new stuff'
          })
        }
      }
    }
</script>

<style scoped>
  .item {
    cursor: pointer;
  }
  .bold {
    font-weight: bold;
  }
  ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }
</style>
