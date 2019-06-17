import request from '@/utils/require'
const api={
    ///api/user/info 用户来获取用户是否登陆
    islogin:()=>request.get('/api/user/info'),
    // /api/login 用户登录
    userlogin:(data)=>request.post('/api/login',data),
    // /api/task/list 首页数据
    taskList:(data)=>request.get('/api/task/list',data),

    //获取加班详情数据
    overtimeDetail:(data)=>request.get('/api/apply/overtime',data),
    //获取休假详情数据
    vacationDetail:(data)=>request.get('/api/apply/vacation',data),
    //提交图片的接口
    submitFild:(filedata)=>request.post('/api/upload',filedata),

}
export default api;