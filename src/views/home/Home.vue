<template>
  <div id="home">
    <nav-bar >
      <template #center >
        购物街
      </template>
    </nav-bar>
    <tab-control
      :title="['流行','新款','精选']"
      @ChangeIndex="ChangeIndex"
      ref="tabControl2"
      class="fixed"
      v-show="isTabTop"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            @pullUp="pullUp">
        <home-swiper
          :banner="banner"
          @swiperImgLoad="swiperImgLoad"/>
        <recommend-view :recommend="recommend"/>
        <feature-view />
        <tab-control
          :title="['流行','新款','精选']"
          @ChangeIndex="ChangeIndex"
          ref="tabControl1" />
        <goods-list :goods="goodsShow" />
    </scroll>
    <go-back-top  @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import {debounce} from 'common/utils'
  import {imgLoadMixin} from 'common/mixin'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import GoBackTop from 'components/content/goBackTop/GoBackTop'

  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import {getHomeMultidata,getHomeGoods} from 'network/home'

  export default {
    name: "Home",
    data () {
      return {
        banner : [],
        recommend : [],
        goods : {
          pop: {
            type: 'pop',
            page: 0,
            list: []
          },
          new: {
            type: 'new',
            page: 0,
            list: []
          },
          sell: {
            type: 'sell',
            page: 0,
            list: []
          }
        },
        show: 'pop',
        isShowBackTop: false,
        offsetTop: 0,
        isTabTop: false,
        scrollY: 0,
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      GoBackTop
    },
    mixins: [imgLoadMixin],
    created() {
      //请求轮播图 与 推荐视图数据
      this.getHomeMultidata()
      //请求商品数据
      this.getHomeGoods(this.goods.pop.type)
      this.getHomeGoods(this.goods.new.type)
      this.getHomeGoods(this.goods.sell.type)
    },
    mounted() {
      /*
      //将Scroll组件的refresh方法放入防抖方法
      const fresh = debounce(this.$refs.scroll.refresh,100)

     //通过事件总线下的$on接收指定事件
      this.$bus.$on('HomeLoadImg',() => {
        //调用封装好的fresh
        fresh()
      }) */
    },
    activated(){
      //为了防止滚动条高度出现问题，在这里重新计算一次
      this.$refs.scroll.refresh()
      //将活跃时的滚动状态与先前保存的状态同步
      this.$refs.scroll.scrollTo(0,this.scrollY,0)
    },
    deactivated(){
      //保存滚动状态
      this.scrollY = this.$refs.scroll.getScroll()

      //关闭LoadImg方法
      this.$bus.$off('LoadImg',this.loadImg)
    },
    computed: {
      goodsShow() {
        return this.goods[this.show].list
      }
    },
    methods: {
      //网络请求相关方法
      //请求录播图与推荐栏图片数据
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banner = res.data.banner.list
          this.recommend = res.data.recommend.list
        })
      },
      //请求商品数据
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          //调用scroll子组件重置上拉事件
          this.$refs.scroll.finishPullUp()
        })
      },

      //事件相关方法

      //切换商品栏
      ChangeIndex(index) {
        switch (index) {
          case 0: this.show = 'pop'
            break
          case 1: this.show = 'new'
            break
          case 2: this.show = 'sell'
        }
        //统一两个tab-control的Index
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      //返回顶部方法
      backTop() {
        //在子组件封装方法，更便于理解
        this.$refs.scroll.scrollTo(0,0,200)
        //不便于理解
        // this.$refs.scroll.scroll.scrollTo(0,0,500)
      },

      //监听滚动距离
      contentScroll(position) {
        //返回顶部按钮的显示与隐藏
        this.isShowBackTop = -position.y > 1000
        //isTabTop值的改变
        this.isTabTop = -position.y > this.offsetTop
      },

      //上拉加载更多
      pullUp() {
        this.getHomeGoods(this.show)
      },
      //监听tab-control 的offsetTop
      swiperImgLoad() {
        this.offsetTop = this.$refs.tabControl1.$el.offsetTop
      }
    }
  }
</script>

<style scoped>
  #home {
    position: relative;
    height: 100vh;
  }
  .nav-bar {
    background: var(--color-tint);
    color: #fff;
  }
  .fixed {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 2;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 48px;
    overflow: hidden;
    z-index: 1;
  }
</style>
