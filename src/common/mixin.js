import {debounce} from "./utils"
import {POP, NEW, SELL} from "./const";



export const imgLoadMixin =  {
  data () {
    return {
      loadImg: null,
      fresh: null
    }
  },
  mounted () {
    this.fresh = debounce(this.$refs.scroll.refresh,100)
    this.loadImg = () => {
      //调用封装好的fresh
      this.fresh()
    }
    //通过事件总线下的$on接收指定事件
    this.$bus.$on('LoadImg',this.loadImg)
  }
}

export const backTopMixin =  {
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods:  {
    backTop() {
      this.$refs.scroll.scrollTo(0,0,200)
    },
    showBackTop(position) {
      //返回顶部按钮的显示与隐藏
      this.isShowBackTop = -position.y > 1000
    }
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
    }
  }
}
