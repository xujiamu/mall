<template>
<div class="detail">
  <detail-nav-bar
    class="detail-nav-bar"
    @changeIndex="changeIndex"
    ref="navBar"/>
  <scroll
    class="detail-scroll"
    ref="scroll"
    :probeType="3"
    @scroll="contentScroll">
    <detail-swiper
      :top-images="topImages"/>
    <detail-base-info
      :goods="goods"/>
    <detail-shop-info
      :shop="shop"/>
    <detail-goods-info
      :detail-info="detailInfo"
      @imageLoad="imgLoad"/>
    <detail-param-info
      :param-info="paramInfo"
      ref="param"/>
    <detail-comment-info
      :comment-info="commentInfo"
      ref="comment"/>
    <goods-list
      :goods="recommend"
      ref="recommend"/>
  </scroll>
  <detail-bottom-bar  @addToCart="addToCart"/>
  <go-back-top  @click.native="backTop" v-show="isShowBackTop"/>
</div>
</template>

<script>
  import {debounce} from 'common/utils'
  import {imgLoadMixin,backTopMixin} from 'common/mixin'

  import DetailNavBar from './childDetail/DetailNavBar'
  import DetailSwiper from './childDetail/DetailSwiper'
  import DetailBaseInfo from './childDetail/DetailBaseInfo'
  import DetailShopInfo from './childDetail/DetailShopInfo'
  import DetailGoodsInfo from './childDetail/DetailGoodsInfo'
  import DetailParamInfo from './childDetail/DetailParamInfo'
  import DetailCommentInfo from './childDetail/DetailCommentInfo'
  import DetailBottomBar from './childDetail/DetailBottomBar'
  import GoBackTop from 'components/content/goBackTop/GoBackTop'

  import GoodsList from 'components/content/goods/GoodsList'

  import Scroll from  'components/common/scroll/Scroll'

  import {getDetail,Goods,GoodsParam,getRecommend} from 'network/detail'


  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommend: [],
        detailScrollY: [],
        debounceScrollY: null,
        currentIndex: 0
      }
    },
    mixins: [imgLoadMixin,backTopMixin],
    created() {
      //记录标识的iid
      this.iid = this.$route.params.id
      //调用网络请求方法
      this.getDetail()
      this.getRecommend()
    },
    mounted() {
      /*
      //将Scroll组件的refresh方法放入防抖方法
      const fresh = debounce(this.$refs.scroll.refresh,100)
    //通过事件总线下的$on接收指定事件
      this.$bus.$on('DetailLoadImg',() => {
        //调用封装好的fresh
        fresh()
      })  */

      //将为detailScrollY赋值的操作放入防抖
      this.debounceScrollY = debounce(() => {
        this.detailScrollY = []
        this.detailScrollY.push(0)
        this.detailScrollY.push(this.$refs.param.$el.offsetTop)
        this.detailScrollY.push(this.$refs.comment.$el.offsetTop)
        this.detailScrollY.push(this.$refs.recommend.$el.offsetTop)
        this.detailScrollY.push(Number.MAX_VALUE)
      },100)

    },
    destroyed () {
      this.$bus.$off('LoadImg',this.loadImg)
    },
    methods: {
      //网络请求方法
      getDetail() {
        getDetail(this.iid).then(res => {
          const result = res.result
          //轮播图数据
          this.topImages = result.itemInfo.topImages
          //商品基本信息数据
          this.goods = new Goods(result.itemInfo, result.columns, result.shopInfo.services)
          //商家信息数据
          this.shop = result.shopInfo
          //商品详情数据
          this.detailInfo= result.detailInfo
          //商品参数数据
          this.paramInfo = new GoodsParam(result.itemParams.info, result.itemParams.rule)
          //评论数据
          if (result.rate.cRate !== 0) {
            this.commentInfo = result.rate.list[0]
          }
        })
      },

      getRecommend() {
        getRecommend().then((res) => {
          //推荐商品图数据
          this.recommend = res.data.list
        })
      },

      //事件方法
      //图片加载完成
      imgLoad() {
        //重新计算详情页滚动条事件
        this.fresh()
        //重新给debounceScrollY赋值
        this.debounceScrollY()
      },

      //点击标题滚动到对应内容
      changeIndex(index) {
        this.$refs.scroll.scrollTo(0,-this.detailScrollY[index],100)
      },

      //监听滚动位置
      contentScroll(position) {
        let length = this.detailScrollY.length
        //滚动内容切换标题
        for (let i=0; i<length-1; i++) {
          if (this.currentIndex !== i && (this.detailScrollY[i]<= -position.y && this.detailScrollY[i+1]> -position.y)) {
            this.currentIndex = i
            this.$refs.navBar.currentIndex = this.currentIndex
          }
        }
        //控制返回顶部按钮显示隐藏
        this.showBackTop(position)
      },
      //将商品相关信息加入购物车
      addToCart() {
        const product = {}
        product.iid = this.iid
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.realPrice = this.goods.realPrice
        product.image = this.topImages[0]

        this.$store.dispatch('addCart',product).then(res => {
           this.$toast.show(res)
        })
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar,
      GoBackTop,
    }
  }
</script>

<style scoped>
  .detail {
    height: 100vh;
    position: relative;
    z-index: 3 ;
    background: #fff ;
  }
  .detail-nav-bar {
    position: relative;
    z-index: 3;
    background-color: #fff;
  }
  .detail-scroll{
    height: calc(100% - 102px);
    position: relative;
  }
</style>
