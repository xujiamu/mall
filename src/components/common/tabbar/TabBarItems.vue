<template>
  <div class="tab-bar-item" @click="toggleRouter">
    <div v-if="!isActive">
    <slot name="icon"></slot>
    </div>
    <div v-else>
    <slot name="active-icon"></slot>
    </div>
    <div  :style="firstNameColor">
    <slot name="firstName" ></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItems",
    props:{
      path:String,
      color:{
        default:'pink',
        type:String
      }
    },
    computed: {
      isActive() {
        //toggleRouter方法中 进行了路由的跳转，所以this.$route.path被赋值，所以 在这里通过
        //判断 this.$route.path中是否包括this.path 就可以做到 isActive的切换
        //被点击的组件返回true,剩下的三个组件返回false
        return this.$route.path.includes(this.path)
      },
      firstNameColor() {
        return this.isActive ? {color: this.color}: false
      }
    },
    methods: {
      toggleRouter() {
        //抛出异常防止promise报错
          this.$router.replace(this.path).catch(err => { })
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
  }

  .tab-bar-item img {
    margin: 3px 0 2px 0;
    width: 24px;
    vertical-align: middle;
  }
</style>
