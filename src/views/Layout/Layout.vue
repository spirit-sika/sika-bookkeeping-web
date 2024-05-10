<script setup lang="ts">
import SideBar from '@/views/Layout/components/SideBar/SideBar.vue'
import NavBar from '@/views/Layout/components/NavBar.vue'
import AppMain from '@/views/Layout/components/AppMain.vue'
</script>

<template>
  <div class="common-layout">
    <!-- 页面刘海 -->
    <div class="fringe">
      <nav-bar />
    </div>

    <!-- 侧边导航 -->
    <side-bar class="side-bar-container"/>

    <!-- 主区域 -->
    <div class="main-container">
      <!--      <nav-bar />-->
      <app-main class="app-main"/>
    </div>
  </div>
</template>

<style scoped>
.common-layout {
  position: relative;
  height: 100%;
  width: 100%;
  min-width: 1366px;
  overflow-x: auto;
  overflow-y: hidden;
}

.side-bar-container {
  padding-top: 10px;
  transition: width 0.28s;
  width: 190px !important;
  height: calc(100% - 60px);
  position: fixed;
  top: 70px;
  bottom: 0;
  left: 8px;
  z-index: 1001;
  overflow: hidden;
}

.main-container {
  width: calc(100% - 190px);
  height: 100%;
  min-height: 100%;
  max-height: calc(100vh - 100px);
  transition: margin-left 0.28s;
  margin-left: 190px;
  margin-top: 20px;
  background: #F3F4F7;

  .app-main {
    padding: 20px;
  }
}
</style>
