<template>
  <div class="app">
    <countup :end='1234' :start="100"></countup>
  </div>
</template>

<script>
  import countup from './countup/index.js'
  import wbutton from './button/index.js'
  export default {
        components: {
            countup,
            wbutton,
        },
  }
</script>


<style lang="less" scoped>
  .app{
    font-size: 28px;
    color: #58bc58;
  }
</style>


