<template>
    <div class="aside">
      <div class="aside-header">淡淡组件</div>
        <!-- <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
        </el-menu-item>
        </el-menu> -->
        <el-menu>
          <template v-for="(menu, index) in menus">
            <el-submenu :index="menu.id" :key="index" v-if="menu.childrens && menu.childrens.length > 0">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">{{menu.name}}</span>
              </template>
            </el-submenu>
            <el-menu-item v-else :index="menu.id" :key="index">
              <i class="el-icon-setting"></i>
              <span slot="title">123{{menu.name}}</span>
            </el-menu-item>
          </template>
        </el-menu>
    </div>
</template>

<style lang="less">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .aside {
    height: 100%;
    .aside-header {
      height: 46px;
      line-height: 46px;
      background-color: #000;
      color: #fff;
      text-align: center;
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    props: {
      menus: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted() {
      console.log(this.menus);
    }
  }
</script>