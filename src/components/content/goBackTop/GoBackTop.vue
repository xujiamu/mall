<template>
  <div class="go-back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "GoBackTop"
  }
</script>

<style scoped>
 .go-back-top {
   position: fixed;
   right: 8px;
   bottom: 50px;
   z-index: 1;
 }
  .go-back-top img {
    width: 33px;
    height: 33px;
  }
</style>
