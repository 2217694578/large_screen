import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress'; // 进度条
import 'nprogress/nprogress.css'
import Login from '@/views/Login.vue';
import BasicScreen from '@/views/basicScreen';

const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;
//push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};
//replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
    if (onResolve || onReject)
        return originalReplace.call(this, location, onResolve, onReject);
    return originalReplace.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect:'/three'
  },
  {
    path:"/login",
    name:"LoginPage",
    component:Login,
    meta:{
      title:"登录",
      isAuth:false
    }
  },
  {
    path:'/basic',
    name:"BasicScreenPage",
    component:BasicScreen,
    meta:{
      title:"基础数据可视化大屏",
      isAuth:false
    }
  },
  {
    path:'/three',
    name:"ThreeDimensionalScreenPage",
    component:() => import('@/views/threeDimensionalScreen'),
    meta:{
      title:"三维数据可视化大屏",
      isAuth:false
    }
  }
]

/**
 * #及其后面的内容就是hash值
 * hash值不会包含在HTTP请求中
 * hash模式兼容性较好
 * history在应用部署上线时需要后端人员技术支持
 */
const router = new VueRouter({
  routes,
  mode:"hash" // 路由模式：默认是hash模式
})

// 全局路由前置守卫
/**
 * to 将要访问的路由信息对象
 * from 将要离开的路由信息对象
 * next 函数，调用next() 表示放行
 *   next三种用法: next() 直接放行
 *                next(false) 不允许放行
 *                next('/login') 强制跳转页面
 */
router.beforeEach((to,from,next) => {
  NProgress.start(); // 进度条开始
  if(to.meta.isAuth){
    next()
  }else{
    next()
  }
})

// 全局路由后置守卫
router.afterEach((to) => {
  NProgress.done(); //进度条结束
  document.title = to.meta.title || "数据大屏示例"
})

export default router;