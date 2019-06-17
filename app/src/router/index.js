import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


 const router= new Router({
  mode:"history",
  routes: [
    {
      path: '/home',
      meta:{
          title:"加班/休假"
      },
      component: ()=>import ('@/views/home/index')
    },
    {
      path: '/order',
      meta:{
        title:"排序"
    },
      component: ()=>import ('@/views/order/index')
    },
    {
      path:"/login",
      meta:{
        title:"登陆"
    },
      component:()=>import('@/views/login/index')
    },
    {
      path:'/detail',
      meta:{
        title:"详情"
      },
      props:true,
      component:()=>import('@/views/detail/index')
    },
    {
      path:'/commit/:type',
      meta:{
        title:"提交申请"
      },
      props:true,
      component:()=>import('@/views/commit/index')
    },
    {
      path: '/',
      redirect:'/home'
    }
  ]
})

//全局守卫，改变上边的文字
router.beforeEach((to,from,next)=>{
  document.title=to.meta.title;
  next();
})
export default router
