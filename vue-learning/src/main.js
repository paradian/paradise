// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import messages from './language/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.use(VueI18n)
Vue.config.productionTip = false

/* eslint-disable no-new */
function lang () {
// 将选择的语言存在localStorage中
  let t = window.localStorage.getItem('language')
  if (t) return t
  // 默认中文
  else return 'cn'
}

const language = lang()

// 自定义 window 的 lang 属性
window.lang = lang()

// 创建一个 i18n 实例
const i18n = new VueI18n({
  locale: language,    // 语言标识
  messages
})

new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
