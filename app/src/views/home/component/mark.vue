<template>
    <div class="wrapper" v-show='show'>
       
        <div class="mark" @click.self="$emit('showClose')" >
            <!-- @click.self="$emit('close')" -->
        </div>
        <div class="bottm">
            <p @click="$router.push('/commit/vacation')">
                <img src="../../../static/img/j.png" alt="">
                <span >加班</span>
            </p>
            <p>
                <img src="../../../static/img/jj.png" alt="">
                <span>休假</span>
             </p>
        </div>
    </div>
      
    
</template>
<script>
export default {
    props:['show'],
    data(){
        return {
            // show:Boolean
        }
    },
    methods:{
        handleAdd(){
          alert(654)
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../../static/scss/common.scss";
@import "../../../static/scss/_minix.scss";
.mark {
  width: 100%;
  height: 100%;
  background: #7c7c7c;
  position: absolute;
  top: 0;
  opacity: 0.5;
}
.bottm {
  display: flex;

  position: fixed;
  bottom: 0;
  background: #fff;
  width: 100%;
  height: pxTorem(120px);

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    span {
      margin-top: pxTorem(15px);
    }
  }
}
</style>

