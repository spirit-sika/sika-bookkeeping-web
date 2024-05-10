<script setup lang="ts">
import {type RouteRecordNormalized, useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import {ElIcon, ElMenuItem} from "element-plus";

const isActive = ref<boolean>(false)

const props = defineProps({
  item: {
    type: Object as () => RouteRecordNormalized,
    require: true
  }
})
const route = useRoute()

onMounted(() => {
  // 通过路由名和地址名比较当前菜单项是否为激活状态
  isActive.value = (route.name as string).toLowerCase() === (props.item?.name as string).toLowerCase()
})
</script>

<template>
  <div class="menu-item-container">
    <!-- 路由和菜单项绑定, item.path缺少路由匹配的/, 需要进行拼接 -->
    <el-menu-item
        :index="item?.path"
        :route="item"
    >
      <el-icon v-if="item?.meta?.icon">
        <component :is="item.meta.icon"/>
      </el-icon>

      <div class="">{{ item?.meta?.title }}</div>
    </el-menu-item>
  </div>
</template>

<style scoped>
.active {
  background-color: #2a2c36; /* 设置选中时的背景颜色 */
}
</style>
