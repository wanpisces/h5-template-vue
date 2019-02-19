<template>
  <div>
    <main class="position-box">
      <!-- 需要一个创建一个父容器 组件高度默认等于父容器的高度 -->
      <vue-better-scroll class="wrapper" ref="scroll" :scrollbar="scrollbarObj" :pullDownRefresh="pullDownRefreshObj" :pullUpLoad="pullUpLoadObj" :startY="parseInt(startY)" @pullingDown="onPullingDown" @pullingUp="onPullingUp">
        <ul class="list-content">
          <li class="list-item" v-for="(item,index) in data" :key="index">{{index}}</li>
        </ul>
      </vue-better-scroll>
    </main>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import  RequestIndex  from "@/service/module/index";
import NavBar from "@/components/navBar/BarGuide";
export default {
  name: "home",
  components: { NavBar },
  data() {
    return {
      // 这个配置可以开启滚动条，默认为 false。当设置为 true 或者是一个 Object 的时候，都会开启滚动条，默认是会 fade 的
      scrollbarObj: {
        fade: true
      },
      // 这个配置用于做下拉刷新功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启下拉刷新，可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
      pullDownRefreshObj: {
        threshold: 90,
        stop: 40,
        txt: "已刷新"
      },
      // 这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载，可以配置离底部距离阈值（threshold）来决定开始加载的时机
      pullUpLoadObj: {
        threshold: 0,
        txt: {
          more: "上拉加载数据",
          noMore: "我也是有底线哒~"
        }
      },
      startY: 0, // 纵轴方向初始化位置
      data: [],
      search: {
        run_in: 1,
        current_page: 1,
        page_size: 20,
        group_id: 1,
        category_id: 1001
      }
    };
  },
  mounted() {
    //  console.log(RequestIndex.newList)
    this.getData();
  },
  methods: {
    // 模拟数据请求
    async getData(fresh = false) {
      const res = await RequestIndex.newList(this.search);
      if (res.code === 2000) {
        this.data = res.data.list;
        if (fresh) {
          this.$refs.scroll.forceUpdate(true);
        }
      }
    },
    async onPullingDown() {
      // 模拟下拉刷新
      this.search.current_page = 1;
      this.getData(true);
    },
    async onPullingUp() {
      // 模拟上拉 加载更多数据
      this.search.current_page += 1;
     
      const res = await RequestIndex.newList(this.search);
      if (res.code === 2000) {
        this.data = [...this.data, ...res.data.list];
        if (res.data.list.length >= this.search.page_size) {
          this.$refs.scroll.forceUpdate(true);
        } else {
          this.$refs.scroll.forceUpdate(false);
        }
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.position-box
  position absolute
  top 0
  left 0
  right 0
  bottom 1.95rem
.list-item
  line-height 40px
</style>
