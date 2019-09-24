<template>
  <div class="goods-item" @click="goodsDetail">
    <img :src="imgSrc" alt="" @load="loadImg">
   <div class="goods-info">
     <p>{{item.title}}</p>
     <span class="price">{{item.price}}</span>
     <span class="collect">{{item.cfav}}</span>
   </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      item: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    computed: {
      imgSrc () {
        return this.item.image || this.item.show.img
      }
    },
    methods: {
/*      loadImg() {
        //通过事件总线下的$emit 将图片加载完成的事件 发送出去
        if(this.$route.path.includes('home')) {
          this.$bus.$emit('HomeLoadImg')
        } else if (this.$route.path.includes('detail')) {
          this.$bus.$emit('DetailLoadImg')
        }
      },*/
      loadImg() {
        //通过事件总线下的$emit 将图片加载完成的事件 发送出去
          this.$bus.$emit('LoadImg')

      },
      //跳转商品详情页
      goodsDetail() {
        this.$router.push('/detail/'+ this.item.iid)
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
