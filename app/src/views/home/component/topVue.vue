<template>
    <div class="nav">
                <p></p>
                <p class="p" >
                
                <span v-for='val in data' :key='val.id'
                :class="{active:val.type===type}"
                     @click="$emit('changeFn',val.type)"
                >{{val.name}}</span>
                </p>
                <p>
                    <img src="../../../static/img/g.png" alt="">
                    <img src="../../../static/img/p.png" alt="">
                </p>
            </div>
</template>
<script>
export default {
    props: {
        type: ''
    },
    data(){
        return{
           data:[
               {
                   id:0,
                   type:"overtime",
                   name:"加班"
               },
               {
                   id:1,
                   type:"version",
                   name:"休假"
               }

           ]
        }
    },
    methods:{
       
    }

}
</script>
<style lang="scss" scoped>
@import '../../../static/scss/_minix';
@import '../../../static/scss/common';

 .nav{
           width: 100%;
           height: pxTorem(70px);
           display: flex;
           align-items: center;
           justify-content: space-between;
           background: #fff;
          padding:0 pxTorem(20px);
          box-sizing: border-box;
           p{
               width: 100%;
               display: flex;
               text-align: center;
               align-items: center;
               justify-content: center;
               img{
                   width: pxTorem(20px);
                   height: pxTorem(20px);
               }
                

           }
           .p{
                display: flex;
                text-align: center;
                align-items: center;
                justify-content: center;
                border:1px solid #0C6142;
                border-radius:  pxTorem(15px) ;
                span{
                width: pxTorem(100px);
                height: pxTorem(30px);
                line-height: pxTorem(30px);
                
                color:#0C6142;
                }

                .active{
                background: #0C6142;
                color:white;
                border-radius: pxTorem(15px);
                }
            }
           
           

       }
</style>

