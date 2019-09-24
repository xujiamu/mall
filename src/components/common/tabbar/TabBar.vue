<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  .tab-bar {
    display: flex;
    height: 48px;
    background: #f6f6f6;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    font-size: 14px;
    box-shadow: 0 -2px 2px rgba(163, 163, 163, 0.3);
    z-index: 1;
  }

</style>
