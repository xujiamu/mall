<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      //新建scroll 实例对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      //滚动位置信息
      if (this.probeType === 2 || this.probeType ===3) {
        this.scroll.on('scroll',position => {
          this.$emit('scroll',position)
        })
      }
      //监听上拉事件
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp',() => {
          this.$emit('pullUp')
        })
      }
    },
    methods: {
      //使滚动条到达指定位置
      scrollTo(x,y,time=300) {
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      //重置上拉事件
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      //重新计算滚动条高度
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      //得到当前滚动的距离
      getScroll() {
        return this.scroll ? this.scroll.y : 0
      }
    },
    watch: {
      data() {
        setTimeout(this.refresh, 20)
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    overflow: hidden;
  }
</style>
