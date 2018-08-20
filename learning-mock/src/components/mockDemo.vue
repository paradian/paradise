<template>
  <div class="mock-test">
    <div class="object-item">
      <div class="container">
        <h1 @click="getNumber">number
{{randomNumber}}
        </h1>
        <h2 @click="getString">string
          {{randomString}}
        </h2>
        <h2 @click="getText">text
          {{randomText}}
        </h2>
      </div>
    </div>
  </div>
</template>
<script>
import Mock from 'mockjs'
import axios from 'axios'
export default {
  name: 'mockDemo',
  data () {
    return {
      data: '',
      randomNumber: null,
      randomString: null,
      randomText: null
    }
  },
  methods: {
    getNumber () {
      this.randomNumber = Mock.mock({
        'number|1-100': 100
      }).number
    },
    getString () {
      this.randomString = Mock.mock({
        'string|1-5': '@$%^'
      }).string
    },
    getText () {
      Random.paragraph()
      this.randomText = Mock.mock('@paragraph')
    }
  },
  mounted () {
    Mock.mock('api/name', {
      'name': 'jack'
    })
    axios.get('api/name').then((res) => {
      console.log(res)
    })
  }
}
</script>
<style scoped>

</style>
