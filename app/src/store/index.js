import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store =new Vuex.Store({
    state:{
        num:0,
        title:[{txt:'zs'}]
    },
    mutations:{
        //action 更改的状态
        getNum(state,action){
            action==='add'?state.num++:state.num--
        },
        todoList(state,action){
            // state.title[0].txt=action;
            state.title.push({'txt':action})
        },
        delList(state,action){
            state.title.splice(action,1);
        }
    },
    actions:{

    }
})
export default store;