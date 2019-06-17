<template>
    <div class="header">
        <p v-if='back' @click='$router.back()'> < </p>
        <p class="center_title">{{titletext}} </p>
        <p><slot></slot></p>
    </div>
</template>
<script>
export default {
    poprs:{
        back:{
            default:true,
            type:Boolean,
        },
        title:{
            default:"",
            type:String
        }
    },
    data(){
        return {
            
        }
    },
    computed:{
        titletext(){
            return this.title?this.title:this.$route.mate.title;
        }
    }
    
}
</script>
<style lang="scss" scoped>

@import '../../../static/scss/_minix';
@import '../../../static/scss/common';
.header {
    width: 100%;
    height: pxTorem(120px);
    display: flex;
    justify-content: space-between;
    padding: 0 pxTorem(15px);
    line-height: pxTorem(44px);
    box-sizing: border-box;
    color: #000;
    background: #ffffff;

    .iconfont {
      font-size: pxTorem(18px);
    }
    .center_title {
      flex: 1;
      text-align: center;
      margin-left: pxTorem(20px);
      font-size: pxTorem(18px);
    }
    .btn_top i {
      margin: 0 pxTorem(5px);
    }
  }

//   header {
//     width: 100%;
//     height: pxTorem(120px);

//     @include box_flex;
//     @include direction(column);
//   }
</style>

