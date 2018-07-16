import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/HelloWorld'
import Home from '@/components/Home'
import First from  '@/components/Testcomponents/First'
import Second from  '@/components/Testcomponents/Second'
import Third from  '@/components/Testcomponents/Third'
import Forth from  '@/components/Testcomponents/Forth'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'HelloWorld',
      component: Test,
      childern:[
        {path:'/test:id',
  component:First},
        {path:'/second',
          component:Second},
        {path:'/third',
          component:Third},
        {path:'/forth',
          component:Forth},
      ],
    },
{
  path:'/',
  component:Home
}
  ]
})
