
import axios from 'axios'
import router from '../router';
const request=axios.create({
    // baseURL:"http://172.23.45.25:3000"
});
//添加请求拦截器
request.interceptors.request.use((config)=>{
    return {
        ...config,
        headers:{
            ...config.headers,
            token:window.localStorage.getItem('token')
        },
        
    }
},(err)=>{return Promise.reject(err)})
//响应之前拦截
request.interceptors.response.use((response)=>{
    //返回请求数据
    return  response.data
},(error)=>{
    const response =error.response;
    const state=response.status;
    if(state>400){
        switch(state)
        {
            case 401 :
                router.push('/login');
                break;
            case 404 :
                console.log('页面丢失');
                break;
            case 405:
                console.log('没有权限');
                break;
        }
    }
    return Promise.reject(error)
})

export default{
    get(url,data){
        return request.get(url,{
            params:data
        })
        
    },
    post(url,data){
        return request.post(url,data)
    }
}