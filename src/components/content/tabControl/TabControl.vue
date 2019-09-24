<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item,index) in title"
      @click="changeIndex(index)">
      <span :class="{active:currentIndex===index}">{{ item }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data() {
      return {
        currentIndex : 0
      }
    },
    props:{
      title: Array
    },
    methods: {
      changeIndex (index) {
        this.currentIndex = index
        this.$emit('ChangeIndex',index)
      }
    }
  }
</script>

<style scoped>
 .tab-control {
   display: flex;
   height: 35px;
   line-height: 35px;
   font-size: 15px;
   text-align: center;
   background: #fff;
 }
  .tab-control-item {
    flex: 1;
  }
  .active {
    color: var(--color-tint);
    padding-bottom: 2px;
    border-bottom: 3px solid ;
  }
</style>
