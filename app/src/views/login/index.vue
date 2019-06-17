<template>
    <div>
        <input type="text" class='ipt' placeholder="手机号" v-model="phoneValue"><br/>
        <input type="password" class="pwd" placeholder="密码" v-model="pwdValue"><br/>
        <button @click="handleClick">登陆</button>
    </div>
</template>
<script>
import request from '../../utils/require'
 const phoneValueReg=/^1[357]\d{9}$/;
export default {
    
    data(){
        return {
            phoneValue:"",
            pwdValue:""
        }
    },
    
    methods:{
        handleClick(){
            if(phoneValueReg.test(this.phoneValue)&&this.phoneValue.trim()!=""){
                    request.post('/api/login',{
                        phone:this.phoneValue,
                        password:this.pwdValue
                    }).then(res=>{
                        window.localStorage.setItem('token',res.token);
                        this.$router.back();
                    }).catch(error=>{
                        alert(error.response.data.message)
                    })
                          
            }else{
                alert('请输入正确的密码手机号')
            }
        }
    }
}
</script>
<style scoped lang="scss">
@import '../../static/scss/_minix';
@import '../../static/scss/common';
.ipt,.pwd{
    margin:  pxTorem(8px) pxTorem(20px)  ;
    
    width: pxTorem(300px);
    height: pxTorem(50px);
    border-bottom:2px solid #ccc;
    
}
button{
    margin-top:pxTorem(30px);
    padding:0 pxTorem(20px);
    box-sizing: border-box;
    width:100%;
    height: pxTorem(60px);
    background: #ccc;
    border-radius: pxTorem(30px);
    border:none;
    font-size:pxTorem(18px);
    color:#fff;
}

</style>