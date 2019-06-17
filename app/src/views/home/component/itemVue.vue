<template>
  <ul>
    
    <li v-for="(value) in options" :key="value.applicationNumber" @click='handelList(value)'>
     
      <p>
        <span style="color:#898989">{{value.applicationNumber}}</span>
        <span style="color:#898989">
          <img src="../../../static/img/l.png" alt>
          {{value.p}}
        </span>
      </p>

      <p>
        <span style="color:#898989">申请人</span>
        <span>{{value.nickname}}</span>
        <span style="color:#898989">加班类型</span>
        <span>{{value.describes}}</span>
      </p>
      <p>
        <span style="color:#898989">加班日期</span>
        <span>{{value.startTime}}</span>
        <span style="color:#898989">加班时数</span>
        <span>{{value.type}}</span>
      </p>
    </li>
  </ul>
</template>
<script>
import request from '../../../utils/require'
export default {
  props:['options'],
  data(){
    return{
        data:[]
    }
  },
  created(){
    request.get('/api/task/list')
  },
  methods:{
    //点击每一项
      handelList(value){
        this.$router.push(
          {
            path:'/detail',
            query:{
              type:value.list_type,
              id:value.applicationNumber
              }
          }
         
        );
      }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../static/scss/_minix';
@import '../../../static/scss/common';
 ul{
               width: 100%;
               li{
                   margin-top:20px;
                   background: #fff;
                   display: flex;
                   flex-direction: column;
                   justify-content: center;
                   width: 100%;
                   height: pxTorem(120px);
                   border-bottom: 1px solid #ccc;
                   p{
                       display: flex;
                       justify-content: space-between;
                       padding:0 pxTorem(20px);
                       margin:pxTorem(10px) pxTorem(10px);
                       span{
                           img{
                               width: pxTorem(15px);
                               height: pxTorem(15px);
                           }
                       }
                   }
               }
           }
</style>

