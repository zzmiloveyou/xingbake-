<template>
  <div class="main">
    <p class="title"  :title='title'>
      <span @click="$router.back()">←</span>
      办公室加班申请表
    </p>
    <div class="header">
      <p class="pic">
          <img :src="this.list.avatar" alt="">
      </p>
      <p class="name">
        <span>申请人姓名</span>
        <span>直接主管</span>
      </p>
      <p class="long">
        <span>{{this.list.nickname}}</span>
        <span>秦毅超</span>
      </p>
    </div>
    <div class="det">
     <h2>申请信息</h2>
      <div class="cont">
        <ul>
          <li>
            <p>加班日期</p>
            <p> {{new Date(this.list.startTime).toLocaleDateString()}}</p>
          </li>
          <li>
            <p>加班类型</p>
            <p> {{showType(this.list.type, this.list.list_type)}}</p>
          </li>
          <li>
            <p>加班起始时间</p>
            <p>{{this.list.startTime}} </p>
          </li>
          <li>
            <p>加班截止时间</p>
            <p>{{this.list.endTime}} </p>
          </li>
          <li>
            <p>共计时数</p>
            <p>2.5</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="yuanyin">
      <h5>加班事由</h5>
      <input type="textarea">
        {{this.list.describes}}
    </div>
    <div class="fujian" >
      <h3> 上传附件 </h3>
      <div class="img_pin">
        <p v-for="(val,i) in this.list.annex" :key='i'>
          <img :src="'http://localhost:3000'+val" alt="">
        </p>
      </div>
      
    </div>
    <div class="btn">
      <button class="cancle">取消</button>
      <button class="submit">提交</button>
    </div>
  </div>
</template>
<script>
import request from "@/utils/require";
export default {
  props: {
    // type:String,
    // id:String
  },
  components: {},
  data() {
    return {
      list: [],
      type: "",
      id: ""
    };
  },
  computed: {
    title(){
      console.log(this.type)
    }
  },
  methods: {
      showType(type,title){
          if(title==='overtime'){
              switch(type){
                  case 1 :
                      return "双休日加班";
                  case 2 :
                      return '节假日加班'
                case 3 :
                    return "工作日加班"
                default :
                    return '加班'
                    
              }
              
          }else{
               switch(type){
                   case 1:
                       return '年假'
                    case 2:
                        return "调休"
                    default :
                        return '休假'
               }   
          }
      }
  },
  created() {
    this.type = this.$route.query.type;
    this.id = this.$route.query.id;
    request.get('/api/apply/'+this.type+'?applicationNumber='+this.id).then(res=>{
        this.list=res.data
    })
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import "../../static/scss/common.scss";
@import "../../static/scss/_minix.scss";
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgb(245, 241, 241);
}
.title {
  width: 100%;
  line-height: pxTorem(40px);
  color: white;
  background: rgb(4, 83, 4);
  text-align: center;
}
.header {
  width: 100%;
  height: pxTorem(100px);
  background: rgb(4, 83, 4);
  display: flex;
  .pic {
    width: 10%;
    height: pxTorem(40px);
    background: pink;
    border-radius: pxTorem(20px);
    margin: pxTorem(20px) 5%;
    img{
        width: 100%;
        height: 100%;
    }
  }
  .name,
  .long {
    width: 25%;
    height: 100%;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    span {
      display: block;
      line-height: pxTorem(30px);
      color: white;
    }
    span:nth-child(1) {
      margin-top: 13%;
    }
  }
}
.det {
 width: 90%;
  height: pxTorem(260px);
  background: #fff;
  margin-left: 5%;
  border-radius: pxTorem(20px);
  margin-top:  pxTorem(-30px);
  h2 {
    width: 94%;
    height: pxTorem(40px);
    border-bottom: 1px solid#ccc;
    line-height: pxTorem(40px);
    font-size: pxTorem(18px);
    padding-left: pxTorem(40px);
    color: #a7a7a7;
  }
  .cont {
    width: 94%;
    height: pxTorem(320px);
    padding-left: pxTorem(40px);
    ul {
      li {
        display: flex;
        justify-content: space-around;
        line-height: pxTorem(40px);
        font-size: pxTorem(16px);
        color: #bfbfbf;
      }
    }
  }
}
.yuanyin {
  width: 90%;
  height: pxTorem(60px);
  background: white;
  margin-left: 5%;
  margin-top: 3%;
  border-radius: pxTorem(15px);
  padding-left: pxTorem(15px);
  box-sizing: border-box;
}
.fujian {
  width: 90%;
 height: pxTorem(150px);
  background: white;
  margin-left: 5%;
  margin-top: 3%;
  padding-left: pxTorem(15px);
  box-sizing: border-box;
  border-radius: pxTorem(15px);
  h3{
    padding-top:pxTorem(10px);
  }
  .img_pin{
    width: 100%;
    display: flex;
    padding: pxTorem(15px);
    box-sizing: border-box;
    height: pxTorem(90px);
    p{
      width: 30%;
      margin-right:pxTorem(10px);
      height: pxTorem(90px);
     
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
.btn {
  width: 100%;
  height: pxTorem(55px);
  background: white;
  margin-top: 3%;
  display: flex;
  border-radius: pxTorem(15px);
  font-size: pxTorem(16px);
  .cancle {
    width: 40%;
    border: none;
    line-height: pxTorem(55px);
    text-align: center;
    color: rgb(4, 83, 4);
    font-size: pxTorem(15px);
    background: white;
  }
  .submit {
    width: 60%;
    border: none;
    line-height: pxTorem(55px);
    text-align: center;
    background: rgb(5, 87, 5);
    color: white;
    font-size: pxTorem(15px);
  }
}
</style>