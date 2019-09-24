<template>
  <div class="toast" v-show="isShow">
    <span>{{message}}</span>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message,duration = 1500) {
        this.message = message
        this.isShow = true
        setTimeout(() => {
          this.isShow = false
        },duration)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 8px 5px;
    background: rgba(0,0,0,0.7);
    color: #fff;
    font-size: 18px;
    z-index: 100;
    border-radius: 10px;
    text-align: center;
  }
</style>
