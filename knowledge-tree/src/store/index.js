import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
  state:{
    folder:'',
    index:'',
    createFolder:'',
    createFile:'',
    rename:'',
    folderName:''

  },
  mutations:{
    addFolder (state,data){
      state.folderName=data;
      console.log(state.folderName);
    },
    confirmFolder (state,data){
    state.folder=data;
    console.log(state.folder);
    }
  },
  actions:{

  }
})
