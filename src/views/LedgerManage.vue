<script setup lang="ts">
import {useLedgerHooks} from "@/hooks/ledger/LedgerHooks";
import { ElScrollbar, ElRow, ElInput} from 'element-plus'
import {Search} from '@element-plus/icons-vue'
const ledgerHooks = useLedgerHooks();
const arr = ledgerHooks.ledgerList


</script>

<template>
  <el-scrollbar height="85vh">
    <el-row class="operator-bar">
      <div>
        <el-input
          style="width: 300px;"
          :prefix-icon="Search"
          v-model="searchRoomName"
          clearable
          @keyup.enter="doSearch"
          size="large" v-if="roomList.length > 0"
        >
          <template #append>
            <el-button :icon="Search" @click="doSearch" />
          </template>
        </el-input>
      </div>

      <div>
        <el-button type="success" size="large" @click="handleAddRoom">新增</el-button>
      </div>
    </el-row>
  </el-scrollbar>
</template>

<style scoped>

</style>
