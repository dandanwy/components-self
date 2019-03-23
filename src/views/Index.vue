<template>
  <div class="app">
    <el-container>
      <!-- <Split v-model="splitLeft">
          <div slot="left" class="demo-split-pane">
              <el-aside>左边栏</el-aside>
          </div>
          <div slot="right" class="demo-split-pane">
              <el-container>
                <el-header>
                  <core-header></core-header>
                </el-header>
                <el-main>
                  中间
                </el-main>
              </el-container>
          </div>
      </Split> -->
      <el-aside class="left-menu" width="66px">
        <core-aside :menus="menus"></core-aside>
      </el-aside>
      <el-container>
        <el-header>
          <core-header></core-header>
        </el-header>
        <el-main></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CoreHeader from '../components/core/core-header/Main';
import CoreAside from '../components/core/core-aside/Main';
  export default {
    components: { CoreHeader, CoreAside },
    data() {
      return {
        splitLeft: 0.3
      }
    },
    computed: {
      menus() {
        return this.$router.options.routes;
      }
    }
  }
</script>


<style lang="less" scoped>
.app {
  height: 100%;
}
  
</style>


