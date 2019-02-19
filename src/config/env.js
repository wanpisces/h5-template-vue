/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */

let baseUrl = '';
let routerMode = 'hash';
let imgBaseUrl = '//img.sqydt.darongshutech.com/';

if (process.env.NODE_ENV == 'production') {
    baseUrl = '//web.sqydt.easysq.cn/api';
}

export {
    baseUrl,
    routerMode,
    imgBaseUrl,
}