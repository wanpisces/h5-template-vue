<template>
  <div>
    <cube-page type="scroll-nav-side" title="ScrollNav">
      <div slot="content">
        <div class="view-wrapper">
          <cube-scroll-nav :side="true" :data="data" :current="current" @change="changeHandler" @sticky-change="stickyChangeHandler">
            <cube-scroll-nav-panel v-for="item in data" :key="item.name" :label="item.name" :title="item.name">
              <ul>
                <li v-for="(food,index) in item.foods" :key="index">
                  <div>
                    <img :src="food.icon">
                    <div style="width:60%">
                      <p>{{food.name}}</p>
                      <span>cxcxcx</span>
                      <div class="star">
                        <span>月售 1111</span>
                        <span>赞 1</span>
                      </div>
                      <div>￥
                        <strong>20</strong>
                      </div>
                    </div>

                  </div>
                </li>
              </ul>
            </cube-scroll-nav-panel>
          </cube-scroll-nav>
        </div>
      </div>
    </cube-page>
  </div>
</template>

<script>
import goodsData from "./goods.json";
import cubePage from "@/components/cubeUI/cubePage";
const goods = goodsData.goods;
export default {
  components: { cubePage },
  data() {
    return {
      data: goods,
      current: goods[3].name
    };
  },
  methods: {
    changeHandler(label) {
      console.log("changed to:", label);
    },
    stickyChangeHandler(current) {
      console.log("sticky-change", current);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.scroll-nav-side
  background-color #fff
  .view-wrapper
    position fixed
    top 44px
    left 0
    bottom 0
    width 100%
  .prepend-header
    width 90%
    margin 20px auto
    text-align center
    font-size 20px
    line-height 1.6
    border-radius 2px
    box-shadow 0 0 4px rgba(0, 0, 0, 0.2)
  .cube-scroll-nav-main
    background-color #efeff4
  .cube-sticky-fixed
    background-color #efeff4
  .cube-scroll-nav-bar
    width 120px
    background-color transparent
  .cube-scroll-nav-bar-item
    padding 15px
  .cube-scroll-nav-bar-item_active
    background-color #fff
  .cube-scroll-nav-panels
    background-color #fff
  .cube-scroll-nav-panel
    img
      width 4rem
      height 4rem
    ul
      overflow hidden
      font-size 14px
      line-height 1.4
      color #666
    li
      // float: left;
      width 100%
      >div
        display flex
        justify-content flex-start
        // width: 114px;
        // margin: auto;
        margin 0.3rem
        img
          margin-right 0.3rem
        p
          width 100%
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
        .star
          color #999
          font-size 0.2rem
  .cube-scroll-nav-panel-title
    padding 15px
    font-size 16px
    background-color #fff
</style>