import App from "../App";
import Vue from 'vue'
import Router from "vue-router";
Vue.use(Router)
const home = r => require.ensure([], () => r(require("@/page/home/home")), "home");
const service = r => require.ensure([], () => r(require("@/page/service/index")), "service");
const mine = r => require.ensure([], () => r(require("@/page/mine/index")), "mine");
const list = r => require.ensure([], () => r(require("@/page/home/list")), "list");
const cubeIndex = r => require.ensure([], () => r(require("@/page/cubeUI/index")), "cubeIndex");
const tabBar = r => require.ensure([], () => r(require("@/page/cubeUI/tabBar")), "tabBar");
const routes = [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        // 首页列表
        {
            path: '/home',
            component: home,
            meta: { keepAlive: true }
        }, // 服务
        {
            path: '/service',
            component: service
        },
        // 我的
        {
            path: '/mine',
            component: mine
        },

        {
            path: '/list',
            component: list
        },
        {
            path: '/cubeIndex',
            component: cubeIndex
        },
        {
            path: '/tabBar',
            component: tabBar
        },
    ]
}]
const router = new Router({
    routes,
    // mode: 'history', // require service support 后台支持可以打开
    strict: process.env.NODE_ENV !== 'production',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            if (from.meta.keepAlive) {
                from.meta.savedPosition = document.body.scrollTop;
            }
            return { x: 0, y: to.meta.savedPosition || 0 }
        }
    }
});
export default router;