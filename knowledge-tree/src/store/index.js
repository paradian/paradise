import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    createFolder:0,
    createFile:0,

  },
  mutations:{
    addFolder (){
      this.state.createFolder=1;
    }
  }
})
