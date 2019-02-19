# vue-h5-template

> vue-h5-template


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 技术栈
- vue
- vue-router
- vuex
- cube-ui (主要UI组件)
- better-scroll
- fastclick
- js-cookie
- prettier
- sass
- stylus (主要使用)
- rem (布局)
- axios
- fetch
- babel-polyfill
- webpack
- express

## 项目结构
```
    ---
      |----build  webpack          相关配置，支持sass/less
      |---- config  index          中设置有跨域代理
      |---- node_modules           安装依赖包
      |---- dist                   打包生成文件
      |----src
             |----assets/    
             |----components/       公共组件
             |----config            相关配置
             |----service           数据模块处理
             |----images            存放图片
             |----style             公共样式
             |----router            路由
             |----page              视图部分
             |----APP.vue           视图入口
             |----main.js           主文件入口
             |----theme.sty             主题样式
      |---- static                  静态文件存放 
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
