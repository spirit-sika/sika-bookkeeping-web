<script setup lang="ts">
import SideBarItem from "./SideBarItem.vue";
import {useRouter, useRoute} from "vue-router";
import type {RouteRecordNormalized} from "vue-router";
import {ref} from "vue";
import {ElMenu, ElScrollbar} from "element-plus";

const router = useRouter()
// 路由信息中所有/manage子菜单
const menuList = ref<Array<RouteRecordNormalized>>()
menuList.value = router.getRoutes()
    .filter(item => (item.path.startsWith('/manage') && item.path !== '/manage'))
</script>

<template>
  <div class="side-bar-container">
    <el-scrollbar
        wrap-class="scrollbar-wrapper"
        class="scroll-bar"
    >
      <el-menu
          active-text-color="#ffd04b"
          :default-active="useRoute().path"
          background-color="#343744"
          text-color="#BFCBD9"
          class="el-menu-vertical"
          style="height: 100%;"
          router
      >
        <side-bar-item
            v-for="(route, index) in menuList"
            :key="index"
            :item="route"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style scoped>

:deep(.el-menu) {
  background-color: rgb(52, 55, 68)
}

.scroll-bar {
  /*height: calc(100% - 60px);*/
  height: 100%;
  background-color: rgb(52, 55, 68) !important;

}

.el-menu-vertical {
  border: none;
  height: calc(95vh - 23px);
  width: 100% !important;
  padding: 47px 15px 0;
}
</style>
