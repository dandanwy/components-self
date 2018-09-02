<template>
        <div>
          <my-source-card></my-source-card>
        </div>
</template>

<style scoped lang='less'>
  .layout {
    background: #f5f7f9;
    position: relative;
    // overflow: hidden;
  }
  .mainContent {
    padding-top: 64px !important;
  }
</style>

<script>
  import mySourceCard from './mySourceCard.vue';
  export default {
    data() {
      return {
        isCollapsed: false,
        title: '系统管理'
      };
    },
    components: {
      mySourceCard
    },
    methods: {
      
    },
    mounted() {
    }
  };
</script>
