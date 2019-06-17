<template>
    <div class="top"  >
                <dl v-for='item in menudata' :key='item.index' @click="change(item.index)" :class='{active:item.index===index}'>
                    <dt><img :src="require('../../../../static/img/'+item.img)" alt=""></dt>
                    <dd>{{item.title}}</dd>
                </dl>
                
            </div>
</template>
<script>
export default {
    data(){

        return{
            index:0,
            menudata:[
                {
                    title:"待处理",
                    img:"1.png",
                    index:0
                },{
                    title:"已发起",
                    img:"2.png",
                    index:1
                },
                {
                    title:"已处理",
                    img:"3.png",
                    index:2
                }
            ]
        }
        
    },
    methods: {
            change(index){
                this.index=index;
                this.$emit('change',index);
            }
    },
}
</script>
<style lang="scss" scoped>
@import '../../../static/scss/_minix';
@import '../../../static/scss/common';
.top{
           width: 100%;
           height: pxTorem(60px);
           @include box_flex;
           border-bottom: 1px solid rgb(158, 154, 154);
           box-shadow: 50%;
          
            dl{
                width: 33%;
                @include box_flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                dt{
                    width: pxTorem(30px);
                    height: pxTorem(25px);
                    padding-top:pxTorem(5px);
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                dd{
                     margin-bottom:pxTorem(15px); 
                     margin-top:pxTorem(10px);
                }
            }
       }
       .active{
           
           color:green;
           font-size:pxTorem(16px);
       }
</style>
