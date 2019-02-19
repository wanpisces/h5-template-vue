// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import router from "./router";
// babel-polyfill
import 'babel-polyfill'
// import "./theme.styl"; // global css
// rem 适配
import "./config/rem";
// 移动设备上的浏览器默认会在用户点击屏幕大约延迟300毫秒后才会触发点击事件
import FastClick from "fastclick";
// cube ui组件
import Cube from "cube-ui";
import App from "./App";
//   上拉、下拉刷新
import BetterScroll from "./components/common/scroll/index";
Vue.use(Cube);
Vue.use(BetterScroll);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    template: "<App/>",
    components: { App }
});