<template>
  <div class="wrapper">
    <!-- <button @click="handelClick('add')">+</button>
    {{this.$store.state.num}}
    <button @click="handelClick('reduce')">-</button>
    <input type="text" v-model="iptVal"> <button @click='handelTj'>提交</button>
    {{this.$store.state.title}}
    <p v-for='(value,index) in this.$store.state.title' :key='index' @click='handelDel(index)'>
        {{value.txt}}
    </p> -->
  
      <e-header></e-header>
      <!-- 头部的table切换 -->
      <TableVue @change="menuChange" />

    <section>
      <!-- 加班休假小按钮 -->
      <TopVue :type="tableMenu.type" @changeFn='fn'/>
      <!-- list列表 -->
      <div class="cont">
        <itemVue :options='data'/>
      </div>
      <span class="btn" @click='show=true'>+ 发起任务</span>
    </section>
  <Mark :show="show" @showClose='show=false'/>
   <!-- @close='show=false' -->
  </div>
</template>

<script>

import TableVue from "./component/tableVue";
import TopVue from "./component/topVue";
import ItemVue from "./component/itemVue";
import request from '../../utils/require';
import Mark from './component/mark'
import { mapStmapState,mapMutations} from 'vuex'
export default {
  name:"home",
    data() {
    return {
        show:false,
        data:[],
        iptVal:"",
        tableMenu:{
            status:0,
            type:"overtime",
            create_at:0,
            pageSize:10,
            page:1
        }
        
    };
  },
  created(){
      this.getData();
      
  },
  
  methods: {
    ...mapMutations(['getNum','todoList','delList']),
    fn(type){
      this.tableMenu.type=type;
       this.getData();
    },
    /*//加减按钮的计算
      handelClick(tag){
           this.getNum(tag);
      },
      //提交按钮
      handelTj(){
          this.todoList(this.iptVal);
          this.iptVal=''
      },
      //删除按钮
      handelDel(index){
         this.delList(index); 
      },*/
      menuChange(index){
          this.tableMenu.status=index;
          this.getData();
      },
      getData(){
          request.get('/api/task/list',{
              ...this.tableMenu
        }).then(res=>{
            this.data=res.data
        })
      }
  },
  components: {

    TableVue,
    TopVue,
    ItemVue,
     Mark
  }
};
</script>
<style lang="scss" scoped>
@import "../../static/scss/common.scss";

@import "../../static/scss/_minix.scss";

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  @include direction(column);

  section {
    width: 100%;
    flex: 1;

    margin-top: pxTorem(10px);
    background: #f7f7f7f7;

    .cont {
      width: 100%;
      margin-top: pxTorem(10px);
      border-bottom: 1px solid rgb(182, 172, 172);
    }
  }
  .btn {
    display: inline-block;
    width: pxTorem(130px);
    text-align: center;
    height: pxTorem(40px);
    line-height: pxTorem(40px);
    color: #fff;
    font-weight: 600;
    font-size: pxTorem(14px);
    background: #0c6142;
    border-radius: pxTorem(20px);
    position: fixed;
    bottom: pxTorem(40px);
    right: pxTorem(20px);
  }
}
</style>

