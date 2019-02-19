<template>
    <div class="tab-wrapper">
        <cube-page type="tab-composite-view" title="选项卡" :isHeader="false">
            <div slot="content">
                <cube-tab-bar v-model="selectedLabel" show-slider :use-transition="disabled" ref="tabNav" :data="tabLabels">
                </cube-tab-bar>
                <div class="tab-slide-container">
                    <cube-slide ref="slide" :loop="loop" :initial-index="initialIndex" :auto-play="autoPlay" :show-dots="showDots" :options="slideOptions" @scroll="scroll" @change="changePage">
                        <!-- 关注 -->
                        <cube-slide-item v-for="(item,index) in tabLabels.length" :key="index">
                            <cube-scroll :data="recommendData" :options="scrollOptions">
                                <ul class="list-wrapper">
                                    <li v-for="(item, index) in recommendData" class="list-item" :key="index">
                                        <div class="top is-black is-bold line-height">
                                            {{item.question}}
                                        </div>
                                        <div class="middle is-grey line-height">{{item.content}}</div>
                                        <!-- <div>{{resolveQuestionFollowers(item)}}</div> -->
                                    </li>
                                </ul>
                            </cube-scroll>
                        </cube-slide-item>
                    </cube-slide>
                </div>
            </div>
        </cube-page>
    </div>

</template>

<script type="text/ecmascript-6">
import CubePage from "@/components/cubeUI/cubePage";
import { FOLLOWERS_DATA, RECOMMEND_DATA, HOT_DATA } from "./tabBar.js";
import { findIndex } from "@/config/tool.js";
export default {
  components: {
    CubePage
  },
  data() {
    return {
      selectedLabel: "推荐",
      disabled: false,
      tabLabels: [
        {
          label: "关注"
        },
        {
          label: "推荐"
        },
        {
          label: "热榜"
        },
        {
          label: "热搜"
        }
      ],
      loop: false,
      autoPlay: false,
      showDots: false,
      slideOptions: {
        listenScroll: true,
        probeType: 4,
        /* lock y-direction when scrolling horizontally and  vertically at the same time */
        directionLockThreshold: 0
      },
      scrollOptions: {
        directionLockThreshold: 0
      },
      recommendData: RECOMMEND_DATA
    };
  },
  created() {
      conole.log('aaa_______')
  },
  methods: {
    changePage(current) {
      this.selectedLabel = this.tabLabels[current].label;
    },
    scroll(pos) {
      const x = Math.abs(pos.x);
      const tabItemWidth = this.$refs.tabNav.$el.clientWidth;
      const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth;
      const deltaX = x / slideScrollerWidth * tabItemWidth;
      this.$refs.tabNav.setSliderTransform(deltaX);
    }
  },
  computed: {
    initialIndex() {
      let index = 0;
      index = findIndex(this.tabLabels, item => item.label === this.selectedLabel);
      return index;
    }
  }
};
</script>
<style lang="stylus">
.tab-wrapper
    .tab-composite-view .tab-slide-container
        top 32px
/* 覆盖样式 */
.cube-page
    &.tab-composite-view
        > .wrapper
            > .content
                margin 0
.tab-composite-view
    .cube-tab-bar
        background-color white
        font-size 0.78rem
    .cube-tab, .cube-tab_active
        color black
    .cube-tab-bar-slider
        z-index 3
    .tab-slide-container
        position fixed
        top 74px
        left 0
        right 0
        bottom 0
    .list-wrapper
        overflow hidden
        li
            padding 15px 10px
            margin-top 10px
            text-align left
            background-color white
            font-size 14px
            color #999
            white-space normal
            .line-height
                line-height 1.5
            .is-black
                color black
            .is-grey
                color #999
            .is-bold
                font-weight bold
            .top
                display flex
                .avatar
                    width 15px
                    height 15px
                    margin-right 2px
                    border-radius 100%
                .time
                    flex 1
            .middle
                display flex
                margin 10px 0
                color black
            .hot-title
                display flex
                align-items center
                font-size 12px
                .hot-sequence
                    display inline-block
                    margin-right 2px
                    padding 3px 6px
                    border-radius 2px
                    background-color darkgoldenrod
                    color white
            .hot-content
                margin-top 15px
</style>